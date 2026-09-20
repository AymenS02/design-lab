import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const FAQS = [
  {
    id: "returns",
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return products within 30 days of purchase. Please ensure that the items are in their original condition and packaging.",
  },
  {
    id: "shipping",
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, orders are processed within 1-2 business days and shipping can take anywhere from 3-7 business days.",
  },
  {
    id: "international",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Please check our shipping policy for a list of available countries and any associated fees.",
  },
  {
    id: "tracking",
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.",
  },
  {
    id: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and other secure online payment options.",
  },
  {
    id: "changes",
    question: "Can I change or cancel my order?",
    answer:
      "If you need to change or cancel your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request, but please note that orders may be processed quickly.",
  },
];

/* -------------------------------------------------------------------------- */
/*  ChatBubble                                                                */
/*                                                                            */
/*  Layout model:                                                             */
/*    - <p> (text) is IN FLOW  -> it defines the slot's final size, so the    */
/*      space is reserved from the first paint. Nothing ever shifts.          */
/*    - shell is ABSOLUTE      -> purely visual layer (bg, border, radius).   */
/*      GSAP animates only this, so no sibling can be affected.               */
/*    - Initial state lives in Tailwind classes, not gsap.set().              */
/* -------------------------------------------------------------------------- */

type ChatBubbleProps = {
  children: ReactNode;
  side: "left" | "right";
  tone: "question" | "answer";
};

// Full class strings so Tailwind can detect them
const SIDE = {
  left: { row: "justify-start", shell: "left-0" },
  right: { row: "justify-end", shell: "right-0" },
} as const;

const TONE = {
  question: "bg-purple-600",
  answer: "bg-green-500",
} as const;

function ChatBubble({ children, side, tone }: ChatBubbleProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            once: true,
          },
        });

        tl
          // 1. fade in the 32px circle
          .to(shellRef.current, { opacity: 1, duration: 0.3 })
          .addLabel("expand")
          // 2. grow horizontally (px -> % is converted by GSAP, resize-safe)
          .to(
            shellRef.current,
            { width: "100%", duration: 0.7, ease: "power3.inOut" },
            "expand"
          )
          // radius morph runs across the whole expansion
          .to(
            shellRef.current,
            { borderRadius: 32, duration: 1.2, ease: "power1.inOut" },
            "expand"
          )
          // 3. height starts slightly before width finishes -> one fluid motion
          .to(
            shellRef.current,
            { height: "100%", duration: 0.7, ease: "power3.inOut" },
            "expand+=0.5"
          )
          // 4. text after the shell is done
          .fromTo(
            textRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5 },
            ">"
          );
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className={`flex w-full ${SIDE[side].row}`}>
      {/* slot: sized by the in-flow text */}
      <div className="relative max-w-2xl">
        {/* shell: out of flow, the only thing GSAP animates on the bubble */}
        <div
          ref={shellRef}
          aria-hidden
          className={[
            "absolute top-0 size-8 rounded-[16px] border-[3px] border-black opacity-0",
            SIDE[side].shell,
            TONE[tone],
            "motion-reduce:h-full motion-reduce:w-full motion-reduce:rounded-[32px] motion-reduce:opacity-100",
          ].join(" ")}
        />
        <p
          ref={textRef}
          className="relative p-8 text-2xl text-white opacity-0 motion-reduce:opacity-100"
        >
          {children}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

const FAQ = () => {
  // Recalculate trigger positions once webfonts have settled
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="flex h-[50vh] items-center text-7xl font-bold md:text-9xl lg:text-[200px]">
        FAQ
      </h1>

      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h1 className="flex items-center text-6xl font-bold md:text-9xl lg:text-[200px]">
          MOST COMMON
        </h1>
        <h1 className="flex items-center text-6xl font-bold md:text-9xl lg:text-[200px]">
          QUESTIONS
        </h1>
      </div>

      <ol className="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-y-16 px-6">
        {FAQS.map(({ id, question, answer }) => (
          <li key={id} className="flex flex-col gap-y-6">
            <ChatBubble side="left" tone="question">
              {question}
            </ChatBubble>
            <ChatBubble side="right" tone="answer">
              {answer}
            </ChatBubble>
          </li>
        ))}
      </ol>

      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="flex items-center text-6xl font-bold md:text-9xl lg:text-[200px]">
          THANK YOU
        </h1>
        <h1 className="flex items-center text-6xl font-bold md:text-9xl lg:text-[200px]">
          FOR READING
        </h1>
      </div>
    </div>
  );
};

export default FAQ;