import { useEffect, useState } from "react";

export function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(m.matches);
        const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
        m.addEventListener?.("change", handler);
        return () => m.removeEventListener?.("change", handler);
    }, []);

    return reduced;
}
