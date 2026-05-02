# Portfólio Pessoal — Vinicius Gomes

Site de portfólio único, página longa (single-page), estética **dark premium** com acentos em azul elétrico, inspirado na referência enviada (Mike O'Bird) mas modernizado com microinterações de nível Awwwards.

## Direção visual

- **Tema:** Dark único, refinado. Fundo quase preto (#0A0A0F) com grid sutil.
- **Acento:** Azul elétrico vibrante (#3B82F6 → #6366F1 em gradientes).
- **Tipografia:** Display serif elegante para títulos grandes (estilo "WORKS" da referência) + sans-serif geométrica para corpo.
- **Mood:** Sofisticado, silencioso, com momentos de impacto. Muito espaço negativo. Tipografia gigante como elemento gráfico.

## Estrutura das seções

1. **Loader inicial** — animação curta com nome surgindo letra por letra, barra de progresso fina; sai com transição suave.
2. **Hero** — Nome em tipografia massiva, subtítulo "Estudante de Engenharia de Software · Desenvolvedor Web", badge "#OPENTOWORK" sutil, CTA duplo (Ver projetos / Contato). Background animado vivo.
3. **Sobre** — Foto + bio baseada no currículo (UniCEUB, foco em lógica/algoritmos, autodidata). Lista vertical de fatos (localização, formação, idiomas).
4. **Habilidades** — Grid de tecnologias (Python, Java, HTML5, CSS3, JavaScript, Git/GitHub, Node.js, VS Code) com ícones e barras/anéis animados que preenchem ao entrar na viewport.
5. **Projetos** — Cards grandes com:
   - Calculadora de Médias (Python)
   - Portfólio Pessoal (HTML/CSS)
   - Espaço para projetos futuros do GitHub (Gomesvmg)
   - Cada card com hover parallax + reveal de detalhes técnicos.
6. **Formação & Certificações** — Timeline vertical: UniCEUB, CS50 Harvard, Alura Git/GitHub.
7. **Contato** — Formulário elegante + links diretos (email, telefone, LinkedIn, GitHub) com microinterações.
8. **Footer** — Minimal, com retorno ao topo animado.

## Microinterações (núcleo da experiência)

- **Cursor customizado** — Ponto pequeno + anel maior que segue com lag suave; expande/inverte cor sobre links e botões.
- **Botões** — Fill animation diagonal no hover, leve escala (0.97) ao clique, ripple opcional.
- **Links de texto** — Underline desenhado da esquerda para a direita.
- **Cards de projeto** — Tilt 3D leve seguindo o mouse, sombra dinâmica colorida, reveal de stack e descrição ao hover.
- **Scroll** — Smooth scroll global, elementos entram com fade + slide (IntersectionObserver), barra de progresso fina no topo.
- **Navegação** — Menu fixo translúcido com blur; indicador ativo desliza entre itens.
- **Texto** — Títulos grandes com split de palavras animadas (stagger).
- **Magnetic buttons** — CTAs principais "puxam" o cursor levemente.

## Background vivo

- Camada 1: Gradiente animado lento (azul/roxo/preto) com `mix-blend-mode`.
- Camada 2: Canvas com partículas leves conectadas por linhas finas; densidade reduzida em mobile.
- Camada 3: Glow radial seguindo o cursor (luz suave azul).
- Tudo desligado/simplificado em mobile e quando `prefers-reduced-motion`.

## UX & Performance

- Mobile-first, layout adaptativo real (não só redução).
- Animações reduzidas e partículas desativadas em telas pequenas.
- Respeito a `prefers-reduced-motion`.
- Hierarquia tipográfica forte; foco visível em todos os controles.
- Feedback visual em envio do formulário (estado loading + sucesso).

## Detalhes técnicos

- React + Vite + Tailwind (já no projeto), Framer Motion para animações declarativas, canvas vanilla para partículas (leve, sem Three.js para manter performance).
- Tokens de design adicionados em `index.css` e `tailwind.config.ts` (cor accent, fontes via Google Fonts, keyframes extras: gradient-shift, marquee, draw-underline).
- Componentes novos em `src/components/portfolio/`: `Loader`, `CustomCursor`, `AnimatedBackground`, `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `ProjectCard`, `Timeline`, `Contact`, `Footer`, `MagneticButton`, `RevealOnScroll`.
- `src/pages/Index.tsx` reescrito para compor as seções.
- Foto do perfil (do GitHub/LinkedIn) salva em `src/assets/` — usarei a foto do GitHub como avatar principal por ser mais nítida.
- Formulário de contato: client-side com validação e estado de sucesso (sem backend nesta versão; pode ser plugado depois).

## O que não está incluído (pode ser adicionado depois)

- Envio real de email do formulário (precisa de backend / Lovable Cloud).
- Página separada por projeto (mantemos single-page).
- Internacionalização (site em PT-BR, conforme perfil).

