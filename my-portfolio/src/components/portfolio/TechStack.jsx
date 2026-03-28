// import React from "react";
import SectionHeading from "./SectionHeading";
import React, { useState } from "react";

const categories = [
  {
    title: "Languages",
    description:
      "Core languages I use to build reliable and scalable software.",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    description:
      "Frameworks and tools I use to craft responsive, user-friendly interfaces.",
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vue.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "TailwindCSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Backend, Cloud & Tools",
    description:
      "Everything I use to build, deploy, and maintain production-ready systems.",
    skills: [
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "DynamoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
];

function MarqueeRow({ skills }) {
  const doubled = [...skills, ...skills, ...skills];
  const rowRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeft(rowRef.current.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={rowRef}
      className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div
        className="flex gap-4 w-max"
        style={{
          animation: isPaused ? "none" : "marquee 18s linear infinite",
        }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm w-24 h-24 shrink-0"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs text-slate-500 font-medium text-center leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 px-6"
      style={{
        backgroundColor: "#bde0fe",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <SectionHeading
          title="Tech Stack"
          description="The tools I use to turn ideas into production-ready products."
        />

        <div className="space-y-8 mt-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-1 px-1"
                style={{ color: "#000000ff" }}
              >
                {cat.title}
              </p>
              <p className="text-base mb-3 px-1" style={{ color: "#4a6fa5" }}>
                {cat.description}
              </p>
              <MarqueeRow skills={cat.skills} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
