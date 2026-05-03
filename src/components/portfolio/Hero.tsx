import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Disponível para oportunidades — Brasília, DF
        </motion.div>

        {/* Massive name */}
        <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] font-light leading-[0.9] tracking-tighter">
          {["Vinicius", "Gomes."].map((word, i) => (
            <span key={i} className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.8 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {i === 1 ? (
                  <>
                    <span className="text-gradient italic">{word.replace(".", "")}</span>
                    <span className="text-primary">.</span>
                  </>
                ) : (
                  <span className="text-gradient">{word}</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-3"
        >
          <div className="md:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [01] Função
            </p>
            <p className="mt-2 text-base text-foreground/90">
              Engenheiro de Software <span className="text-muted-foreground">em formação</span>
              <br />
              <span className="text-muted-foreground">&</span> Desenvolvedor Web
            </p>
          </div>
          <div className="md:col-span-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [02] Foco
            </p>
            <p className="mt-2 text-base text-foreground/90">
              Construindo interfaces refinadas e
              <br />
              resolvendo problemas com lógica e código limpo.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-1 md:items-end">
            <MagneticButton onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}>
              Ver projetos <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contato
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-float" />
      </motion.div>
    </section>
  );
};
