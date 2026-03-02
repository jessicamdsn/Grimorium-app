"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ 
    dragFree: true, 
    containScroll: "trimSnaps",
    loop: false 
  });

  return (
    <div className="mt-5 w-full min-w-0 bg-darkerbackground rounded-2xl border border-bgborder p-6">
      <h3 className="text-foreground font-bold mb-4">Meus Encantamentos</h3>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="flex-[0_0_clamp(200px,30%,280px)] min-w-0">
              <div className="h-48 p-6 rounded-xl bg-bginside border border-white/5 
                            hover:border-grimorium/30 transition-all group relative overflow-hidden">
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
                  Grimório #{item}
                </span>
                <h4 className="text-lg font-bold text-foreground mt-2">
                  Projeto Místico {item}
                </h4>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r 
                              from-transparent via-grimorium/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}