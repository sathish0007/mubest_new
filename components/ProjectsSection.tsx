"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import "../app/certifications/scrollbar-hide.css";
import ProjectMap from "./ProjectMap";
import { basePath } from "@/app/util";

export interface Project {
  id: string;
  title: string;
  location?: string | { lat: number; lng: number };
  projectLocation: string;
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

const projects: Project[] = [
  {
    id: "1",
    title: "BUKIT BATOK EAST & CLEMENTI",
    projectLocation: "BUKIT BATOK EAST & CLEMENTI",
    image: "/images/1.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 46 BLOCKS OF FLATS AT BUKIT BATOK EAST DIVISION AND CLEMENTI DIVISIONS",
    completedDate: "2025",
    category: "Residential"
  },
  {
    id: "2",
    title: "RIVERVALE",
    projectLocation: "RIVERVALE",
    image: "/images/2.png",
    services: ["ELECTRICAL REWIRING & REPLACEMENT OF LAMP POST"],
    description: "ELECTRICAL REWIRING TO 41 BLOCKS & LAMP POLES REPLACEMENT AT RIVERVALE DIVISIONS",
    completedDate: "2025",
    category: "Residential"
  },
  {
    id: "3",
    title: "ANG MO KIO TOWN COUNCIL",
    projectLocation: "ANG MO KIO TOWN COUNCIL",
    image: "/images/3.png",
    services: ["REPLACEMENT OF LAMP POST"],
    description: "REPLACEMENT OF LAMP POST FOR ANG MO KIO TOWN COUNCIL",
    completedDate: "2025",
    category: "Commercial"
  },
  {
    id: "4",
    title: "BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3 / 4",
    projectLocation: "BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3 / 4",
    image: "/images/4.png",
    services: ["Electrical Load Upgrading (Batch 9)"],
    description: "NEIGHBOURHOOD RENEWAL PROGRAMME (BATCH 9) AND ELECTRICAL LOAD UPGRADING FOR BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3 / 4",
    completedDate: "2025",
    category: "Residential"
  },
  {
    id: "5",
    title: "BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA",
    projectLocation: "BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA",
    image: "/images/5.png",
    services: ["ELECTRICAL REWIRING & REPLACEMENT OF LAMP POST"],
    description: "ELECTRICAL REWIRING TO 34 BLOCKS & LAMP POLES REPLACEMENT AT BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA DIVISIONS",
    completedDate: "2025",
    category: "Residential"
  },
  {
    id: "6",
    title: "YEW TEE",
    projectLocation: "YEW TEE",
    image: "/images/6.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT YEW TEE DIVISION",
    completedDate: "2024",
    category: "Residential"
  },
  {
    id: "7",
    title: "ADMIRALTY AND WOODLANDS",
    projectLocation: "ADMIRALTY AND WOODLANDS",
    image: "/images/7.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 66 BLOCKS AT ADMIRALTY AND WOODLANDS DIVISIONS.",
    completedDate: "2024",
    category: "Residential"
  },
  {
    id: "8",
    title: "KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN",
    projectLocation: "KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN",
    image: "/images/8.png",
    services: ["REPLACEMENT OF LAMP POSTS AND UNDERGROUND CABLES AND REWIRING"],
    description: "REPLACEMENT OF LAMP POSTS AND UNDERGROUND CABLES AND REWIRING TO 24 BLOCKS OF FLATS IN KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN DIVISIONS",
    completedDate: "2024",
    category: "Residential"
  },
  {
    id: "9",
    title: "SEMBAWANG WEST",
    projectLocation: "SEMBAWANG WEST",
    image: "/images/9.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 45 BLOCKS AT SEMBAWANG WEST DIVISION",
    completedDate: "2024",
    category: "Residential"
  },
  {
    id: "10",
    title: "PASIR RIS - PUNGGOL",
    projectLocation: "PASIR RIS - PUNGGOL",
    image: "/images/10.png",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES FOR WEST COAST TOWN COUNCIL FOR PASIR RIS - PUNGGOL TOWN COUNCIL.",
    completedDate: "2024",
    category: "Commercial"
  },
  {
    id: "11",
    title: "WEST COAST",
    projectLocation: "WEST COAST",
    image: "/images/11.png",
    services: ["MAINTENANCE & SERVICING OF AIR-CONDITIONING SYSTEM AND MECHANICAL EXHAUST FAN SYSYTEM"],
    description: "",
    completedDate: "2024",
    category: "Commercial"
  },
  {
    id: "12",
    title: "15 TOWN COUNCILS",
    projectLocation: "15 TOWN COUNCILS",
    image: "/images/17.png",
    services: [],
    description: "",
    completedDate: "2023",
    category: "Commercial"
  },
  {
    id: "13",
    title: "ST ENGINEERING URBAN SOLUTIONS LTD [jurong]",
    projectLocation: "ST ENGINEERING URBAN SOLUTIONS LTD [jurong]",
    image: "/images/13.png",
    services: ["DISMANTLING AND INSTALLATION WORKS"],
    description: "",
    completedDate: "2023",
    category: "Industrial"
  },
  {
    id: "14",
    title: "TANJONG PAGAR TOWN COUNCIL",
    projectLocation: "TANJONG PAGAR TOWN COUNCIL",
    image: "/images/14.png",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    description: "",
    completedDate: "2023",
    category: "Commercial"
  },
  {
    id: "15",
    title: "TELOK BLANGAH DRIVE/HEIGHTS",
    projectLocation: "TELOK BLANGAH DRIVE/HEIGHTS",
    image: "/images/15.png",
    services: ["ELECTRICAL REWIRING"],
    description: "",
    completedDate: "2023",
    category: "Residential"
  },
  {
    id: "16",
    title: "CHOA CHU KANG STREET 62",
    projectLocation: "CHOA CHU KANG STREET 62",
    image: "/images/16.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 29 BLOCKS AT CHOA CHU KANG STREET 62",
    completedDate: "2022",
    category: "Residential"
  },
  {
    id: "17",
    title: "WOODLANDS DRIVE 50",
    projectLocation: "WOODLANDS DRIVE 50",
    image: "/images/17.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 29 BLOCKS AT WOODLANDS DRIVE 50",
    completedDate: "2022",
    category: "Residential"
  },
  {
    id: "18",
    title: "YUNG HO ROAD",
    projectLocation: "YUNG HO ROAD",
    image: "/images/18.png",
    services: ["(ELU) ELECTRICAL LOAD UPGRANDING WORKS"],
    description: "ELECTRICAL LOAD UPGRANDING SYSTEMS (ELU) AT BLOCK 151,152,153 & 154 YUNG HO ROAD FOR JURONG - CLEMANTI TOWN COUNCIL",
    completedDate: "2022",
    category: "Residential"
  },
  {
    id: "19",
    title: "WOODLANDS DRIVE 40/70, AVE 6, STREET 83",
    projectLocation: "WOODLANDS DRIVE 40/70, AVE 6, STREET 83",
    image: "/images/19.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 23 BLOCKS AT BLOCK 701 TO 707 WOODLANDS DRIVE 40, BLOCK 708 TO 717 WOODLANDS DRIVE 70, BLOCK 718 TO 720 WOODLANDS AVE 6, BLOCK 853 TO 855 WOODLANDS STREET 83 AND BIN CENTERS.",
    completedDate: "2022",
    category: "Residential"
  },
  {
    id: "20",
    title: "KEAT HONG SHOPPING CENTRE & CHOA CHU KANG AVE 2",
    projectLocation: "KEAT HONG SHOPPING CENTRE & CHOA CHU KANG AVE 2",
    image: "/images/20.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO KEAT HONG SHOPPING CENTRE AND 6 BLOCKS OF FLATS AT BLOCK 248 TO 252 AND BLK 254 CHOA CHU KANG AVE 2",
    completedDate: "2022",
    category: "Commercial"
  },
  {
    id: "21",
    title: "15 TOWN COUNCILS - LED BATCH 1 & 2",
    projectLocation: "15 TOWN COUNCILS",
    image: "/images/17.png",
    services: [],
    description: "RESPONDING / ATTENDING OF LIGHTING COMPLAINTS FOR LED BATCHES 1 & 2 PROJECTS",
    completedDate: "2021",
    category: "Maintenance"
  },
  {
    id: "22",
    title: "JURONG WEST STREET 74",
    projectLocation: "JURONG WEST STREET 74",
    image: "/images/22.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 13 BLOCKS OF FLATS AT BLOCK 752 TO 761 AND BLOCK 764 TO 766 JURONG WEST STREET 74",
    completedDate: "2021",
    category: "Residential"
  },
  {
    id: "23",
    title: "TANJONG PAGAR",
    projectLocation: "TANJONG PAGAR",
    image: "/images/23.png",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES FOR TANJONG PAGAR TOWN COUNCIL",
    completedDate: "2021",
    category: "Commercial"
  },
  {
    id: "24",
    title: "WEST COAST - ELECTRICAL WORKS AND MAINTENANCE",
    projectLocation: "WEST COAST",
    image: "/images/24.png",
    services: ["ELECTRICAL WORKS AND MAINTENANCE"],
    description: "TERM CONTRACT FOR ELECTRICAL WORKS AND MAINTENANCE OF LIGHTINGS TO CARPARKS AND AMENITIES FOR WEST COAST TOWN COUNCIL",
    completedDate: "2021",
    category: "Commercial"
  },
  {
    id: "25",
    title: "CONNECT @ CHANGI EXPO HALL 7 & 8",
    projectLocation: "CONNECT @ CHANGI EXPO HALL 7 & 8",
    image: "/images/25.png",
    services: ["ELECTRICAL WORKS"],
    description: "CONNECT @ CHANGI EXPO HALL 7 & 8 FOR ELECTRICAL WORKS",
    completedDate: "2021",
    category: "Commercial"
  },
  {
    id: "26",
    title: "MULTI STOREY CARPARK",
    projectLocation: "MULTI STOREY CARPARK",
    image: "/images/26.png",
    services: ["A&A WORKS"],
    description: "A&A WORKS TO MULTI STOREY CARPARK",
    completedDate: "2021",
    category: "Commercial"
  },
  {
    id: "27",
    title: "WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    projectLocation: "WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    image: "/images/27.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 37 BLOCKS AT BLOCK 822, 823,826, 827, 836, 839, 841, 844, 846, 851 & 856 TO 882 WOODLANDS STREET 81/82/83/ AVENUE 4/9",
    completedDate: "2020",
    category: "Residential"
  },
  {
    id: "28",
    title: "BIG BOX JURONG",
    projectLocation: "BIG BOX JURONG",
    image: "/images/28.png",
    services: ["ELECTRICAL WORKS"],
    description: "ELECTRICAL WORKS AT SITE BIG BOX FROM 3RD JUNE TO 1ST JULY 2020",
    completedDate: "2020",
    category: "Commercial"
  },
  {
    id: "29",
    title: "PASIR RIS DRIVE 1/3 & 10",
    projectLocation: "PASIR RIS DRIVE 1/3 & 10",
    image: "/images/29.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 26 BLOCKS AT BLOCK 626 TO 651 PASIR RIS DRIVE 1/3 & 10 FOR PASIR RIS TOWN COUNCIL",
    completedDate: "2020",
    category: "Residential"
  },
  // {
  //   id: "30",
  //   title: "MINISTRY OF HOME AFFAIRS IN CENTRAL AND WEST ZONES",
  //   projectLocation: "MINISTRY OF HOME AFFAIRS IN CENTRAL AND WEST ZONES",
  //   image: "/images/30.png",
  //   services: ["RETROFITTING WORKS"],
  //   description: "RETROFITTING WORKS TO EXISTING LIGHTING SYSTEM TO THE PROPERTIES UNDER THE MINISTRY OF HOME AFFAIRS IN CENTRAL AND WEST ZONES",
  //   completedDate: "2019",
  //   category: "Commercial"
  // },
  {
    id: "31",
    title: "CHUA CHU KANG AVE 3/4",
    projectLocation: "CHUA CHU KANG AVE 3/4",
    image: "/images/31.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO 34 BLOCKS OF FLATS FOR KEAT HONG DIVISION CHUA CHU KANG AVE 3/4",
    completedDate: "2019",
    category: "Residential"
  },
  {
    id: "32",
    title: "SPPG P2A CCTV CAT 1 & CAT 2 SUBSTATION",
    projectLocation: "SPPG P2A CCTV CAT 1 & CAT 2 SUBSTATION",
    image: "/images/32.png",
    services: ["ELECTRICAL AND CAMERA INSTALLATION WORKS"],
    description: "ELECTRICAL AND CAMERA INSTALLATION WORKS FOR SPPG P2A CCTV CAT 1 & CAT 2 SUBSTATION",
    completedDate: "2019",
    category: "Industrial"
  },
  {
    id: "33",
    title: "CHOA CHU KANG WATERWORKS",
    projectLocation: "CHOA CHU KANG WATERWORKS",
    image: "/images/33.png",
    services: ["PROCESS UPGRADING"],
    description: "PROCESS UPGRADING AT CHOA CHU KANG WATERWORKS CONTRACT 3 - ELECTRO CHLORINATION SYSTEM",
    completedDate: "2019",
    category: "Industrial"
  },
  {
    id: "34",
    title: "15 TOWN COUNCILS",
    projectLocation: "15 TOWN COUNCILS",
    image: "/images/20.png",
    services: ["LED INSTALLATION WORKS"],
    description: "THE INSTALLATION OF LED LUMINAIRES (BATCH 3) AT HDB BLOCKS, OPEN SPACES AND CARPARKS (GROUP 1 & 2)",
    completedDate: "2019",
    category: "Installation"
  },
  {
    id: "35",
    title: "CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    projectLocation: "CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    image: "/images/35.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO BLOCKS 523 TO 531, 540 TO 552 CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK",
    completedDate: "2019",
    category: "Residential"
  },
  // {
  //   id: "36",
  //   title: "SP POWER GRID P2A CCTV CAT2 SUBSTATION",
  //   projectLocation: "SP POWER GRID P2A CCTV CAT2 SUBSTATION",
  //   image: "/images/36.png",
  //   services: ["SUB CONTRACTOR"],
  //   description: "SUB CONTRACTOR FOR SP POWER GRID P2A CCTV CAT2 SUBSTATION",
  //   completedDate: "2019",
  //   category: "Industrial"
  // },
  {
    id: "37",
    title: "WOODLANDS AVENUE 1/ STREET 32",
    projectLocation: "WOODLANDS AVENUE 1/ STREET 32",
    image: "/images/37.png",
    services: ["ELECTRICAL REWIRING"],
    description: "ELECTRICAL REWIRING TO BLOCK 307, 308, 321 TO 323, 325, 326, 328, 330 & 331 WOODLANDS AVENUE 1/ STREET 32",
    completedDate: "2019",
    category: "Residential"
  },
  {
    id: "38",
    title: "7 TOWN COUNCILS",
    projectLocation: "7 TOWN COUNCILS",
    image: "/images/17.png",
    services: ["TERM CONTRACT"],
    description: "TERM CONTRACT TO PROVIDE EMSU TRADEMEN FOR EAST COAST, CHUA CHU KANG, TAMPINES, PASIR RIS-PUNGGOL, MARINE PARADE, WEST COAST AND JURONG TOWN COUNCIL",
    completedDate: "2018",
    category: "Maintenance"
  },
  {
    id: "39",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    projectLocation: "NATIONAL UNIVERSITY OF SINGAPORE",
    image: "/images/39.png",
    services: ["LIGHTING & CCTV REPLACEMENTS"],
    description: "REPLACEMENT OF EXTERIOR LIGHTING WITH LED LIGHTING AND CCTV OF NATIONAL UNIVERSITY OF SINGAPORE",
    completedDate: "2018",
    category: "Commercial"
  },
  {
    id: "40",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    projectLocation: "NATIONAL UNIVERSITY OF SINGAPORE",
    image: "/images/40.png",
    services: ["CCTV AND PA SYSTEM INSTALLATIONS"],
    description: "ELECTRICAL WORKS , CCTV AND PA SYSTEM INSTALLATIONS AT IMRE, NATIONAL UNIVERSITY OF SINGAPORE",
    completedDate: "2018",
    category: "Commercial"
  },
  // {
  //   id: "41",
  //   title: "CHANGI AIRPORT T4",
  //   projectLocation: "CHANGI AIRPORT T4",
  //   image: "/images/25.png",
  //   services: ["KITCHEN PANEL WORKS"],
  //   description: "CHANGI AIRPORT T4- KITCHEN PANEL, ISOLATOR AND REMOTE PANEL CABLE WORKS.",
  //   completedDate: "2017",
  //   category: "Commercial"
  // },
  {
    id: "42",
    title: "MARINA ONE",
    projectLocation: "MARINA ONE",
    image: "/images/42.png",
    services: ["ELECTRICAL & CCTV WORKS"],
    description: "ELECTRICAL WORK AND CCTV INSTALLATION FOR MARINA ONE SITE",
    completedDate: "2017",
    category: "Commercial"
  },
  {
    id: "43",
    title: "KOPITIAM SITES",
    projectLocation: "KOPITIAM SITES",
    image: "/images/43.png",
    services: ["ELECTRICAL WIRE & TRUNKING"],
    description: "ELECTRICAL AND M & E WORKS AT KOPITIAM SITES AT CHANGI AIRPORT T2, BEDOK, SGH, BUKIT PANJANG, VISTA POINT, BUNGKOK, TAMPINES 9, SINGPOST CENTRE",
    completedDate: "2017",
    category: "Commercial"
  },
  {
    id: "44",
    title: "FAJAR/SAUJANA ROAD",
    projectLocation: "FAJAR/SAUJANA ROAD",
    image: "/images/44.png",
    services: ["ELU WORKS"],
    description: "HOLLAND BUKIT PANJANG TOWN COUNCIL ELU WORKS AT HDB FAJAR/SAUJANA ROAD FROM BLK 420 TO 435 CUM 1NO NEW SUBSTATION AND 1 NO EXISTING SUBSTATION",
    completedDate: "2017",
    category: "Residential"
  },
  {
    id: "45",
    title: "MERCURE HOTEL",
    projectLocation: "MERCURE HOTEL",
    image: "/images/45.png",
    services: ["ELECTRICAL AND CCTV INSTALLATION WORKS"],
    description: "ELECTRICAL WORKS AND CCTV INSTALLATION WORK AT Mercure HOTEL AT 122 MIDDLE ROAD",
    completedDate: "2016",
    category: "Commercial"
  },
  {
    id: "46",
    title: "CHANGI AIRPORT T4",
    projectLocation: "CHANGI AIRPORT T4",
    image: "/images/46.png",
    services: ["CCTV WORKS"],
    description: "CCTV INSTALLATION WORKS AT CHANGI AIRPORT T4 SITE",
    completedDate: "2016",
    category: "Commercial"
  },
  // {
  //   id: "47",
  //   title: "CHANGI AIRPORT T4",
  //   projectLocation: "CHANGI AIRPORT T4",
  //   image: "/images/46.png",
  //   services: ["ELECTRICAL WORK"],
  //   description: "ELECTRICAL WORK AT CHANGI AIRPORT T4",
  //   completedDate: "2016",
  //   category: "Commercial"
  // },
  {
    id: "48",
    title: "LED INSTALLATIONS BATCH 2",
    projectLocation: "LED INSTALLATIONS BATCH 2",
    image: "/images/17.png",
    services: ["LED INSTALLATIONS"],
    description: "INSTALLATION OF LED LUMINAIRES (BATCH 2) AT HDB BLOCKS (ZONES 1 & 2)",
    completedDate: "2016",
    category: "Installation"
  },
  {
    id: "49",
    title: "FUSIONPOLIS 5",
    projectLocation: "FUSIONPOLIS 5",
    image: "/images/49.png",
    services: ["ELECTRICAL WORKS"],
    description: "ELECTRICAL WORK AT SITE FUSIONPOLIS 5",
    completedDate: "2015",
    category: "Commercial"
  },
  {
    id: "50",
    title: "MD11NATIONAL UNIVERSITY OF SINGAPORE",
    projectLocation: "MD11 NATIONAL UNIVERSITY OF SINGAPORE",
    image: "/images/50.png",
    services: ["ELECTRICAL AND CCTV  INSTALLATION WORKS"],
  description: "ELECTRICAL AND CCTV AT MD11 NATIONAL UNIVERSITY OF SINGAPORE",
    completedDate: "2015",
    category: "Commercial"
  },
  {
    id: "51",
    title: "NATIONAL UNIVERSITY OF SINGAPORE",
    projectLocation: "NATIONAL UNIVERSITY OF SINGAPORE",
    image: "/images/51.png",
    services: ["ELECTRICAL AND CCTV WORKS"],
    description: "ELECTRICAL AND CCTV INSTALLATION WORKS AT MD1, NATIONAL UNIVERSITY OF SINGAPORE",
    completedDate: "2015",
    category: "Commercial"
  },
];

export default function ProjectsSection({ previewCount = 20, showAll = false }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projectLocations: { [key: string]: { lat: number; lng: number } } = {
    "BUKIT BATOK EAST & CLEMENTI": { lat: 1.343973, lng: 103.757120 },// map added correctly
    "RIVERVALE": { lat: 1.393468, lng: 103.905250 },// map added correctly
    "ANG MO KIO TOWN COUNCIL": { lat: 1.3647020339308533, lng: 103.84866499562106 },// map added correctly
    "BLOCK 401 TO 428 CHOA CHU KANG AVENUE 3 / 4": { lat: 1.3800424305031431, lng: 103.73974498027775 },// map added correctly
    "BUKIT PANJANG, BUKIT TIMAH, CASHEW, ULU PANDAN, AND ZHENGHUA": { lat: 1.3771477856772014,lng: 103.77226142369692},// map added correctly
    "YEW TEE": { lat: 1.4024444658209438, lng: 103.75108965076157 },// map added correctly
    "ADMIRALTY AND WOODLANDS": { lat: 1.4423932173268903, lng: 103.79937993775327 },// map added correctly
    "KEMBANGAN-CHAI CHEE, MACPHERSON AND MOUNTBATTEN": { lat: 1.317777496643291, lng: 103.90040167603867 },// map added correctly
    "SEMBAWANG WEST": { lat: 1.443111385250676, lng: 103.79917330302402 },// map added correctly
    "PASIR RIS - PUNGGOL": { lat: 1.4014849854956997, lng: 103.90875426069557 },// map added correctly
    "WEST COAST": { lat: 1.302130223264362, lng: 103.76771196784794 },// map added correctly
    "15 TOWN COUNCILS": { lat: 1.4183728196516134, lng: 103.83820176529375 },// map added correctly
    "ST ENGINEERING URBAN SOLUTIONS LTD [jurong]": { lat: 1.3368989949036914, lng: 103.74449249523906 },// map added correctly
    "TANJONG PAGAR TOWN COUNCIL": { lat: 1.2833205954631242, lng: 103.8176696821283 },// map added correctly
    "TELOK BLANGAH DRIVE/HEIGHTS": { lat: 1.276734155881678, lng: 103.81143443489039 },// map added correctly
    "CHOA CHU KANG STREET 62": { lat: 1.3990216087967637, lng: 103.74705596254627 },// map added correctly
    "WOODLANDS DRIVE 50": { lat: 1.4372220804645166, lng: 103.79387107418816 },// map added correctly
    "YUNG HO ROAD": { lat: 1.3267730697797866, lng: 103.72271632445674 },// map added correctly
    "WOODLANDS DRIVE 40/70, AVE 6, STREET 83": { lat: 1.4472135655664335, lng: 103.79873683980031 },// map added correctly
    "KEAT HONG SHOPPING CENTRE & CHOA CHU KANG AVE 2": { lat: 1.3776550133111485, lng: 103.74439399562098 },// map added correctly
    "15 TOWN COUNCILS - LED BATCH 1 & 2": { lat: 1.381214351179909, lng: 103.7855882617301 },// map added correctly
    "JURONG WEST STREET 74": { lat: 1.3496174382567765, lng: 103.6997369220685 },// map added correctly
    "TANJONG PAGAR": { lat: 1.275944557743903, lng: 103.84423503070344 },// map added correctly
    "WEST COAST - ELECTRICAL WORKS AND MAINTENANCE": { lat: 1.3468605406874576, lng: 103.6860243637403 },// map added correctly
    "CONNECT @ CHANGI EXPO HALL 7 & 8": { lat: 1.3356812578852528, lng: 103.96470280057285 },// map added correctly
    "MULTI STOREY CARPARK": { lat: 1.351177785277058, lng: 103.93668339598025 },// map added correctly
    "WOODLANDS STREET 81/82/83/ AVENUE 4/9": { lat: 1.44385784510873, lng: 103.78867155383236 },// map added correctly
    "BIG BOX JURONG": { lat: 1.3328964624848705, lng: 103.74414105806919 },// map added correctly
    "PASIR RIS DRIVE 1/3 & 10": { lat: 1.3698502913317439, lng: 103.95236258212843 },// map added correctly
    "CHUA CHU KANG AVE 3/4": { lat: 1.3815144226332485, lng: 103.7422303846479 },// map added correctly
    "SPPG P2A CCTV CAT 1 & CAT 2 SUBSTATION": { lat: 1.332966140222416, lng: 103.87174111818878 },// map added correctly
    "CHOA CHU KANG WATERWORKS": { lat: 1.3429785012183835, lng: 103.67646887418795 },// map added correctly
    "CHOA CHU KANG ST 51/ST 52 & LIMBANG PARK": { lat: 1.390814316604527, lng: 103.74604361929906 },// map added correctly
    "WOODLANDS AVENUE 1/ STREET 32": { lat: 1.4310940044313525, lng: 103.78116543502368 },// map added correctly
    "7 TOWN COUNCILS": { lat: 1.3825895864033055, lng: 103.89750955291127 },// map added correctly
    "NATIONAL UNIVERSITY OF SINGAPORE": { lat: 1.2978959986174985, lng: 103.77698127418785 },// map added correctly
    "KOPITIAM SITES": { lat: 1.3529816121553786, lng: 103.98826990672532 },// map added correctly
    "FAJAR/SAUJANA ROAD": { lat: 1.3822705871754914, lng: 103.76928323794944 },// map added correctly
    "MERCURE HOTEL": { lat: 1.2846194438752383, lng: 103.85215347697321 },// map added correctly
    "CHANGI AIRPORT T4": { lat: 1.3380730949460906, lng: 103.9831966525957 },// map added correctly
    "LED INSTALLATIONS BATCH 2": { lat: 1.2952255702083624, lng: 103.82217172124777 },// map added correctly
    "MD11NATIONAL UNIVERSITY OF SINGAPORE": { lat: 1.2961447335098157, lng: 103.78234549508328 },// map added correctly
    "FUSIONPOLIS 5": { lat: 1.2989275125766298, lng: 103.78784205476093 },// map added correctly
    "MARINA ONE": { lat: 1.2780336697211097, lng: 103.8534412104265 },// map added correctly
  };

  const projectsWithLocation = projects.map((p, idx) => {
    let matchedLocation = null;
    for (const [key, loc] of Object.entries(projectLocations)) {
      if (p.title.toUpperCase().includes(key)) {
        matchedLocation = loc;
        break;
      }
    }
    if (matchedLocation) {
      return { ...p, location: matchedLocation };
    }
    if (
      typeof p.location === "object" &&
      p.location !== null &&
      typeof (p.location as any).lat === "number" &&
      typeof (p.location as any).lng === "number"
    ) {
      return p;
    }
    const singaporeCenter = { lat: 1.3521, lng: 103.8198 };
    const angle = (2 * Math.PI * idx) / projects.length;
    const radius = 0.04 + 0.07 * (idx / projects.length);
    return {
      ...p,
      location: { lat: singaporeCenter.lat + Math.sin(angle) * radius, lng: singaporeCenter.lng + Math.cos(angle) * radius },
    };
  });

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  if (showAll) {
    const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');
    return (
      <section id="projects" className="py-40 bg-white font-serif relative overflow-visible" style={{ fontFamily: 'Times New Roman, Times, serif', minHeight: '700px' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="font-extrabold text-[44px] md:text-[36px] leading-none tracking-tight text-[#0e4672] mb-4 font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            COMPLETED PROJECTS
          </h2>
          <p className="text-[#0e4672] text-lg max-w-3xl mb-12 leading-relaxed font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            Our electrical projects across Singapore span residential estates to industrial complexes, all delivered with a commitment to quality, safety, and innovation.
          </p>
          <div className="flex gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-sm transition-colors duration-200 border-b-2 ${activeTab === 'map' ? 'border-[#86c0b7] text-[#0e4672] bg-[#86c0b7]' : 'border-transparent text-slate-400 bg-transparent'}`}
              onClick={() => setActiveTab('map')}
            >
              Map View
            </button>
            <button
              className={`px-6 py-2 rounded-t-lg font-bold text-sm transition-colors duration-200 border-b-2 ${activeTab === 'list' ? 'border-[#86c0b7] text-[#0e4672] bg-[#86c0b7]' : 'border-transparent text-slate-400 bg-transparent'}`}
              onClick={() => setActiveTab('list')}
            >
              List View
            </button>
          </div>
          {activeTab === 'map' && (
            <div className="mb-12">
              <div className="w-full max-w-7xl mx-auto">
                <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-[#86c0b7]/10 bg-[#0a1627] relative" style={{ minHeight: 600 }}>
                  {/* @ts-ignore */}
                  <ProjectMap projects={projectsWithLocation} />
                </div>
              </div>
            </div>
          )}
          {activeTab === 'list' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsWithLocation.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group rounded-3xl shadow-2xl border border-[#e0f2f1] bg-white flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_rgba(14,70,114,0.18)] font-serif"
                  style={{ minHeight: 460, animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="w-full h-48 relative">
                    <img
                      src={basePath + project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#86c0b7] text-[#0e4672] font-mono text-xs tracking-[0.1em] uppercase rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center w-full px-6 py-8">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-2xl text-[#0e4672] mb-3 font-serif tracking-tight group-hover:text-[#86c0b7] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-[#86c0b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    {/* <p className="text-[#0e4672] text-sm leading-relaxed max-h-[4.5rem] overflow-hidden font-serif">
                      {project.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </section>
    );
  }

  const projectsToRender = projects.slice(0, previewCount);

  const scrollBy = (amount: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += amount;
    }
  };

  return (
    <>
      <section id="projects" className="py-32 bg-white font-serif relative overflow-hidden" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#0e4672] bg-[#F5F7FA] rounded-full mb-8 opacity-0 animate-fade-up font-serif" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                <span className="w-2 h-2 rounded-full bg-[#86c0b7] animate-pulse" />
                <span className="text-xs text-[#0e4672] tracking-[0.15em] uppercase">
                  Our Portfolio
                </span>
              </div>
              <h2 className="font-extrabold text-[44px] md:text-[36px] leading-none tracking-tight text-[#0e4672] mb-4 opacity-0 animate-fade-up font-serif" style={{ animationDelay: "0.1s", fontFamily: 'Times New Roman, Times, serif' }}>
                COMPLETED PROJECTS
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-[#7dcaa9] text-[#0e4672] font-bold text-sm tracking-[0.15em] uppercase rounded-sm hover:shadow-[0_0_40px_rgba(255,193,7,0.25)] transition-all duration-300 mt-8 md:mt-0">
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <p className="text-[#0e4672] text-lg max-w-3xl mb-12 leading-relaxed opacity-0 animate-fade-up font-serif" style={{ animationDelay: "0.3s", fontFamily: 'Times New Roman, Times, serif' }}>
            Our electrical projects across Singapore span residential estates to industrial complexes, all delivered with a commitment to quality, safety, and innovation.
          </p>
          <div className="relative flex items-center justify-center h-[540px]">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#86c0b7] text-[#0e4672] rounded-full shadow p-2 transition-all disabled:opacity-30 flex items-center justify-center"
              onClick={() => scrollBy(-440)}
              aria-label="Scroll left"
              style={{ marginLeft: '8px', height: '48px', width: '48px' }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div
              ref={carouselRef}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-12 no-scrollbar items-center"
              style={{ scrollBehavior: 'smooth', height: '480px' }}
            >
              {projectsToRender.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group rounded-3xl shadow-2xl border border-[#e0f2f1] bg-white flex flex-col items-center text-center overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_40px_rgba(14,70,114,0.18)] font-serif min-w-[340px] max-w-[340px] snap-center"
                  style={{ minHeight: 420, animationDelay: `${0.5 + index * 0.1}s`, height: '460px' }}
                >
                  <div className="w-full h-56 relative">
                    <img
                      src={basePath + project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#7dcaa9] text-[#0e4672] font-mono text-xs tracking-[0.1em] uppercase rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center w-full px-6 py-8">
                    <h3 className="font-bold text-xl md:text-2xl lg:text-2xl text-[#0e4672] mb-3 font-serif tracking-tight group-hover:text-[#7dcaa9] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-4 h-4 text-[#7dcaa9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[#0e4672] text-sm font-serif">{typeof project.location === 'object' ? 'Singapore' : project.location}</span>
                    </div>
                    {/* <p className="text-[#0e4672] text-sm leading-relaxed max-h-[4.5rem] overflow-hidden font-serif">
                      {project.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#86c0b7] text-[#0e4672] rounded-full shadow p-2 transition-all disabled:opacity-30 flex items-center justify-center"
              onClick={() => scrollBy(440)}
              aria-label="Scroll right"
              style={{ marginRight: '8px', height: '48px', width: '48px' }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </section>
    </>
  );
}