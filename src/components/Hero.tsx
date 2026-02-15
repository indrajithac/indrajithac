import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // file inside public folder
    link.download = "Indrajith_AC_Resume.pdf"; // downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 w-36 h-36 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-[3px]"
        >
          <div className="w-full h-full rounded-full bg-card overflow-hidden">
            <img
              src="/indrajith.JPG"
              alt="Indrajith A C"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Indrajith A C
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
            Frontend Software Developer
          </p>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed mb-10">
            Nearly 4 years of experience building scalable, user-friendly web
            applications with
            <span className="text-primary font-medium"> React.js</span>,
            <span className="text-primary font-medium"> Next.js</span>, and
            <span className="text-primary font-medium"> Tailwind CSS</span>.
            Focused on clean architecture and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo("projects")}
            size="lg"
            className="gap-2 rounded-full px-6"
          >
            <ArrowDown className="w-4 h-4" /> View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full px-6"
            onClick={downloadPDF}
          >
            <Download className="w-4 h-4" /> Download Resume
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollTo("contact")}
            className="gap-2 rounded-full px-6"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
