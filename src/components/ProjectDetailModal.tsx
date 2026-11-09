import React from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-[24px] border border-[#E5DFD5] shadow-2xl p-6 sm:p-8 md:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFE8DD] text-[#706B62] hover:text-[#1C1A17] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C85024] font-semibold">
            PROJECT {project.number}
          </span>
          <span className="text-[10px] font-mono uppercase text-[#888176]">
            • {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#1A1816]">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-[#7C756B] mt-1">{project.tagline}</p>

        {/* Description */}
        <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#544F47] leading-relaxed">
          <p>{project.description}</p>
        </div>

        {/* Highlights depending on the project */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-[#E8E2D6] space-y-2.5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#888176] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C85024]" />
            Key Technical Accomplishments
          </div>
          <ul className="text-xs text-[#59544C] space-y-1.5 pl-6 list-disc">
            {project.id === 'omkar-arts' && (
              <>
                <li>Modular component architecture with tailored micro-interactions powered by Framer Motion.</li>
                <li>Responsive mobile-first layout styled with modern Tailwind CSS utility layers.</li>
                <li>Optimized image loading pipelines for high-resolution artisanal photography.</li>
              </>
            )}
            {project.id === 'flowtime' && (
              <>
                <li>Full stack decoupled architecture with Next.js frontend and high-performance Django REST backend.</li>
                <li>PostgreSQL persistent database with Redis in-memory session caching and queueing.</li>
                <li>Containerized reproducible development and deployment pipeline using Docker.</li>
              </>
            )}
            {project.id === 'aerovolt' && (
              <>
                <li>Asynchronous FastAPI microservices providing millisecond inference for wholesale power bids.</li>
                <li>Data pipeline processing granular historical time-series from the UK Elexon dataset.</li>
                <li>Containerized Docker deployment with reactive interactive charts built in React.</li>
              </>
            )}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#888176] mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white text-[#2B2722] border border-[#DDD5C8] shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-[#EDE6DC] flex items-center justify-start gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C85024] hover:bg-[#AF431B] text-white text-xs font-semibold tracking-[0.14em] uppercase shadow-sm transition-all"
          >
            <span>VISIT LIVE PROJECT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
