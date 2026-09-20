import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HugeiconsIcon } from '@hugeicons/react';
import { HeartIcon, MessagesSquareIcon } from "@hugeicons/core-free-icons";

type ShardMotion = {
  x: number;
  y: number;
  rotate: number;
  rotationY: number;
  z: number;
  clipPath: string;
};

// order: [L-top, L-mid, L-bottom, R-top, R-mid, R-bottom]
const BUTTON8_SHARDS: ShardMotion[] = [
  { x: -16, y: -10, rotate: -14, rotationY: -18, z: 30, clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0 100%)" },
  { x: -20, y: 0,   rotate: -6,  rotationY: -10, z: 20, clipPath: "polygon(0 0, 75% 0%, 90% 100%, 0 100%)" },
  { x: -15, y: 10,  rotate: -18, rotationY: -22, z: 25, clipPath: "polygon(0 0, 90% 0%, 75% 100%, 0 100%)" },
  { x: 16,  y: -9,  rotate: 14,  rotationY: 18,  z: 30, clipPath: "polygon(25% 0, 100% 0%, 100% 100%, 0 100%)" },
  { x: 21,  y: 1,   rotate: 7,   rotationY: 10,  z: 20, clipPath: "polygon(0 0, 100% 0%, 100% 100%, 15% 100%)" },
  { x: 14,  y: 11,  rotate: 17,  rotationY: 22,  z: 25, clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)" },
];

// stagger order: mid rows crack first, then top/bottom (center-out)
const BUTTON8_STAGGER = [0.02, 0, 0.045, 0.02, 0, 0.045];

export default function Buttons() {
  
  // ===== Button 1 =====
  const button1A = useRef(null);
  const button1B = useRef(null);
  const buttonHoverDeactivate = useRef(false);

  const button1Enter = () => {

    if (buttonHoverDeactivate.current) return;


    gsap.to(button1B.current, {
      scale: 1.2,
      duration: 0.25,
      ease: "power2.out",
      opacity: 1,
    });
  };

  
  const button1Leave = () => {

    if (buttonHoverDeactivate.current) return;
    
    gsap.to(button1B.current, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };


  const button1Click = () => {
    gsap.to(button1B.current, {
      scale: 0.8,
      duration: 0.25,
      ease: "power2.out",
    });

    buttonHoverDeactivate.current = true;

    gsap.to(button1A.current, {
      scale: 0.8,
      duration: 0.25,
      ease: "power2.out",
      yoyoEase: true,
    });
  };

  // ===== Button 2 ====='

  const button2Main = useRef(null);
  const button2Top = useRef(null);
  const button2Bottom = useRef(null);

  const button2Enter = () => {
    gsap.to(button2Top.current, {
      y: "-100%",
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(button2Bottom.current, {
      y: "100%",
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(button2Main.current, {
      scale: 1.2,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const button2Leave = () => {
    gsap.to(button2Top.current, {
      y: "0%",
      duration: 0.25,
      ease: "power2.out",
    });

    gsap.to(button2Bottom.current, {
      y: "0%",
      duration: 0.25,
      ease: "power2.out",
    });
    
    gsap.to(button2Main.current, {
      scale: 0,
      y: "0%",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  // ===== Button 3 =====
  const button3Hidden = useRef(null);

  const button3Enter = () => {
    gsap.to(button3Hidden.current, {
      scale: 1,
      duration: 0.30,
      opacity: 1,
      ease: "power2.out",
    });
  };

  const button3Leave = () => {
    gsap.to(button3Hidden.current, {
      scale: 1.25,
      opacity: 0,
      duration: 0.30,
      ease: "power2.out",
    });
  };

  // ===== Button 4 =====

  const button4Hidden = useRef(null);

  const button4Enter = () => {
    gsap.to(button4Hidden.current, {
      y: 15,
      rotate: 10,
      duration: 0.30,
      ease: "power2.out",
    });
  };

  const button4Leave = () => {
    gsap.to(button4Hidden.current, {
      y: 0,
      rotate: 0,
      duration: 0.30,
      ease: "power2.out",
    });
  };

  // ===== Button 5 =====

  const button5 = useRef(null);
  const button5Hidden = useRef(null);
  const button5HiddenText = useRef(null);

  const button5Enter = () => {
    gsap.to(button5Hidden.current, {
    y: "-98%",
    duration: 0.30,
    ease: "power2.in",
    });
    gsap.to(button5HiddenText.current, {
    y: "-98%",
    duration: 0.30,
    ease: "power2.in",
    delay: 0.05,
    });
    gsap.to(button5.current, {
      y: "-100%",
      duration: 0.30,
      opacity: 0,
      ease: "power2.out",
    });
  };

  const button5Leave = () => {
    gsap.to(button5Hidden.current, {
      y: "0%",
      duration: 0.30,
      ease: "power2.out",
    })
    gsap.to(button5HiddenText.current, {
      y: "0%",
      duration: 0.30,
      ease: "power2.out",
    });
    gsap.to(button5.current, {
      y: "0%",
      duration: 0.30,
      opacity: 1,
      ease: "power2.in",
    });
  };




  // ===== Button 6 =====

  const heart1 = useRef(null);
  const heart2 = useRef(null);
  const heart3 = useRef(null);
  const heart4 = useRef(null);
  const heart5 = useRef(null);

  const button6Enter = () => {
    gsap.to(heart1.current, {
      scale: 1.3,
      duration: 0.3,
      ease: "back.out",
    });

    gsap.to(heart2.current, {
      scale: 1.4,
      duration: 0.35,
      ease: "back.out",
    });

    gsap.to(heart3.current, {
      scale: 1.5,
      duration: 0.4,
      ease: "back.out",
    });

    gsap.to(heart4.current, {
      scale: 1.6,
      duration: 0.45,
      ease: "back.out",
    });

    gsap.to(heart5.current, {
      scale: 1.7,
      duration: 0.5,
      ease: "back.out",
    });
  };


  const button6Leave = () => {
    gsap.to(
      [
        heart1.current,
        heart2.current,
        heart3.current,
        heart4.current,
        heart5.current,
      ],
      {
        scale: 1.25,
        duration: 0.4,
        ease: "power2.out",
      }
    );
  };
  
  // ===== Button 7 =====
  
  const button7 = useRef(null);
  const button7Shadow = useRef(null);

  const button7Enter = () => {
    gsap.to(button7.current, {
      y: -2,
      duration: 0.3,
      ease: "circ",
            yoyo: true
    })

    gsap.to(button7Shadow.current, {
      y: 2,
      duration: 0.3,
      ease: "circ",
      yoyo: true
    })
  };

  const button7Leave = () => {
    gsap.to(button7.current, {
      y: 0,
      duration: 0.3,
      ease: "power1.out",
      yoyo: true
    })

    gsap.to(button7Shadow.current, {
      y: 0,
      duration: 0.3,
      ease: "circ",
      yoyo: true

    })
  };

const buttonClick = () => {
  gsap.to(button7.current, {
    y: 3,
    duration: 0.1,
    ease: "power1.out",
    yoyo: true,
    repeat: 1,
  });

  gsap.to(button7Shadow.current, {
    y: -1,
    duration: 0.1,
    ease: "power1.out",
    yoyo: true,
    repeat: 1,
  });
};

  // ===== Button 8 (glass shard break/reform) =====

  const button8ShardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const button8GlowRef = useRef<HTMLDivElement>(null);
  const button8LabelBreakRef = useRef<HTMLSpanElement>(null);
  const button8LabelReformRef = useRef<HTMLSpanElement>(null);
  const button8WrapperRef = useRef<HTMLDivElement>(null);
  const button8TlRef = useRef<gsap.core.Timeline | null>(null);

  const [button8Broken, setButton8Broken] = useState(false);

  useLayoutEffect(() => {
    gsap.set(button8LabelReformRef.current, { autoAlpha: 0, y: 4 });

    const tl = gsap.timeline({ paused: true });

    // impact flash
    tl.to(button8GlowRef.current, { opacity: 0.9, scale: 1.35, duration: 0.12, ease: "power2.out" }, 0)
      .to(button8GlowRef.current, { opacity: 0, duration: 0.45, ease: "power2.out" }, 0.12);

    // shards fly apart, center-out stagger, each with unique vector
    BUTTON8_SHARDS.forEach((s, i) => {
      tl.to(
        button8ShardRefs.current[i],
        {
          x: s.x,
          y: s.y,
          rotate: s.rotate,
          rotationY: s.rotationY,
          z: s.z,
          duration: 0.6,
          ease: "power3.out",
        },
        BUTTON8_STAGGER[i]
      );
    });

    // label swap
    tl.to(button8LabelBreakRef.current, { autoAlpha: 0, y: -4, duration: 0.2 }, 0.05)
      .to(button8LabelReformRef.current, { autoAlpha: 1, y: 0, duration: 0.2 }, 0.15);

    button8TlRef.current = tl;
    return () => {
      tl.kill();
    };
  }, []);

  const button8Break = () => {
    const next = !button8Broken;
    setButton8Broken(next);

    if (next) {
      button8TlRef.current?.play();
    } else {
      button8TlRef.current?.reverse();
      // magnetic "click" settle once the shards land back home
      gsap.fromTo(
        button8WrapperRef.current,
        { scale: 1 },
        { scale: 1.05, duration: 0.18, ease: "power2.out", yoyo: true, repeat: 1, delay: 0.45 }
      );
      gsap.fromTo(
        button8GlowRef.current,
        { opacity: 0 },
        { opacity: 0.6, duration: 0.1, delay: 0.55, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );
    }
  };



  return (
    <div className="flex flex-col items-center gap-20 p-20">

      {/* Button 1 */}
      <div className="relative flex flex-col items-center gap-8 cursor-pointer">
        <button
          ref={button1A}
          onMouseEnter={button1Enter}
          onMouseLeave={button1Leave}
          onClick={button1Click}
          className="z-10 rounded-4xl bg-emerald-300 border-2 border-black px-6 py-3 font-bold shadow-xl absolute top-0 left-0"
        >
          Scale
        </button>
        <button
          ref={button1B}
          className="opacity-0 z-5 rounded-4xl bg-emerald-300 border-2 border-black px-6 py-3 font-bold shadow-xl"
        >
          Scale
        </button>

      </div>

      {/* Button 2 */}
      <div onMouseEnter={button2Enter} onMouseLeave={button2Leave} className="relative w-50 h-12.5 overflow-hidden bg-amber-300 rounded-4xl ring-2 ring-black cursor-pointer">

        {/* Main button */}
        <div
          ref={button2Main}
          className="absolute top-0 left-0 w-full h-full bg-amber-300 scale-0 "
        >
          <div
            className="
            h-12.5
            flex
            items-center
            justify-center
            "
          >
            Slide
          </div>
        </div>

        {/* Top half */}
        <div
          ref={button2Top}
          className="
          absolute
          top-0
          left-0
          w-full
          h-1/2
          overflow-hidden
          bg-amber-500
          "
        >
          <div
            className="
            h-12.5
            flex
            items-center
            justify-center
            "
          >
            Slide
          </div>
        </div>


        {/* Bottom half */}
        <div
          ref={button2Bottom}
          className="
          absolute
          bottom-0
          left-0
          w-full
          h-1/2
          overflow-hidden
          bg-amber-500
          "
        >
          <div
            className="
            h-12.5
            flex
            items-center
            justify-center
            -translate-y-1/2
            "
          >
            Slide
          </div>
        </div>
      </div>

      {/* Button 3 */}
      <div      
        className="relative flex flex-col gap-8 bg-blue-200 w-50 h-30 overflow-hidden items-center justify-center cursor-pointer">
        
      <div      
        onMouseEnter={button3Enter}
        onMouseLeave={button3Leave}
        className="relative flex flex-col gap-8 rounded-4xl w-30 h-12.5 z-40 items-center justify-center">
          <button
            className="absolute z-5 rounded-4xl bg-white px-6 py-3 font-bold w-30 h-12.5"
          >
            
          </button>
          
          <button
            ref={button3Hidden}
            className="absolute z-10 opacity-0 scale-125 rounded-4xl bg-gray-200 border-2 border-black px-6 py-3 font-bold w-30 h-12.5"
          >
            
          </button>

          <p className="absolute z-20 text-black text-sm text-nowrap font-bold px-6 py-3 flex items-center justify-center w-30 h-12.5">
            Hover me
          </p>
        </div>
      </div>

      {/* Button 4 */}
      <div onMouseEnter={button4Enter} onMouseLeave={button4Leave} className="relative flex flex-col gap-8 rounded-4xl w-50 h-12.5 z-40 items-center justify-center">
        <button
          className="absolute z-10 rounded-4xl bg-red-400 border-2 border-black px-6 py-3 font-bold w-50 h-12.5"
        >
          Hover me 2
        </button>
        <button
          ref={button4Hidden}
          className="absolute z-5 rounded-4xl bg-gray-200 border-2 border-black px-6 py-3 font-bold w-50 h-12.5"
        >
          <div className="text-black text-sm text-nowrap font-bold px-6 py-3 flex items-center justify-center w-50 h-12.5 ml-7">
            Hi There!
          </div>
        </button>
      </div>

      {/* Button 5 */}
      <div onMouseEnter={button5Enter} onMouseLeave={button5Leave} className="relative flex flex-col gap-8 w-50 h-12.5 z-40 items-center justify-center overflow-hidden">
        <h1 ref={button5}>Send A Message</h1>
        <button ref={button5Hidden} className="absolute w-50 h-12.5 border-2 border-black top-[98%] bg-gray-50/50">
        </button>
        <h1 ref={button5HiddenText} className="absolute w-50 h-12.5 flex items-center justify-center top-[98%]">
          <HugeiconsIcon
            icon={MessagesSquareIcon}
            size={20}
            color="currentColor"
            strokeWidth={1.5}
          />
        </h1>
      </div>

      {/* Button 6 */}
      <div onMouseEnter={button6Enter} onMouseLeave={button6Leave} className="relative flex flex-col gap-8 w-50 h-12.5 z-40 items-center justify-center mt-15 font-cedarville">
        <h1 className="absolute text-sm flex items-center justify-center top-0 font-bold">
          Hover
        </h1>
        <h1 className="absolute text-sm flex items-center justify-center top-4 font-bold">
          for
        </h1>
        <h1 className="absolute text-sm flex items-center justify-center top-8 font-bold">
          love
        </h1>
        <HugeiconsIcon ref={heart1} icon={HeartIcon} className="z-10 absolute scale-125 text-red-500"
          size={125}
          color="currentColor"
          strokeWidth={1.5}
        />
        <HugeiconsIcon ref={heart2} icon={HeartIcon} className="z-6 absolute scale-125 text-red-400"
          size={125}
          color="currentColor"
          strokeWidth={1.5}
        />
        <HugeiconsIcon ref={heart3} icon={HeartIcon} className="z-7 absolute scale-125 text-red-300"
          size={125}
          color="currentColor"
          strokeWidth={1.5}
        />
        <HugeiconsIcon ref={heart4} icon={HeartIcon} className="z-8 absolute scale-125 text-red-200"
          size={125}
          color="currentColor"
          strokeWidth={1.5}
        />
        <HugeiconsIcon ref={heart5} icon={HeartIcon} className="z-9 absolute scale-125 text-red-100"
          size={125}
          color="currentColor"
          strokeWidth={1.5}
        />
      </div>

      {/* Button 7 */}
      <div className="relative flex items-center justify-center w-200 h-100 text-white">
        <button onClick={buttonClick} onMouseEnter={button7Enter} onMouseLeave={button7Leave} ref={button7} className="z-10 absolute w-50 h-12.5 bg-red-500 duration-100 transition-color rounded-lg">Hello</button>
        <button onMouseEnter={button7Enter} onMouseLeave={button7Leave} className="z-9 absolute mt-2 w-50 h-12.5 bg-[#780802] rounded-lg"></button>
        <button onMouseEnter={button7Enter} onMouseLeave={button7Leave} ref={button7Shadow} className="z-8 absolute mt-3 w-50 h-12.5 bg-gray-400 rounded-lg"></button>
      </div>

      {/* Button 8 — glass shard break/reform */}
      <div className="relative flex items-center justify-center text-white" style={{ perspective: "600px" }}>
        <div
          ref={button8WrapperRef}
          onClick={button8Break}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && button8Break()}
          className="relative w-24 h-9 flex items-center justify-center cursor-pointer select-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* impact glow */}
          <div
            ref={button8GlowRef}
            className="pointer-events-none absolute inset-0 rounded-full bg-cyan-300/70 blur-xl opacity-0"
            style={{ transform: "scale(0.6)" }}
          />

          {/* left half */}
          <div>
            {BUTTON8_SHARDS.slice(0, 3).map((s, i) => (
              <div
                key={`l-${i}`}
                ref={(el) => { button8ShardRefs.current[i] = el; }}
                className="w-12 h-3 bg-blue-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]"
                style={{ clipPath: s.clipPath, willChange: "transform" }}
              />
            ))}
          </div>

          {/* right half */}
          <div>
            {BUTTON8_SHARDS.slice(3, 6).map((s, i) => (
              <div
                key={`r-${i}`}
                ref={(el) => { button8ShardRefs.current[i + 3] = el; }}
                className="w-12 -ml-3 h-3 bg-blue-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.45)]"
                style={{ clipPath: s.clipPath, willChange: "transform" }}
              />
            ))}
          </div>

          {/* label, crossfaded */}
          <div className="absolute inset-0 flex items-center justify-center z-20 text-xs font-medium tracking-wide">
            <span ref={button8LabelBreakRef} className="absolute">break</span>
            <span ref={button8LabelReformRef} className="absolute">reform</span>
          </div>
        </div>
      </div>
    </div>
  );
}