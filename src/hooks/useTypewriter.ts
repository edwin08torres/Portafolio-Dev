import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 45) {
    const [out, setOut] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setOut(text);
            setDone(true);
            return;
        }
        let i = 0;
        const id = setInterval(() => {
            i++;
            setOut(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(id);
                setDone(true);
            }
        }, speed);
        return () => clearInterval(id);
    }, [text, speed]);

    return { out, done };
}
