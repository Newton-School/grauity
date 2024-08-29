import { useCallback, useEffect, useState } from 'react';

const DEFAULT_EVENT_TYPES: string[] = ['keydown'];

/**
 * Hook that handles keyboard events.
 * You may configure to listen to multiple keys like `Escape`, `a`, etc. in combination or separately.,
 * and choose to listen to `keydown` and/or `keyup` events.
 *
 * @param {Function} onKeyPress - The function to call when a key is pressed. Required.
 * @param {Array<string>} keys - The keys to listen to, e.g., `['Escape', 'a']`. Required.
 * @param {Object} config - Optional configuration object. It can the following properties:
 * @param {Array<string>} config.eventTypes - The event types to listen to, e.g., `['keydown', 'keyup']`. Default is `['keydown']`.
 * @param {Boolean} config.detectCombination - Whether to detect key combinations. If set to `true`, it will only call the `onKeyPress` function when all the keys are pressed. Default is `false`.
 *
 * @returns {Set<string>} - The set of pressed keys.
 */
const useKeyboardEvent = (
    onKeyPress: (event: KeyboardEvent) => void,
    keys: string[],
    config: {
        eventTypes: string[];
        detectCombination: boolean;
    } = {
        eventTypes: DEFAULT_EVENT_TYPES,
        detectCombination: false,
    }
): Set<string> => {
    const { eventTypes, detectCombination } = config;
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

    const handler = useCallback(
        (event: KeyboardEvent) => {
            if (eventTypes.includes(event.type)) {
                setPressedKeys((prevKeys) => {
                    const newKeys = new Set(prevKeys);
                    if (event.type === 'keydown') {
                        newKeys.add(event.key);
                    } else if (event.type === 'keyup') {
                        newKeys.delete(event.key);
                    }
                    return newKeys;
                });
            }
        },
        [eventTypes]
    );

    useEffect(() => {
        if (detectCombination) {
            if (keys.every((key) => pressedKeys.has(key))) {
                onKeyPress(
                    new KeyboardEvent('keydown', { key: keys.join('+') })
                );
            }
        } else {
            pressedKeys.forEach((key) => {
                if (keys.includes(key)) {
                    onKeyPress(new KeyboardEvent('keydown', { key }));
                }
            });
        }
    }, [pressedKeys, keys, onKeyPress, detectCombination]);

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
