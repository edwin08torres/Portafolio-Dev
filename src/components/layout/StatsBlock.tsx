import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedNumber } from "../common/AnimatedNumber";

const stats = [
  { label: "Proyectos", value: 10 },
  { label: "Años Exp.", value: 3 },
  { label: "Clientes", value: 5 },
];

export const StatsBlock: FC = () => {
  // ref para observar cuándo entra en viewport
  const { ref, inView } = useInView({
    triggerOnce: true,   // solo la primera vez
    threshold: 0.3,     
  });

  return (
    <div ref={ref} className="flex justify-center gap-8 mb-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-blue-400">
            {inView ? (
              <AnimatedNumber value={s.value} duration={500} suffix="+" />
            ) : (
              "0+"
            )}
          </span>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
};
