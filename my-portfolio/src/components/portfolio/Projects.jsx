import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "CloudSync Dashboard",
    description:
      "Real-time monitoring dashboard for cloud infrastructure, featuring live metrics, alerting, and cost optimization insights.",
    tech: ["React", "Node.js", "AWS", "DynamoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    name: "TaskFlow API",
    description:
      "RESTful microservice for task management with JWT auth, rate limiting, and comprehensive Swagger documentation.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    github: "https://github.com",
  },
  {
    name: "DevPortfolio Builder",
    description:
      "A drag-and-drop portfolio generator for developers, powered by AI-driven layout suggestions and one-click deployment.",
    tech: ["React", "Python", "AWS Lambda", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const certificates = [
  { name: "AWS Certified Solutions Architect", org: "Amazon Web Services" },
  { name: "Meta Front-End Developer", org: "Meta / Coursera" },
  { name: "Java SE 11 Developer", org: "Oracle" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Projects & Certificates"
          description="A selection of projects I've built and professional certifications I've earned."
        />

        {/* Project cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              className="group bg-card rounded-2xl border border-border/60 p-6 flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-primary/8 text-primary border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full text-xs gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="rounded-full text-xs gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Certificates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-xl border border-border/60 p-5 hover:border-primary/20 transition-colors"
              >
                <p className="text-sm font-semibold text-foreground">
                  {cert.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
