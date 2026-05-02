import { motion, useMotionValue, useSpring } from "framer-motion";
import { ButtonHTMLAttributes, forwardRef, MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", className, ...props }, _ref) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
    const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

    const onMove = (e: MouseEvent<HTMLButtonElement>) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
      y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };

    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500 active:scale-[0.97]";
    const styles =
      variant === "primary"
        ? "bg-primary text-primary-foreground hover:text-primary-foreground"
        : "border border-border text-foreground hover:text-primary-foreground";

    return (
      <motion.button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: sx, y: sy }}
        className={cn(base, styles, className)}
        {...(props as any)}
      >
        <span
          className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-tr from-primary to-primary-glow transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0"
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
