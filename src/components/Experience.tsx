import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ y: 40, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const achievements = [
  "Built scalable React applications serving thousands of users with optimized performance",
  "Created reusable UI component libraries and design systems for consistent product experiences",
  "Integrated REST APIs and managed complex application state with Redux and Context API",
  "Converted Figma designs into pixel-perfect, responsive Next.js applications",
  "Deployed and maintained applications using AWS (S3, CloudFront), Firebase, and GCP",
  "Collaborated in Agile development environments with cross-functional teams",
];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visibleAchievements = expanded ? achievements : achievements.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider text-center">// experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Work Experience</h2>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent rounded-full" />
            
            <div className="pl-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Software Developer – Frontend</h3>
                  <p className="text-primary font-medium">EGuidance Labs LLP</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">Aug 2022 – Present</span>
              </div>

              <ul className="space-y-3">
                {visibleAchievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {achievements.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                >
                  {expanded ? "Show less" : "Show more"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
