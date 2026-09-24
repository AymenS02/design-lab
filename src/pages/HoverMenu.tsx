"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Sandbox() {
  const squareRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const resetTween = useRef<gsap.core.Tween | null>(null);

  const handleMouseEnter = (index: number) => {
    // cancel the delayed reset
    resetTween.current?.kill();

    const others = itemRefs.current.filter(
      (_, i) => i !== index
    );

    gsap.to(others, {
      opacity: 0.2,
      duration: 0.3,
      overwrite: true,
    });

    // make sure hovered item stays visible
    gsap.to(itemRefs.current[index], {
      opacity: 1,
      duration: 0.3,
      overwrite: true,
    });
  };

  const handleListLeave = () => {
    resetTween.current?.kill();

    resetTween.current = gsap.to(itemRefs.current, {
      opacity: 1,
      duration: 0.3,
      delay: 1,
      overwrite: true,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const centerY = window.innerHeight / 2;
      const distance = mouseY - centerY - 200;

      gsap.to(squareRef.current, {
        y: -distance * 0.3,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="flex h-screen items-start justify-center">
      <div ref={squareRef}>
        <ul
          onMouseLeave={handleListLeave}
          className="flex flex-col gap-20 text-9xl font-bold font-mono"
        >
          {[1, 2, 3, 4, 5].map((item, index) => (
            <li
              key={item}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              Item {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}