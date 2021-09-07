import {useState, useLayoutEffect } from "react";

/**
 * Custom hook that tells you whether a given media query is active.
 */

export default function useMediaQuery(query: string) {

  const [matches, setMatches] = useState(false);
  useLayoutEffect(
    () => {

      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

      mediaQuery.addEventListener("change", handler);

      return () => mediaQuery.removeEventListener("change", handler);

    },
    // eslint-disable-next-line
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
}