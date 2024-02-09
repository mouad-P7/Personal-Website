"use client";

import { motion } from "framer-motion";

export default function GlobalTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex-1 flex flex-col "
      initial={{ y: 20, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
