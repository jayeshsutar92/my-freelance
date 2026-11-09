import React from 'react';
import { Search, RefreshCw, Code2, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search className="w-3.5 h-3.5 text-[#C85024]" />;
      case 'plan':
        return <RefreshCw className="w-3.5 h-3.5 text-[#C85024]" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5 text-[#C85024]" />;
      case 'launch':
        return <Rocket className="w-3.5 h-3.5 text-[#C85024]" />;
      default:
        return <Search className="w-3.5 h-3.5 text-[#C85024]" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-24 border-t border-[#EDE7DC] bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-14 sm:mb-18">
          <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#969188] mb-2">
            MY PROCESS
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1816]">
            How I Work
          </h2>
        </div>

        {/* 4 Steps Container */}
        <div className="relative">
          {/* Subtle dotted connector line across all 4 steps on desktop */}
          <div className="hidden lg:block absolute top-4 left-6 right-6 border-b border-dotted border-[#D4CBBF] pointer-events-none z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="group space-y-4">
                {/* Step header: Number + Icon circle badge */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#C85024] tracking-wider">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E3DBD0] shadow-xs flex items-center justify-center group-hover:border-[#C85024] group-hover:scale-105 transition-all">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step title */}
                <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-[#1C1A17] group-hover:text-[#C85024] transition-colors">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-xs sm:text-[13px] text-[#6E6961] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
