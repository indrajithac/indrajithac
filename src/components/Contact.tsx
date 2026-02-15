import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const contactInfo = [
  {
    icon: Mail,
    label: "indrajithac@gmail.com",
    href: "mailto:indrajithac@gmail.com",
  },
  { icon: Phone, label: "9048589402", href: "tel:9048589402" },
  { icon: MapPin, label: "Kochi, Kerala, India", href: "#" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/indrajithac/" },
  { icon: Github, label: "GitHub", href: "https://github.com/indrajithac" },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider text-center">
            // contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Get In Touch
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about frontend development.
              </p>

              <div className="flex gap-3 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
