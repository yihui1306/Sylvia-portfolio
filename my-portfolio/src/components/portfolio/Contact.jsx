import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";

const contactLinks = [
  {
    icon: Mail,
    label: "alex@example.com",
    href: "mailto:alex@example.com",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/alexchen",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "github.com/alexchen",
    href: "https://github.com",
  },
  {
    icon: MapPin,
    label: "San Francisco, CA",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! Thanks for reaching out.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to say hi? Feel free to reach out."
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
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
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border/60 p-6 sm:p-8 space-y-5"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring transition"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring transition"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-ring transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-60 transition"
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <Send className="w-4 h-4" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
