import { ArrowUpRight } from "lucide-react";
import { MouseEvent, useRef } from "react";
import { Reveal } from "./Reveal";

interface Project {
  index: string;
  title: string;
  year: string;
  type: string;
  description: string;
  stack: string[];
  href?: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "Calculadora de Médias",
    year: "2026",
    type: "Projeto Acadêmico",
    description:
      "Script Python para automação de cálculos de notas universitárias, lidando com pesos diferentes, critérios variáveis e tratamento robusto de exceções.",
    stack: ["Python 3", "Lógica", "OOP"],
    href: "https://github.com/Gomesvmg",
  },
  {
    index: "02",
    title: "Portfólio Pessoal",
    year: "2026",
    type: "Projeto Pessoal",
    description:
      "Landing page responsiva para centralizar projetos e links profissionais, com foco em semântica HTML, acessibilidade e design limpo.",
    stack: ["HTML5", "CSS3", "Responsive"],
    href: "https://github.com/Gomesvmg",
  },
  {
    index: "03",
    title: "Em construção",
    year: "2026",
    type: "Próximo projeto",
    description:
      "Aplicação web full-stack explorando React, APIs e persistência de dados — combinando o que aprendo na faculdade com prática real de desenvolvimento.",
    stack: ["React", "Node.js", "JavaScript"],
  },
];

const ProjectCard = ({ p }: { p: Project }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current!.style.transform = `perspective(1200px) rotateX(${-py * 4}deg) rotateY(${px * 6}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
  };

  const Tag: any = p.href ? "a" : "div";

  return (
    <Tag
      ref={ref as any}
      href={p.href}
      target={p.href ? "_blank" : undefined}
      rel={p.href ? "noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 transition-[box-shadow,border-color] duration-500 hover:border-primary/40 md:p-12"
      style={{ boxShadow: "var(--shadow-card)", transformStyle: "preserve-3d", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s, border-color 0.5s" }}
    >
      {/* Gradient hover */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-primary/0 via-transparent to-primary-glow/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse at top right, hsl(var(--primary)/0.18), transparent 60%)" }}
      />

      <div className="relative grid gap-6 md:grid-cols-12 md:items-start">
        <div className="md:col-span-2">
          <span className="font-mono text-xs text-muted-foreground">{p.index}</span>
        </div>
        <div className="md:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {p.type} · {p.year}
          </p>
          <h3 className="mt-3 font-display text-4xl leading-[1] tracking-tighter md:text-6xl">
            <span className="text-gradient transition-all duration-500 group-hover:text-gradient-primary">
              {p.title}
            </span>
          </h3>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{p.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map(s => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:col-span-3 md:justify-end">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
          </div>
        </div>
      </div>
    </Tag>
  );
};

export const Projects = () => {
  return (
    <section id="projetos" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">[ Selecionados ]</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] tracking-tighter text-gradient md:text-8xl">
                Projetos<span className="text-primary">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="https://github.com/Gomesvmg"
              target="_blank"
              rel="noreferrer"
              className="story-link self-start text-sm text-muted-foreground hover:text-foreground md:self-end"
            >
              Tudo no GitHub →
            </a>
          </Reveal>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} y={50}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
