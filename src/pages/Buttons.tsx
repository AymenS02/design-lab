import { useRef } from "react";
import gsap from "gsap";

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

    </div>
  );
}

