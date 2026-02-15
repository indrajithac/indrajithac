import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ y: 40, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const timeline = [
  { year: "2016–2020", title: "B.Tech in Electrical & Electronics Engineering", subtitle: "Sreepathy Institute of Management and Technology", icon: GraduationCap },
  { year: "Aug 2022", title: "Joined EGuidance Labs LLP", subtitle: "Software Developer – Frontend", icon: Briefcase },
  { year: "Present", title: "Building Scalable React Applications", subtitle: "Leading frontend development and design systems", icon: Briefcase },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-primary font-mono text-sm mb-2 tracking-wider text-center">// about me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">Get To Know Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend developer with nearly 4 years of hands-on experience in product-based environments.
                I specialize in building performant, accessible, and visually polished web applications using modern tools and frameworks.
              </p>
              <p>
                I work closely with designers and backend engineers to translate complex requirements into clean, reusable UI components. My focus is on creating maintainable codebases with strong component architecture.
              </p>
              <p>
                From converting Figma designs into pixel-perfect Next.js pages to deploying on AWS and Firebase, I enjoy tackling the full spectrum of frontend challenges.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <item.icon className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-xs font-mono text-primary mb-1">{item.year}</p>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
