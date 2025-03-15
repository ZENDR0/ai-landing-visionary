
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "95%", label: "Client satisfaction rate" },
  { value: "500+", label: "AI projects delivered" },
  { value: "35%", label: "Average cost reduction" },
  { value: "47", label: "Industry experts" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 glass-morphism rounded-xl"
            >
              <span className="text-4xl md:text-5xl font-bold text-spektr-cyan-50 mb-2">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };
