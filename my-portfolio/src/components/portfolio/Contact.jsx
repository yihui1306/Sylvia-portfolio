import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useForm, ValidationError } from "@formspree/react";
import logo from "../../assets/logo.png";

const contactLinks = [
  {
    icon: Mail,
    label: "sylviali164@gmail.com",
    href: "mailto:sylviali164@gmail.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/sylvia-li",
    href: "https://www.linkedin.com/in/sylvia-li-b95192315/",
  },
  {
    icon: Github,
    label: "github.com/yihui1306",
    href: "https://github.com/yihui1306",
  },
  {
    icon: MapPin,
    label: "Melbourne, Australia",
    href: null,
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xzdkdagy");

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{
        backgroundColor: "#bde0fe",
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ color: "#000000ff" }}
            >
              Contact Me
            </h2>
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>
          <p
            className="mt-3 max-w-xl mx-auto leading-relaxed text-lg"
            style={{ color: "#4a6fa5" }}
          >
            Open to full-time roles, internships, and freelance projects, let's
            build something great together!!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-slate-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's connect!
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const Wrapper = link.href ? "a" : "div";
                return (
                  <Wrapper
                    key={link.label}
                    href={link.href || undefined}
                    target={link.href ? "_blank" : undefined}
                    rel={link.href ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/60 flex items-center justify-center group-hover:bg-white transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                      {link.label}
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/60 rounded-2xl p-6 sm:p-8 space-y-5"
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg font-semibold text-slate-800">
                  Message sent!
                </p>
                <p className="text-slate-500 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-200 transition"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-200 transition resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 disabled:opacity-60 transition"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
