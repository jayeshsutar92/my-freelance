import React, { useState } from 'react';
import { ArrowRight, Check, Github, Linkedin, Dribbble, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[#EDE7DC] bg-[#FAF8F3] text-[#1C1A17]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#EAE3D6]">
          {/* Col 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F5EFE6] border border-[#E2DBD0] flex items-center justify-center text-[#1C1A17] shadow-xs">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#1C1A17]"
                >
                  <polygon points="12 3 21 20 3 20 12 3" />
                  <line x1="12" y1="11" x2="12" y2="15" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#1C1A17]">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#7C776E] mt-0.5 font-medium">
                  {PERSONAL_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#706B62] leading-relaxed max-w-sm">
              {PERSONAL_INFO.footerBio}
            </p>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888176]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-[#524E47]">
              <li>
                <a href="#home" className="hover:text-[#C85024] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C85024] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#C85024] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C85024] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C85024] transition-colors">
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888176]">
              RESOURCES
            </h4>
            <ul className="space-y-2 text-xs text-[#524E47]">
              <li>
                <a href="#process" className="hover:text-[#C85024] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#C85024] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C85024] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C85024] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888176]">
              FOLLOW
            </h4>
            <ul className="space-y-2 text-xs text-[#524E47]">
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C85024] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C85024] transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C85024] transition-colors flex items-center gap-1.5"
                >
                  <Dribbble className="w-3.5 h-3.5" />
                  <span>Dribbble</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C85024] transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Inspired (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888176]">
              STAY INSPIRED
            </h4>
            <p className="text-[11px] text-[#706B62] leading-relaxed">
              Get design insights and updates straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full text-xs px-3 py-2 pr-9 rounded-md bg-white border border-[#DDD5C8] focus:outline-none focus:border-[#C85024] placeholder:text-neutral-400 text-neutral-800"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-1 w-7 h-7 rounded bg-[#C85024] hover:bg-[#AF431B] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {subscribed ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-emerald-700 block font-medium">
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A756D]">
          <div>© 2025 Jayesh Sutar. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#C85024] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#C85024] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
