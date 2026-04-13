"use client";


import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import FooterSection from "../../components/FooterSection";
interface Project {
  id: string;
  title: string;
  image: string;
  services: string[];
  completedDate: string;
  description: string;
  category: string;
  location: {
    lat: number;
    lng: number;
  };
}
const allProjects: Project[] = [
  {
    id: "1",
    title: "BUKIT BATOK EAST & CLEMENTI",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 46 BLOCKS OF FLATS AT BUKIT BATOK EAST DIVISION AND CLEMENTI DIVISIONS",
    category: "Residential"
  },
  {
    id: "2",
    title: "RIVERVALE",
    location: { lat: 1.3917, lng: 103.9023 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING", "REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 41 BLOCKS & LAMP POLES REPLACEMENT AT RIVERVALE DIVISIONS",
    category: "Residential"
  },
  {
    id: "3",
    title: "ANG MO KIO TOWN COUNCIL",
    location: { lat: 1.3691, lng: 103.8499 },
    image: "/api/placeholder/400/300",
    services: ["REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "REPLACEMENT OF LAMP POST FOR ANG MO KIO TOWN COUNCIL",
    category: "Commercial"
  },
  {
    id: "4",
    title: "BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3/4",
    location: { lat: 1.3921, lng: 103.7454 },
    image: "/api/placeholder/400/300",
    services: ["Electrical Load Upgrading", "CCTV Works", "Renewal Programme"],
    completedDate: "2025",
    description: "NEIGHBOURHOOD RENEWAL PROGRAMME (BATCH 9) AND ELECTRICAL LOAD UPGRADING AND CCTV WORKS FOR BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3/4",
    category: "Residential"
  },
  {
    id: "5",
    title: "BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING", "REPLACEMENT OF LAMP POST"],
    completedDate: "2025",
    description: "ELECTRICAL REWIRING TO 34 BLOCKS & LAMP POLES REPLACEMENT AT BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA DIVISIONS",
    category: "Residential"
  },
  {
    id: "6",
    title: "YEW TEE",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT YEW TEE DIVISION",
    category: "Residential"
  },
  {
    id: "7",
    title: "ADMIRALTY AND WOODLANDS",
    location: { lat: 1.4363, lng: 103.7860 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 66 BLOCKS AT ADMIRALTY AND WOODLANDS DIVISIONS",
    category: "Residential"
  },
  {
    id: "8",
    title: "KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN",
    location: { lat: 1.3200, lng: 103.9000 },
    image: "/api/placeholder/400/300",
    services: ["REPLACEMENT OF LAMP POSTS", "UNDERGROUND CABLES", "REWIRING"],
    completedDate: "2024",
    description: "REPLACEMENT OF LAMP POSTS AND UNDERGROUND CABLES AND REWIRING TO 24 BLOCKS OF FLATS IN KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN DIVISIONS",
    category: "Residential"
  },
  {
    id: "9",
    title: "SEMBAWANG WEST",
    location: { lat: 1.4500, lng: 103.8200 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2024",
    description: "ELECTRICAL REWIRING TO 45 BLOCKS AT SEMBAWANG WEST DIVISION",
    category: "Residential"
  },
  {
    id: "10",
    title: "PASIR RIS - PUNGGOL",
    location: { lat: 1.3721, lng: 103.9270 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2024",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "11",
    title: "WEST COAST",
    location: { lat: 1.3157, lng: 103.7550 },
    image: "/api/placeholder/400/300",
    services: ["MAINTENANCE & SERVICING OF AIR-CONDITIONING SYSTEM", "MECHANICAL EXHAUST FAN SYSTEM"],
    completedDate: "2024",
    description: "TERM CONTRACT FOR MAINTENANCE & SERVICING OF AIR-CONDITIONING SYSTEM AND MECHANICAL EXHAUST FAN SYSYTEM AT FOOD CENTRES",
    category: "Commercial"
  },
  {
    id: "12",
    title: "HDB DEVICE LEASING CONTRACT",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACT CLAIM"],
    completedDate: "2023",
    description: "SUB CONTRACT CLAIM FOR HDB DEVICE LEASING CONTRACT ST ENGINEERING",
    category: "Commercial"
  },
  {
    id: "13",
    title: "ST ENGINEERING URBAN SOLUTIONS LTD",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["DISMANTLING AND INSTALLATION WORKS"],
    completedDate: "2023",
    description: "SUBCONTRACT FOR THE DISMANTLING AND INSTALLATION OF NEW DIFFUSER AND SENSOR SYSTEMS, INCLUDING LABOUR AND MATERIALS",
    category: "Industrial"
  },
  {
    id: "14",
    title: "TANJONG PAGAR TOWN COUNCIL",
    location: { lat: 1.2800, lng: 103.8500 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2023",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTIGNS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "15",
    title: "TELOK BLANGAH DRIVE/HEIGHTS",
    location: { lat: 1.2765, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2023",
    description: "ELECTRICAL REWIRING TO 14 BLOCKS AT TELOK BLANGAH DRIVE/HEIGHTS",
    category: "Residential"
  },
  {
    id: "16",
    title: "CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    location: { lat: 1.3921, lng: 103.7454 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 20 BLOCKS AT CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    category: "Residential"
  },
  {
    id: "17",
    title: "CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    location: { lat: 1.3921, lng: 103.7454 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 29 BLOCKS AT CHOA CHU KANG STREET 62 AND WOODLANDS DRIVE 50",
    category: "Residential"
  },
  {
    id: "18",
    title: "YUNG HO ROAD",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL LOAD UPGRADING WORKS"],
    completedDate: "2022",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF (ELU) ELECTRICAL LOAD UPGRADING SYSTEMS AT BLOCK 151,152,153 & 154 YUNG HO ROAD JURONG - CLEMANTI TOWN COUNCIL",
    category: "Residential"
  },
  {
    id: "19",
    title: "WOODLANDS DRIVE 40/70, AVE 6, STREET 83",
    location: { lat: 1.4363, lng: 103.7860 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT BLOCK 701 TO 707 WOODLANDS DRIVE 40, BLOCK 708 TO 717 WOODLANDS DRIVE 70, BLOCK 718 TO 720 WOODLANDS AVE 6, BLOCK 853 TO 855 WOODLANDS STREET 83 AND BIN CENTERS",
    category: "Residential"
  },
  {
    id: "20",
    title: "KEAT HONG SHOPPING CENTRE & CHOA CHU KANG AVE 2",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2022",
    description: "ELECTRICAL REWIRING TO KEAT HONG SHOPPING CENTRE AND 6 BLOCKS OF FLATS AT BLOCK 248 TO 252 AND BLK 254 CHOA CHU KANG AVE 2",
    category: "Commercial"
  },
  {
    id: "21",
    title: "LED BATCHES 1 & 2 PROJECTS",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["LIGHTING COMPLAINTS RESPONSE"],
    completedDate: "2021",
    description: "RESPONDING / ATTENDING OF LIGHTING COMPLAINTS FOR LED BATCHES 1 & 2 PROJECTS",
    category: "Maintenance"
  },
  {
    id: "22",
    title: "JURONG WEST STREET 74",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2021",
    description: "ELECTRICAL REWIRING TO 13 BLOCKS OF FLATS AT BLOCK 752 TO 761 AND BLOCK 764 TO 766 JURONG WEST STREET 74",
    category: "Residential"
  },
  {
    id: "23",
    title: "TANJONG PAGAR",
    location: { lat: 1.2800, lng: 103.8500 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2021",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES",
    category: "Commercial"
  },
  {
    id: "24",
    title: "WEST COAST",
    location: { lat: 1.3157, lng: 103.7550 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    completedDate: "2021",
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES FOR WEST COAST TOWN COUNCIL",
    category: "Commercial"
  },
  {
    id: "25",
    title: "CONNECT @ CHANGI EXPO HALL 7 & 8",
    location: { lat: 1.3500, lng: 103.9940 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2021",
    description: "CONNECT @ CHANGI EXPO HALL 7 & 8 FOR ELECTRICAL WORKS",
    category: "Commercial"
  },
  {
    id: "26",
    title: "MULTI STOREY CARPARK",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["A&A WORKS"],
    completedDate: "2021",
    description: "A&A WORKS TO MULTI STOREY CARPARK",
    category: "Commercial"
  },
  {
    id: "27",
    title: "WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    location: { lat: 1.4363, lng: 103.7860 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2020",
    description: "ELECTRICAL REWIRING TO 37 BLOCKS AT BLOCK 822, 823,826, 827, 836, 839, 841, 844, 846, 851 & 856 TO 882 WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    category: "Residential"
  },
  {
    id: "28",
    title: "BIG BOX SITE",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2020",
    description: "SUB CONTRACT FOR THE ELECTRICAL WORK DONE AT SITE BIG BOX FROM 3RD JUNE TO 1ST JULY 2020",
    category: "Commercial"
  },
  {
    id: "29",
    title: "PASIR RIS DRIVE 1/3 & 10",
    location: { lat: 1.3721, lng: 103.9498 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2020",
    description: "ELECTRICAL REWIRING TO 26 BLOCKS AT BLOCK 626 TO 651 PASIR RIS DRIVE 1/3 & 10 FOR PASIR RIS TOWN COUNCIL (DLP PERIOD)",
    category: "Residential"
  },
  {
    id: "30",
    title: "MINISTRY OF HOME AFFAIRS PROPERTIES",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["RETROFITTING WORKS"],
    completedDate: "2019",
    description: "RETROFITTING WORKS TO EXISTING LIGHTING SYSTEM TO THE PROPERTIES UNDER THE MINISTRY OF HOME AFFAIRS IN CENTRAL AND WEST ZONES",
    category: "Commercial"
  },
  {
    id: "31",
    title: "CHUA CHU KANG AVE 3/4",
    location: { lat: 1.3921, lng: 103.7454 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO 34 BLOCKS OF FLATS FOR KEAT HONG DIVISION CHUA CHU KANG AVE 3/4",
    category: "Residential"
  },
  {
    id: "32",
    title: "SP POWER GRID P1A CCTV CAT1 SUBSTATION",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACTOR"],
    completedDate: "2019",
    description: "SUB CONTRACTOR FOR SP POWER GRID P1A CCTV CAT1 SUBSTATION",
    category: "Industrial"
  },
  {
    id: "33",
    title: "CHOA CHU KANG WATERWORKS CONTRACT 3",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["PROCESS UPGRADING"],
    completedDate: "2019",
    description: "PROCESS UPGRADING AT CHOA CHU KANG WATERWORKS CONTRACT 3 - ELECTRO CHLORINATION SYSTEM",
    category: "Industrial"
  },
  {
    id: "34",
    title: "LED INSTALLATION WORKS BATCH 3",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["LED INSTALLATION WORKS"],
    completedDate: "2019",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF LED LUMINAIRES (BATCH 3) AT HDB BLOCKS, OPEN SPACES AND CARPARKS (GROUP 1 & 2)",
    category: "Installation"
  },
  {
    id: "35",
    title: "CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO BLOCKS 523 TO 531, 540 TO 552 CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    category: "Residential"
  },
  {
    id: "36",
    title: "SP POWER GRID P2A CCTV CAT2 SUBSTATION",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["SUB CONTRACTOR"],
    completedDate: "2019",
    description: "SUB CONTRACTOR FOR SP POWER GRID P2A CCTV CAT2 SUBSTATION",
    category: "Industrial"
  },
  {
    id: "37",
    title: "WOODLANDS AVENUE 1/ STREET 32",
    location: { lat: 1.4363, lng: 103.7860 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL REWIRING"],
    completedDate: "2019",
    description: "ELECTRICAL REWIRING TO BLOCK 307, 308, 321 TO 323, 325, 326, 328, 330 & 331 WOODLANDS AVENUE 1/ STREET 32",
    category: "Residential"
  },
  {
    id: "38",
    title: "EMSU TRADEMEN CONTRACT",
    location: { lat: 1.3157, lng: 103.7550 },
    image: "/api/placeholder/400/300",
    services: ["TERM CONTRACT"],
    completedDate: "2018",
    description: "TERM CONTRACT TO PROVIDE EMSU TRADEMEN FOR EAST COAST, CHUA CHU KANG, TAMPINES, PASIR RIS-PUNGGOL, MARINE PARADE, WEST COAST AND JURONG TOWN COUNCIL",
    category: "Maintenance"
  },
  {
    id: "39",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: { lat: 1.2966, lng: 103.7764 },
    image: "/api/placeholder/400/300",
    services: ["LIGHTING & CCTV REPLACEMENTS"],
    completedDate: "2018",
    description: "REPLACEMENT OF EXTERIOR LIGHTING WITH LED LIGHTING AND CCTV OF NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  },
  {
    id: "40",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: { lat: 1.2966, lng: 103.7764 },
    image: "/api/placeholder/400/300",
    services: ["CCTV AND PA SYSTEM INSTALLATIONS"],
    completedDate: "2018",
    description: "SUBCONTRACT FOR CCTV AND PA SYSTEM INSTALLATIONS AT IMRE, NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  },
  {
    id: "41",
    title: "CHANGI AIRPORT T4",
    location: { lat: 1.3644, lng: 103.9915 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT CHANGI AIRPORT T4- KITCHEN PANEL TO ISOLATOR & REMOTE PANEL CABLE, PANEL CABLE INSTALLATION & TERMINATION, MATERIAL FOR LIGHTING CONTROL CABLE WORKS",
    category: "Commercial"
  },
  {
    id: "42",
    title: "MARINA ONE",
    location: { lat: 1.2765, lng: 103.8510 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL & CCTV WORKS"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AND CCTV AT MARINA ONE SITE",
    category: "Commercial"
  },
  {
    id: "43",
    title: "KOPITIAM SITES",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WIRE & TRUNKING"],
    completedDate: "2017",
    description: "SUB CONTRACT FOR INSTALLATION OF ELECTRICAL WIRE & TRUNKING AND RELATED M & E WORKS AT KOPITIAM SITES AT CHANGI AIRPORT T2, BEDOK, SGH, BUKIT PANJANG, VISTA POINT, BUNGKOK, TAMPINES 9, SINGPOST CENTRE",
    category: "Commercial"
  },
  {
    id: "44",
    title: "FAJAR/SAUJANA ROAD",
    location: { lat: 1.3772, lng: 103.7631 },
    image: "/api/placeholder/400/300",
    services: ["ELU WORKS"],
    completedDate: "2017",
    description: "HOLLAND BUKIT PANJANG TOWN COUNCIL ELU WORKS AT HDB FAJAR/SAUJANA ROAD FROM BLK 420 TO 435 CUM 1NO NEW SUBSTATION AND 1 NO EXISTING SUBSTATION",
    category: "Residential"
  },
  {
    id: "45",
    title: "BOUTIQUE HOTEL",
    location: { lat: 1.2976, lng: 103.8568 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL AND CCTV INSTALLATION WORKS"],
    completedDate: "2016",
    description: "SUBCONTRACT WORKS FOR ELECTRICAL AND CCTV INSTALLATION WORK AT BOUTIQUE HOTEL AT 122 MIDDLE ROAD",
    category: "Commercial"
  },
  {
    id: "46",
    title: "CHANGI AIRPORT T4",
    location: { lat: 1.3644, lng: 103.9915 },
    image: "/api/placeholder/400/300",
    services: ["CCTV WORKS"],
    completedDate: "2016",
    description: "SUB CONTRACT FOR CCTV WORK AT TAKANEKA T4 SITE",
    category: "Commercial"
  },
  {
    id: "47",
    title: "CHANGI AIRPORT T4",
    location: { lat: 1.3644, lng: 103.9915 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORK"],
    completedDate: "2016",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT CHANGI AIRPORT T4",
    category: "Commercial"
  },
  {
    id: "48",
    title: "LED INSTALLATIONS BATCH 2",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["LED INSTALLATIONS"],
    completedDate: "2016",
    description: "SUBCONTRACT WORKS FOR THE INSTALLATION OF LED LUMINAIRES (BATCH 2) AT HDB BLOCKS (ZONES 1 & 2)",
    category: "Installation"
  },
  {
    id: "49",
    title: "FUSIONPOLIS 5",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL WORKS"],
    completedDate: "2015",
    description: "SUB CONTRACT FOR ELECTRICAL WORK AT SITE FUSIONPOLIS 5",
    category: "Commercial"
  },
  {
    id: "50",
    title: "NATIONAL UNIVERSITY OF SINGAPORE/CHANGI",
    location: { lat: 1.3521, lng: 103.8198 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL, CCTV AND FIRE ALARM INSTALLATION WORKS"],
    completedDate: "2015",
    description: "SUB CONTRACT FOR ELECTRICAL, CCTV AND FIRE ALARM INSTALLATION AT NATIONAL UNIVERSITY OF SINGAPORE/CHANGI",
    category: "Commercial"
  },
  {
    id: "51",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    location: { lat: 1.2966, lng: 103.7764 },
    image: "/api/placeholder/400/300",
    services: ["ELECTRICAL AND CCTV WORKS"],
    completedDate: "2015",
    description: "SUBCONTRACT WORKS FOR ELECTRICAL AND CCTV WORKS AT MD1, NATIONAL UNIVERSITY OF SINGAPORE",
    category: "Commercial"
  }
];
// Assign all projects to Singapore with distributed coordinates for demo
const singaporeCenter = { lat: 1.3521, lng: 103.8198 };
function getDistributedCoords(idx: number, total: number) {
  // Distribute markers in a spiral around Singapore center
  const angle = (2 * Math.PI * idx) / total;
  const radius = 0.04 + 0.07 * (idx / total); // ~4-11km
  return {
    lat: singaporeCenter.lat + Math.sin(angle) * radius,
    lng: singaporeCenter.lng + Math.cos(angle) * radius,
  };
}

const projects = allProjects.map((p, idx) => ({
  ...p,
  location: getDistributedCoords(idx, allProjects.length),
  image: p.image?.startsWith("/api/placeholder") ? "/images/clients/project" + (((+p.id-1)%10)+1) + ".jpg" : p.image,
}));

const MapWithMarkers = dynamic(() => import("./ProjectMap"), { ssr: false });

export default function ProjectsWithLocation() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="min-h-screen flex flex-col bg-[#040d1a]">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-16">
        <div className="w-full max-w-7xl px-2 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2 tracking-tight">Singapore Project Portfolio</h1>
          <p className="text-center text-slate-400 mb-8 text-lg">Explore our completed projects across Singapore. Click a marker to view project details.</p>
        </div>
        <div className="w-full max-w-7xl flex-1 rounded-2xl overflow-hidden shadow-2xl border border-[#FFC107]/10 bg-[#0a1627] relative" style={{minHeight: 600}}>
          <MapWithMarkers
            projects={projects}
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
