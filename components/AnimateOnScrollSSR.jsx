"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimateOnScrollSSR({
  children,
  initial = { opacity: 0, x: -50 },
  whileInView = { opacity: 1, x: 0 },
  transition = { duration: 0.5 },
  viewport = { once: false, amount: 0.2 },
  className = "",
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Fallback: render static HTML with no animation
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
