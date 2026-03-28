import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          {label}
        </span>
      )}
      <h2
        className="text-4xl sm:text-5xl font-bold tracking-tight"
        style={{ color: "#000000ff" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-3 max-w-xl mx-auto leading-relaxed text-lg"
          style={{ color: "#4a6fa5" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
