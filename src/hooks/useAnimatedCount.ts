import { useState, useEffect, useRef } from "react";

export function useAnimatedCount(
  target: number,
  duration: number = 500 
): number {
  const [count, setCount] = useState(0);

  const startTime = useRef<number | undefined>(undefined);

  useEffect(() => {
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (startTime.current === undefined) {
        startTime.current = timestamp;
      }
      const elapsed = timestamp - startTime.current!;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration]);

  return count;
}
