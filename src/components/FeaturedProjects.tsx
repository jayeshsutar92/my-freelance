import React from 'react';
import { ArrowRight, Plus, Clock } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 sm:py-24 border-t border-[#EDE7DC] bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-[#969188] mb-2">
              SELECTED WORK
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1816]">
              Featured Projects
            </h2>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Omkar Arts */}
          {PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col bg-white rounded-[22px] p-3.5 border border-[#E8E2D6] hover:border-[#D6CEBF] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Visual Preview Container */}
                <div
                  className={`relative rounded-[16px] p-5 sm:p-6 min-h-[220px] flex flex-col justify-between overflow-hidden transition-colors ${
                    project.previewType === 'flowtime'
                      ? 'bg-[#101214] text-white'
                      : project.previewType === 'omkar'
                      ? 'bg-[#F2ECE1] text-[#1C1A17]'
                      : 'bg-[#EFE9DF] text-[#1C1A17]'
                  }`}
                >
                  {/* Subtle top header bar inside mockup */}
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.previewType === 'flowtime'
                            ? 'bg-emerald-400'
                            : project.previewType === 'omkar'
                            ? 'bg-[#C85024]'
                            : 'bg-sky-500'
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          project.previewType === 'flowtime' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}
                      >
                        {project.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 opacity-60">
                      {project.previewType === 'flowtime' && (
                        <span className="text-[9px] uppercase tracking-widest text-emerald-400">PROD</span>
                      )}
                      {project.previewType === 'omkar' && (
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </div>
                      )}
                      {project.previewType === 'aerovolt' && (
                        <span className="text-[9px] uppercase tracking-widest text-neutral-500">ML FORECAST</span>
                      )}
                    </div>
                  </div>

                  {/* Mockup Headline */}
                  <div className="my-5">
                    {project.previewType === 'omkar' && (
                      <p className="font-serif-display text-xl sm:text-2xl leading-snug text-[#221F1B]">
                        Elevating carpentry experiences.
                      </p>
                    )}
                    {project.previewType === 'flowtime' && (
                      <p className="font-serif-display text-xl sm:text-2xl leading-snug text-neutral-100 font-normal">
                        Smart <span className="text-white font-medium">solutions</span> for focused productivity.
                      </p>
                    )}
                    {project.previewType === 'aerovolt' && (
                      <p className="font-serif-display text-xl sm:text-2xl leading-snug text-[#221F1B]">
                        Sustainable forecasting, designed beautifully.
                      </p>
                    )}
                  </div>

                  {/* Bottom Preview Component */}
                  <div>
                    {project.previewType === 'omkar' && (
                      <div className="w-full h-11 rounded-lg bg-[#EAE2D4]/90 border border-[#DBD2C2] flex items-center justify-center text-[#7A6C58] group-hover:bg-[#E4D9C8] transition-colors">
                        <Plus className="w-5 h-5 text-[#8A7963]" />
                      </div>
                    )}

                    {project.previewType === 'flowtime' && (
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="h-10 rounded-md bg-[#1B1E22] border border-white/5 flex items-center justify-center text-[10px] text-neutral-400 font-mono">
                          25m
                        </div>
                        <div className="h-10 rounded-md bg-[#22272E] border border-emerald-500/20 flex items-center justify-center text-[10px] text-emerald-400 font-mono font-medium">
                          50m
                        </div>
                        <div className="h-10 rounded-md bg-[#1B1E22] border border-white/5 flex items-center justify-center text-[10px] text-neutral-400 font-mono">
                          90m
                        </div>
                      </div>
                    )}

                    {project.previewType === 'aerovolt' && (
                      <div className="w-full h-11 rounded-lg bg-[#E6DECF]/90 border border-[#D5CBB9] flex items-center justify-center text-[#6A604F] group-hover:bg-[#DED5C4] transition-colors">
                        <Clock className="w-4 h-4 text-[#756A59]" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Meta Content Below Mockup */}
                <div className="pt-4 pb-2 px-2 flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-[#1C1A17] group-hover:text-[#C85024] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#7C776E] line-clamp-1">
                      {project.techStack.join(', ')}
                    </p>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open live site for ${project.title}`}
                    className="w-8 h-8 rounded-full border border-[#DDD5C8] hover:border-[#C85024] bg-[#FAF7F2] hover:bg-[#C85024] text-[#4F4B43] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs group/btn flex-shrink-0"
                    title={`Visit ${project.liveUrl}`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Subtle tech stack tags row */}
                <div className="px-2 pt-1 pb-1 flex flex-wrap gap-1.5 border-t border-[#F3EDE3] mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#69645C] border border-[#E9E3D8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
