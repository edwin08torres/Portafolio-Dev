import { motion } from "framer-motion";

interface Props {
  items: string[]; 
}

export default function TechStackGrid({ items }: Props) {
  return (
    <motion.div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { staggerChildren: 0.05 },
        },
      }}
    >
      {items.map((src, idx) => (
        <motion.img
          key={idx}
          src={src}
          alt={src.split("/").pop()?.replace(".svg", "")}
          className="h-12 opacity-80 grayscale invert
                     hover:grayscale-0 hover:invert-0
                     hover:scale-110 transition duration-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        />
      ))}
    </motion.div>
  );
}
