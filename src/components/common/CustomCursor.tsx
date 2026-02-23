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
      if (target.closest("a, button, [data-cursor-hover]")) {
        isHovering.current = true;
        ringScale.set(2.2);
        ringOpacity.set(0.6);
      }
    };

    const onLeave = () => {
      isHovering.current = false;
      ringScale.set(1);
      ringOpacity.set(1);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [dotX, dotY, ringX, ringY, ringOpacity, ringScale]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: smoothRingX,
          y: smoothRingY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          opacity: ringOpacity,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(99,102,241,0.7)",
        }}
      />
      {/* Inner dot */}
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
          background: "rgba(99,102,241,1)",
          boxShadow: "0 0 8px rgba(99,102,241,0.8)",
        }}
      />
    </>
  );
};
