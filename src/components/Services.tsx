import React from 'react';
import { Monitor, Smartphone, Star, LayoutGrid } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'web':
        return <Monitor className="w-4 h-4 text-[#8A847A] group-hover:text-[#C85024] transition-colors" />;
      case 'uiux':
        return <Smartphone className="w-4 h-4 text-[#8A847A] group-hover:text-[#C85024] transition-colors" />;
      case 'brand':
        return <Star className="w-4 h-4 text-[#8A847A] group-hover:text-[#C85024] transition-colors" />;
      case 'system':
        return <LayoutGrid className="w-4 h-4 text-[#8A847A] group-hover:text-[#C85024] transition-colors" />;
      default:
        return <Monitor className="w-4 h-4 text-[#8A847A]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 border-t border-[#EDE7DC] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-3">
            <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#969188] mb-2">
              WHAT I DO
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1816]">
              Services
            </h2>
          </div>

          {/* Right Column: 4 Services Horizontal Columns */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-[#F4EFE6] group-hover:bg-[#F0E6D6] transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#1C1A17] group-hover:text-[#C85024] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#6E6961] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
