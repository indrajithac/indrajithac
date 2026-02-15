import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection();
  const { isDark, toggle } = useTheme();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-bold text-lg text-foreground tracking-tight">
          <span className="text-primary">&lt;</span>Indrajith<span className="text-primary">/&gt;</span>
        </button>

        {!isMobile && (
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active === item.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-5 h-5 text-accent" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-5 h-5 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} className="w-10 h-10 flex items-center justify-center">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2.5 rounded-md text-left text-sm font-medium transition-colors ${
                    active === item.id ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
