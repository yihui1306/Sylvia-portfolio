import React, { useState } from "react";
import { motion } from "framer-motion";
import moodtraImg from "../../assets/moodtra.png";
import certDeloitte from "../../assets/cert-deloitte.png";
import certAws from "../../assets/cert-aws.png";
import {
  ExternalLink,
  Github,
  Award,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Moodtra",
    description:
      "A full-stack web application designed to support teenagers' emotional wellbeing and parent engagement.",
    details: [
      "Built responsive frontend using React, JavaScript, HTML, and CSS — including Kid Chat, Mood Calendar, and wellbeing dashboards.",
      "Implemented backend services using FastAPI on AWS Lambda, integrated via AWS API Gateway.",
      "Designed relational databases using Amazon RDS (PostgreSQL) for mood logs, user profiles, and chat sessions.",
      "Implemented secure authentication and role-based access control using AWS Cognito (OAuth 2.0).",
      "Managed cloud infrastructure using AWS serverless architecture and GitHub version control.",
      "Collaborated in Agile environment with code reviews, testing, and iterative development.",
    ],
    tech: [
      "React",
      "FastAPI",
      "AWS Lambda",
      "RDS",
      "Cognito",
      "API Gateway",
      "PostgreSQL",
    ],
    demo: "https://moodtra.tech/",
    image: moodtraImg,
  },
];

const certificates = [
  {
    name: "Deloitte Australia Software Engineering Job Simulation",
    org: "Forage · March 2025",
    description:
      "Completed Python debugging, data transformation to JSON, and proposed a secure internal dashboard solution for business stakeholders.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_4SnQWivQH97fTEbrN_1741777626417_completion_certificate.pdf",
    image: certDeloitte,
  },

  {
    name: "AWS APAC Solutions Architecture Virtual Experience",
    org: "Forage · July 2025",
    description:
      "Designed a scalable cloud architecture using AWS Elastic Beanstalk to address high traffic and slow response times, presented with cost considerations.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_4SnQWivQH97fTEbrN_1752725977455_completion_certificate.pdf",
    image: certAws,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="py-24 px-16"
      style={{
        backgroundColor: "#a2d2ff",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Projects & Certificates"
          description="Things I've built and credentials I've earned along the way."
        />

        {/* Project cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid sm:grid-cols-2 gap-4 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Clickable image */}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <div className="w-full h-48 overflow-hidden bg-slate-50">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {project.name}
                  </h3>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-slate-800 text-white text-xs font-medium hover:bg-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Visit Site
                  </a>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Expandable details */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors mb-4"
                >
                  {expanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  {expanded ? "Show less" : "Show more"}
                </button>

                {expanded && (
                  <ul className="space-y-2 mb-4">
                    {project.details.map((d, i) => (
                      <li key={i} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-slate-400 shrink-0">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
          <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-slate-600" />
            Certificates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-all block group"
              >
                <div className="w-full h-48 overflow-hidden bg-slate-50">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 mb-2">{cert.org}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                  <p className="text-xs text-blue-500 mt-3 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> View Certificate
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
