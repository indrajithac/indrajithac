import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Cloud } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ y: 40, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const skillGroups = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Context API"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Postman", "Cursor AI", "Lovable AI", "Sanity CMS", "Figma", "VS Code"],
  },
  {
    title: "Cloud & Backend",
    icon: Cloud,
    skills: ["AWS S3", "CloudFront", "Firebase", "GCP Storage", "Node.js", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider text-center">// skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Skills & Expertise</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <group.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
