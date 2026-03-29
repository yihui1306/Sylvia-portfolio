import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import portfolioPicture from "../../assets/portfolio-picture.jpg";

function Typewriter({ lines, speed = 70, smallLine = -1 }) {
  const [displayed, setDisplayed] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    if (charIndex < lines[lineIndex].length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          updated[lineIndex] = lines[lineIndex].slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (lineIndex < lines.length - 1) {
      const pause = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
        setDisplayed((prev) => [...prev, ""]);
      }, 400);
      return () => clearTimeout(pause);
    }
  }, [lineIndex, charIndex]);

  return (
    <span>
      {displayed.map((line, i) => (
        <span
          key={i}
          className={
            i === smallLine
              ? "block text-base text-slate-500 font-normal mt-2"
              : ""
          }
        >
          {line}
          {i === lineIndex && i === displayed.length - 1 && (
            <span className="animate-pulse">|</span>
          )}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-24 pt-20 pb-12"
      style={{
        backgroundColor: "#a2d2ff",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-left"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: "#f5a905ff" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to work
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Hi, I'm Sylvia Li
            </h1>

            <p className="text-2xl sm:text-3xl font-bold text-slate-600 leading-snug">
              <Typewriter
                lines={[
                  "Full-Stack Developer who bridges business goals & technical solutions",
                  "AWS · Full-Stack · Agile Lead · Top 12.5% at Monash EXPO 2025",
                ]}
                speed={70}
                smallLine={1}
              />
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={scrollToContact}
              className="h-12 px-7 rounded-full bg-white text-black font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Get in touch
            </button>
          </div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={portfolioPicture}
              alt="Sylvia Li"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
