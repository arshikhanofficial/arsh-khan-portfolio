import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Globe, Mail, Download, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
    { icon: Globe, label: "Portfolio", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main container card */}
          <div className="relative">
            {/* Yellow shadow layer */}
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl translate-x-3 translate-y-3" />
            <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden">
              {/* Top bar */}
              <div className="bg-secondary/90 px-6 py-3 flex items-center gap-2 border-b-2 border-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/80" />
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <span className="text-xs font-heading font-bold text-secondary-foreground ml-2">
                  CONTACT.EXE
                </span>
              </div>

              <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-10">
                {/* LEFT SIDE */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-1">
                      <span className="text-primary neon-text-pink">CONTACT</span>
                      <span className="text-secondary">.EXE</span>
                    </h2>
                    <p className="text-muted-foreground font-handwriting text-xl mb-8">
                      Let's build something amazing together 🥷
                    </p>

                    {/* Click to email */}
                    <a
                      href="mailto:hello@example.com"
                      className="inline-flex items-center gap-3 group mb-8"
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary flex items-center justify-center group-hover:neon-glow-pink transition-all duration-300">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-heading">
                          Click to Email
                        </span>
                      </div>
                    </a>

                    {/* Social icons */}
                    <div className="flex gap-3 mb-8">
                      {socials.map(({ icon: Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="w-11 h-11 rounded-full border-2 border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:neon-glow-pink transition-all duration-300"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Download CV */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/40 text-primary rounded-full font-heading font-semibold text-sm hover:neon-glow-pink hover:bg-primary/20 hover:scale-105 transition-all duration-300 w-fit"
                  >
                    <Download size={16} /> Download CV
                  </a>
                </motion.div>

                {/* RIGHT SIDE - Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  {[
                    { key: "name", label: "Your Name", type: "text" },
                    { key: "email", label: "Your Email", type: "email" },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label className="text-xs text-muted-foreground font-heading mb-1.5 block">
                        $ {label.toLowerCase()}
                      </label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        onFocus={() => setFocused(key)}
                        onBlur={() => setFocused(null)}
                        className={`w-full bg-muted/50 border-2 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 ${
                          focused === key
                            ? "border-primary shadow-[inset_0_2px_6px_hsl(var(--primary)/0.15)]"
                            : "border-border"
                        }`}
                        placeholder={label + "..."}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-xs text-muted-foreground font-heading mb-1.5 block">
                      $ your message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-muted/50 border-2 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 resize-none ${
                        focused === "message"
                          ? "border-primary shadow-[inset_0_2px_6px_hsl(var(--primary)/0.15)]"
                          : "border-border"
                      }`}
                      placeholder="Write your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-heading font-semibold text-sm neon-glow-pink hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating ninja emoji */}
        <motion.div
          className="absolute top-10 right-10 text-2xl hidden lg:block"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🥷
        </motion.div>

        <p className="text-center text-muted-foreground text-xs mt-12 font-heading">
          © 2024 Arshi Khan. Built with 💗 and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
