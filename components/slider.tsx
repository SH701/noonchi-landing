/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { blabla } from "@/lib/blabla";

const CARD_W = 336;
const GAP = 20;
const PX_PER_SEC = 250;

export default function Slider() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [seqCount, setSeqCount] = useState(6);
  const [duration, setDuration] = useState(15);

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

  useEffect(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    setDuration(trackWidth / PX_PER_SEC);
  }, [items.length]);

  return (
    <section className="bg-[#1D2633] md:px-12 md:py-32 py-25 px-6">
      <div className="overflow-hidden w-full" ref={viewportRef}>
        <ul
          ref={trackRef}
          className="flex gap-5 animate-marq"
          style={{
            transform: "translateX(-25%)",
            ["--speed" as any]: `${duration}s`,
          }}
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
                <h3 className="text-white text-2xl font-semibold leading-tight line-clamp-2 min-h-16">
                  {b.title}
                </h3>
              </div>
              <p className="mt-6 text-white/90 leading-relaxed text-lg">
                {b.desc}
              </p>
            </li>
          ))}
        </ul>
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
        .animate-marq:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
