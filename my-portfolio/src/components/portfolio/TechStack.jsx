import React from "react";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Git", "Docker"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Expertise"
          title="Tech Stack"
          description="Technologies I work with day-to-day to build robust, scalable applications."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={item}
                className="group bg-card rounded-2xl p-6 border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
