import { useRef } from "react";
import gsap from "gsap";
import { HugeiconsIcon } from '@hugeicons/react';
import { HeartIcon, MessagesSquareIcon } from "@hugeicons/core-free-icons";

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

  // ===== Button 8 =====
  
  const button8 = useRef(null);

  const button8Enter = () => {
    gsap.to(button8.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  const button8Leave = () => {
    gsap.to(button8.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }


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

      {/* Button 8 */}
      <div className="relative flex items-center justify-center w-200 h-100 bg-yellow-500 text-white">
        <button ref={button8} onMouseEnter={button8Enter} onMouseLeave={button8Leave} className="z-10 absolute w-50 h-12.5 bg-blue-500 duration-100 transition-color rounded-lg">Hover for Animation</button>
      </div>
    </div>
  );
}

