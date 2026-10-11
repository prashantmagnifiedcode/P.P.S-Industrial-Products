import { Product } from './mockProducts';

export interface IsoMaterial {
  code: 'P' | 'M' | 'K' | 'N' | 'S' | 'H';
  name: string;
  colorName: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
  description: string;
}

export const ISO_MATERIALS_MAP: Record<'P' | 'M' | 'K' | 'N' | 'S' | 'H', IsoMaterial> = {
  P: {
    code: 'P',
    name: 'Steel',
    colorName: 'Blue',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    dotColor: '#2563eb',
    description: 'Carbon, alloy, tool steels, and long-chipping structural steels'
  },
  M: {
    code: 'M',
    name: 'Stainless Steel',
    colorName: 'Yellow',
    badgeBg: 'bg-amber-400',
    badgeText: 'text-amber-950 font-black',
    dotColor: '#f59e0b',
    description: 'Austenitic, duplex, and martensitic stainless steels'
  },
  K: {
    code: 'K',
    name: 'Cast Iron',
    colorName: 'Red',
    badgeBg: 'bg-red-600',
    badgeText: 'text-white',
    dotColor: '#dc2626',
    description: 'Grey cast iron, ductile nodular iron, and malleable iron'
  },
  N: {
    code: 'N',
    name: 'Non-Ferrous',
    colorName: 'Green',
    badgeBg: 'bg-emerald-600',
    badgeText: 'text-white',
    dotColor: '#16a34a',
    description: 'Aluminum alloys, copper, brass, bronze, and non-metallic plastics'
  },
  S: {
    code: 'S',
    name: 'Superalloys',
    colorName: 'Orange',
    badgeBg: 'bg-orange-600',
    badgeText: 'text-white',
    dotColor: '#ea580c',
    description: 'Nickel-based superalloys (Inconel, Waspaloy) and Titanium alloys'
  },
  H: {
    code: 'H',
    name: 'Hardened Steel',
    colorName: 'Grey',
    badgeBg: 'bg-slate-700',
    badgeText: 'text-white',
    dotColor: '#475569',
    description: 'Heat-treated steels from 45 HRC to 65 HRC and chill cast irons'
  }
};

export interface CuttingInsert {
  id: string;
  orderCode: string;
  code: string;
  name: string;
  description: string;
  category: 'turning' | 'milling' | 'grooving' | 'threading' | 'udrill';
  categoryLabel: string;
  price: number;
  priceFormatted: string;
  shape: string;
  shapeCode: string;
  image: string;
  brand: string;
  isoMaterials: ('P' | 'M' | 'K' | 'N' | 'S' | 'H')[];
  grade: string;
  coating: string;
  clearanceAngle: string;
  chipbreaker: string;
  cuttingEdges: number;
  dimensions: {
    ic: string;
    thickness: string;
    radius?: string;
  };
  cuttingParams: {
    vc: string;
    fn: string;
    ap: string;
  };
  stockStatus: string;
  moq: string;
  compatibleHolders: string;
  whatsappMessage: string;
  featuredOnHome?: boolean;
}

export const CUTTING_INSERTS: CuttingInsert[] = [
  {
    "id": "lt001",
    "orderCode": "LT001",
    "code": "08IR A60 ISO",
    "name": "08IR A60 ISO LT2527 (Threading)",
    "description": "08IR A60 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1075,
    "priceFormatted": "₹1,075.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT001 (08IR A60 ISO LT2527) - List Price: ₹1075.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt002",
    "orderCode": "LT002",
    "code": "11IR A60 ISO",
    "name": "11IR A60 ISO LT2527 (Threading)",
    "description": "11IR A60 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 675,
    "priceFormatted": "₹675.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT002 (11IR A60 ISO LT2527) - List Price: ₹675.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt003",
    "orderCode": "LT003",
    "code": "11IR A55 ISO",
    "name": "11IR A55 ISO LT2527 (Threading)",
    "description": "11IR A55 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 675,
    "priceFormatted": "₹675.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT003 (11IR A55 ISO LT2527) - List Price: ₹675.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt004",
    "orderCode": "LT004",
    "code": "11IR 1.00 ISO",
    "name": "11IR 1.00 ISO LT2527 (Threading)",
    "description": "11IR 1.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 675,
    "priceFormatted": "₹675.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT004 (11IR 1.00 ISO LT2527) - List Price: ₹675.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt005",
    "orderCode": "LT005",
    "code": "11IR 1.50 ISO",
    "name": "11IR 1.50 ISO LT2527 (Threading)",
    "description": "11IR 1.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 675,
    "priceFormatted": "₹675.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT005 (11IR 1.50 ISO LT2527) - List Price: ₹675.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt006",
    "orderCode": "LT006",
    "code": "16ER 0.75 ISO",
    "name": "16ER 0.75 ISO LT2527 (Threading)",
    "description": "16ER 0.75 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT006 (16ER 0.75 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt007",
    "orderCode": "LT007",
    "code": "16ER 1.00 ISO",
    "name": "16ER 1.00 ISO LT2527 (Threading)",
    "description": "16ER 1.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT007 (16ER 1.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt008",
    "orderCode": "LT008",
    "code": "16ER 1.25 ISO",
    "name": "16ER 1.25 ISO LT2527 (Threading)",
    "description": "16ER 1.25 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT008 (16ER 1.25 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt009",
    "orderCode": "LT009",
    "code": "16ER 1.50 ISO",
    "name": "16ER 1.50 ISO LT2527 (Threading)",
    "description": "16ER 1.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT009 (16ER 1.50 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt010",
    "orderCode": "LT010",
    "code": "16ER 1.75 ISO",
    "name": "16ER 1.75 ISO LT2527 (Threading)",
    "description": "16ER 1.75 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT010 (16ER 1.75 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt011",
    "orderCode": "LT011",
    "code": "16ER 2.00 ISO",
    "name": "16ER 2.00 ISO LT2527 (Threading)",
    "description": "16ER 2.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT011 (16ER 2.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt012",
    "orderCode": "LT012",
    "code": "16ER 2.50 ISO",
    "name": "16ER 2.50 ISO LT2527 (Threading)",
    "description": "16ER 2.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT012 (16ER 2.50 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt013",
    "orderCode": "LT013",
    "code": "16ER 3.00 ISO",
    "name": "16ER 3.00 ISO LT2527 (Threading)",
    "description": "16ER 3.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT013 (16ER 3.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt014",
    "orderCode": "LT014",
    "code": "16IR 1.00 ISO",
    "name": "16IR 1.00 ISO LT2527 (Threading)",
    "description": "16IR 1.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT014 (16IR 1.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt015",
    "orderCode": "LT015",
    "code": "16IR 1.25 ISO",
    "name": "16IR 1.25 ISO LT2527 (Threading)",
    "description": "16IR 1.25 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT015 (16IR 1.25 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt016",
    "orderCode": "LT016",
    "code": "16IR 1.50 ISO",
    "name": "16IR 1.50 ISO LT2527 (Threading)",
    "description": "16IR 1.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT016 (16IR 1.50 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt017",
    "orderCode": "LT017",
    "code": "16IR 1.75 ISO",
    "name": "16IR 1.75 ISO LT2527 (Threading)",
    "description": "16IR 1.75 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT017 (16IR 1.75 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt018",
    "orderCode": "LT018",
    "code": "16IR 2.00 ISO",
    "name": "16IR 2.00 ISO LT2527 (Threading)",
    "description": "16IR 2.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT018 (16IR 2.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt019",
    "orderCode": "LT019",
    "code": "16IR 2.50 ISO",
    "name": "16IR 2.50 ISO LT2527 (Threading)",
    "description": "16IR 2.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT019 (16IR 2.50 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt020",
    "orderCode": "LT020",
    "code": "16IR 3.00 ISO",
    "name": "16IR 3.00 ISO LT2527 (Threading)",
    "description": "16IR 3.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 745,
    "priceFormatted": "₹745.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT020 (16IR 3.00 ISO LT2527) - List Price: ₹745.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt021",
    "orderCode": "LT021",
    "code": "22ER 3.50 ISO",
    "name": "22ER 3.50 ISO LT2527 (Threading)",
    "description": "22ER 3.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT021 (22ER 3.50 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt022",
    "orderCode": "LT022",
    "code": "22ER 4.00 ISO",
    "name": "22ER 4.00 ISO LT2527 (Threading)",
    "description": "22ER 4.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT022 (22ER 4.00 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt023",
    "orderCode": "LT023",
    "code": "22ER 4.50 ISO",
    "name": "22ER 4.50 ISO LT2527 (Threading)",
    "description": "22ER 4.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT023 (22ER 4.50 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt024",
    "orderCode": "LT024",
    "code": "22ER 5.00 ISO",
    "name": "22ER 5.00 ISO LT2527 (Threading)",
    "description": "22ER 5.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT024 (22ER 5.00 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt025",
    "orderCode": "LT025",
    "code": "22IR 3.50 ISO",
    "name": "22IR 3.50 ISO LT2527 (Threading)",
    "description": "22IR 3.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT025 (22IR 3.50 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt026",
    "orderCode": "LT026",
    "code": "22IR 4.00 ISO",
    "name": "22IR 4.00 ISO LT2527 (Threading)",
    "description": "22IR 4.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT026 (22IR 4.00 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt027",
    "orderCode": "LT027",
    "code": "22IR 4.50 ISO",
    "name": "22IR 4.50 ISO LT2527 (Threading)",
    "description": "22IR 4.50 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT027 (22IR 4.50 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt028",
    "orderCode": "LT028",
    "code": "22IR 5.00 ISO",
    "name": "22IR 5.00 ISO LT2527 (Threading)",
    "description": "22IR 5.00 ISO LT2527",
    "category": "threading",
    "categoryLabel": "Threading",
    "price": 1225,
    "priceFormatted": "₹1,225.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/16er-threading.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT028 (22IR 5.00 ISO LT2527) - List Price: ₹1225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt029",
    "orderCode": "LT029",
    "code": "LDC 2.00 -0.20",
    "name": "LDC 2.00 -0.20 LT2527 (Grooving)",
    "description": "LDC 2.00 -0.20 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT029 (LDC 2.00 -0.20 LT2527) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt030",
    "orderCode": "LT030",
    "code": "LDC 3.00 -0.20",
    "name": "LDC 3.00 -0.20 LT2527 (Grooving)",
    "description": "LDC 3.00 -0.20 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 425,
    "priceFormatted": "₹425.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT030 (LDC 3.00 -0.20 LT2527) - List Price: ₹425.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt031",
    "orderCode": "LT031",
    "code": "LDC 4.00 -0.20",
    "name": "LDC 4.00 -0.20 LT2527 (Grooving)",
    "description": "LDC 4.00 -0.20 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT031 (LDC 4.00 -0.20 LT2527) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt032",
    "orderCode": "LT032",
    "code": "LDC 5.00 -0.20",
    "name": "LDC 5.00 -0.20 LT2527 (Grooving)",
    "description": "LDC 5.00 -0.20 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 635,
    "priceFormatted": "₹635.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT032 (LDC 5.00 -0.20 LT2527) - List Price: ₹635.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt033",
    "orderCode": "LT033",
    "code": "LDC 6.00 -0.20",
    "name": "LDC 6.00 -0.20 LT2527 (Grooving)",
    "description": "LDC 6.00 -0.20 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 725,
    "priceFormatted": "₹725.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT033 (LDC 6.00 -0.20 LT2527) - List Price: ₹725.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt034",
    "orderCode": "LT034",
    "code": "LDT 2.00-1.00 RU",
    "name": "LDT 2.00-1.00 RU LT2527 (Grooving)",
    "description": "LDT 2.00-1.00 RU LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 485,
    "priceFormatted": "₹485.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT034 (LDT 2.00-1.00 RU LT2527) - List Price: ₹485.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt035",
    "orderCode": "LT035",
    "code": "LDT 3.00-1.50 RU",
    "name": "LDT 3.00-1.50 RU LT2527 (Grooving)",
    "description": "LDT 3.00-1.50 RU LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT035 (LDT 3.00-1.50 RU LT2527) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt036",
    "orderCode": "LT036",
    "code": "LDT 4.00-2.00 RU",
    "name": "LDT 4.00-2.00 RU LT2527 (Grooving)",
    "description": "LDT 4.00-2.00 RU LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT036 (LDT 4.00-2.00 RU LT2527) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt037",
    "orderCode": "LT037",
    "code": "LDT 5.00-2.50 RU",
    "name": "LDT 5.00-2.50 RU LT2527 (Grooving)",
    "description": "LDT 5.00-2.50 RU LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 750,
    "priceFormatted": "₹750.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT037 (LDT 5.00-2.50 RU LT2527) - List Price: ₹750.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt038",
    "orderCode": "LT038",
    "code": "LDT 6.00-3.00RU",
    "name": "LDT 6.00-3.00RU LT2527 (Grooving)",
    "description": "LDT 6.00-3.00RU LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 875,
    "priceFormatted": "₹875.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT038 (LDT 6.00-3.00RU LT2527) - List Price: ₹875.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt039",
    "orderCode": "LT039",
    "code": "MGMN150",
    "name": "MGMN150 LT2527 (Grooving)",
    "description": "MGMN150 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT039 (MGMN150 LT2527) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt040",
    "orderCode": "LT040",
    "code": "MGMN200",
    "name": "MGMN200 LT2527 (Grooving)",
    "description": "MGMN200 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT040 (MGMN200 LT2527) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt041",
    "orderCode": "LT041",
    "code": "MGMN300",
    "name": "MGMN300 LT2527 (Grooving)",
    "description": "MGMN300 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 425,
    "priceFormatted": "₹425.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT041 (MGMN300 LT2527) - List Price: ₹425.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt042",
    "orderCode": "LT042",
    "code": "MGMN400",
    "name": "MGMN400 LT2527 (Grooving)",
    "description": "MGMN400 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT042 (MGMN400 LT2527) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt043",
    "orderCode": "LT043",
    "code": "MGMN500",
    "name": "MGMN500 LT2527 (Grooving)",
    "description": "MGMN500 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 635,
    "priceFormatted": "₹635.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT043 (MGMN500 LT2527) - List Price: ₹635.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt044",
    "orderCode": "LT044",
    "code": "MGMN600",
    "name": "MGMN600 LT2527 (Grooving)",
    "description": "MGMN600 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 725,
    "priceFormatted": "₹725.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT044 (MGMN600 LT2527) - List Price: ₹725.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt045",
    "orderCode": "LT045",
    "code": "MRMN200",
    "name": "MRMN200 LT2527 (Grooving)",
    "description": "MRMN200 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 485,
    "priceFormatted": "₹485.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT045 (MRMN200 LT2527) - List Price: ₹485.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt046",
    "orderCode": "LT046",
    "code": "MRMN300",
    "name": "MRMN300 LT2527 (Grooving)",
    "description": "MRMN300 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT046 (MRMN300 LT2527) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt047",
    "orderCode": "LT047",
    "code": "MRMN400",
    "name": "MRMN400 LT2527 (Grooving)",
    "description": "MRMN400 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT047 (MRMN400 LT2527) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt048",
    "orderCode": "LT048",
    "code": "MRMN500",
    "name": "MRMN500 LT2527 (Grooving)",
    "description": "MRMN500 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 750,
    "priceFormatted": "₹750.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT048 (MRMN500 LT2527) - List Price: ₹750.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt049",
    "orderCode": "LT049",
    "code": "MRMN600",
    "name": "MRMN600 LT2527 (Grooving)",
    "description": "MRMN600 LT2527",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 875,
    "priceFormatted": "₹875.00",
    "shape": "Double-End Grooving",
    "shapeCode": "D",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT049 (MRMN600 LT2527) - List Price: ₹875.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt050",
    "orderCode": "LT050",
    "code": "GRIP5008YKT",
    "name": "GRIP5008YKT (Grooving)",
    "description": "GRIP5008YKT",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 1480,
    "priceFormatted": "₹1,480.00",
    "shape": "Grooving",
    "shapeCode": "G",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT050 (GRIP5008YKT) - List Price: ₹1480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt051",
    "orderCode": "LT051",
    "code": "GDM5020N-080 GMKT",
    "name": "GDM5020N-080 GMKT (Grooving)",
    "description": "GDM5020N-080 GMKT",
    "category": "grooving",
    "categoryLabel": "Grooving",
    "price": 1050,
    "priceFormatted": "₹1,050.00",
    "shape": "Grooving",
    "shapeCode": "G",
    "image": "/lexustec/mgmn-grooving.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT051 (GDM5020N-080 GMKT) - List Price: ₹1050.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt052",
    "orderCode": "LT052",
    "code": "SPGT 040204 DG",
    "name": "SPGT 040204 DG LT2527 (U-Drill)",
    "description": "SPGT 040204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT052 (SPGT 040204 DG LT2527) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt053",
    "orderCode": "LT053",
    "code": "SPGT 050204 DG",
    "name": "SPGT 050204 DG LT2527 (U-Drill)",
    "description": "SPGT 050204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT053 (SPGT 050204 DG LT2527) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt054",
    "orderCode": "LT054",
    "code": "SPGT 060204 DG",
    "name": "SPGT 060204 DG LT2527 (U-Drill)",
    "description": "SPGT 060204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT054 (SPGT 060204 DG LT2527) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt055",
    "orderCode": "LT055",
    "code": "SPGT 07T308 DG",
    "name": "SPGT 07T308 DG LT2527 (U-Drill)",
    "description": "SPGT 07T308 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT055 (SPGT 07T308 DG LT2527) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt056",
    "orderCode": "LT056",
    "code": "SPGT 090408 DG",
    "name": "SPGT 090408 DG LT2527 (U-Drill)",
    "description": "SPGT 090408 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 485,
    "priceFormatted": "₹485.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT056 (SPGT 090408 DG LT2527) - List Price: ₹485.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt057",
    "orderCode": "LT057",
    "code": "SPGT 110408 DG",
    "name": "SPGT 110408 DG LT2527 (U-Drill)",
    "description": "SPGT 110408 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 670,
    "priceFormatted": "₹670.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT057 (SPGT 110408 DG LT2527) - List Price: ₹670.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt058",
    "orderCode": "LT058",
    "code": "SPGT 140512 DG",
    "name": "SPGT 140512 DG LT2527 (U-Drill)",
    "description": "SPGT 140512 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 780,
    "priceFormatted": "₹780.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT058 (SPGT 140512 DG LT2527) - List Price: ₹780.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt059",
    "orderCode": "LT059",
    "code": "SPMG 040204 DG",
    "name": "SPMG 040204 DG LT2527 (U-Drill)",
    "description": "SPMG 040204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT059 (SPMG 040204 DG LT2527) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt060",
    "orderCode": "LT060",
    "code": "SPMG 050204 DG",
    "name": "SPMG 050204 DG LT2527 (U-Drill)",
    "description": "SPMG 050204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT060 (SPMG 050204 DG LT2527) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt061",
    "orderCode": "LT061",
    "code": "SPMG 060204 DG",
    "name": "SPMG 060204 DG LT2527 (U-Drill)",
    "description": "SPMG 060204 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT061 (SPMG 060204 DG LT2527) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt062",
    "orderCode": "LT062",
    "code": "SPMG 07T308 DG",
    "name": "SPMG 07T308 DG LT2527 (U-Drill)",
    "description": "SPMG 07T308 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT062 (SPMG 07T308 DG LT2527) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt063",
    "orderCode": "LT063",
    "code": "SPMG 090408 DG",
    "name": "SPMG 090408 DG LT2527 (U-Drill)",
    "description": "SPMG 090408 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 485,
    "priceFormatted": "₹485.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT063 (SPMG 090408 DG LT2527) - List Price: ₹485.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt064",
    "orderCode": "LT064",
    "code": "SPMG 110408 DG",
    "name": "SPMG 110408 DG LT2527 (U-Drill)",
    "description": "SPMG 110408 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 670,
    "priceFormatted": "₹670.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT064 (SPMG 110408 DG LT2527) - List Price: ₹670.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt065",
    "orderCode": "LT065",
    "code": "SPMG 140512 DG",
    "name": "SPMG 140512 DG LT2527 (U-Drill)",
    "description": "SPMG 140512 DG LT2527",
    "category": "udrill",
    "categoryLabel": "U-Drill",
    "price": 780,
    "priceFormatted": "₹780.00",
    "shape": "Square U-Drill (S)",
    "shapeCode": "S",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT065 (SPMG 140512 DG LT2527) - List Price: ₹780.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt066",
    "orderCode": "LT066",
    "code": "APMT 1135PDER",
    "name": "APMT 1135PDER  LT5080 (Milling)",
    "description": "APMT 1135PDER  LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 310,
    "priceFormatted": "₹310.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT066 (APMT 1135PDER  LT5080) - List Price: ₹310.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt067",
    "orderCode": "LT067",
    "code": "APMT 1135PDER",
    "name": "APMT 1135PDER  LT2527 (Milling)",
    "description": "APMT 1135PDER  LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 335,
    "priceFormatted": "₹335.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT067 (APMT 1135PDER  LT2527) - List Price: ₹335.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt068",
    "orderCode": "LT068",
    "code": "APGT 1135 PER AL",
    "name": "APGT 1135 PER AL LT10 (Milling)",
    "description": "APGT 1135 PER AL LT10",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 310,
    "priceFormatted": "₹310.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "N"
    ],
    "grade": "LT10",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT068 (APGT 1135 PER AL LT10) - List Price: ₹310.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt069",
    "orderCode": "LT069",
    "code": "APMT 1604PDER",
    "name": "APMT 1604PDER  LT5080 (Milling)",
    "description": "APMT 1604PDER  LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 328,
    "priceFormatted": "₹328.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT069 (APMT 1604PDER  LT5080) - List Price: ₹328.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt070",
    "orderCode": "LT070",
    "code": "APMT 1604PDER",
    "name": "APMT 1604PDER  LT2527 (Milling)",
    "description": "APMT 1604PDER  LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 328,
    "priceFormatted": "₹328.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT070 (APMT 1604PDER  LT2527) - List Price: ₹328.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt071",
    "orderCode": "LT071",
    "code": "APMT 160420PDER",
    "name": "APMT 160420PDER LT5080 (Milling)",
    "description": "APMT 160420PDER LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 428,
    "priceFormatted": "₹428.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT071 (APMT 160420PDER LT5080) - List Price: ₹428.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt072",
    "orderCode": "LT072",
    "code": "APGT 1604 PER AL",
    "name": "APGT 1604 PER AL LT10 (Milling)",
    "description": "APGT 1604 PER AL LT10",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 328,
    "priceFormatted": "₹328.00",
    "shape": "Parallelogram 85° (A)",
    "shapeCode": "P",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "N"
    ],
    "grade": "LT10",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT072 (APGT 1604 PER AL LT10) - List Price: ₹328.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt073",
    "orderCode": "LT073",
    "code": "BNM-120KT",
    "name": "BNM-120KT LT5080 (Milling)",
    "description": "BNM-120KT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 2150,
    "priceFormatted": "₹2,150.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT073 (BNM-120KT LT5080) - List Price: ₹2150.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt074",
    "orderCode": "LT074",
    "code": "BNM-160KT",
    "name": "BNM-160KT LT5080 (Milling)",
    "description": "BNM-160KT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 2350,
    "priceFormatted": "₹2,350.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT074 (BNM-160KT LT5080) - List Price: ₹2350.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt075",
    "orderCode": "LT075",
    "code": "BNM-200KT",
    "name": "BNM-200KT LT5080 (Milling)",
    "description": "BNM-200KT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 2850,
    "priceFormatted": "₹2,850.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT075 (BNM-200KT LT5080) - List Price: ₹2850.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt076",
    "orderCode": "LT076",
    "code": "BNM-250KT",
    "name": "BNM-250KT LT5080 (Milling)",
    "description": "BNM-250KT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 3290,
    "priceFormatted": "₹3,290.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT076 (BNM-250KT LT5080) - List Price: ₹3290.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt077",
    "orderCode": "LT077",
    "code": "HNMX 090608",
    "name": "HNMX 090608 (Milling)",
    "description": "HNMX 090608",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 950,
    "priceFormatted": "₹950.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT077 (HNMX 090608) - List Price: ₹950.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt078",
    "orderCode": "LT078",
    "code": "LNMU 0303 ZER",
    "name": "LNMU 0303 ZER LT8070 (Milling)",
    "description": "LNMU 0303 ZER LT8070",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 310,
    "priceFormatted": "₹310.00",
    "shape": "Rectangular (L)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT078 (LNMU 0303 ZER LT8070) - List Price: ₹310.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt079",
    "orderCode": "LT079",
    "code": "LNMU 0303 ZER",
    "name": "LNMU 0303 ZER LT5080 (Milling)",
    "description": "LNMU 0303 ZER LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 310,
    "priceFormatted": "₹310.00",
    "shape": "Rectangular (L)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT079 (LNMU 0303 ZER LT5080) - List Price: ₹310.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt080",
    "orderCode": "LT080",
    "code": "LNGU 15T608SRGEKT",
    "name": "LNGU 15T608SRGEKT (Milling)",
    "description": "LNGU 15T608SRGEKT",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 944,
    "priceFormatted": "₹944.00",
    "shape": "Rectangular (L)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT080 (LNGU 15T608SRGEKT) - List Price: ₹944.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt081",
    "orderCode": "LT081",
    "code": "MPHW060308ZELK",
    "name": "MPHW060308ZELK (Milling)",
    "description": "MPHW060308ZELK",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT081 (MPHW060308ZELK) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt082",
    "orderCode": "LT082",
    "code": "NNMU200608ZEN MK",
    "name": "NNMU200608ZEN MK (Milling)",
    "description": "NNMU200608ZEN MK",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 1249,
    "priceFormatted": "₹1,249.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT082 (NNMU200608ZEN MK) - List Price: ₹1249.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt083",
    "orderCode": "LT083",
    "code": "NNMU200708ZEN MK",
    "name": "NNMU200708ZEN MK (Milling)",
    "description": "NNMU200708ZEN MK",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 1375,
    "priceFormatted": "₹1,375.00",
    "shape": "Milling",
    "shapeCode": "M",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT083 (NNMU200708ZEN MK) - List Price: ₹1375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt084",
    "orderCode": "LT084",
    "code": "ODMT040408EN41K",
    "name": "ODMT040408EN41K (Milling)",
    "description": "ODMT040408EN41K",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 584,
    "priceFormatted": "₹584.00",
    "shape": "Octagonal (O)",
    "shapeCode": "O",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT084 (ODMT040408EN41K) - List Price: ₹584.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt085",
    "orderCode": "LT085",
    "code": "ONMU 060408 GM",
    "name": "ONMU 060408 GM (Milling)",
    "description": "ONMU 060408 GM (16-Edge Octagonal)",
    "category": "milling",
    "categoryLabel": "Heavy Milling",
    "price": 722,
    "priceFormatted": "₹722.00",
    "shape": "Octagonal (O)",
    "shapeCode": "O",
    "image": "/lexustec/onmu-octagonal.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 16,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT085 (ONMU 060408 GM) - List Price: ₹722.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt086",
    "orderCode": "LT086",
    "code": "PNMU 0905XNER-GM",
    "name": "PNMU 0905XNER-GM (Milling)",
    "description": "PNMU 0905XNER-GM",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 680,
    "priceFormatted": "₹680.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT086 (PNMU 0905XNER-GM) - List Price: ₹680.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt087",
    "orderCode": "LT087",
    "code": "RCMT 0803MOT",
    "name": "RCMT 0803MOT LT5080 (Milling)",
    "description": "RCMT 0803MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 390,
    "priceFormatted": "₹390.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT087 (RCMT 0803MOT LT5080) - List Price: ₹390.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt088",
    "orderCode": "LT088",
    "code": "RPMT 10T3 MOT",
    "name": "RPMT 10T3 MOT LT5080 (Milling)",
    "description": "RPMT 10T3 MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 310,
    "priceFormatted": "₹310.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT088 (RPMT 10T3 MOT LT5080) - List Price: ₹310.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt089",
    "orderCode": "LT089",
    "code": "RPMT 10T3 MOT",
    "name": "RPMT 10T3 MOT LT2527 (Milling)",
    "description": "RPMT 10T3 MOT LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 335,
    "priceFormatted": "₹335.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT089 (RPMT 10T3 MOT LT2527) - List Price: ₹335.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt090",
    "orderCode": "LT090",
    "code": "RDMW 1204 MOT BM",
    "name": "RDMW 1204 MOT BM LT5080 (Milling)",
    "description": "RDMW 1204 MOT BM LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 300,
    "priceFormatted": "₹300.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT090 (RDMW 1204 MOT BM LT5080) - List Price: ₹300.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt091",
    "orderCode": "LT091",
    "code": "RDMW 1204 MOT BM",
    "name": "RDMW 1204 MOT BM LT2527 (Milling)",
    "description": "RDMW 1204 MOT BM LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 345,
    "priceFormatted": "₹345.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT091 (RDMW 1204 MOT BM LT2527) - List Price: ₹345.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt092",
    "orderCode": "LT092",
    "code": "RPMT 1204 MOT",
    "name": "RPMT 1204 MOT LT5080 (Milling)",
    "description": "RPMT 1204 MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 300,
    "priceFormatted": "₹300.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT092 (RPMT 1204 MOT LT5080) - List Price: ₹300.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt093",
    "orderCode": "LT093",
    "code": "RPMT 1204 MOT",
    "name": "RPMT 1204 MOT LT2527 (Milling)",
    "description": "RPMT 1204 MOT LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 345,
    "priceFormatted": "₹345.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT093 (RPMT 1204 MOT LT2527) - List Price: ₹345.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt094",
    "orderCode": "LT094",
    "code": "RDMT 1604MOT",
    "name": "RDMT 1604MOT LT5080 (Milling)",
    "description": "RDMT 1604MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 580,
    "priceFormatted": "₹580.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT094 (RDMT 1604MOT LT5080) - List Price: ₹580.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt095",
    "orderCode": "LT095",
    "code": "RDMT 1604MOT",
    "name": "RDMT 1604MOT LT5080 (Milling)",
    "description": "RDMT 1604MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 620,
    "priceFormatted": "₹620.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT095 (RDMT 1604MOT LT5080) - List Price: ₹620.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt096",
    "orderCode": "LT096",
    "code": "RCMT 2006MOT",
    "name": "RCMT 2006MOT LT5080 (Milling)",
    "description": "RCMT 2006MOT LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 1050,
    "priceFormatted": "₹1,050.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT096 (RCMT 2006MOT LT5080) - List Price: ₹1050.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt097",
    "orderCode": "LT097",
    "code": "RCMT 2006MOT",
    "name": "RCMT 2006MOT LT2527 (Milling)",
    "description": "RCMT 2006MOT LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 1150,
    "priceFormatted": "₹1,150.00",
    "shape": "Round (R)",
    "shapeCode": "R",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT097 (RCMT 2006MOT LT2527) - List Price: ₹1150.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt098",
    "orderCode": "LT098",
    "code": "SDMT 120512",
    "name": "SDMT 120512 LT5080 (Milling)",
    "description": "SDMT 120512 LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 460,
    "priceFormatted": "₹460.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT098 (SDMT 120512 LT5080) - List Price: ₹460.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt099",
    "orderCode": "LT099",
    "code": "SDMT 120512",
    "name": "SDMT 120512 LT2527 (Milling)",
    "description": "SDMT 120512 LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 460,
    "priceFormatted": "₹460.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT099 (SDMT 120512 LT2527) - List Price: ₹460.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt100",
    "orderCode": "LT100",
    "code": "SNMX 1206 ANN",
    "name": "SNMX 1206 ANN LT2527 (Milling)",
    "description": "SNMX 1206 ANN LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 720,
    "priceFormatted": "₹720.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT100 (SNMX 1206 ANN LT2527) - List Price: ₹720.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt101",
    "orderCode": "LT101",
    "code": "SNMU 120608HNEN",
    "name": "SNMU 120608HNEN (Milling)",
    "description": "SNMU 120608HNEN",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 720,
    "priceFormatted": "₹720.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT101 (SNMU 120608HNEN) - List Price: ₹720.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt102",
    "orderCode": "LT102",
    "code": "SNMU 130708ZNER",
    "name": "SNMU 130708ZNER (Milling)",
    "description": "SNMU 130708ZNER",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 875,
    "priceFormatted": "₹875.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT102 (SNMU 130708ZNER) - List Price: ₹875.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt103",
    "orderCode": "LT103",
    "code": "TPKN2204 PDER",
    "name": "TPKN2204 PDER LT2527 (Milling)",
    "description": "TPKN2204 PDER LT2527",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 355,
    "priceFormatted": "₹355.00",
    "shape": "Laydown Threading",
    "shapeCode": "L",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT103 (TPKN2204 PDER LT2527) - List Price: ₹355.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt104",
    "orderCode": "LT104",
    "code": "WNMG 04030E GM",
    "name": "WNMG 04030E GM LT5080 (Milling)",
    "description": "WNMG 04030E GM LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 465,
    "priceFormatted": "₹465.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT104 (WNMG 04030E GM LT5080) - List Price: ₹465.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt105",
    "orderCode": "LT105",
    "code": "WNMU 080608 GM",
    "name": "WNMU 080608 GM LT5080 (Milling)",
    "description": "WNMU 080608 GM LT5080",
    "category": "milling",
    "categoryLabel": "Milling",
    "price": 520,
    "priceFormatted": "₹520.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/apmt-milling.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "S"
    ],
    "grade": "LT5080",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT105 (WNMU 080608 GM LT5080) - List Price: ₹520.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt106",
    "orderCode": "LT106",
    "code": "CCMT060202 PC",
    "name": "CCMT060202 PC LT8070 (Turning)",
    "description": "CCMT060202 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT106 (CCMT060202 PC LT8070) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt107",
    "orderCode": "LT107",
    "code": "CCMT 060204 PC",
    "name": "CCMT 060204 PC LT8070 (Turning)",
    "description": "CCMT 060204 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT107 (CCMT 060204 PC LT8070) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt108",
    "orderCode": "LT108",
    "code": "CCMT 060208 PC",
    "name": "CCMT 060208 PC LT8070 (Turning)",
    "description": "CCMT 060208 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT108 (CCMT 060208 PC LT8070) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt109",
    "orderCode": "LT109",
    "code": "CCMT060202 PC",
    "name": "CCMT060202 PC LT 3200 (Turning)",
    "description": "CCMT060202 PC LT 3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT109 (CCMT060202 PC LT 3200) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt110",
    "orderCode": "LT110",
    "code": "CCMT 060204 PC",
    "name": "CCMT 060204 PC LT3200 (Turning)",
    "description": "CCMT 060204 PC LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT110 (CCMT 060204 PC LT3200) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt111",
    "orderCode": "LT111",
    "code": "CCMT 060208 PC",
    "name": "CCMT 060208 PC LT3200 (Turning)",
    "description": "CCMT 060208 PC LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 225,
    "priceFormatted": "₹225.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT111 (CCMT 060208 PC LT3200) - List Price: ₹225.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt112",
    "orderCode": "LT112",
    "code": "CCMT 060202 LG",
    "name": "CCMT 060202 LG LT2000 (Turning)",
    "description": "CCMT 060202 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 245,
    "priceFormatted": "₹245.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT112 (CCMT 060202 LG LT2000) - List Price: ₹245.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt113",
    "orderCode": "LT113",
    "code": "CCMT 060204 LG",
    "name": "CCMT 060204 LG LT2000 (Turning)",
    "description": "CCMT 060204 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 245,
    "priceFormatted": "₹245.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT113 (CCMT 060204 LG LT2000) - List Price: ₹245.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt114",
    "orderCode": "LT114",
    "code": "CCMT 060208 LG",
    "name": "CCMT 060208 LG LT2000 (Turning)",
    "description": "CCMT 060208 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 245,
    "priceFormatted": "₹245.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT114 (CCMT 060208 LG LT2000) - List Price: ₹245.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt115",
    "orderCode": "LT115",
    "code": "CCMT 060202LG",
    "name": "CCMT 060202LG LV2020 (Turning)",
    "description": "CCMT 060202LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 275,
    "priceFormatted": "₹275.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT115 (CCMT 060202LG LV2020) - List Price: ₹275.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt116",
    "orderCode": "LT116",
    "code": "CCMT 060204LG",
    "name": "CCMT 060204LG LV2020 (Turning)",
    "description": "CCMT 060204LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 275,
    "priceFormatted": "₹275.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT116 (CCMT 060204LG LV2020) - List Price: ₹275.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt117",
    "orderCode": "LT117",
    "code": "CCMT 060208LG",
    "name": "CCMT 060208LG LV2020 (Turning)",
    "description": "CCMT 060208LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 275,
    "priceFormatted": "₹275.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT117 (CCMT 060208LG LV2020) - List Price: ₹275.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt118",
    "orderCode": "LT118",
    "code": "CCMT 09T302 PC",
    "name": "CCMT 09T302 PC LT3200 (Turning)",
    "description": "CCMT 09T302 PC LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT118 (CCMT 09T302 PC LT3200) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt119",
    "orderCode": "LT119",
    "code": "CCMT 09T304 PC",
    "name": "CCMT 09T304 PC LT3200 (Turning)",
    "description": "CCMT 09T304 PC LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT119 (CCMT 09T304 PC LT3200) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt120",
    "orderCode": "LT120",
    "code": "CCMT 09T308 PC",
    "name": "CCMT 09T308 PC LT3200 (Turning)",
    "description": "CCMT 09T308 PC LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT120 (CCMT 09T308 PC LT3200) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt121",
    "orderCode": "LT121",
    "code": "CCMT 09T302 PC",
    "name": "CCMT 09T302 PC LT8070 (Turning)",
    "description": "CCMT 09T302 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT121 (CCMT 09T302 PC LT8070) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt122",
    "orderCode": "LT122",
    "code": "CCMT 09T304 PC",
    "name": "CCMT 09T304 PC LT8070 (Turning)",
    "description": "CCMT 09T304 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT122 (CCMT 09T304 PC LT8070) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt123",
    "orderCode": "LT123",
    "code": "CCMT 09T308 PC",
    "name": "CCMT 09T308 PC LT8070 (Turning)",
    "description": "CCMT 09T308 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 295,
    "priceFormatted": "₹295.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT123 (CCMT 09T308 PC LT8070) - List Price: ₹295.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt124",
    "orderCode": "LT124",
    "code": "CCMT 09T302 LG",
    "name": "CCMT 09T302 LG LT2000 (Turning)",
    "description": "CCMT 09T302 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT124 (CCMT 09T302 LG LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt125",
    "orderCode": "LT125",
    "code": "CCMT 09T304 LG",
    "name": "CCMT 09T304 LG LT2000 (Turning)",
    "description": "CCMT 09T304 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT125 (CCMT 09T304 LG LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt126",
    "orderCode": "LT126",
    "code": "CCMT 09T308 LG",
    "name": "CCMT 09T308 LG LT2000 (Turning)",
    "description": "CCMT 09T308 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT126 (CCMT 09T308 LG LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt127",
    "orderCode": "LT127",
    "code": "CCMT 09T302 LG",
    "name": "CCMT 09T302 LG LV2020 (Turning)",
    "description": "CCMT 09T302 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT127 (CCMT 09T302 LG LV2020) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt128",
    "orderCode": "LT128",
    "code": "CCMT 09T304 LG",
    "name": "CCMT 09T304 LG LV2020 (Turning)",
    "description": "CCMT 09T304 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT128 (CCMT 09T304 LG LV2020) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt129",
    "orderCode": "LT129",
    "code": "CCMT 09T308 LG",
    "name": "CCMT 09T308 LG LV2020 (Turning)",
    "description": "CCMT 09T308 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT129 (CCMT 09T308 LG LV2020) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt130",
    "orderCode": "LT130",
    "code": "CNMG 120404 LM",
    "name": "CNMG 120404 LM LT2800 (Turning)",
    "description": "CNMG 120404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT130 (CNMG 120404 LM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt131",
    "orderCode": "LT131",
    "code": "CNMG 120408 LM",
    "name": "CNMG 120408 LM LT2800 (Turning)",
    "description": "CNMG 120408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT131 (CNMG 120408 LM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt132",
    "orderCode": "LT132",
    "code": "CNMG 120412 LM",
    "name": "CNMG 120412 LM LT2800 (Turning)",
    "description": "CNMG 120412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT132 (CNMG 120412 LM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt133",
    "orderCode": "LT133",
    "code": "CNMG 120404 PM",
    "name": "CNMG 120404 PM LT2800 (Turning)",
    "description": "CNMG 120404 PM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT133 (CNMG 120404 PM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt134",
    "orderCode": "LT134",
    "code": "CNMG 120408 PM",
    "name": "CNMG 120408 PM LT2800 (Turning)",
    "description": "CNMG 120408 PM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT134 (CNMG 120408 PM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt135",
    "orderCode": "LT135",
    "code": "CNMG 120412 PM",
    "name": "CNMG 120412 PM LT2800 (Turning)",
    "description": "CNMG 120412 PM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT135 (CNMG 120412 PM LT2800) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt136",
    "orderCode": "LT136",
    "code": "CNMG 120404 LQ",
    "name": "CNMG 120404 LQ LT3200 (Turning)",
    "description": "CNMG 120404 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT136 (CNMG 120404 LQ LT3200) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt137",
    "orderCode": "LT137",
    "code": "CNMG 120408 LQ",
    "name": "CNMG 120408 LQ LT3200 (Turning)",
    "description": "CNMG 120408 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT137 (CNMG 120408 LQ LT3200) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt138",
    "orderCode": "LT138",
    "code": "CNMG 120412 LQ",
    "name": "CNMG 120412 LQ LT3200 (Turning)",
    "description": "CNMG 120412 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 415,
    "priceFormatted": "₹415.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT138 (CNMG 120412 LQ LT3200) - List Price: ₹415.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt139",
    "orderCode": "LT139",
    "code": "CNMG 120404 LA",
    "name": "CNMG 120404 LA LT2527 (Turning)",
    "description": "CNMG 120404 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT139 (CNMG 120404 LA LT2527) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt140",
    "orderCode": "LT140",
    "code": "CNMG 120408 LA",
    "name": "CNMG 120408 LA LT2527 (Turning)",
    "description": "CNMG 120408 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT140 (CNMG 120408 LA LT2527) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt141",
    "orderCode": "LT141",
    "code": "CNMG 120412 LA",
    "name": "CNMG 120412 LA LT2527 (Turning)",
    "description": "CNMG 120412 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT141 (CNMG 120412 LA LT2527) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt142",
    "orderCode": "LT142",
    "code": "CNMG 160608 LM",
    "name": "CNMG 160608 LM LT2800 (Turning)",
    "description": "CNMG 160608 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 750,
    "priceFormatted": "₹750.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT142 (CNMG 160608 LM LT2800) - List Price: ₹750.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt143",
    "orderCode": "LT143",
    "code": "CNMG 160612 LM",
    "name": "CNMG 160612 LM LT2800 (Turning)",
    "description": "CNMG 160612 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 750,
    "priceFormatted": "₹750.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT143 (CNMG 160612 LM LT2800) - List Price: ₹750.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt144",
    "orderCode": "LT144",
    "code": "CNMG 190608 LM",
    "name": "CNMG 190608 LM LT2800 (Turning)",
    "description": "CNMG 190608 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 975,
    "priceFormatted": "₹975.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT144 (CNMG 190608 LM LT2800) - List Price: ₹975.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt145",
    "orderCode": "LT145",
    "code": "CNMG 190612 LM",
    "name": "CNMG 190612 LM LT2800 (Turning)",
    "description": "CNMG 190612 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 975,
    "priceFormatted": "₹975.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT145 (CNMG 190612 LM LT2800) - List Price: ₹975.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt146",
    "orderCode": "LT146",
    "code": "CNMG 190616 LM",
    "name": "CNMG 190616 LM LT2800 (Turning)",
    "description": "CNMG 190616 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 975,
    "priceFormatted": "₹975.00",
    "shape": "80° Rhombic (C)",
    "shapeCode": "8",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 4,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT146 (CNMG 190616 LM LT2800) - List Price: ₹975.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt147",
    "orderCode": "LT147",
    "code": "DCMT 070202 LQ",
    "name": "DCMT 070202 LQ LT2000 (Turning)",
    "description": "DCMT 070202 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 315,
    "priceFormatted": "₹315.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT147 (DCMT 070202 LQ LT2000) - List Price: ₹315.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt148",
    "orderCode": "LT148",
    "code": "DCMT 070204 LQ",
    "name": "DCMT 070204 LQ LT2000 (Turning)",
    "description": "DCMT 070204 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 315,
    "priceFormatted": "₹315.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT148 (DCMT 070204 LQ LT2000) - List Price: ₹315.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt149",
    "orderCode": "LT149",
    "code": "DCMT 070208 LQ",
    "name": "DCMT 070208 LQ LT2000 (Turning)",
    "description": "DCMT 070208 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 315,
    "priceFormatted": "₹315.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT149 (DCMT 070208 LQ LT2000) - List Price: ₹315.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt150",
    "orderCode": "LT150",
    "code": "DCMT 11T302 LGLT2000",
    "name": "DCMT 11T302 LGLT2000 (Turning)",
    "description": "DCMT 11T302 LGLT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 335,
    "priceFormatted": "₹335.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT150 (DCMT 11T302 LGLT2000) - List Price: ₹335.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt151",
    "orderCode": "LT151",
    "code": "DCMT 11T304 LG",
    "name": "DCMT 11T304 LG LT2000 (Turning)",
    "description": "DCMT 11T304 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 335,
    "priceFormatted": "₹335.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT151 (DCMT 11T304 LG LT2000) - List Price: ₹335.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt152",
    "orderCode": "LT152",
    "code": "DCMT 11T308 LG",
    "name": "DCMT 11T308 LG LT2000 (Turning)",
    "description": "DCMT 11T308 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 335,
    "priceFormatted": "₹335.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT152 (DCMT 11T308 LG LT2000) - List Price: ₹335.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt153",
    "orderCode": "LT153",
    "code": "DCMT 11T302 LG",
    "name": "DCMT 11T302 LG LV2010 (Turning)",
    "description": "DCMT 11T302 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT153 (DCMT 11T302 LG LV2010) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt154",
    "orderCode": "LT154",
    "code": "DCMT 11T304 LG",
    "name": "DCMT 11T304 LG LV2010 (Turning)",
    "description": "DCMT 11T304 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT154 (DCMT 11T304 LG LV2010) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt155",
    "orderCode": "LT155",
    "code": "DCMT 11T308 LG",
    "name": "DCMT 11T308 LG LV2010 (Turning)",
    "description": "DCMT 11T308 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT155 (DCMT 11T308 LG LV2010) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt156",
    "orderCode": "LT156",
    "code": "DCMT 11T302 LG",
    "name": "DCMT 11T302 LG LV2020 (Turning)",
    "description": "DCMT 11T302 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT156 (DCMT 11T302 LG LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt157",
    "orderCode": "LT157",
    "code": "DCMT 11T304 LG",
    "name": "DCMT 11T304 LG LV2020 (Turning)",
    "description": "DCMT 11T304 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT157 (DCMT 11T304 LG LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt158",
    "orderCode": "LT158",
    "code": "DCMT 11T308 LG",
    "name": "DCMT 11T308 LG LV2020 (Turning)",
    "description": "DCMT 11T308 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT158 (DCMT 11T308 LG LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt159",
    "orderCode": "LT159",
    "code": "DCMT 11T302 LG",
    "name": "DCMT 11T302 LG LT8070 (Turning)",
    "description": "DCMT 11T302 LG LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT159 (DCMT 11T302 LG LT8070) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt160",
    "orderCode": "LT160",
    "code": "DCMT 11T304 LG",
    "name": "DCMT 11T304 LG LT8070 (Turning)",
    "description": "DCMT 11T304 LG LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT160 (DCMT 11T304 LG LT8070) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt161",
    "orderCode": "LT161",
    "code": "DCMT 11T308 LG",
    "name": "DCMT 11T308 LG LT8070 (Turning)",
    "description": "DCMT 11T308 LG LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT161 (DCMT 11T308 LG LT8070) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt162",
    "orderCode": "LT162",
    "code": "DCMT 11T302 LG",
    "name": "DCMT 11T302 LG LV2310 (Turning)",
    "description": "DCMT 11T302 LG LV2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT162 (DCMT 11T302 LG LV2310) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt163",
    "orderCode": "LT163",
    "code": "DCMT 11T304 LG",
    "name": "DCMT 11T304 LG LV2310 (Turning)",
    "description": "DCMT 11T304 LG LV2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT163 (DCMT 11T304 LG LV2310) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt164",
    "orderCode": "LT164",
    "code": "DCMT 11T308 LG",
    "name": "DCMT 11T308 LG LV2310 (Turning)",
    "description": "DCMT 11T308 LG LV2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT164 (DCMT 11T308 LG LV2310) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt165",
    "orderCode": "LT165",
    "code": "DNMG 110404 TM",
    "name": "DNMG 110404 TM LT2800 (Turning)",
    "description": "DNMG 110404 TM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT165 (DNMG 110404 TM LT2800) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt166",
    "orderCode": "LT166",
    "code": "DNMG 110408 TM",
    "name": "DNMG 110408 TM LT2800 (Turning)",
    "description": "DNMG 110408 TM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT166 (DNMG 110408 TM LT2800) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt167",
    "orderCode": "LT167",
    "code": "DNMG 110412 TM",
    "name": "DNMG 110412 TM LT2800 (Turning)",
    "description": "DNMG 110412 TM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT167 (DNMG 110412 TM LT2800) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt168",
    "orderCode": "LT168",
    "code": "DNMG 150404 LM",
    "name": "DNMG 150404 LM LT2800 (Turning)",
    "description": "DNMG 150404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT168 (DNMG 150404 LM LT2800) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt169",
    "orderCode": "LT169",
    "code": "DNMG 150408 LM",
    "name": "DNMG 150408 LM LT2800 (Turning)",
    "description": "DNMG 150408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT169 (DNMG 150408 LM LT2800) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt170",
    "orderCode": "LT170",
    "code": "DNMG 150412 LM",
    "name": "DNMG 150412 LM LT2800 (Turning)",
    "description": "DNMG 150412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT170 (DNMG 150412 LM LT2800) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt171",
    "orderCode": "LT171",
    "code": "DNMG 150604 LM",
    "name": "DNMG 150604 LM LT2800 (Turning)",
    "description": "DNMG 150604 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT171 (DNMG 150604 LM LT2800) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt172",
    "orderCode": "LT172",
    "code": "DNMG 150608 LM",
    "name": "DNMG 150608 LM LT2800 (Turning)",
    "description": "DNMG 150608 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT172 (DNMG 150608 LM LT2800) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt173",
    "orderCode": "LT173",
    "code": "DNMG 150612 LM",
    "name": "DNMG 150612 LM LT2800 (Turning)",
    "description": "DNMG 150612 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT173 (DNMG 150612 LM LT2800) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt174",
    "orderCode": "LT174",
    "code": "DNMG 150604 PM",
    "name": "DNMG 150604 PM LT3200 (Turning)",
    "description": "DNMG 150604 PM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT174 (DNMG 150604 PM LT3200) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt175",
    "orderCode": "LT175",
    "code": "DNMG 150608 PM",
    "name": "DNMG 150608 PM LT3200 (Turning)",
    "description": "DNMG 150608 PM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT175 (DNMG 150608 PM LT3200) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt176",
    "orderCode": "LT176",
    "code": "DNMG 150612 PM",
    "name": "DNMG 150612 PM LT3200 (Turning)",
    "description": "DNMG 150612 PM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 515,
    "priceFormatted": "₹515.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT176 (DNMG 150612 PM LT3200) - List Price: ₹515.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt177",
    "orderCode": "LT177",
    "code": "DNMG 150604 LA",
    "name": "DNMG 150604 LA LT2527 (Turning)",
    "description": "DNMG 150604 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT177 (DNMG 150604 LA LT2527) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt178",
    "orderCode": "LT178",
    "code": "DNMG 150608 LA",
    "name": "DNMG 150608 LA LT2527 (Turning)",
    "description": "DNMG 150608 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT178 (DNMG 150608 LA LT2527) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt179",
    "orderCode": "LT179",
    "code": "DNMG 150612 LA",
    "name": "DNMG 150612 LA LT2527 (Turning)",
    "description": "DNMG 150612 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "55° Diamond (D)",
    "shapeCode": "5",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT179 (DNMG 150612 LA LT2527) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt180",
    "orderCode": "LT180",
    "code": "SNMG 120404 LM",
    "name": "SNMG 120404 LM LT2800 (Turning)",
    "description": "SNMG 120404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT180 (SNMG 120404 LM LT2800) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt181",
    "orderCode": "LT181",
    "code": "SNMG 120408 LM",
    "name": "SNMG 120408 LM LT2800 (Turning)",
    "description": "SNMG 120408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT181 (SNMG 120408 LM LT2800) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt182",
    "orderCode": "LT182",
    "code": "SNMG 120412 LM",
    "name": "SNMG 120412 LM LT2800 (Turning)",
    "description": "SNMG 120412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 625,
    "priceFormatted": "₹625.00",
    "shape": "Square 90° (S)",
    "shapeCode": "S",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT182 (SNMG 120412 LM LT2800) - List Price: ₹625.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt183",
    "orderCode": "LT183",
    "code": "TBGH 060102R/L S",
    "name": "TBGH 060102R/L S LT2000 (Turning)",
    "description": "TBGH 060102R/L S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT183 (TBGH 060102R/L S LT2000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt184",
    "orderCode": "LT184",
    "code": "TBGH 060104R/L S",
    "name": "TBGH 060104R/L S LT2000 (Turning)",
    "description": "TBGH 060104R/L S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT184 (TBGH 060104R/L S LT2000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt185",
    "orderCode": "LT185",
    "code": "TPGH 080204R/L S",
    "name": "TPGH 080204R/L S LT2000 (Turning)",
    "description": "TPGH 080204R/L S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT185 (TPGH 080204R/L S LT2000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt186",
    "orderCode": "LT186",
    "code": "TPGH 080208R/L S",
    "name": "TPGH 080208R/L S LT2000 (Turning)",
    "description": "TPGH 080208R/L S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT186 (TPGH 080208R/L S LT2000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt187",
    "orderCode": "LT187",
    "code": "TPGH 090202R/L-S",
    "name": "TPGH 090202R/L-S LT2000 (Turning)",
    "description": "TPGH 090202R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT187 (TPGH 090202R/L-S LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt188",
    "orderCode": "LT188",
    "code": "TPGH 090204R/L-S",
    "name": "TPGH 090204R/L-S LT2000 (Turning)",
    "description": "TPGH 090204R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT188 (TPGH 090204R/L-S LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt189",
    "orderCode": "LT189",
    "code": "TPGH 110302R/L-S",
    "name": "TPGH 110302R/L-S LT2000 (Turning)",
    "description": "TPGH 110302R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT189 (TPGH 110302R/L-S LT2000) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt190",
    "orderCode": "LT190",
    "code": "TPGH 110304R/L-S",
    "name": "TPGH 110304R/L-S LT2000 (Turning)",
    "description": "TPGH 110304R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT190 (TPGH 110304R/L-S LT2000) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt191",
    "orderCode": "LT191",
    "code": "TPGH 110308R/L-S",
    "name": "TPGH 110308R/L-S LT2000 (Turning)",
    "description": "TPGH 110308R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT191 (TPGH 110308R/L-S LT2000) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt192",
    "orderCode": "LT192",
    "code": "TBGT 060102R/L -S",
    "name": "TBGT 060102R/L -S LV2020 (Turning)",
    "description": "TBGT 060102R/L -S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT192 (TBGT 060102R/L -S LV2020) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt193",
    "orderCode": "LT193",
    "code": "TBGT 060104R/L -S",
    "name": "TBGT 060104R/L -S LV2020 (Turning)",
    "description": "TBGT 060104R/L -S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT193 (TBGT 060104R/L -S LV2020) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt194",
    "orderCode": "LT194",
    "code": "TPGT080202R/L -S",
    "name": "TPGT080202R/L -S LV2020 (Turning)",
    "description": "TPGT080202R/L -S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT194 (TPGT080202R/L -S LV2020) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt195",
    "orderCode": "LT195",
    "code": "TPGT080204R/L -S",
    "name": "TPGT080204R/L -S LV2020 (Turning)",
    "description": "TPGT080204R/L -S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT195 (TPGT080204R/L -S LV2020) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt196",
    "orderCode": "LT196",
    "code": "TPGT 090202R/L-S",
    "name": "TPGT 090202R/L-S LV2020 (Turning)",
    "description": "TPGT 090202R/L-S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT196 (TPGT 090202R/L-S LV2020) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt197",
    "orderCode": "LT197",
    "code": "TPGT 090204R/L-S",
    "name": "TPGT 090204R/L-S LV2020 (Turning)",
    "description": "TPGT 090204R/L-S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT197 (TPGT 090204R/L-S LV2020) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt198",
    "orderCode": "LT198",
    "code": "TCMT 090202 LQ",
    "name": "TCMT 090202 LQ LT2000 (Turning)",
    "description": "TCMT 090202 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT198 (TCMT 090202 LQ LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt199",
    "orderCode": "LT199",
    "code": "TCMT 090204 LQ",
    "name": "TCMT 090204 LQ LT2000 (Turning)",
    "description": "TCMT 090204 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT199 (TCMT 090204 LQ LT2000) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt200",
    "orderCode": "LT200",
    "code": "TCMT 110202 LQ",
    "name": "TCMT 110202 LQ LT2000 (Turning)",
    "description": "TCMT 110202 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 350,
    "priceFormatted": "₹350.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT200 (TCMT 110202 LQ LT2000) - List Price: ₹350.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt201",
    "orderCode": "LT201",
    "code": "TCMT 110204 LQ",
    "name": "TCMT 110204 LQ LT2000 (Turning)",
    "description": "TCMT 110204 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 350,
    "priceFormatted": "₹350.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT201 (TCMT 110204 LQ LT2000) - List Price: ₹350.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt202",
    "orderCode": "LT202",
    "code": "TCMT 090202 LQ",
    "name": "TCMT 090202 LQ LV2020 (Turning)",
    "description": "TCMT 090202 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 535,
    "priceFormatted": "₹535.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT202 (TCMT 090202 LQ LV2020) - List Price: ₹535.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt203",
    "orderCode": "LT203",
    "code": "TCMT 090204 LQ",
    "name": "TCMT 090204 LQ LV2020 (Turning)",
    "description": "TCMT 090204 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 535,
    "priceFormatted": "₹535.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT203 (TCMT 090204 LQ LV2020) - List Price: ₹535.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt204",
    "orderCode": "LT204",
    "code": "TCMT 110202 LQ",
    "name": "TCMT 110202 LQ LV2020 (Turning)",
    "description": "TCMT 110202 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT204 (TCMT 110202 LQ LV2020) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt205",
    "orderCode": "LT205",
    "code": "TCMT 110204 LQ",
    "name": "TCMT 110204 LQ LV2020 (Turning)",
    "description": "TCMT 110204 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT205 (TCMT 110204 LQ LV2020) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt206",
    "orderCode": "LT206",
    "code": "TCMT 110204 LG",
    "name": "TCMT 110204 LG LT2000 (Turning)",
    "description": "TCMT 110204 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 350,
    "priceFormatted": "₹350.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT206 (TCMT 110204 LG LT2000) - List Price: ₹350.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt207",
    "orderCode": "LT207",
    "code": "TCMT 110208 LG",
    "name": "TCMT 110208 LG LT2000 (Turning)",
    "description": "TCMT 110208 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 350,
    "priceFormatted": "₹350.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT207 (TCMT 110208 LG LT2000) - List Price: ₹350.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt208",
    "orderCode": "LT208",
    "code": "TCMT 110204 LG",
    "name": "TCMT 110204 LG LV2010 (Turning)",
    "description": "TCMT 110204 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT208 (TCMT 110204 LG LV2010) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt209",
    "orderCode": "LT209",
    "code": "TCMT 110208 LG",
    "name": "TCMT 110208 LG LV2010 (Turning)",
    "description": "TCMT 110208 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT209 (TCMT 110208 LG LV2010) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt210",
    "orderCode": "LT210",
    "code": "TCMT 110204 LG",
    "name": "TCMT 110204 LG LV2020 (Turning)",
    "description": "TCMT 110204 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT210 (TCMT 110204 LG LV2020) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt211",
    "orderCode": "LT211",
    "code": "TCMT 110208 LG",
    "name": "TCMT 110208 LG LV2020 (Turning)",
    "description": "TCMT 110208 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT211 (TCMT 110208 LG LV2020) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt212",
    "orderCode": "LT212",
    "code": "TCMT 110204 LG",
    "name": "TCMT 110204 LG LV2310 (Turning)",
    "description": "TCMT 110204 LG LV2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT212 (TCMT 110204 LG LV2310) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt213",
    "orderCode": "LT213",
    "code": "TCMT 110208 LG",
    "name": "TCMT 110208 LG LV2310 (Turning)",
    "description": "TCMT 110208 LG LV2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT213 (TCMT 110208 LG LV2310) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt214",
    "orderCode": "LT214",
    "code": "TCMT 110204 PC",
    "name": "TCMT 110204 PC LT8070 (Turning)",
    "description": "TCMT 110204 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT214 (TCMT 110204 PC LT8070) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt215",
    "orderCode": "LT215",
    "code": "TCMT 110208 PC",
    "name": "TCMT 110208 PC LT8070 (Turning)",
    "description": "TCMT 110208 PC LT8070",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 375,
    "priceFormatted": "₹375.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "H",
      "K"
    ],
    "grade": "LT8070",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT215 (TCMT 110208 PC LT8070) - List Price: ₹375.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt216",
    "orderCode": "LT216",
    "code": "TCMT 16T304 LQ",
    "name": "TCMT 16T304 LQ LT2000 (Turning)",
    "description": "TCMT 16T304 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT216 (TCMT 16T304 LQ LT2000) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt217",
    "orderCode": "LT217",
    "code": "TCMT 16T308 LQ",
    "name": "TCMT 16T308 LQ LT2000 (Turning)",
    "description": "TCMT 16T308 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT217 (TCMT 16T308 LQ LT2000) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt218",
    "orderCode": "LT218",
    "code": "TCMT 16T304 LQ",
    "name": "TCMT 16T304 LQ LT2310 (Turning)",
    "description": "TCMT 16T304 LQ LT2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT218 (TCMT 16T304 LQ LT2310) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt219",
    "orderCode": "LT219",
    "code": "TCMT 16T308 LQ",
    "name": "TCMT 16T308 LQ LT2310 (Turning)",
    "description": "TCMT 16T308 LQ LT2310",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2310",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT219 (TCMT 16T308 LQ LT2310) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt220",
    "orderCode": "LT220",
    "code": "TNMG 160404 LM",
    "name": "TNMG 160404 LM LT2800 (Turning)",
    "description": "TNMG 160404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT220 (TNMG 160404 LM LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt221",
    "orderCode": "LT221",
    "code": "TNMG 160408 LM",
    "name": "TNMG 160408 LM LT2800 (Turning)",
    "description": "TNMG 160408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT221 (TNMG 160408 LM LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt222",
    "orderCode": "LT222",
    "code": "TNMG 160412 LM",
    "name": "TNMG 160412 LM LT2800 (Turning)",
    "description": "TNMG 160412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT222 (TNMG 160412 LM LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt223",
    "orderCode": "LT223",
    "code": "TNMG 160404 LQ",
    "name": "TNMG 160404 LQ LT2800 (Turning)",
    "description": "TNMG 160404 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT223 (TNMG 160404 LQ LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt224",
    "orderCode": "LT224",
    "code": "TNMG 160408 LQ",
    "name": "TNMG 160408 LQ LT2800 (Turning)",
    "description": "TNMG 160408 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT224 (TNMG 160408 LQ LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt225",
    "orderCode": "LT225",
    "code": "TNMG 160412 LQ",
    "name": "TNMG 160412 LQ LT2800 (Turning)",
    "description": "TNMG 160412 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT225 (TNMG 160412 LQ LT2800) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt226",
    "orderCode": "LT226",
    "code": "TNMG 160404 LQ",
    "name": "TNMG 160404 LQ LT3200 (Turning)",
    "description": "TNMG 160404 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT226 (TNMG 160404 LQ LT3200) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt227",
    "orderCode": "LT227",
    "code": "TNMG 160408 LQ",
    "name": "TNMG 160408 LQ LT3200 (Turning)",
    "description": "TNMG 160408 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT227 (TNMG 160408 LQ LT3200) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt228",
    "orderCode": "LT228",
    "code": "TNMG 160412 LQ",
    "name": "TNMG 160412 LQ LT3200 (Turning)",
    "description": "TNMG 160412 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 325,
    "priceFormatted": "₹325.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT228 (TNMG 160412 LQ LT3200) - List Price: ₹325.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt229",
    "orderCode": "LT229",
    "code": "TNMG 160402 LA",
    "name": "TNMG 160402 LA LT2527 (Turning)",
    "description": "TNMG 160402 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT229 (TNMG 160402 LA LT2527) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt230",
    "orderCode": "LT230",
    "code": "TNMG 160404 LA",
    "name": "TNMG 160404 LA LT2527 (Turning)",
    "description": "TNMG 160404 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT230 (TNMG 160404 LA LT2527) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt231",
    "orderCode": "LT231",
    "code": "TNMG 160408 LA",
    "name": "TNMG 160408 LA LT2527 (Turning)",
    "description": "TNMG 160408 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT231 (TNMG 160408 LA LT2527) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt232",
    "orderCode": "LT232",
    "code": "TNMG 160412 LA",
    "name": "TNMG 160412 LA LT2527 (Turning)",
    "description": "TNMG 160412 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 395,
    "priceFormatted": "₹395.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT232 (TNMG 160412 LA LT2527) - List Price: ₹395.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt233",
    "orderCode": "LT233",
    "code": "TNMG 160404 LQ",
    "name": "TNMG 160404 LQ LT2000 (Turning)",
    "description": "TNMG 160404 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT233 (TNMG 160404 LQ LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt234",
    "orderCode": "LT234",
    "code": "TNMG 160408 LQ",
    "name": "TNMG 160408 LQ LT2000 (Turning)",
    "description": "TNMG 160408 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT234 (TNMG 160408 LQ LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt235",
    "orderCode": "LT235",
    "code": "TNMG 160412 LQ",
    "name": "TNMG 160412 LQ LT2000 (Turning)",
    "description": "TNMG 160412 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT235 (TNMG 160412 LQ LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt236",
    "orderCode": "LT236",
    "code": "TNMG 160404 MS",
    "name": "TNMG 160404 MS LT2000 (Turning)",
    "description": "TNMG 160404 MS LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT236 (TNMG 160404 MS LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt237",
    "orderCode": "LT237",
    "code": "TNMG 160408 MS",
    "name": "TNMG 160408 MS LT2000 (Turning)",
    "description": "TNMG 160408 MS LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT237 (TNMG 160408 MS LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt238",
    "orderCode": "LT238",
    "code": "TNMG 160412 MS",
    "name": "TNMG 160412 MS LT2000 (Turning)",
    "description": "TNMG 160412 MS LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT238 (TNMG 160412 MS LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt239",
    "orderCode": "LT239",
    "code": "TNMG 160404 MS",
    "name": "TNMG 160404 MS LV2020 (Turning)",
    "description": "TNMG 160404 MS LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT239 (TNMG 160404 MS LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt240",
    "orderCode": "LT240",
    "code": "TNMG 160408 MS",
    "name": "TNMG 160408 MS LV2020 (Turning)",
    "description": "TNMG 160408 MS LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT240 (TNMG 160408 MS LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt241",
    "orderCode": "LT241",
    "code": "TNMG 160412 MS",
    "name": "TNMG 160412 MS LV2020 (Turning)",
    "description": "TNMG 160412 MS LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT241 (TNMG 160412 MS LV2020) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt242",
    "orderCode": "LT242",
    "code": "TNMG 160404 LG",
    "name": "TNMG 160404 LG LT2000 (Turning)",
    "description": "TNMG 160404 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT242 (TNMG 160404 LG LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt243",
    "orderCode": "LT243",
    "code": "TNMG 160408 LG",
    "name": "TNMG 160408 LG LT2000 (Turning)",
    "description": "TNMG 160408 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT243 (TNMG 160408 LG LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt244",
    "orderCode": "LT244",
    "code": "TNMG 160412 LG",
    "name": "TNMG 160412 LG LT2000 (Turning)",
    "description": "TNMG 160412 LG LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 385,
    "priceFormatted": "₹385.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT244 (TNMG 160412 LG LT2000) - List Price: ₹385.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt245",
    "orderCode": "LT245",
    "code": "TNMG 160402R/L-S",
    "name": "TNMG 160402R/L-S LT2000 (Turning)",
    "description": "TNMG 160402R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 470,
    "priceFormatted": "₹470.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT245 (TNMG 160402R/L-S LT2000) - List Price: ₹470.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt246",
    "orderCode": "LT246",
    "code": "TNMG 160404R/L-S",
    "name": "TNMG 160404R/L-S LT2000 (Turning)",
    "description": "TNMG 160404R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 470,
    "priceFormatted": "₹470.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT246 (TNMG 160404R/L-S LT2000) - List Price: ₹470.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt247",
    "orderCode": "LT247",
    "code": "TNMG 160408R/L-S",
    "name": "TNMG 160408R/L-S LT2000 (Turning)",
    "description": "TNMG 160408R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 470,
    "priceFormatted": "₹470.00",
    "shape": "60° Triangle (T)",
    "shapeCode": "6",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT247 (TNMG 160408R/L-S LT2000) - List Price: ₹470.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt248",
    "orderCode": "LT248",
    "code": "VBGT 110301R/L-S",
    "name": "VBGT 110301R/L-S LT2000 (Turning)",
    "description": "VBGT 110301R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT248 (VBGT 110301R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt249",
    "orderCode": "LT249",
    "code": "VBGT 110302R/L-S",
    "name": "VBGT 110302R/L-S LT2000 (Turning)",
    "description": "VBGT 110302R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT249 (VBGT 110302R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt250",
    "orderCode": "LT250",
    "code": "VBGT 110304R/L-S",
    "name": "VBGT 110304R/L-S LT2000 (Turning)",
    "description": "VBGT 110304R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT250 (VBGT 110304R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt251",
    "orderCode": "LT251",
    "code": "VBGT 110301R/L-S",
    "name": "VBGT 110301R/L-S LV2020 (Turning)",
    "description": "VBGT 110301R/L-S LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT251 (VBGT 110301R/L-S LV2020) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt252",
    "orderCode": "LT252",
    "code": "VBGT 110302R/L-S",
    "name": "VBGT 110302R/L-S LT2020 (Turning)",
    "description": "VBGT 110302R/L-S LT2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT252 (VBGT 110302R/L-S LT2020) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt253",
    "orderCode": "LT253",
    "code": "VBGT 110304R/L-S",
    "name": "VBGT 110304R/L-S LT2020 (Turning)",
    "description": "VBGT 110304R/L-S LT2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT253 (VBGT 110304R/L-S LT2020) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt254",
    "orderCode": "LT254",
    "code": "VCGT 110301R/L-S",
    "name": "VCGT 110301R/L-S LT2000 (Turning)",
    "description": "VCGT 110301R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT254 (VCGT 110301R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt255",
    "orderCode": "LT255",
    "code": "VCGT 110302R/L-S",
    "name": "VCGT 110302R/L-S LT2000 (Turning)",
    "description": "VCGT 110302R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT255 (VCGT 110302R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt256",
    "orderCode": "LT256",
    "code": "VCGT 110304R/L-S",
    "name": "VCGT 110304R/L-S LT2000 (Turning)",
    "description": "VCGT 110304R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT256 (VCGT 110304R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt257",
    "orderCode": "LT257",
    "code": "VCGT 110308R/L-S",
    "name": "VCGT 110308R/L-S LT2000 (Turning)",
    "description": "VCGT 110308R/L-S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 405,
    "priceFormatted": "₹405.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT257 (VCGT 110308R/L-S LT2000) - List Price: ₹405.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt258",
    "orderCode": "LT258",
    "code": "VCGT 110302R/L-S",
    "name": "VCGT 110302R/L-S LV2010 (Turning)",
    "description": "VCGT 110302R/L-S LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT258 (VCGT 110302R/L-S LV2010) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt259",
    "orderCode": "LT259",
    "code": "VCGT 110304R/L-S",
    "name": "VCGT 110304R/L-S LV2010 (Turning)",
    "description": "VCGT 110304R/L-S LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT259 (VCGT 110304R/L-S LV2010) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt260",
    "orderCode": "LT260",
    "code": "VCGT 110308R/L-S",
    "name": "VCGT 110308R/L-S LV2010 (Turning)",
    "description": "VCGT 110308R/L-S LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 480,
    "priceFormatted": "₹480.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT260 (VCGT 110308R/L-S LV2010) - List Price: ₹480.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt261",
    "orderCode": "LT261",
    "code": "VBGT 160402R/L-C",
    "name": "VBGT 160402R/L-C LT2000 (Turning)",
    "description": "VBGT 160402R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 590,
    "priceFormatted": "₹590.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT261 (VBGT 160402R/L-C LT2000) - List Price: ₹590.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt262",
    "orderCode": "LT262",
    "code": "VBGT 160404R/L-C",
    "name": "VBGT 160404R/L-C LT2000 (Turning)",
    "description": "VBGT 160404R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 590,
    "priceFormatted": "₹590.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT262 (VBGT 160404R/L-C LT2000) - List Price: ₹590.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt263",
    "orderCode": "LT263",
    "code": "VBGT 160408R/L-C",
    "name": "VBGT 160408R/L-C LT2000 (Turning)",
    "description": "VBGT 160408R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 590,
    "priceFormatted": "₹590.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT263 (VBGT 160408R/L-C LT2000) - List Price: ₹590.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt264",
    "orderCode": "LT264",
    "code": "VBGT 160402R/L-C",
    "name": "VBGT 160402R/L-C LV2010 (Turning)",
    "description": "VBGT 160402R/L-C LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT264 (VBGT 160402R/L-C LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt265",
    "orderCode": "LT265",
    "code": "VBGT 160404R/L-C",
    "name": "VBGT 160404R/L-C LV2010 (Turning)",
    "description": "VBGT 160404R/L-C LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT265 (VBGT 160404R/L-C LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt266",
    "orderCode": "LT266",
    "code": "VBGT 160408R/L-C",
    "name": "VBGT 160408R/L-C LV2010 (Turning)",
    "description": "VBGT 160408R/L-C LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT266 (VBGT 160408R/L-C LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt267",
    "orderCode": "LT267",
    "code": "VNMG 160404 LM",
    "name": "VNMG 160404 LM LT2800 (Turning)",
    "description": "VNMG 160404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT267 (VNMG 160404 LM LT2800) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt268",
    "orderCode": "LT268",
    "code": "VNMG 160408 LM",
    "name": "VNMG 160408 LM LT2800 (Turning)",
    "description": "VNMG 160408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT268 (VNMG 160408 LM LT2800) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt269",
    "orderCode": "LT269",
    "code": "VNMG 160412 LM",
    "name": "VNMG 160412 LM LT2800 (Turning)",
    "description": "VNMG 160412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT269 (VNMG 160412 LM LT2800) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt270",
    "orderCode": "LT270",
    "code": "VNMG 160404 LM",
    "name": "VNMG 160404 LM LT3200 (Turning)",
    "description": "VNMG 160404 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 555,
    "priceFormatted": "₹555.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT270 (VNMG 160404 LM LT3200) - List Price: ₹555.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt271",
    "orderCode": "LT271",
    "code": "VNMG 160408 LM",
    "name": "VNMG 160408 LM LT3200 (Turning)",
    "description": "VNMG 160408 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 555,
    "priceFormatted": "₹555.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT271 (VNMG 160408 LM LT3200) - List Price: ₹555.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt272",
    "orderCode": "LT272",
    "code": "VNMG 160412 LM",
    "name": "VNMG 160412 LM LT3200 (Turning)",
    "description": "VNMG 160412 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 555,
    "priceFormatted": "₹555.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT272 (VNMG 160412 LM LT3200) - List Price: ₹555.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt273",
    "orderCode": "LT273",
    "code": "VNMG 160404 LQ",
    "name": "VNMG 160404 LQ LT2000 (Turning)",
    "description": "VNMG 160404 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT273 (VNMG 160404 LQ LT2000) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt274",
    "orderCode": "LT274",
    "code": "VNMG 160408 LQ",
    "name": "VNMG 160408 LQ LT2000 (Turning)",
    "description": "VNMG 160408 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT274 (VNMG 160408 LQ LT2000) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt275",
    "orderCode": "LT275",
    "code": "VNMG 160412 LQ",
    "name": "VNMG 160412 LQ LT2000 (Turning)",
    "description": "VNMG 160412 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 510,
    "priceFormatted": "₹510.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT275 (VNMG 160412 LQ LT2000) - List Price: ₹510.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt276",
    "orderCode": "LT276",
    "code": "VNMG 160404 LQ",
    "name": "VNMG 160404 LQ LV2020 (Turning)",
    "description": "VNMG 160404 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT276 (VNMG 160404 LQ LV2020) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt277",
    "orderCode": "LT277",
    "code": "VNMG 160408 LQ",
    "name": "VNMG 160408 LQ LV2020 (Turning)",
    "description": "VNMG 160408 LQ LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT277 (VNMG 160408 LQ LV2020) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt278",
    "orderCode": "LT278",
    "code": "VNMG 160404 MT",
    "name": "VNMG 160404 MT LV2010 (Turning)",
    "description": "VNMG 160404 MT LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT278 (VNMG 160404 MT LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt279",
    "orderCode": "LT279",
    "code": "VNMG 160408 MT",
    "name": "VNMG 160408 MT LV2010 (Turning)",
    "description": "VNMG 160408 MT LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT279 (VNMG 160408 MT LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt280",
    "orderCode": "LT280",
    "code": "VNMG 160412 MT",
    "name": "VNMG 160412 MT LV2010 (Turning)",
    "description": "VNMG 160412 MT LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 610,
    "priceFormatted": "₹610.00",
    "shape": "35° Diamond (V)",
    "shapeCode": "3",
    "image": "/lexustec/cnmg-turning.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT280 (VNMG 160412 MT LV2010) - List Price: ₹610.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt281",
    "orderCode": "LT281",
    "code": "WNMG 060404 LM",
    "name": "WNMG 060404 LM LT2800 (Turning)",
    "description": "WNMG 060404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT281 (WNMG 060404 LM LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": true
  },
  {
    "id": "lt282",
    "orderCode": "LT282",
    "code": "WNMG 060408 LM",
    "name": "WNMG 060408 LM LT2800 (Turning)",
    "description": "WNMG 060408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT282 (WNMG 060408 LM LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt283",
    "orderCode": "LT283",
    "code": "WNMG 060412 LM",
    "name": "WNMG 060412 LM LT2800 (Turning)",
    "description": "WNMG 060412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT283 (WNMG 060412 LM LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt284",
    "orderCode": "LT284",
    "code": "WNMG 060404 LQ",
    "name": "WNMG 060404 LQ LT2800 (Turning)",
    "description": "WNMG 060404 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT284 (WNMG 060404 LQ LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt285",
    "orderCode": "LT285",
    "code": "WNMG 060408 LQ",
    "name": "WNMG 060408 LQ LT2800 (Turning)",
    "description": "WNMG 060408 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT285 (WNMG 060408 LQ LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt286",
    "orderCode": "LT286",
    "code": "WNMG 060412 LQ",
    "name": "WNMG 060412 LQ LT2800 (Turning)",
    "description": "WNMG 060412 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 397,
    "priceFormatted": "₹397.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT286 (WNMG 060412 LQ LT2800) - List Price: ₹397.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt287",
    "orderCode": "LT287",
    "code": "WNMG 060404 LG",
    "name": "WNMG 060404 LG LV2010 (Turning)",
    "description": "WNMG 060404 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT287 (WNMG 060404 LG LV2010) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt288",
    "orderCode": "LT288",
    "code": "WNMG 060408 LG",
    "name": "WNMG 060408 LG LV2010 (Turning)",
    "description": "WNMG 060408 LG LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT288 (WNMG 060408 LG LV2010) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt289",
    "orderCode": "LT289",
    "code": "WNMG 060404 LG",
    "name": "WNMG 060404 LG LV2020 (Turning)",
    "description": "WNMG 060404 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT289 (WNMG 060404 LG LV2020) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt290",
    "orderCode": "LT290",
    "code": "WNMG 060408 LG",
    "name": "WNMG 060408 LG LV2020 (Turning)",
    "description": "WNMG 060408 LG LV2020",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 495,
    "priceFormatted": "₹495.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2020",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT290 (WNMG 060408 LG LV2020) - List Price: ₹495.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt291",
    "orderCode": "LT291",
    "code": "WNGG 060402R/L-C",
    "name": "WNGG 060402R/L-C LT2000 (Turning)",
    "description": "WNGG 060402R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 525,
    "priceFormatted": "₹525.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT291 (WNGG 060402R/L-C LT2000) - List Price: ₹525.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt292",
    "orderCode": "LT292",
    "code": "WNGG 060404R/L-C",
    "name": "WNGG 060404R/L-C LT2000 (Turning)",
    "description": "WNGG 060404R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 525,
    "priceFormatted": "₹525.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT292 (WNGG 060404R/L-C LT2000) - List Price: ₹525.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt293",
    "orderCode": "LT293",
    "code": "WNGG 060408R/L-C",
    "name": "WNGG 060408R/L-C  LT2000 (Turning)",
    "description": "WNGG 060408R/L-C  LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 525,
    "priceFormatted": "₹525.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT293 (WNGG 060408R/L-C  LT2000) - List Price: ₹525.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt294",
    "orderCode": "LT294",
    "code": "WNMG 080404 LM",
    "name": "WNMG 080404 LM LT2800 (Turning)",
    "description": "WNMG 080404 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT294 (WNMG 080404 LM LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt295",
    "orderCode": "LT295",
    "code": "WNMG 080408 LM",
    "name": "WNMG 080408 LM LT2800 (Turning)",
    "description": "WNMG 080408 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT295 (WNMG 080408 LM LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt296",
    "orderCode": "LT296",
    "code": "WNMG 080412 LM",
    "name": "WNMG 080412 LM LT2800 (Turning)",
    "description": "WNMG 080412 LM LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT296 (WNMG 080412 LM LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt297",
    "orderCode": "LT297",
    "code": "WNMG 080404 LM",
    "name": "WNMG 080404 LM LT3200 (Turning)",
    "description": "WNMG 080404 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT297 (WNMG 080404 LM LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt298",
    "orderCode": "LT298",
    "code": "WNMG 080408 LM",
    "name": "WNMG 080408 LM LT3200 (Turning)",
    "description": "WNMG 080408 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT298 (WNMG 080408 LM LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt299",
    "orderCode": "LT299",
    "code": "WNMG 080412 LM",
    "name": "WNMG 080412 LM LT3200 (Turning)",
    "description": "WNMG 080412 LM LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT299 (WNMG 080412 LM LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt300",
    "orderCode": "LT300",
    "code": "WNMG 080404 LA",
    "name": "WNMG 080404 LA LT2527 (Turning)",
    "description": "WNMG 080404 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 490,
    "priceFormatted": "₹490.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT300 (WNMG 080404 LA LT2527) - List Price: ₹490.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt301",
    "orderCode": "LT301",
    "code": "WNMG 080408 LA",
    "name": "WNMG 080408 LA LT2527 (Turning)",
    "description": "WNMG 080408 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 490,
    "priceFormatted": "₹490.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT301 (WNMG 080408 LA LT2527) - List Price: ₹490.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt302",
    "orderCode": "LT302",
    "code": "WNMG 080412 LA",
    "name": "WNMG 080412 LA LT2527 (Turning)",
    "description": "WNMG 080412 LA LT2527",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 490,
    "priceFormatted": "₹490.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT2527",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT302 (WNMG 080412 LA LT2527) - List Price: ₹490.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt303",
    "orderCode": "LT303",
    "code": "WNMG 080404 LQ",
    "name": "WNMG 080404 LQ LT2800 (Turning)",
    "description": "WNMG 080404 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT303 (WNMG 080404 LQ LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt304",
    "orderCode": "LT304",
    "code": "WNMG 080408 LQ",
    "name": "WNMG 080408 LQ LT2800 (Turning)",
    "description": "WNMG 080408 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT304 (WNMG 080408 LQ LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt305",
    "orderCode": "LT305",
    "code": "WNMG 080412 LQ",
    "name": "WNMG 080412 LQ LT2800 (Turning)",
    "description": "WNMG 080412 LQ LT2800",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 435,
    "priceFormatted": "₹435.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "K"
    ],
    "grade": "LT2800",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT305 (WNMG 080412 LQ LT2800) - List Price: ₹435.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt306",
    "orderCode": "LT306",
    "code": "WNMG 080404 LQ",
    "name": "WNMG 080404 LQ LT3200 (Turning)",
    "description": "WNMG 080404 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT306 (WNMG 080404 LQ LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt307",
    "orderCode": "LT307",
    "code": "WNMG 080408 LQ",
    "name": "WNMG 080408 LQ LT3200 (Turning)",
    "description": "WNMG 080408 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT307 (WNMG 080408 LQ LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt308",
    "orderCode": "LT308",
    "code": "WNMG 080412 LQ",
    "name": "WNMG 080412 LQ LT3200 (Turning)",
    "description": "WNMG 080412 LQ LT3200",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 475,
    "priceFormatted": "₹475.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M"
    ],
    "grade": "LT3200",
    "coating": "Multi-Layer CVD Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT308 (WNMG 080412 LQ LT3200) - List Price: ₹475.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt309",
    "orderCode": "LT309",
    "code": "WNMG 080404 LQ",
    "name": "WNMG 080404 LQ LT2000 (Turning)",
    "description": "WNMG 080404 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 465,
    "priceFormatted": "₹465.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT309 (WNMG 080404 LQ LT2000) - List Price: ₹465.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt310",
    "orderCode": "LT310",
    "code": "WNMG 080408 LQ",
    "name": "WNMG 080408 LQ LT2000 (Turning)",
    "description": "WNMG 080408 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 465,
    "priceFormatted": "₹465.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT310 (WNMG 080408 LQ LT2000) - List Price: ₹465.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt311",
    "orderCode": "LT311",
    "code": "WNMG 080412 LQ",
    "name": "WNMG 080412 LQ LT2000 (Turning)",
    "description": "WNMG 080412 LQ LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 465,
    "priceFormatted": "₹465.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "0° Negative",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 6,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT311 (WNMG 080412 LQ LT2000) - List Price: ₹465.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt312",
    "orderCode": "LT312",
    "code": "WNGG 080402R/L-C",
    "name": "WNGG 080402R/L-C LT2000 (Turning)",
    "description": "WNGG 080402R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 575,
    "priceFormatted": "₹575.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT312 (WNGG 080402R/L-C LT2000) - List Price: ₹575.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt313",
    "orderCode": "LT313",
    "code": "WNGG 080404R/L-C",
    "name": "WNGG 080404R/L-C LT2000 (Turning)",
    "description": "WNGG 080404R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 575,
    "priceFormatted": "₹575.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT313 (WNGG 080404R/L-C LT2000) - List Price: ₹575.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt314",
    "orderCode": "LT314",
    "code": "WNGG 080408R/L-C",
    "name": "WNGG 080408R/L-C LT2000 (Turning)",
    "description": "WNGG 080408R/L-C LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 575,
    "priceFormatted": "₹575.00",
    "shape": "Trigon 80° (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT314 (WNGG 080408R/L-C LT2000) - List Price: ₹575.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt315",
    "orderCode": "LT315",
    "code": "WBGT 060102R/L -S",
    "name": "WBGT 060102R/L -S LT1000 (Turning)",
    "description": "WBGT 060102R/L -S LT1000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT1000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT315 (WBGT 060102R/L -S LT1000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt316",
    "orderCode": "LT316",
    "code": "WBGT 060104R/L -S",
    "name": "WBGT 060104R/L -S LT1000 (Turning)",
    "description": "WBGT 060104R/L -S LT1000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 410,
    "priceFormatted": "₹410.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "K"
    ],
    "grade": "LT1000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT316 (WBGT 060104R/L -S LT1000) - List Price: ₹410.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt317",
    "orderCode": "LT317",
    "code": "WBGT 060102R/L -S",
    "name": "WBGT 060102R/L -S LT2000 (Turning)",
    "description": "WBGT 060102R/L -S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT317 (WBGT 060102R/L -S LT2000) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt318",
    "orderCode": "LT318",
    "code": "WBGT 060104R/L -S",
    "name": "WBGT 060104R/L -S LT2000 (Turning)",
    "description": "WBGT 060104R/L -S LT2000",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 450,
    "priceFormatted": "₹450.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LT2000",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT318 (WBGT 060104R/L -S LT2000) - List Price: ₹450.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt319",
    "orderCode": "LT319",
    "code": "WBGT 060102R/L -S",
    "name": "WBGT 060102R/L -S LV2010 (Turning)",
    "description": "WBGT 060102R/L -S LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 550,
    "priceFormatted": "₹550.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT319 (WBGT 060102R/L -S LV2010) - List Price: ₹550.00/pc.",
    "featuredOnHome": false
  },
  {
    "id": "lt320",
    "orderCode": "LT320",
    "code": "WBGT 060104R/L- S",
    "name": "WBGT 060104R/L- S LV2010 (Turning)",
    "description": "WBGT 060104R/L- S LV2010",
    "category": "turning",
    "categoryLabel": "Turning",
    "price": 550,
    "priceFormatted": "₹550.00",
    "shape": "Trigon (W)",
    "shapeCode": "T",
    "image": "/lexustec/wnmg-trigon.jpg",
    "brand": "Lexustec / P.P.S",
    "isoMaterials": [
      "P",
      "M",
      "N"
    ],
    "grade": "LV2010",
    "coating": "Advanced PVD Nano Coated",
    "clearanceAngle": "7° / 11° Positive",
    "chipbreaker": "Standard / Ground",
    "cuttingEdges": 2,
    "dimensions": {
      "ic": "Standard ISO",
      "thickness": "Standard ISO"
    },
    "cuttingParams": {
      "vc": "150 – 350 m/min",
      "fn": "0.10 – 0.45 mm/rev",
      "ap": "0.5 – 4.0 mm"
    },
    "stockStatus": "In Stock (Central Depot Gurugram)",
    "moq": "10 pcs (1 Box)",
    "compatibleHolders": "Compatible ISO Toolholders & Milling Cutters",
    "whatsappMessage": "Hi P.P.S Industrial, please share quotation and bulk tier discount for Order Code LT320 (WBGT 060104R/L- S LV2010) - List Price: ₹550.00/pc.",
    "featuredOnHome": false
  }
];

export function toProduct(insert: CuttingInsert): Product {
  return {
    id: insert.id,
    name: `${insert.orderCode} - ${insert.description}`,
    category: insert.category,
    sku: insert.orderCode,
    isoCode: insert.description,
    grade: insert.grade,
    coating: insert.coating,
    application: `${insert.categoryLabel} Application`,
    description: insert.description,
    materials: insert.isoMaterials.map(m => `${m} - ${ISO_MATERIALS_MAP[m].name}`),
    tolerance: 'ISO Standard Precision Class M/G',
    stock: insert.stockStatus,
    rating: 5.0,
    inStock: true,
    featured: !!insert.featuredOnHome,
    brand: insert.brand,
    image: insert.image,
    price: insert.price,
    specs: [
      { label: 'Order Code', value: insert.orderCode },
      { label: 'Description', value: insert.description },
      { label: 'Operation', value: insert.categoryLabel },
      { label: 'List Price / Pc', value: insert.priceFormatted },
      { label: 'Grade', value: insert.grade },
      { label: 'Coating', value: insert.coating },
      { label: 'Geometry', value: insert.shape },
      { label: 'MOQ', value: insert.moq }
    ]
  };
}
