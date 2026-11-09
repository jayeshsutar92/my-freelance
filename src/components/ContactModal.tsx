import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-[24px] border border-[#E5DFD5] shadow-2xl p-6 sm:p-8 md:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE8DD] text-[#706B62] hover:text-[#1C1A17] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#888176]">
            LET'S COLLABORATE
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#1A1816] mt-1">
            Get in Touch with Jayesh
          </h3>
          <p className="text-xs sm:text-sm text-[#666056] mt-1">
            Have a project, freelance inquiry, or architectural question? Let's talk.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="p-3.5 rounded-xl bg-white border border-[#E8E2D6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#C85024] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#888176]">Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs font-semibold text-[#1C1A17] hover:text-[#C85024] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="p-1.5 rounded-md hover:bg-neutral-100 text-[#7A746B] transition-colors cursor-pointer"
              title="Copy email"
            >
              {copiedField === 'email' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E8E2D6] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#C85024] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#888176]">Phone</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs font-semibold text-[#1C1A17] hover:text-[#C85024] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="p-1.5 rounded-md hover:bg-neutral-100 text-[#7A746B] transition-colors cursor-pointer"
              title="Copy phone"
            >
              {copiedField === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Message Form */}
        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif-display text-2xl text-emerald-900">Message Received!</h4>
            <p className="text-xs text-emerald-800 max-w-sm mx-auto">
              Thank you for reaching out. Jayesh will review your requirements and respond back to{' '}
              <span className="font-semibold">{formData.email}</span> within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-[#69645B] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD5C8] focus:outline-none focus:border-[#C85024] text-neutral-800"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#69645B] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD5C8] focus:outline-none focus:border-[#C85024] text-neutral-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#69645B] mb-1">
                Project Category
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD5C8] focus:outline-none focus:border-[#C85024] text-neutral-800"
              >
                <option value="Web Development">Web Development & Architecture</option>
                <option value="Landing Page">Bespoke Landing Page</option>
                <option value="Fullstack Application">Fullstack SaaS Application</option>
                <option value="UI/UX & Design Systems">UI/UX & Design Systems</option>
                <option value="Consulting">Technical Consulting</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-[#69645B] mb-1">
                Project Details
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell Jayesh about your project goals, scope, timeline, and tech preferences..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-white border border-[#DDD5C8] focus:outline-none focus:border-[#C85024] text-neutral-800 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#7A746B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C85024]" />
                Based in Mumbai, working remotely worldwide.
              </span>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C85024] hover:bg-[#AF431B] text-white text-xs font-semibold tracking-[0.14em] uppercase shadow-xs transition-colors cursor-pointer"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
