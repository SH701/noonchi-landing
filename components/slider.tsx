"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { blabla } from "@/lib/blabla";

const CARD_W = 336;
const GAP = 20;

export default function Slider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [seqCount, setSeqCount] = useState(6);

  useEffect(() => {
    if (!viewportRef.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const vw = entry.contentRect.width;
      const unit = CARD_W + GAP;
      const needCards = Math.ceil((vw * 2) / unit);
      const base = Math.ceil(needCards / blabla.length);
      const even = base % 2 ? base + 1 : base;

      setSeqCount(Math.max(2, even));
    });

    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const items = useMemo(
    () => Array.from({ length: seqCount }, () => blabla).flat(),
    [seqCount]
  );

  return (
    <section className="bg-[#1D2633] md:px-12 md:py-32  py-25 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[32px] md:text-5xl font-semibold text-white ">
          Ever studied Korean... but still feel awkward?
        </h2>
        <p className="mt-3 text-gray-400 font-medium pb-10 pt-5 text-sm md:text-base">
          You’re not alone. Grammar and vocabulary are only half the story —
          real communication depends on tone, timing, and respect. Noonchi fixes
          that instantly with AI tone coaching.
        </p>
      </div>

      <div className="relative mt-10 max-w-8xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#1D2633] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#1D2633] to-transparent" />

        <div className="overflow-hidden w-full" ref={viewportRef}>
          <ul
            className="flex gap-5 animate-marq [--speed:28s]"
            style={{ transform: "translateX(-25%)" }}
          >
            {items.map((b, i) => (
              <li
                key={`${b.title}-${i}`}
                className="shrink-0 w-[336px] h-[280px] rounded-xl border border-white/10 bg-[#343C48] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start gap-3 pt-2">
                  <div className="size-12 grid place-items-center rounded-lg border border-black/5 bg-white">
                    <span className="text-3xl">{b.emoji}</span>
                  </div>
                  <h3 className="text-white text-2xl font-semibold leading-tight line-clamp-2 min-h-[64px]">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-6 text-white/90 leading-relaxed">{b.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes marq {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-marq {
          animation: marq var(--speed, 15s) linear infinite;
        }
      `}</style>
    </section>
  );
}
