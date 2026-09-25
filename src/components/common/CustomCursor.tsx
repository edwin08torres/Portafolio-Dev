import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const isHovering = useRef(false);

  const springConfig = { stiffness: 200, damping: 28, mass: 0.5 };
  const smoothRingX = useSpring(ringX, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });
  const smoothRingY = useSpring(ringY, {
    stiffness: 80,
    damping: 22,
    mass: 0.8,
  });

  const ringScale = useSpring(1, springConfig);
  const ringOpacity = useSpring(1, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover], input, textarea, select, [role='button']")) {
        isHovering.current = true;
        ringScale.set(1.9);
        ringOpacity.set(0.85);
      }
    };

    const onLeave = () => {
      isHovering.current = false;
      ringScale.set(1);
      ringOpacity.set(1);
    };

    const onMouseDown = () => {
      ringScale.set(isHovering.current ? 1.4 : 0.75);
    };

    const onMouseUp = () => {
      ringScale.set(isHovering.current ? 1.9 : 1);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dotX, dotY, ringX, ringY, ringOpacity, ringScale]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: smoothRingX,
          y: smoothRingY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: ringOpacity,
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1.5px solid rgba(163, 230, 53, 0.75)",
          boxShadow: "0 0 12px rgba(163, 230, 53, 0.25)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#a3e635",
          boxShadow: "0 0 10px rgba(163, 230, 53, 0.9), 0 0 20px rgba(163, 230, 53, 0.4)",
        }}
      />
    </>
  );
};
