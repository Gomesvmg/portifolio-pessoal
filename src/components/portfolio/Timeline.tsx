import { Reveal } from "./Reveal";

const items = [
  {
    when: "2026 — 2029",
    title: "Bacharelado em Engenharia de Software",
    org: "UniCEUB · Centro Universitário de Brasília",
    note: "Graduação em andamento. Foco em fundamentos sólidos: lógica, algoritmos, estruturas de dados e engenharia.",
  },
  {
    when: "2026",
    title: "Git e GitHub do Zero",
    org: "Alura",
    note: "Domínio de versionamento, branching strategies e fluxo colaborativo profissional.",
  },
  {
    when: "2024",
    title: "CS50 — Introdução à Ciência da Computação",
    org: "Harvard University",
    note: "Base sólida em ciência da computação, do C ao Python, passando por algoritmos clássicos.",
  },
];

export const Timeline = () => {
  return (
    <section id="formacao" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">[ Formação ]</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tighter text-gradient md:text-7xl">
            Trajetória <span className="italic">acadêmica.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />
          <div className="space-y-16">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={i * 0.1}>
                <div className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="hidden md:block" />
                  <div className="relative pl-12 md:pl-12">
                    <span className="absolute left-0 top-2 h-6 w-6 -translate-x-[5px] rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                      <span className="absolute inset-1 rounded-full bg-primary shadow-glow" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.when}</p>
                    <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-3xl">{it.title}</h3>
                    <p className="mt-1 text-sm text-primary">{it.org}</p>
                    <p className="mt-4 text-muted-foreground">{it.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
