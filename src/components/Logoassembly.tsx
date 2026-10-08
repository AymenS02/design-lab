"use client";

import { forwardRef, useCallback, useEffect, useId, useImperativeHandle, useRef } from "react";

/**
 * LogoAssembly
 * Foundation spreads from the center, then the left, right and center
 * pillars rise out of it. Color comes from `currentColor`, so set it with a
 * Tailwind text color class, e.g. <LogoAssembly className="w-64 text-[#007401]" />.
 */

export type LogoAssemblyHandle = { replay: () => void };

type Props = {
  className?: string;
  /** Start playing on mount (default true) */
  autoPlay?: boolean;
  /** Replay forever with a pause between runs (default false) */
  loop?: boolean;
  /** Playback speed multiplier, 1 = ~4.2s total (default 1) */
  speed?: number;
  /** Shine sweep at the end (default true) */
  shine?: boolean;
  /** Called when the assembly finishes */
  onComplete?: () => void;
  /** Accessible label (default "Logo") */
  label?: string;
};

const LOGO_PATH = "M1117.4,1093.8C1117.7,1088.8 1118.0,1081.7 1118.0,1078.0C1118.0,1072.9 1118.4,1071.1 1119.5,1070.6C1120.8,1070.1 1121.0,1053.9 1121.2,938.2L1121.5,806.2L1126.6,800.4C1135.2,790.4 1139.6,783.9 1145.3,773.0C1157.5,749.7 1161.2,735.5 1161.3,712.0C1161.4,686.2 1155.4,667.1 1140.2,644.0C1127.5,624.9 1087.3,576.8 1068.6,558.5C1046.2,536.5 1029.7,517.1 1016.9,497.7C1007.5,483.4 1002.1,473.1 995.9,458.0C992.5,449.5 990.8,446.5 989.5,446.5C988.2,446.5 986.5,449.5 983.0,457.5C968.2,492.3 953.2,514.2 922.4,546.0C877.6,592.3 840.2,637.8 830.0,658.4C824.7,669.2 820.7,681.9 818.9,693.4C817.3,703.4 818.4,728.3 820.9,739.0C826.1,761.7 837.8,785.3 850.5,798.9C858.6,807.6 858.2,801.1 857.4,902.8L856.7,993.0L812.6,992.8L768.5,992.5L768.0,747.5C767.7,612.8 767.8,500.9 768.1,499.0C768.5,496.6 770.2,493.9 773.6,490.5C779.4,484.6 793.5,463.9 798.6,453.7C803.7,443.6 810.6,425.7 813.5,415.0C817.0,401.7 818.4,387.8 817.7,371.5C816.2,334.6 803.0,302.8 773.2,264.5C749.6,234.2 727.6,209.0 699.9,180.4C675.3,155.1 665.7,144.7 654.8,131.5C635.5,108.0 619.4,80.7 607.5,51.5C601.3,36.1 600.7,35.0 599.5,35.0C597.5,35.0 596.5,36.9 591.5,49.5C586.0,63.4 582.1,71.3 573.7,86.0C557.9,113.6 545.6,129.9 522.6,154.1C474.9,204.3 459.9,221.3 429.7,259.0C405.3,289.3 394.6,307.1 387.1,329.7C381.5,346.7 380.5,353.6 380.5,375.5C380.6,392.1 380.9,397.4 382.8,406.6C388.7,436.0 403.5,466.2 422.6,488.0C425.7,491.6 428.9,495.9 429.6,497.7C430.8,500.4 431.0,537.8 431.0,716.8C431.0,835.5 430.7,946.2 430.3,962.8L429.7,993.0L387.4,993.0C364.2,993.0 344.5,992.7 343.6,992.4C342.2,991.8 342.0,982.7 342.0,898.7L342.0,805.6L346.4,801.0C352.3,795.0 363.2,778.4 368.0,768.4C376.9,749.9 380.4,731.6 379.7,707.0C379.4,692.1 378.9,688.0 376.6,679.5C371.1,659.2 360.6,642.2 332.3,607.9C311.8,583.1 278.5,547.0 276.1,547.0C275.5,547.0 275.0,546.5 275.0,545.9C275.0,545.3 271.9,541.4 268.0,537.2C264.2,533.0 261.0,529.3 261.0,528.8C261.0,528.4 260.3,528.0 259.5,528.0C258.7,528.0 258.0,527.5 258.0,527.0C258.0,526.4 254.8,522.1 250.8,517.2C237.1,500.5 221.7,474.1 214.6,455.4C212.3,449.2 208.6,443.8 207.7,445.1C207.5,445.3 205.7,450.0 203.5,455.5C189.7,490.5 168.8,520.8 136.2,553.1C110.9,578.0 72.3,623.3 57.3,645.5C49.1,657.7 41.8,675.4 38.9,690.1C37.0,699.6 37.4,727.6 39.5,737.5C41.7,747.9 50.5,770.6 55.8,779.7C60.4,787.5 71.6,802.0 73.1,802.0C73.5,802.0 74.6,803.3 75.5,805.0C76.8,807.5 77.0,822.0 77.0,925.3C77.0,989.9 77.3,1056.2 77.7,1072.8L78.3,1103.0L597.5,1103.0L1116.7,1103.0L1117.4,1093.8ZM142.0,945.5L142.0,845.0L146.5,845.0C151.9,845.0 173.9,849.5 175.3,850.9C176.1,851.7 176.6,986.3 176.1,1040.2L176.0,1046.0L159.0,1046.0L142.0,1046.0L142.0,945.5ZM242.3,1044.8C241.4,1043.4 240.6,856.9 241.5,853.4C241.7,852.2 243.2,850.8 244.7,850.2C248.2,848.9 269.6,845.0 273.2,845.0L276.0,845.0L276.0,945.5L276.0,1046.0L259.6,1046.0C247.5,1046.0 242.9,1045.7 242.3,1044.8ZM513.0,795.5L513.0,545.0L516.4,545.0C518.3,545.0 524.3,546.1 529.8,547.4C535.3,548.7 543.3,550.4 547.6,551.0C552.0,551.7 556.0,552.8 556.7,553.4C558.3,554.9 559.7,1039.2 558.1,1043.2L557.0,1046.0L535.0,1046.0L513.0,1046.0L513.0,795.5ZM640.5,1044.8C640.2,1044.1 640.1,933.3 640.2,798.6C640.5,582.1 640.7,553.6 642.0,552.9C643.9,552.0 673.9,546.0 680.1,545.3C683.4,545.0 684.8,545.2 685.1,546.2C685.3,546.9 685.4,659.7 685.2,796.8L685.0,1046.0L663.0,1046.0C646.3,1046.0 640.8,1045.7 640.5,1044.8ZM922.5,1044.8C922.2,1044.1 922.1,999.0 922.2,944.5L922.5,845.5L928.0,845.5C934.2,845.6 953.8,849.6 955.7,851.2C956.8,852.0 957.0,871.4 956.8,948.9L956.5,1045.5L939.7,1045.8C926.9,1046.0 922.8,1045.8 922.5,1044.8ZM1022.0,949.0L1022.0,852.1L1024.8,850.6C1028.5,848.7 1053.4,843.8 1055.4,844.6C1056.9,845.2 1057.0,853.7 1056.8,945.4L1056.5,1045.5L1039.2,1045.8L1022.0,1046.0L1022.0,949.0ZM976.5,806.8C950.0,805.3 922.0,793.3 903.1,775.5C882.8,756.3 870.0,728.9 870.0,704.6C870.0,689.1 876.7,667.7 888.4,645.7C895.5,632.3 897.4,629.7 909.0,617.0C920.5,604.4 942.3,579.9 952.4,568.2C957.2,562.6 961.9,558.0 962.7,558.0C967.6,558.0 957.5,580.6 942.0,604.5C931.5,620.7 921.4,640.5 917.1,653.7C911.8,669.8 910.5,678.0 910.5,695.0C910.6,708.7 910.9,711.6 913.3,720.2C923.9,758.6 945.1,779.3 983.0,788.2C994.0,790.7 1028.0,791.8 1041.5,790.0C1046.5,789.4 1054.1,788.6 1058.5,788.3L1066.5,787.8L1064.2,790.3C1060.9,793.8 1053.7,796.7 1040.0,800.1C1015.6,806.0 996.7,808.0 976.5,806.8ZM190.5,805.9C153.0,800.9 119.8,776.4 103.5,741.7C95.9,725.5 95.5,723.7 95.5,703.5L95.5,685.5L100.4,672.5C109.5,647.9 117.4,634.1 130.3,620.2C133.8,616.5 139.0,610.6 142.0,607.0C147.4,600.6 156.9,589.8 176.4,568.1C181.9,562.0 186.7,557.0 187.2,557.0C189.9,557.0 185.2,571.2 177.9,584.9C175.1,590.1 169.8,599.2 166.0,605.0C156.7,619.6 148.0,637.0 142.0,653.4C134.3,674.4 133.6,677.7 133.6,692.5C133.6,732.9 154.0,767.8 185.8,781.5C194.4,785.3 209.6,789.4 220.5,791.0C230.7,792.4 250.7,792.2 264.5,790.4C271.1,789.6 279.9,788.6 284.0,788.3C290.8,787.8 291.4,787.9 290.2,789.3C289.4,790.2 286.9,791.8 284.6,793.0C278.2,796.1 253.8,802.8 243.0,804.5C231.2,806.4 199.9,807.2 190.5,805.9ZM576.0,489.9C560.7,489.1 544.9,485.9 535.5,481.8C489.3,461.7 460.3,431.6 450.0,393.0C446.6,380.1 446.1,355.2 448.9,341.4C454.9,312.4 471.6,280.0 492.6,257.0C497.3,251.8 506.3,241.7 512.5,234.5C518.8,227.3 524.9,220.6 526.2,219.4C527.5,218.3 532.3,212.8 537.0,207.2C541.7,201.7 546.1,197.1 546.8,197.1C547.4,197.0 548.0,196.6 548.0,196.1C548.0,194.8 560.0,181.0 561.1,181.0C562.8,181.0 562.0,187.9 559.6,194.5C556.2,203.3 546.4,221.6 536.0,238.5C513.3,275.1 502.1,299.8 496.8,324.4C494.0,337.6 493.8,361.2 496.4,374.4C503.0,408.0 522.4,439.1 545.3,452.8C558.6,460.8 579.3,467.5 598.1,470.0C616.8,472.4 656.8,470.7 675.8,466.6C685.2,464.6 689.1,464.5 688.4,466.4C687.4,469.0 682.9,471.2 667.5,476.7C639.1,486.9 606.0,491.7 576.0,489.9Z";

const PILLARS = {
  left: "-2,-2 370,-2 370,550 395,550 395,990 387,990 387,1047 -2,1047",
  right: "1213,-2 840,-2 840,550 810,550 810,990 811,990 811,1047 1213,1047",
  center: "370,-2 840,-2 840,550 810,550 810,990 813,990 813,1047 385,1047 385,990 395,990 395,550 370,550",
} as const;

// [pillar, delay ms, duration ms, rise px]
const PLAN = [
  ["left", 900, 1300, 680],
  ["right", 1300, 1300, 680],
  ["center", 1700, 1500, 1030],
] as const;

const SILK = "cubic-bezier(.22,1,.36,1)";
const IN_OUT = "cubic-bezier(.65,0,.35,1)";
const TOTAL = 4200;
const LOOP_PAUSE = 1800;

const LogoAssembly = forwardRef<LogoAssemblyHandle, Props>(function LogoAssembly(
  { className = "", autoPlay = true, loop = false, speed = 1, shine = true, onComplete, label = "Logo" },
  ref
) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = (name: string) => `${name}-${uid}`;

  const revealRef = useRef<SVGRectElement>(null);
  const shineRef = useRef<SVGRectElement>(null);
  const pillarRefs = useRef<Record<string, SVGGElement | null>>({});
  const anims = useRef<Animation[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const stop = useCallback(() => {
    anims.current.forEach((a) => a.cancel());
    anims.current = [];
    clearTimeout(timer.current);
  }, []);

  const play = useCallback(() => {
    stop();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = revealRef.current;
    const shineEl = shineRef.current;
    if (reduce || !reveal || !shineEl || typeof reveal.animate !== "function") {
      onCompleteRef.current?.();
      return;
    }
    const k = 1 / speed;
    const list: Animation[] = [];

    // 1. Foundation opens from the center outward
    reveal.style.transformBox = "view-box";
    reveal.style.transformOrigin = "605px 1100px";
    list.push(
      reveal.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
        duration: 1000 * k,
        easing: IN_OUT,
        fill: "backwards",
      })
    );

    // 2. Pillars rise out of the foundation: left -> right -> center
    for (const [name, delay, duration, rise] of PLAN) {
      const el = pillarRefs.current[name];
      if (!el) continue;
      list.push(
        el.animate([{ transform: `translateY(${rise}px)` }, { transform: "none" }], {
          delay: delay * k,
          duration: duration * k,
          easing: SILK,
          fill: "backwards",
        })
      );
    }

    // 3. Soft shine once everything has settled
    if (shine) {
      shineEl.style.transformBox = "view-box";
      shineEl.style.transformOrigin = "605px 576px";
      list.push(
        shineEl.animate(
          [
            { transform: "rotate(18deg) translateX(0)", opacity: 0 },
            { opacity: 0.8, offset: 0.2 },
            { opacity: 0.8, offset: 0.8 },
            { transform: "rotate(18deg) translateX(1900px)", opacity: 0 },
          ],
          { delay: 2900 * k, duration: 1300 * k, easing: "cubic-bezier(.45,0,.25,1)" }
        )
      );
    }

    anims.current = list;
    timer.current = setTimeout(() => {
      onCompleteRef.current?.();
      if (loop) timer.current = setTimeout(play, LOOP_PAUSE * k);
    }, TOTAL * k);
  }, [loop, shine, speed, stop]);

  useImperativeHandle(ref, () => ({ replay: play }), [play]);

  useEffect(() => {
    if (autoPlay) play();
    return stop;
  }, [autoPlay, play, stop]);

  return (
    <svg
      viewBox="0 0 1211 1152"
      className={`block overflow-visible ${className}`}
      fill="currentColor"
      role="img"
      aria-label={label}
    >
      <defs>
        <path id={id("logo")} fillRule="evenodd" clipRule="evenodd" d={LOGO_PATH} />
        <clipPath id={id("logo-clip")}>
          <use href={`#${id("logo")}`} />
        </clipPath>
        {Object.entries(PILLARS).map(([name, points]) => (
          <clipPath key={name} id={id(`pillar-${name}`)}>
            <polygon points={points} />
          </clipPath>
        ))}
        <clipPath id={id("ground")}>
          <rect x="-2" y="-400" width="1215" height="1447" />
        </clipPath>
        <clipPath id={id("base")}>
          <rect x="-2" y="1044" width="1215" height="110" />
        </clipPath>
        <clipPath id={id("reveal")}>
          <rect ref={revealRef} x="-2" y="1040" width="1215" height="120" />
        </clipPath>
        <linearGradient id={id("shine")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Pillars (tower + dome), hidden below the foundation's top edge until they rise */}
      <g clipPath={`url(#${id("ground")})`}>
        {Object.keys(PILLARS).map((name) => (
          <g
            key={name}
            ref={(el) => {
              pillarRefs.current[name] = el;
              if (el) el.style.transformBox = "view-box";
            }}
          >
            <use href={`#${id("logo")}`} clipPath={`url(#${id(`pillar-${name}`)})`} />
          </g>
        ))}
      </g>

      {/* Foundation */}
      <g clipPath={`url(#${id("reveal")})`}>
        <use href={`#${id("logo")}`} clipPath={`url(#${id("base")})`} />
      </g>

      {/* Shine */}
      <g clipPath={`url(#${id("logo-clip")})`}>
        <rect ref={shineRef} x="-400" y="-100" width="260" height="1400" fill={`url(#${id("shine")})`} opacity="0" />
      </g>
    </svg>
  );
});

export default LogoAssembly;