import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            <span className="text-primary neon-text-pink">📬</span> Contact.sh
          </h2>
          <p className="text-muted-foreground font-handwriting text-xl">
            Let's build something amazing together
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="text-xs text-muted-foreground font-heading mb-1.5 block">$ name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="Your name..."
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-heading mb-1.5 block">$ email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground font-heading mb-1.5 block">$ message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-sm neon-glow-pink hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>

        <div className="flex justify-center gap-4 mt-8">
          {[
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Github, label: "GitHub" },
            { icon: Twitter, label: "X" },
            { icon: Mail, label: "Email" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:neon-glow-pink transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-12 font-heading">
          © 2024 Arshi Khan. Built with 💗 and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
