import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FBF9F5] rounded-[22px] border border-[#E5DFD5] shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE8DD] text-[#706B62] hover:text-[#1C1A17] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif-display text-2xl font-normal text-[#1A1816] mb-4">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#5C574F] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                This portfolio website is operated by Jayesh Sutar ("I", "me", or "my"). I value your privacy and do not collect any personal data beyond information you voluntarily supply through direct email, phone communication, or the inquiry form.
              </p>
              <p>
                <strong>Information Collected:</strong> Any contact inquiries sent to jayeshsutar76@gmail.com are used solely to reply to your freelance web development inquiries and project proposals.
              </p>
              <p>
                <strong>Cookies & Telemetry:</strong> This site uses no invasive trackers or advertising cookies.
              </p>
            </>
          ) : (
            <>
              <p>
                By accessing this portfolio, you agree to browse for informational and client hiring purposes. All project trademarks and brand identities belong to their respective owners.
              </p>
              <p>
                <strong>Code & Intellectual Property:</strong> Design concepts, layouts, and implementations showcase freelance engineering work by Jayesh Sutar.
              </p>
              <p>
                <strong>Project Links:</strong> External links to projects (including Omkar Arts, Flowtime, and Aerovolt) are provided as demonstrative portfolio references.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#EDE6DC] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#1C1A17] hover:bg-[#33302B] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
