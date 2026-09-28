import { useEffect, useLayoutEffect } from 'react';

/**
 * `useLayoutEffect` on the client, `useEffect` on the server.
 *
 * Layout effects are the right tool for measuring a node and repositioning it
 * before the browser paints, but React warns when one is called during server
 * rendering. Consumers such as Next.js render grauity on the server, so the
 * effect is swapped for `useEffect` there, where it is a no-op anyway.
 */
const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
