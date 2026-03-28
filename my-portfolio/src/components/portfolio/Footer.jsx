import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 px-6" style={{ backgroundColor: "#a2d2ff" }}>
      <div className="max-w-3xl mx-auto flex flex-row items-center justify-between w-full">
        <p className="text-sm text-slate-600">
          © 2026 Sylvia LI. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/yihui1306"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sylvia-li-b95192315/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:sylviali164@gmail.com"
            className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white/50 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
