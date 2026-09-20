import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { TransitionContext } from "./page-transition-context";

const COLS = 6;

export default function PageTransition({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const markRef = useRef<HTMLDivElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimating = useRef(false);

  const navigate = useNavigate();

  useEffect(() => () => void tlRef.current?.kill(), []);

  function navigateWithTransition(path: string) {
    if (isAnimating.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      navigate(path);
      window.scrollTo({ top: 0 });
      return;
    }

    isAnimating.current = true;
    const bars = barsRef.current.filter(Boolean) as HTMLDivElement[];

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });
    tlRef.current = tl;

    // bars drop in from top, staggered left→right
    tl.set(bars, { scaleY: 0, transformOrigin: "top" });
    tl.to(bars, {
      scaleY: 1,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: 0.06,
    });

    tl.fromTo(
      markRef.current,
      { autoAlpha: 0, scale: 0.9 },
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(2)" },
      "-=0.15"
    );

    tl.call(() => {
      navigate(path);
      window.scrollTo({ top: 0 });
    });

    tl.to(markRef.current, { autoAlpha: 0, scale: 0.9, duration: 0.2 }, "+=0.2");

    // bars lift away, staggered right→left, origin flips to bottom
    tl.set(bars, { transformOrigin: "bottom" });
    tl.to(
      bars,
      {
        scaleY: 0,
        duration: 0.55,
        ease: "power4.inOut",
        stagger: {
          each: 0.06,
          from: "end",
        },
      },
      "<0.05"
    );
  }

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      <div
        ref={containerRef}
        aria-hidden
        className="fixed inset-0 z-[100] flex pointer-events-none"
      >
        {Array.from({ length: COLS }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              barsRef.current[i] = el;
            }}
            className="h-full flex-1 bg-zinc-950 will-change-transform"
            style={{ transform: "scaleY(0)" }}
          />
        ))}
      </div>

      <div
        ref={markRef}
        aria-hidden
        className="
          fixed inset-0 z-[101]
          pointer-events-none
          flex flex-col items-center justify-center gap-3
          opacity-0
        "
      >
        <span className="h-8 w-8 rounded-full border-2 border-zinc-300 border-t-transparent animate-spin" />
        {label ? (
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-300">
            {label}
          </span>
        ) : null}
      </div>

      {children}
    </TransitionContext.Provider>
  );
}