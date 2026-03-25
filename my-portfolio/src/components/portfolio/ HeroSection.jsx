import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROFILE_IMAGE =
  "https://media.base44.com/images/public/69c358c6c1a620f2c2cc163e/4ae37ab7d_generated_03cc359f.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for work
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Hi, I'm <span className="text-primary">Alex Chen</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-muted-foreground mt-3">
              Software Engineer
            </p>

            <p className="text-base text-muted-foreground mt-6 leading-relaxed max-w-lg">
              I build scalable, user-focused web applications with modern
              technologies. Passionate about clean code, cloud architecture, and
              creating seamless digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="rounded-full px-8 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow"
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden ring-4 ring-primary/10 shadow-2xl shadow-primary/10">
                <img
                  src={PROFILE_IMAGE}
                  alt="Alex Chen — Software Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-primary/5 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
