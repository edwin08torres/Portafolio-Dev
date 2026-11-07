import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

/*
 * Entradas reutilizables (249b). Reglas:
 *  - se disparan una sola vez;
 *  - solo transform y opacity;
 *  - el estado inicial oculto lo pone el código (props `initial` de Framer Motion, estilo en línea);
 *  - con "reducir movimiento" no hay estado oculto ni transición: se ve el estado final.
 */

const bounce = { type: "spring", stiffness: 260, damping: 18 } as const;

interface When {
  /** Anima al montar (para el hero) en vez de al entrar en pantalla */
  onMount?: boolean;
  delay?: number;
}

/*
 * `amount` bajo: en el teléfono las tarjetas son muy altas y esperar al 25 % las hacía tardar.
 * El detector siempre va en un elemento que NO está desplazado ni recortado; si no,
 * el navegador nunca lo ve "en pantalla" y el contenido se queda oculto.
 */
const trigger = (onMount?: boolean) =>
  onMount
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, amount: 0.1 } };

/** Indica a un PopBlock que está dentro de un MaskReveal y debe heredar su disparo. */
const InMask = createContext(false);

/** Aparece subiendo (opcionalmente con rebote). Para tarjetas, párrafos, botones. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  bouncy = false,
  onMount,
}: When & { children: ReactNode; className?: string; y?: number; bouncy?: boolean }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hide"
      variants={{
        hide: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { ...(bouncy ? bounce : { duration: 0.5, ease: "easeOut" }), delay } },
      }}
      {...trigger(onMount)}
    >
      {children}
    </motion.div>
  );
}

/** Título con máscara: el texto sube desde abajo, una sola vez. */
export function MaskReveal({
  children,
  className = "",
  delay = 0,
  onMount,
}: When & { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  // El relleno negativo deja ver sombras, inclinaciones y descendentes dentro de la máscara
  const mask = `block overflow-hidden -mx-3 -mt-2 -mb-4 px-3 pb-4 pt-2 ${className}`;
  if (reduce) return <span className={mask}>{children}</span>;
  // La máscara (quieta y sin recorte) detecta la entrada; el texto de adentro hereda "show".
  return (
    <motion.span className={mask} initial="hide" {...trigger(onMount)}>
      <motion.span
        className="block"
        variants={{
          hide: { y: "115%" },
          show: { y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay } },
        }}
      >
        <InMask.Provider value={true}>{children}</InMask.Provider>
      </motion.span>
    </motion.span>
  );
}

/**
 * Bloque de color de una palabra resaltada: entra después del título con un pop
 * hasta su inclinación final. `drop` hace que caiga con rebote (hero).
 */
export function PopBlock({
  children,
  className = "",
  rotate,
  delay = 0.45,
  drop = false,
  onMount,
}: When & { children: ReactNode; className?: string; rotate: number; drop?: boolean }) {
  const reduce = useReducedMotion();
  const inMask = useContext(InMask);
  const base = `inline-block ${className}`;
  if (reduce) return <span className={base} style={{ rotate: `${rotate}deg` }}>{children}</span>;
  // Dentro de un MaskReveal (sin onMount) hereda el disparo de la máscara: no tiene detector propio,
  // porque al estar dentro del texto desplazado y recortado nunca se vería "en pantalla".
  const own = onMount || !inMask ? { initial: "hide", ...trigger(onMount) } : {};
  return (
    <motion.span
      className={base}
      style={{ rotate }}
      variants={{
        hide: drop ? { opacity: 0, y: -90 } : { opacity: 0, scale: 0 },
        show: { opacity: 1, y: 0, scale: 1, transition: { ...bounce, delay } },
      }}
      {...own}
    >
      {children}
    </motion.span>
  );
}

/** Cuenta desde 0 hasta `value` al entrar en pantalla. */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setN(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

