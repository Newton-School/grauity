import { useCallback, useEffect, useState } from 'react';

const DEFAULT_EVENT_TYPES: string[] = ['keydown', 'keyup'];

/**
 * Hook that handles keyboard events.
 * You may configure to listen to multiple keyCodes like `Escape`, `a` (`KeyA`), etc. in combination or separately.,
 * and choose to listen to `keydown` and/or `keyup` events.
 *
 * @param {Function} onKeyPress - The function to call when a key is pressed. Required.
 * @param {Array<string>} keyCodes - The keyCodes to listen to, e.g., `['Escape', 'KeyA']`. Required. See `KeyboardEvent.code` for the list of possible keyCodes.
 * @param {Object} config - Optional configuration object. It can the following properties:
 * @param {Boolean} config.detectCombination - Whether to detect key combinations. If set to `true`, it will only call the `onKeyPress` function when all the keyCodes are pressed. Default is `false`.
 *
 * @returns {Set<string>} - The set of pressed keyCodes.
 */
const useKeyboardEvent = (
    onKeyPress: (event: KeyboardEvent) => void,
    keyCodes: string[],
    config: {
        detectCombination?: boolean;
    } = {}
): Set<string> => {
    const { detectCombination = false } = config;
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
    const eventTypes = DEFAULT_EVENT_TYPES;

    const handler = useCallback(
        (event: KeyboardEvent) => {
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
        [eventTypes]
    );

    useEffect(() => {
        if (detectCombination) {
            if (keyCodes.every((key) => pressedKeys.has(key))) {
                onKeyPress(
                    new KeyboardEvent('keydown', { key: keyCodes.join('+') })
                );
            }
        } else {
            pressedKeys.forEach((key) => {
                if (keyCodes.includes(key)) {
                    onKeyPress(new KeyboardEvent('keydown', { key }));
                }
            });
        }
    }, [pressedKeys, keyCodes, onKeyPress, detectCombination]);

    useEffect(() => {
        eventTypes.forEach((eventType) => {
            document.addEventListener(eventType, handler);
        });
        return () => {
            eventTypes.forEach((eventType) => {
                document.removeEventListener(eventType, handler);
            });
        };
    }, [eventTypes, handler]);

    return pressedKeys;
};

export default useKeyboardEvent;
