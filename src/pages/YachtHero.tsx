import React, { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnchorIcon } from "@hugeicons/core-free-icons";
import gsap from "gsap";

const YachtHero = () => {
  const frontRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        // the dark card swings down around the anchor
        .to(frontRef.current, {
          rotate: 62,
          duration: 1.6,
          ease: "power3.inOut",
        })
        // the photo settles as it's revealed
        .fromTo(
          imgRef.current,
          { scale: 1.15, },
          { scale: 1, duration: 2.4, ease: "power2.out" },
          0
        )
        .to(
          backCardRef.current,
          { x: 600, duration: 1.6, ease: "power3.inOut" },
          0
        )
        .to(
          backCardRef.current,
          {zIndex: 20, duration: 0.1, ease: "power3.inOut" },
          1.6
        )
        .to(
          backCardRef.current,
          { x: 300, duration: 1.6, ease: "power3.inOut" },
          1.3
        )
        .fromTo(
          infoRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.9
        );

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        tl.current.timeScale(50);
      }
    });

    return () => ctx.revert();
  }, []);

  const toggle = () => {
    if (!tl.current) return;
    if (open) {
      tl.current.timeScale(1.4).reverse();
    } else {
      tl.current.timeScale(1).play();
    }
    setOpen(!open);
  };

  return (
    <section className="min-h-screen overflow-hidden bg-[#E8E9F3] text-[#272635]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-serif text-xl tracking-wide">Halcyon Yachts</span>

        <nav className="hidden items-center gap-8 text-sm text-[#272635]/70 md:flex">
          <a href="#fleet" className="transition-colors hover:text-[#272635]">
            Fleet
          </a>
          <a href="#routes" className="transition-colors hover:text-[#272635]">
            Routes
          </a>
          <a href="#crew" className="transition-colors hover:text-[#272635]">
            Crew
          </a>
          <a href="#contact" className="transition-colors hover:text-[#272635]">
            Contact
          </a>
        </nav>

        <button className="rounded-full border border-[#272635]/20 px-5 py-2 text-sm transition-colors hover:bg-[#272635] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#272635]">
          Enquire
        </button>
      </header>

      <div className="mx-auto mt-6 w-full max-w-6xl px-6 pb-16">
        <div className="relative h-[72vh] min-h-[520px]">
          {/* Photo card, revealed when the front card swings away */}
          <div  ref={backCardRef} className="absolute inset-0 translate-x-3 translate-y-3 overflow-hidden rounded-4xl border-2 border-[#A6A6A8] bg-[#B1E5F2]">
            <img
              ref={imgRef}
              src="./boat.jpg"
              alt="A white motor yacht anchored in calm turquoise water"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#272635]/70 via-transparent to-transparent" />

            <div
              ref={infoRef}
              className="absolute bottom-0 left-0 right-0 flex flex-col gap-6 p-8 text-white md:flex-row md:items-end md:justify-between md:p-12"
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-serif text-4xl font-light md:text-5xl">
                  Azimut 78
                </h2>
                <p className="max-w-md text-white/80">
                  Sleeps eight in four cabins, with a crew of four. Rent it for a
                  day, a weekend or a full week.
                </p>
              </div>

              <button className="w-fit rounded-r-4xl rounded-l-2xl bg-[#B1E5F2] px-6 py-3 text-lg font-semibold text-[#272635] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Check availability
              </button>
            </div>
          </div>

          {/* Front card, pivots around the anchor in the top-left corner */}
          <div
            ref={frontRef}
            className="absolute inset-0 z-10 origin-[52px_52px] rounded-4xl border-2 border-[#A6A6A8] bg-[#272635] text-white"
          >
            <button
              onClick={toggle}
              aria-label={open ? "Close the photo" : "Open the photo"}
              aria-expanded={open}
              className="absolute left-0 top-0 rounded-full p-10 text-white/90 transition-colors hover:text-[#B1E5F2] focus-visible:outline-2 focus-visible:outline-offset-[-24px] focus-visible:outline-[#B1E5F2]"
            >
              <HugeiconsIcon
                icon={AnchorIcon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            </button>

            <p className="absolute right-0 top-0 p-10 text-right text-sm text-white/60">
              Amalfi Coast, Croatia
              <br />
              and the Aegean
            </p>

            <div className="absolute bottom-0 left-0 flex max-w-2xl flex-col gap-8 p-8 md:p-12">
              <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
                Slow days on open water.
              </h1>

              <p className="max-w-md text-lg text-white/70">
                Private yachts with a crew that knows the quiet coves. You pick
                the harbour, we handle the rest.
              </p>

              <button
                onClick={toggle}
                className="h-14 w-fit rounded-r-4xl rounded-l-2xl bg-[#B1E5F2] px-8 text-xl font-bold text-[#272635] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See the yacht
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtHero;