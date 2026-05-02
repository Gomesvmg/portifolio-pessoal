import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Skills" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("sobre");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, p)));

      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
      const y = window.scrollY + window.innerHeight * 0.35;
      const cur = sections.reverse().find(s => s.offsetTop <= y);
      if (cur) setActive(cur.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-primary to-primary-glow"
        style={{ width: "100%", scaleX: progress }}
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-40 mx-auto flex max-w-6xl items-center justify-between px-4"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
          <span className="font-display tracking-tight">VG</span>
        </button>

        <nav className="glass hidden items-center gap-1 rounded-full px-2 py-2 md:flex">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="relative rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-0 rounded-full bg-primary/15"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active === l.id ? "text-foreground" : ""}`}>{l.label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => go("contato")}
          className="glass hidden rounded-full px-4 py-2 text-sm font-medium md:inline-block story-link"
        >
          Vamos conversar
        </button>

        <button
          onClick={() => setOpen(o => !o)}
          className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1">
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </motion.header>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 z-40 md:hidden"
        >
          <nav className="glass flex flex-col rounded-2xl p-2">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-xl px-4 py-3 text-left font-display text-2xl"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
};
