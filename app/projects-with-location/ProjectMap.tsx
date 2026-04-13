"use client";




import { useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import ProjectDetailsModal from "../../components/ProjectDetailsModal";

// Add marker library for advanced markers
import type { Library } from "@googlemaps/js-api-loader";
const GOOGLE_MAP_LIBRARIES: Library[] = ["marker"];

// You must set your Map ID here (from Google Cloud Console)
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || "DEMO_MAP_ID";

// function MapAutoFit({ projects, selectedProject }: any) {
//   const map = useMap();
//   useEffect(() => {
//     if (selectedProject) {
//       map.setView([selectedProject.location.lat, selectedProject.location.lng], 14);
//     } else {
//       const bounds = L.latLngBounds(projects.map((p: any) => [p.location.lat, p.location.lng]));
//       map.fitBounds(bounds, { padding: [50, 50] });
//     }
//   }, [selectedProject, projects, map]);
//   return null;
// }


export default function ProjectMap({ projects }: any) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [activeProject, setActiveProject] = useState<any>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAZUGiF1aqWT_XxXFx-5tlcw04vlkhyfyQ",
    libraries: GOOGLE_MAP_LIBRARIES,
    mapIds: [MAP_ID],
  });

  // For image availability check
  const availableImageIds = new Set([
    "1","2","3","4","5","6","7","8","9","10","11",
    "13","14","15","16","17","18","19","20","22","23","24",
    "25","26","27","29","31","35","37","39","40","41","42",
    "43","44","45","47","49","50","51"
  ]);

  useEffect(() => {
    if (!isLoaded || !window.google || !mapRef.current) return;
    // Create the map only once
    if (!map) {
      const gmap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 1.3521, lng: 103.8198 },
        zoom: 12,
        mapId: MAP_ID,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        // styles removed: must be set in Google Cloud Console when using mapId
      });
      setMap(gmap);
    }
  }, [isLoaded, map]);

  // Add advanced markers
  useEffect(() => {
    if (!map || !window.google || !projects?.length) return;
    let markers: any[] = [];
    let markerLib: any = null;

    window.google.maps.importLibrary("marker").then((lib: any) => {
      markerLib = lib;
      // Remove old markers
      if (map.__projectMarkers) {
        map.__projectMarkers.forEach((m: any) => m.map = null);
      }
      // Add new markers
      markers = projects.map((project: any) => {
        const marker = new markerLib.AdvancedMarkerElement({
          map,
          position: project.location,
          title: project.title,
        });
        marker.addListener("gmp-click", () => {
          setActiveProject(project);
        });
        return marker;
      });
      map.__projectMarkers = markers;
    });

    // Cleanup on unmount
    return () => {
      if (markers.length) markers.forEach((m) => m.map = null);
    };
    // eslint-disable-next-line
  }, [map, projects]);

  // Remove InfoWindow logic; use modal instead

  if (!isLoaded) return <div className="w-full h-full flex items-center justify-center text-white">Loading map...</div>;

  return (
    <>
      <div ref={mapRef} className="w-full rounded-none z-0" style={{ height: "600px", width: "100%" }} />
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