import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactCtaProps {
  onOpenContact: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenContact }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-[#EDE7DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main CTA Card with warm background and organic silhouette */}
        <div className="relative rounded-[28px] bg-[#EEE8DE] border border-[#E0D8CB] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xs">
          {/* Subtle Organic Background Silhouette on the Right */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-40 translate-x-12 translate-y-8 select-none">
            <svg
              width="340"
              height="300"
              viewBox="0 0 340 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M170 30C250 10 320 70 330 160C340 250 280 290 190 295C100 300 40 240 20 170C0 100 90 50 170 30Z"
                fill="#C5BEB2"
              />
              <path
                d="M210 90C280 80 305 130 310 190C315 250 250 280 180 270C110 260 90 210 110 150C130 90 140 100 210 90Z"
                fill="#B8B0A2"
              />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Heading and Primary Action */}
            <div className="lg:col-span-7 space-y-6">
              <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#7D766C]">
                LET'S CREATE SOMETHING GREAT
              </span>

              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal leading-[1.12] text-[#1A1816]">
                Have a project in mind? <br />
                I'd love to hear about it.
              </h2>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#C85024] hover:bg-[#AF431B] text-white text-xs font-semibold tracking-[0.14em] uppercase shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>LET'S TALK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Contact Details (Email, Phone, Location) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Email row */}
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF7F2] text-[#787268] border border-[#E2DBD0] mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#857E74]">
                    EMAIL
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-[#1C1A17] hover:text-[#C85024] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                      className="text-[10px] uppercase font-mono tracking-wider text-[#756E63] hover:text-[#C85024] flex items-center gap-1 cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedType === 'email' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="mt-2.5">
                    <button
                      onClick={onOpenContact}
                      className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#C85024] hover:bg-[#AF431B] text-white text-[10px] font-semibold tracking-[0.14em] uppercase transition-colors"
                    >
                      <span>LET'S TALK</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone row */}
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF7F2] text-[#787268] border border-[#E2DBD0] mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#857E74]">
                    PHONE
                  </div>
                  <div className="mt-1 flex items-center gap-3">
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-medium text-[#1C1A17] hover:text-[#C85024] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                    <button
                      onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                      className="text-[10px] uppercase font-mono tracking-wider text-[#756E63] hover:text-[#C85024] flex items-center gap-1 cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedType === 'phone' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location row */}
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF7F2] text-[#787268] border border-[#E2DBD0] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#857E74]">
                    LOCATION
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#1C1A17] mt-1">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
