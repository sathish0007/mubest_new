"use client";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  services: string[];
  completedDate: string;
  description: string;
  category: string;
}

interface ProjectsSectionProps {
  previewCount?: number;
  showAll?: boolean;
}

const availableImageIds = new Set([
  "1","2","3","4","5","6","7","8","9","10","11",
  "13","14","15","16","17","18","19","20","22","23","24",
  "25","26","27","29","31","35","37","39","40","41","42",
  "43","44","45","47","49","50","51"
]);
const previewCount = 6;

// Placeholder projects - will be replaced with actual data
const projects: Project[] = [
  {
    id: "1",
    title: "BUKIT BATOK EAST & CLEMENTI",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 46 BLOCKS OF FLATS AT BUKIT BATOK EAST DIVISION AND CLEMENTI DIVISIONS",
    category: "Residential"
  },
  {
    id: "2",
    title: "RIVERVALE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING", "REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 41 BLOCKS & LAMP POLES REPLACEMENT AT RIVERVALE DIVISIONS",
    category: "Residential"
  },
  {
    id: "3",
    title: "ANG MO KIO TOWN COUNCIL",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "REPLACEMENT OF LAMP POST FOR ANG MO KIO TOWN COUNCIL",
    category: "Commercial"
  },
  {
    id: "4",
    title: "BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3/4",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["Electrical Load Upgrading", "CCTV Works", "Renewal Programme"],
    completedDate: "2025",
    description: "NEIGHBOURHOOD RENEWAL PROGRAMME (BATCH 9) AND ELECTRICAL LOAD UPGRADING AND CCTV WORKS FOR BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3/4",
    category: "Residential"
  },
  {
    id: "5",
    title: "BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING", "REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 34 BLOCKS & LAMP POLES REPLACEMENT AT BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA DIVISIONS",
    category: "Residential"
  },
  {
    id: "6",
    title: "YEW TEE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT YEW TEE DIVISION",
    category: "Residential"
  },
  {
    id: "7",
    title: "ADMIRALTY AND WOODLANDS",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 66 BLOCKS AT ADMIRALTY AND WOODLANDS DIVISIONS",
    category: "Residential"
  },
  {
    id: "8",
    title: "KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["REPLACEMENT OF LAMP POSTS", "UNDERGROUND CABLES", "REWIRING"],
    completedDate: "2024",
    description: "REPLACEMENT OF LAMP POSTS AND UNDERGROUND CABLES AND REWIRING TO 24 BLOCKS OF FLATS IN KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN DIVISIONS",
    category: "Residential"
  },
  {
    id: "9",
    title: "SEMBAWANG WEST",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 45 BLOCKS AT SEMBAWANG WEST DIVISION",
    category: "Residential"
  },
  {
    id: "10",
    title: "PASIR RIS - PUNGGOL",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2024",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "11",
    title: "WEST COAST",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["MAINTENANCE & SERVICING OF AIR-CONDITIONING SYSTEM", "MECHANICAL EXHAUST FAN SYSTEM"],
    completedDate: "2024",
    description: "TERM CONTRACT FOR MAINTENANCE & SERVICING OF AIR-CONDITIONING SYSTEM AND MECHANICAL EXHAUST FAN SYSYTEM AT FOOD CENTRES",
    category: "Commercial"
  },
  {
    id: "12",
    title: "HDB DEVICE LEASING CONTRACT",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACT CLAIM"],
    completedDate: "2023",
    description: "SUB CONTRACT CLAIM FOR HDB DEVICE LEASING CONTRACT ST ENGINEERING",
    category: "Commercial"
  },
  {
    id: "13",
    title: "ST ENGINEERING URBAN SOLUTIONS LTD",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["DISMANTLING AND INSTALLATION WORKS"],
    completedDate: "2023",
    description: "SUBCONTRACT FOR THE DISMANTLING AND INSTALLATION OF NEW DIFFUSER AND SENSOR SYSTEMS, INCLUDING LABOUR AND MATERIALS",
    category: "Industrial"
  },
  {
    id: "14",
    title: "TANJONG PAGAR TOWN COUNCIL",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2023",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTIGNS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "15",
    title: "TELOK BLANGAH DRIVE/HEIGHTS",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2023",
    description: "ELECTRICAL REWIRING TO 14 BLOCKS AT TELOK BLANGAH DRIVE/HEIGHTS",
    category: "Residential"
  },
  {
    id: "16",
    title: "CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 20 BLOCKS AT CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    category: "Residential"
  },
  {
    id: "17",
    title: "CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 29 BLOCKS AT CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    category: "Residential"
  },
  {
    id: "18",
    title: "YUNG HO ROAD",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL LOAD UPGRADING WORKS"],
    completedDate: "2022",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF (ELU) ELECTRICAL LOAD UPGRADING SYSTEMS AT BLOCK 151,152,153 & 154 YUNG HO ROAD JURONG - CLEMANTI TOWN COUNCIL",
    category: "Residential"
  },
  {
    id: "19",
    title: "WOODLANDS DRIVE 40/70, AVE 6, STREET 83",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT BLOCK 701 TO 707 WOODLANDS DRIVE 40, BLOCK 708 TO 717 WOODLANDS DRIVE 70, BLOCK 718 TO 720 WOODLANDS AVE 6, BLOCK 853 TO 855 WOODLANDS STREET 83 AND BIN CENTERS",
    category: "Residential"
  },
  {
    id: "20",
    title: "KEAT HONG SHOPPING CENTRE & CHOA CHU KANG AVE 2",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO KEAT HONG SHOPPING CENTRE AND 6 BLOCKS OF FLATS AT BLOCK 248 TO 252 AND BLK 254 CHOA CHU KANG AVE 2",
    category: "Commercial"
  },
  {
    id: "21",
    title: "LED BATCHES 1 & 2 PROJECTS",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["LIGHTING COMPLAINTS RESPONSE"],
    completedDate: "2021",
    description: "RESPONDING / ATTENDING OF LIGHTING COMPLAINTS FOR LED BATCHES 1 & 2 PROJECTS",
    category: "Maintenance"
  },
  {
    id: "22",
    title: "JURONG WEST STREET 74",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2021",
    description: "ELECTRICAL REWIRING TO 13 BLOCKS OF FLATS AT BLOCK 752 TO 761 AND BLOCK 764 TO 766 JURONG WEST STREET 74",
    category: "Residential"
  },
  {
    id: "23",
    title: "TANJONG PAGAR",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2021",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "24",
    title: "WEST COAST",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2021",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES FOR WEST COAST TOWN COUNCIL",
    category: "Commercial"
  },
  {
    id: "25",
    title: "CONNECT @ CHANGI EXPO HALL 7 & 8",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2021",
    description: "CONNECT @ CHANGI EXPO HALL 7 & 8 FOR ELECTRICAL WORKS",
    category: "Commercial"
  },
  {
    id: "26",
    title: "MULTI STOREY CARPARK",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["A&A WORKS"],
    completedDate: "2021",
    description: "A&A WORKS TO MULTI STOREY CARPARK",
    category: "Commercial"
  },
  {
    id: "27",
    title: "WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2020",
    description: "ELECTRICAL REWIRING TO 37 BLOCKS AT BLOCK 822, 823,826, 827, 836, 839, 841, 844, 846, 851 & 856 TO 882 WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    category: "Residential"
  },
  {
    id: "28",
    title: "BIG BOX SITE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2020",
    description: "SUB CONTRACT FOR THE ELECTRICAL WORK DONE AT SITE BIG BOX FROM 3RD JUNE TO 1ST JULY 2020",
    category: "Commercial"
  },
  {
    id: "29",
    title: "PASIR RIS DRIVE 1/3 & 10",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2020",
    description: "ELECTRICAL REWIRING TO 26 BLOCKS AT BLOCK 626 TO 651 PASIR RIS DRIVE 1/3 & 10 FOR PASIR RIS TOWN COUNCIL (DLP PERIOD)",
    category: "Residential"
  },
  {
    id: "30",
    title: "MINISTRY OF HOME AFFAIRS PROPERTIES",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["RETROFITTING WORKS"],
    completedDate: "2019",
    description: "RETROFITTING WORKS TO EXISTING LIGHTING SYSTEM TO THE PROPERTIES UNDER THE MINISTRY OF HOME AFFAIRS IN CENTRAL AND WEST ZONES",
    category: "Commercial"
  },
  {
    id: "31",
    title: "CHUA CHU KANG AVE 3/4",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO 34 BLOCKS OF FLATS FOR KEAT HONG DIVISION CHUA CHU KANG AVE 3/4",
    category: "Residential"
  },
  {
    id: "32",
    title: "SP POWER GRID P1A CCTV CAT1 SUBSTATION",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACTOR"],
    completedDate: "2019",
    description: "SUB CONTRACTOR FOR SP POWER GRID P1A CCTV CAT1 SUBSTATION",
    category: "Industrial"
  },
  {
    id: "33",
    title: "CHOA CHU KANG WATERWORKS CONTRACT 3",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["PROCESS UPGRADING"],
    completedDate: "2019",
    description: "PROCESS UPGRADING AT CHOA CHU KANG WATERWORKS CONTRACT 3 - ELECTRO CHLORINATION SYSTEM",
    category: "Industrial"
  },
  {
    id: "34",
    title: "LED INSTALLATION WORKS BATCH 3",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["LED INSTALLATION WORKS"],
    completedDate: "2019",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF LED LUMINAIRES (BATCH 3) AT HDB BLOCKS, OPEN SPACES AND CARPARKS (GROUP 1 & 2)",
    category: "Installation"
  },
  {
    id: "35",
    title: "CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO BLOCKS 523 TO 531, 540 TO 552 CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    category: "Residential"
  },
  {
    id: "36",
    title: "SP POWER GRID P2A CCTV CAT2 SUBSTATION",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACTOR"],
    completedDate: "2019",
    description: "SUB CONTRACTOR FOR SP POWER GRID P2A CCTV CAT2 SUBSTATION",
    category: "Industrial"
  },
  {
    id: "37",
    title: "WOODLANDS AVENUE 1/ STREET 32",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO BLOCK 307, 308, 321 TO 323, 325, 326, 328, 330 & 331 WOODLANDS AVENUE 1/ STREET 32",
    category: "Residential"
  },
  {
    id: "38",
    title: "EMSU TRADEMEN CONTRACT",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["TERM CONTRACT"],
    completedDate: "2018",
    description: "TERM CONTRACT TO PROVIDE EMSU TRADEMEN FOR EAST COAST, CHUA CHU KANG, TAMPINES, PASIR RIS-PUNGGOL, MARINE PARADE, WEST COAST AND JURONG TOWN COUNCIL",
    category: "Maintenance"
  },
  {
    id: "39",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["LIGHTING & CCTV REPLACEMENTS"],
    completedDate: "2018",
    description: "REPLACEMENT OF EXTERIOR LIGHTING WITH LED LIGHTING AND CCTV OF NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  },
  {
    id: "40",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["CCTV AND PA SYSTEM INSTALLATIONS"],
    completedDate: "2018",
    description: "SUBCONTRACT FOR CCTV AND PA SYSTEM INSTALLATIONS AT IMRE, NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  },
  {
    id: "41",
    title: "CHANGI AIRPORT T4",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT CHANGI AIRPORT T4- KITCHEN PANEL TO ISOLATOR & REMOTE PANEL CABLE, PANEL CABLE INSTALLATION & TERMINATION, MATERIAL FOR LIGHTING CONTROL CABLE WORKS",
    category: "Commercial"
  },
  {
    id: "42",
    title: "MARINA ONE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL & CCTV WORKS"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AND CCTV AT MARINA ONE SITE",
    category: "Commercial"
  },
  {
    id: "43",
    title: "KOPITIAM SITES",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WIRE & TRUNKING"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR INSTALLATION OF ELECTRICAL WIRE & TRUNKING AND RELATED M & E WORKS AT KOPITIAM SITES AT CHANGI AIRPORT T2, BEDOK, SGH, BUKIT PANJANG, VISTA POINT, BUNGKOK, TAMPINES 9, SINGPOST CENTRE",
    category: "Commercial"
  },
  {
    id: "44",
    title: "FAJAR/SAUJANA ROAD",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELU WORKS"],
    completedDate: "2017",
    description: "HOLLAND BUKIT PANJANG TOWN COUNCIL ELU WORKS AT HDB FAJAR/SAUJANA ROAD FROM BLK 420 TO 435 CUM 1NO NEW SUBSTATION AND 1 NO EXISTING SUBSTATION",
    category: "Residential"
  },
  {
    id: "45",
    title: "BOUTIQUE HOTEL",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL AND CCTV INSTALLATION WORKS"],
    completedDate: "2016",
    description: "SUBCONTRACT WORKS FOR ELECTRICAL AND CCTV INSTALLATION WORK AT BOUTIQUE HOTEL AT 122 MIDDLE ROAD",
    category: "Commercial"
  },
  {
    id: "46",
    title: "CHANGI AIRPORT T4",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["CCTV WORKS"],
    completedDate: "2016",
    description: "SUB CONTRACT FOR CCTV WORK AT TAKANEKA T4 SITE",
    category: "Commercial"
  },
  {
    id: "47",
    title: "CHANGI AIRPORT T4",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORK"],
    completedDate: "2016",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT CHANGI AIRPORT T4",
    category: "Commercial"
  },
  {
    id: "48",
    title: "LED INSTALLATIONS BATCH 2",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["LED INSTALLATIONS"],
    completedDate: "2016",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF LED LUMINAIRES (BATCH 2) AT HDB BLOCKS (ZONES 1 & 2)",
    category: "Installation"
  },
  {
    id: "49",
    title: "FUSIONPOLIS 5",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2015",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT SITE FUSIONPOLIS 5",
    category: "Commercial"
  },
  {
    id: "50",
    title: "NATIONAL UNIVERSITY OF SINGAPORE/CHANGI",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL, CCTV AND FIRE ALARM INSTALLATION WORKS"],
    completedDate: "2015",
    description: "SUB CONTRACT FOR ELECTRICAL, CCTV AND FIRE ALARM INSTALLATION AT NATIONAL UNIVERSITY OF SINGAPORE/CHANGI",
    category: "Commercial"
  },
  {
    id: "51",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: "Singapore",
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL AND CCTV WORKS"],
    completedDate: "2015",
    description: "SUBCONTRACT WORKS FOR ELECTRICAL AND CCTV WORKS AT MD1, NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  }
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Maintenance", "Installation"];

export default function ProjectsSection({ previewCount = 6, showAll = false }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const projectsToRender = showAll ? filteredProjects : filteredProjects.slice(0, previewCount);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 bg-[#040d1a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[rgba(255,193,7,0.02)] blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[rgba(255,143,0,0.01)] blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[rgba(255,193,7,0.25)] bg-[rgba(255,193,7,0.06)] rounded-full mb-8 opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
            <span className="font-mono text-xs text-[#FFC107] tracking-[0.15em] uppercase">
              Our Portfolio
            </span>
          </div>

          <h2 className="font-display text-[60px] md:text-[80px] text-white tracking-wider mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            COMPLETED
          </h2>
          <h2 className="font-display text-[60px] md:text-[80px] text-[#FFC107] glow-text tracking-wider mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            PROJECTS
          </h2>

          <p className="font-body text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Explore our successful electrical projects across Singapore, from residential estates to industrial complexes.
            Each project showcases our commitment to quality, safety, and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-heading text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FFC107] text-[#030712] shadow-[0_0_20px_rgba(255,193,7,0.3)]"
                  : "border border-[rgba(255,193,7,0.25)] text-slate-400 hover:text-[#FFC107] hover:border-[rgba(255,193,7,0.5)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToRender.map((project, index) => {
            const imageSrc = availableImageIds.has(project.id) ? `/images/${project.id}.png` : null;
            return (
              <div
                key={project.id}
              onClick={() => openModal(project)}
              className="group relative cursor-pointer overflow-hidden rounded-sm border-grad bg-[rgba(13,21,37,0.6)] backdrop-blur-sm hover:bg-[rgba(255,193,7,0.04)] transition-all duration-500 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-[#0c1723]">
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[rgba(255,193,7,0.08)] text-slate-500 text-sm font-body">
                    Image not available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FFC107] text-[#030712] font-mono text-xs tracking-[0.1em] uppercase rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="text-white font-heading text-sm tracking-[0.1em] uppercase">View Details</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-white mb-2 group-hover:text-[#FFC107] transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-body text-slate-400 text-sm">{project.location}</span>
                </div>
                <p className="font-body text-slate-500 text-sm leading-relaxed max-h-[4.5rem] overflow-hidden">
                  {project.description}
                </p>
              </div>
            </div>
          );
          })}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC107] text-[#030712] font-heading font-semibold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.5)] transition-all duration-300">
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0d1525] rounded-lg border border-[rgba(255,193,7,0.2)]" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-[#FFC107] hover:text-[#030712] transition-colors duration-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-full">
                {availableImageIds.has(selectedProject.id) ? (
                  <img
                    src={`/images/${selectedProject.id}.png`}
                    alt={selectedProject.title}
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
                    {selectedProject.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-4xl text-white mb-2">
                  {selectedProject.title}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-body text-slate-400">{selectedProject.location}</span>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h3 className="font-heading text-lg text-[#FFC107] mb-3 uppercase tracking-[0.1em]">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
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
                  <h3 className="font-heading text-lg text-[#FFC107] mb-3 uppercase tracking-[0.1em]">Project Overview</h3>
                  <p className="font-body text-slate-400 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Completion Date */}
                <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,193,7,0.1)]">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body text-slate-400">
                    Completed: <span className="text-white font-semibold">{selectedProject.completedDate}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}