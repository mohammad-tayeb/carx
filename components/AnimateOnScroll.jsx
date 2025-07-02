"use client"
import { motion } from "framer-motion";

export default function AnimateOnScroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.2 }} // 'once: false' ensures the animation triggers every time
    >
      {children}
    </motion.div>
  );
}
