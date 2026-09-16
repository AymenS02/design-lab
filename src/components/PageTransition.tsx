import {
  useRef,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import gsap from "gsap";

import {
  TransitionContext,
} from "./page-transition-context";


export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();


  function navigateWithTransition(path: string) {

    const tl = gsap.timeline();


    tl.to(
      topRef.current,
      {
        clipPath:
          "circle(100% at 0% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      },
      0
    );


    tl.to(
      bottomRef.current,
      {
        clipPath:
          "circle(100% at 100% 100%)",
        duration: 0.8,
        ease: "power4.inOut",
      },
      0
    );


    tl.call(() => {
      navigate(path);
    });


    tl.to(
      topRef.current,
      {
        clipPath:
          "circle(0% at 0% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      }
    );


    tl.to(
      bottomRef.current,
      {
        clipPath:
          "circle(0% at 100% 100%)",
        duration: 0.8,
        ease: "power4.inOut",
      },
      "<"
    );
  }


  return (
    <TransitionContext.Provider
      value={{
        navigateWithTransition,
      }}
    >

      <div
        ref={topRef}
        className="
          fixed inset-0
          z-[100]
          bg-blue-800
          pointer-events-none
        "
        style={{
          clipPath:
            "circle(0% at 0% 0%)",
        }}
      />


      <div
        ref={bottomRef}
        className="
          fixed inset-0
          z-[99]
          bg-red-900
          pointer-events-none
        "
        style={{
          clipPath:
            "circle(0% at 100% 100%)",
        }}
      />


      {children}

    </TransitionContext.Provider>
  );
}