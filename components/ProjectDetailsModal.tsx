"use client";
import React from "react";

interface Project {
  id: string;
  title: string;
  location: string | { lat: number; lng: number };
  image: string;
  services: string[];
  completedDate: string;
  description: string;
  category: string;
}

interface ProjectDetailsModalProps {
  project: Project;
  availableImageIds: Set<string>;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, availableImageIds, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-lg border border-primary/20" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-primary/80 text-white hover:bg-secondary hover:text-background transition-colors duration-300 flex items-center justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-full">
            {availableImageIds.has(project.id) ? (
              <img
                src={`/images/${project.id}.png`}
                alt={project.title}
                className="w-full h-full object-cover rounded-l-lg"
              />
            ) : (
              <div className="flex h-full items-center justify-center rounded-l-lg bg-[rgba(255,193,7,0.08)] text-slate-500 font-body text-sm">
                Image not available
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 rounded-l-lg" />
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Category */}
            <div className="mb-4">
              <span className="px-3 py-1 bg-[#FFC107] text-[#030712] font-mono text-xs tracking-[0.1em] uppercase rounded-full">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl text-heading mb-2">
              {project.title}
            </h2>

            {/* Location */}
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-body text-body">
                {typeof project.location === "string"
                  ? project.location
                  : project.location && typeof project.location === "object"
                  ? `Lat: ${project.location.lat}, Lng: ${project.location.lng}`
                  : ""}
              </span>
            </div>

            {/* Services */}
            <div className="mb-6">
              <h3 className="font-heading text-lg text-primary mb-3 uppercase tracking-[0.1em]">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 border border-primary/20 text-body font-body text-sm rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-heading text-lg text-primary mb-3 uppercase tracking-[0.1em]">Project Overview</h3>
              <p className="font-body text-body leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Completion Date */}
            <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,193,7,0.1)]">
              <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body text-body">
                Completed: <span className="text-heading font-semibold">{project.completedDate}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;