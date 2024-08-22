/* eslint-disable no-undef */
import { useEffect, useRef, RefObject } from 'react';

const DEFAULT_EVENTS = ['mousedown', 'touchstart', 'keydown'];

/**
 * Hook that handles click events outside the passed ref element.
 * @param ref - The ref object to watch.
 * @param onClickAway - The function to call when a click event is detected outside the ref element.
 * @param events - The events to listen to. Default is `['mousedown', 'touchstart']`.
 */
const useClickAway = (
    ref: RefObject<HTMLElement>,
    onClickAway: (event: Event) => void,
    events: string[] = DEFAULT_EVENTS
) => {
    const savedCallback = useRef(onClickAway);

    useEffect(() => {
        savedCallback.current = onClickAway;
    }, [onClickAway]);

    useEffect(() => {
        const handler = (event: Event) => {
            const { current: el } = ref;
            if (
                event.type === 'keydown' &&
                (event as KeyboardEvent).key === 'Escape'
            ) {
                savedCallback.current(event);
            } else if (el && !el.contains(event.target as Node)) {
                savedCallback.current(event);
            }
        };
        events.forEach((eventName) => {
            document.addEventListener(eventName, handler);
        });
        return () => {
            events.forEach((eventName) => {
                document.removeEventListener(eventName, handler);
            });
        };
    }, [events, ref]);
};

export default useClickAway;
