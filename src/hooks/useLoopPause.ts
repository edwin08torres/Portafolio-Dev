import { useEffect, useRef } from "react";

/**
 * Pausa los bucles CSS (clases `anim-*`) cuando el elemento sale de pantalla.
 * Marca el elemento con `data-paused="true|false"`; el CSS hace el resto.
 * No provoca renders de React.
 */
export function useLoopPause<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      el.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

