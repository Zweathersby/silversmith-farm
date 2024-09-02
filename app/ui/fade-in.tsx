import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FadeInWhenVisible({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
