import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Eyebrows Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E7]/90 border border-[#EBDCC2] text-[#8C6228] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-[#7A5B2C]">
              {PERSONAL_INFO.heroEyebrowLeft}
            </span>
          </div>

          {/* Right developer philosophy badge */}
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#969188] select-none">
            {PERSONAL_INFO.heroEyebrowRight}
          </div>
        </div>

        {/* Main Grid: Left Typography & Right Framed Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Headline + Bio + CTAs) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[63px] font-normal leading-[1.08] tracking-[-0.02em] text-[#1A1816]">
              I build digital experiences that are intuitive, robust and impactful.
            </h1>

            <p className="text-[#69645C] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.heroBio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#C85024] hover:bg-[#AF431B] text-white text-xs font-semibold tracking-[0.14em] uppercase shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md border border-[#D8D1C5] hover:border-[#BFB6A8] bg-[#FAF7F2]/60 hover:bg-[#F3EDE2] text-[#1C1A17] text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column (Hero Portrait) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative soft border frame */}
              <div className="p-3 sm:p-3.5 bg-[#F2EDE4] rounded-[30px] border border-[#E3DBD0] shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Photo container */}
                <div className="relative overflow-hidden rounded-[20px] bg-[#EAE3D6] w-[270px] sm:w-[310px] md:w-[340px] aspect-[4/5]">
                  <img
                    src="/assets/aistudio/jayesh-portrait-clean.png"
                    alt="Jayesh Sutar - Freelance Web Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to reference crop if clean crop is missing
                      (e.target as HTMLImageElement).src = '/assets/aistudio/hero-portrait.png';
                    }}
                  />
                  {/* Subtle inner shadow highlight */}
                  <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
              </div>

              {/* Bottom-left signature accent dot badge */}
              <div
                className="absolute -bottom-3 -left-3 sm:-bottom-3.5 sm:-left-3.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2] border border-[#E3DBD0] shadow-md flex items-center justify-center transition-transform hover:scale-110"
                title="Status: Available for hire"
              >
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D95F1E] shadow-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
