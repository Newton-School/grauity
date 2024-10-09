import { useCallback, useEffect, useState } from 'react';

const DEFAULT_EVENT_TYPES: string[] = ['keydown', 'keyup'];

interface KeyboardEventConfig {
    shouldDetect?: boolean;
    detectCombination?: boolean;
}

interface UseKeyboardEventProps {
    onKeyPress: (event: KeyboardEvent) => void;
    keyCodes: string[];
    config?: KeyboardEventConfig;
}

/**
 * Hook that handles keyboard events.
 * You may configure to listen to multiple keyCodes like `Escape`, `a` (`KeyA`), etc. in combination or separately.,
 * and choose to listen to `keydown` and/or `keyup` events.
 *
 * @param {Object} props - wrapping object
 * @param {Function} props.onKeyPress - The function to call when a key is pressed. Required
 * @param {Array<string>} props.keyCodes - The keyCodes to listen to, e.g., `['Escape', 'KeyA']`. Required. See `KeyboardEvent.code` for the list of possible keyCodes
 * @param {Object} props.config - Optional configuration object. It can the following properties:
 * @param {Function} props.config.shouldDetect - Useful when this hook is used multiple times on a page. For example, when a modal is open, you may want to detect/listen to the `Escape` key only when the modal is open. Default is `true`
 * @param {Boolean} props.config.detectCombination - Whether to detect key combinations. If set to `true`, it will only call the `onKeyPress` function when all the keyCodes are pressed. Default is `false`
 *
 * @returns {Set<string>} pressedKeys - A Set of all currently pressed keyCodes
 */
const useKeyboardEvent = (props: UseKeyboardEventProps): Set<string> => {
    const {
        onKeyPress,
        keyCodes,
        config: { shouldDetect = true, detectCombination = false } = {},
    } = props;

    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
    const eventTypes = DEFAULT_EVENT_TYPES;

    const keyboardEventListenerCallback = useCallback(
        (event: KeyboardEvent) => {
            if (!shouldDetect) {
                return;
            }
            setPressedKeys((prevKeys: Set<string>) => {
                const newKeys = new Set(prevKeys);
                if (event.type === 'keydown') {
                    newKeys.add(event.code);
                } else if (event.type === 'keyup') {
                    newKeys.delete(event.code);
                }
                return newKeys;
            });
        },
        [eventTypes, shouldDetect]
    );

    useEffect(() => {
        if (shouldDetect) {
            if (detectCombination) {
                if (keyCodes.every((key) => pressedKeys.has(key))) {
                    onKeyPress(
                        new KeyboardEvent('keydown', {
                            key: keyCodes.join('+'),
                        })
                    );
                }
            } else {
                pressedKeys.forEach((key) => {
                    if (keyCodes.includes(key)) {
                        onKeyPress(new KeyboardEvent('keydown', { key }));
                    }
                });
            }
        }
    }, [pressedKeys, keyCodes, onKeyPress, detectCombination, shouldDetect]);

    useEffect(() => {
        if (shouldDetect) {
            eventTypes.forEach((eventType) => {
                document.addEventListener(
                    eventType,
                    keyboardEventListenerCallback
                );
            });
        }
        return () => {
            if (shouldDetect) {
                eventTypes.forEach((eventType) => {
                    document.removeEventListener(
                        eventType,
                        keyboardEventListenerCallback
                    );
                });
                setPressedKeys(new Set());
            }
        };
    }, [eventTypes, keyboardEventListenerCallback, shouldDetect]);

    return pressedKeys;
};

export default useKeyboardEvent;
