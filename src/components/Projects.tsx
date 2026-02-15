import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const projects = [
  {
    title: "MemShots",
    description:
      "AI-powered photo management tool with face sorting, web albums, and a CRM dashboard for photographers.",
    contributions: [
      "Real-time data handling and responsive UI",
      "Face sorting integration",
      "CRM dashboard development",
    ],
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Redux"],
    color: "from-primary/20 to-accent/10",
    demoLink: "https://memshots.com/",
  },
  {
    title: "Fjällräven Experience",
    description:
      "Next.js e-commerce platform with Sanity CMS integration, delivering a premium brand experience.",
    contributions: [
      "Figma-to-production responsive implementation",
      "Sanity CMS integration",
      "Multi-step registration optimization",
    ],
    tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "TypeScript"],
    color: "from-accent/20 to-primary/10",
    demoLink: "https://experience.fjallraven.com/nl/nl-nl",
  },
  {
    title: "GoViral",
    description:
      "Business promotion platform built for scalability with React and Redux architecture.",
    contributions: [
      "React + Redux architecture",
      "Tailwind-based responsive UI",
      "Performance optimization",
    ],
    tech: ["React.js", "Redux", "Tailwind CSS", "JavaScript"],
    color: "from-primary/10 to-accent/20",
    demoLink: "https://goviralit.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider text-center">
            // projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <AnimatedSection key={project.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center cursor-pointer`}
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <span className="text-3xl font-bold text-foreground/20 group-hover:text-foreground/30 transition-colors font-mono">
                    {project.title}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.contributions.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* <div className="flex gap-3">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" /> Code
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </button>
                  </div> */}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
