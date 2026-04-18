"use client";
import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import type { Project } from "./ProjectsSection";

interface ProjectMapProps {
  projects: Project[];
}

const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";
const GOOGLE_MAP_LIBRARIES = ["marker"];

const availableImageIds = new Set([
  "1","2","3","4","5","6","7","8","9","10","11",
  "13","14","15","16","17","18","19","20","22","23","24",
  "25","26","27","29","31","35","37","39","40","41","42",
  "43","44","45","47","49","50","51"
]);

export default function ProjectMap({ projects }: ProjectMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAZUGiF1aqWT_XxXFx-5tlcw04vlkhyfyQ",
    libraries: GOOGLE_MAP_LIBRARIES as any,
    mapIds: [MAP_ID],
  });

  useEffect(() => {
    if (!isLoaded || !window.google || !mapRef.current) return;
    if (!map) {
      const gmap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 1.3521, lng: 103.8198 },
        zoom: 12,
        mapId: MAP_ID,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
      setMap(gmap);
    }
  }, [isLoaded, map]);

  useEffect(() => {
    if (!map || !window.google || !projects?.length) return;
    let markers: any[] = [];
    let markerLib: any = null;
    window.google.maps.importLibrary("marker").then((lib: any) => {
      markerLib = lib;
      // @ts-ignore
      if ((map as any).__projectMarkers) {
        // @ts-ignore
        (map as any).__projectMarkers.forEach((m: any) => (m.map = null));
      }
      markers = projects.map((project: Project) => {
        const loc = typeof project.location === 'object' && project.location !== null
          ? project.location
          : { lat: 1.3521, lng: 103.8198 };
        const marker = new markerLib.AdvancedMarkerElement({
          map,
          position: loc,
          title: project.title,
        });
        marker.addListener("gmp-click", () => {
          setActiveProject(project);
        });
        return marker;
      });
      // @ts-ignore
      (map as any).__projectMarkers = markers;
    });
    return () => {
      if (markers.length) markers.forEach((m: any) => (m.map = null));
    };
  }, [map, projects]);

  if (!isLoaded) return <div className="w-full h-full flex items-center justify-center text-[#0e4672]">Loading map...</div>;

  return (
    <>
      <div ref={mapRef} className="w-full rounded-2xl z-0" style={{ height: "600px", width: "100%" }} />
      {activeProject && (
        <ProjectDetailsModal
          project={activeProject}
          availableImageIds={availableImageIds}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
