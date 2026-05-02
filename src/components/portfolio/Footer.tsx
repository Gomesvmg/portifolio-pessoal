import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl tracking-tight">Vinicius Gomes<span className="text-primary">.</span></p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {year} — Construído com cuidado em Brasília
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          Voltar ao topo
          <ArrowUp className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};
