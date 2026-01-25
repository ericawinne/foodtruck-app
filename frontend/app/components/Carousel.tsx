"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export default function Carousel({
  slides,
  intervalMs = 4000,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [safeSlides.length, intervalMs]);

  if (safeSlides.length === 0) return null;

  const current = safeSlides[index];

  return (
    <div className="relative overflow-hidden rounded-xl border bg-gray-100">
      <div className="relative h-56 w-full sm:h-72">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {safeSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}