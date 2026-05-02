import { Reveal } from "./Reveal";

const skills = [
  { name: "Python", level: 65, group: "Linguagens" },
  { name: "JavaScript", level: 70, group: "Linguagens" },
  { name: "Java", level: 50, group: "Linguagens" },
  { name: "HTML5", level: 90, group: "Web" },
  { name: "CSS3 / Tailwind", level: 85, group: "Web" },
  { name: "React", level: 60, group: "Web" },
  { name: "Git / GitHub", level: 80, group: "Tools" },
  { name: "Node.js", level: 55, group: "Tools" },
  { name: "VS Code", level: 95, group: "Tools" },
  { name: "Scrum / Kanban", level: 70, group: "Conceitos" },
  { name: "Estruturas de Dados", level: 65, group: "Conceitos" },
  { name: "Lógica de Programação", level: 90, group: "Conceitos" },
];

const marquee = ["TypeScript", "React", "Tailwind", "Python", "Git", "Node.js", "Java", "Algoritmos", "UI/UX", "Framer Motion"];

export const Skills = () => {
  return (
    <section id="habilidades" className="relative overflow-hidden px-6 py-32 md:px-12 md:py-48">
      {/* Marquee */}
      <div className="absolute inset-x-0 top-16 -z-0 select-none overflow-hidden opacity-[0.04]">
        <div className="flex w-max animate-marquee whitespace-nowrap font-display text-[14vw] leading-none tracking-tighter">
          {[...marquee, ...marquee, ...marquee].map((t, i) => (
            <span key={i} className="px-8">{t}</span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">[ Habilidades ]</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tighter text-gradient md:text-7xl">
                Ferramentas <span className="italic">do ofício.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground">
              Stack atual em constante refinamento — favorecendo simplicidade, performance e código sustentável.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-colors hover:border-primary/50">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.group}</p>
                    <p className="mt-1 font-display text-xl tracking-tight">{s.name}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                </div>
                <div className="mt-4 h-px overflow-hidden bg-border">
                  <div
                    className="h-full origin-left bg-gradient-to-r from-primary to-primary-glow transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: `scaleX(${s.level / 100})` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
