"use client";
import { basePath } from "@/app/util";
import React from "react";

interface Project {
  id: string;
  title: string;
  location?: string | { lat: number; lng: number };
  image: string;
  services: string[];
  completedDate: string;
  description: string;
  category: string;
}

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose} role="presentation">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0d1525] rounded-lg border border-[rgba(255,193,7,0.2)]" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-[#86c0b7] hover:text-[#030712] transition-colors duration-300 flex items-center justify-center"
          aria-label="Close project details modal"
          type="button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-full">
            <img
                loading="lazy"
                src={basePath + project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-l-lg"
                decoding="async"
                width={400}
                height={256}
              />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 rounded-l-lg" />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Category */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-[#86c0b7] text-[#030712] font-mono text-xs tracking-[0.1em] uppercase rounded-full">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl text-white mb-2" id="project-modal-title">
              {project.title}
            </h2>

            {/* Location */}
            {typeof project.location === "string" && project.location && (
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-[#86c0b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-body text-slate-400">{project.location}</span>
              </div>
            )}

            {/* Services */}
            <div className="mb-6">
              <h3 className="font-heading text-lg text-[#86c0b7] mb-3 uppercase tracking-[0.1em]">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.2)] text-slate-300 font-body text-sm rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-heading text-lg text-[#86c0b7] mb-3 uppercase tracking-[0.1em]">Project Overview</h3>
              <p className="font-body text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Completion Date */}
            <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,193,7,0.1)]">
              <svg className="w-5 h-5 text-[#86c0b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body text-slate-400">
                Completed: <span className="text-white font-semibold">{project.completedDate}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;