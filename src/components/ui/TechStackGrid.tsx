import { motion } from "framer-motion";
import type { TechItem } from "@/types/About";

interface Props {
  items: TechItem[];
}

export default function TechStackGrid({ items }: Props) {
  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 place-items-center w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.06 },
        },
      }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-blue-500/20 transition-all duration-300 cursor-pointer w-full"
          variants={{
            hidden: { opacity: 0, y: 16, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={item.src}
            alt={item.name}
            className="h-8 opacity-60 grayscale invert
                       group-hover:grayscale-0 group-hover:invert-0
                       group-hover:opacity-100 transition-all duration-300"
          />
          <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition font-medium">
            {item.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
