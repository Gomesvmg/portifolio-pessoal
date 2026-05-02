import { Github, Linkedin, Mail, Phone, Send, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";
import { toast } from "@/hooks/use-toast";

const links = [
  { icon: Mail, label: "viniciusgomesgit7@gmail.com", href: "mailto:viniciusgomesgit7@gmail.com" },
  { icon: Phone, label: "+55 (61) 99615-3216", href: "tel:+5561996153216" },
  { icon: Linkedin, label: "in/viniciusgomesdmorais", href: "https://www.linkedin.com/in/viniciusgomesdmorais/" },
  { icon: Github, label: "github.com/Gomesvmg", href: "https://github.com/Gomesvmg" },
];

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    toast({ title: "Mensagem enviada", description: "Obrigado pelo contato — responderei em breve." });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contato" className="relative px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">[ Contato ]</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-6xl leading-[0.9] tracking-tighter text-gradient md:text-8xl">
                Vamos <span className="italic">criar</span>
                <br />
                algo juntos<span className="text-primary">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-md text-lg text-muted-foreground">
                Se você procura alguém curioso, comprometido e com vontade de crescer rápido, vamos conversar.
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <ul className="mt-12 space-y-2">
                {links.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 border-b border-border py-4 transition-colors hover:border-primary"
                    >
                      <div className="flex items-center gap-4">
                        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                        <span className="text-base text-foreground/90 transition-transform duration-500 group-hover:translate-x-1">
                          {label}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal delay={0.2}>
              <form
                onSubmit={onSubmit}
                className="glass relative space-y-6 rounded-3xl p-8 md:p-10"
              >
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Nome</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full border-0 border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-primary"
                    placeholder="Conte sobre seu projeto ou oportunidade..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending || sent}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition-all duration-500 active:scale-[0.98] disabled:opacity-80"
                >
                  <span className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-primary-glow to-primary transition-transform duration-700 group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    {sent ? <><Check className="h-4 w-4" /> Enviado</> : sending ? "Enviando..." : <>Enviar mensagem <Send className="h-4 w-4" /></>}
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
