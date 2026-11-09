import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[#EDE7DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#969188] mb-2">
            CLIENTS SAY
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1816] mb-12">
            Kind Words
          </h2>
        </div>

        {/* Testimonial Presentation Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl bg-white rounded-[24px] p-8 sm:p-12 border border-[#E8E2D6] shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Quote Icon badge */}
          <div className="absolute top-8 right-8 text-[#E2DACD] hidden sm:block">
            <Quote className="w-12 h-12 rotate-180 opacity-50" />
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6 text-[#C85024]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif-display text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#23201C] font-normal min-h-[140px] sm:min-h-[120px] transition-all duration-300">
            "{current.quote}"
          </blockquote>

          {/* Author Details & Pagination Dots */}
          <div className="mt-8 pt-6 border-t border-[#F0EAE0] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-bold tracking-[0.1em] uppercase text-[#1C1A17]">
                {current.author}
              </div>
              <div className="text-xs text-[#7A756D] mt-0.5">
                {current.role} • {current.company}
              </div>
            </div>

            {/* Pagination Controls & Dots matching reference */}
            <div className="flex items-center gap-4 self-end sm:self-auto">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`transition-all duration-300 cursor-pointer rounded-full ${
                      idx === activeIndex
                        ? 'w-5 h-2 bg-[#1C1A17]'
                        : 'w-2 h-2 bg-[#D1C9BC] hover:bg-[#9E978C]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1 border-l border-[#E5DFD4] pl-3 ml-1">
                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                  }
                  aria-label="Previous testimonial"
                  className="p-1.5 rounded-full hover:bg-[#F2ECE1] text-[#545049] hover:text-[#1C1A17] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  aria-label="Next testimonial"
                  className="p-1.5 rounded-full hover:bg-[#F2ECE1] text-[#545049] hover:text-[#1C1A17] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
