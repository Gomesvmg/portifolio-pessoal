import avatar from "@/assets/avatar.png";
import { Reveal, RevealText } from "./Reveal";
import { motion } from "framer-motion";

const facts = [
  { k: "Localização", v: "Brasília, DF — Brasil" },
  { k: "Formação", v: "Eng. de Software · UniCEUB" },
  { k: "Idiomas", v: "Português · Inglês técnico" },
  { k: "Status", v: "Aberto a estágio & freelas" },
];

export const About = () => {
  return (
    <section id="sobre" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">[ Sobre ]</p>
          </Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={avatar}
                alt="Retrato de Vinicius Gomes"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                @Gomesvmg · 2026
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-8 md:pl-8">
          <RevealText
            text="Curiosidade que vira código."
            className="font-display text-4xl leading-[1.05] tracking-tighter md:text-6xl text-gradient"
          />
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl md:max-w-2xl">
              <p>
                Sou estudante de <span className="text-foreground">Engenharia de Software</span> no UniCEUB, movido por
                desafios técnicos e pela elegância de resolver problemas complexos com lógica clara.
              </p>
              <p>
                Atualmente, mergulho fundo em <span className="text-foreground">algoritmos, estruturas de dados</span> e
                <span className="text-foreground"> desenvolvimento web</span>, com a convicção de que aprendizagem
                contínua e atenção ao detalhe são o que separa código que funciona de código que <em>encanta</em>.
              </p>
              <p>
                Procuro uma oportunidade onde possa transformar conhecimento acadêmico em produto real — com
                proatividade, rapidez de aprendizagem e cuidado obsessivo pela experiência final.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {facts.map(f => (
                <div key={f.k} className="bg-card p-6 transition-colors hover:bg-secondary">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.k}</dt>
                  <dd className="mt-2 text-base text-foreground">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
