export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  isoCode: string;
  grade: string;
  coating: string;
  application: string;
  description: string;
  materials: string[];
  tolerance: string;
  stock: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
  image: string;
  externalUrl?: string;
  brand?: string;
  price?: number;
  priceFormatted?: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const PRODUCTS: Product[] = [
  // CP GRAT-EX Featured Deburring Tools (deburringtools.com)
  {
    id: 'cpg-cburr-01',
    name: 'C-BuRR (34016) Universal Deburring Tool with Quick-Change Handle',
    category: 'deburring',
    sku: 'CPG-CBURR-34016',
    isoCode: 'CP GRAT-EX 34016 Hand Deburring',
    grade: 'Ergonomic Body + M2 High-Speed Steel Swivel Blade',
    coating: 'Black Oxide / Bright Polished Cutting Flank',
    application: 'Rapid Manual Deburring of Straight Edges, Curved Contours & Hole Exits',
    description: 'The flagship deburring tool from CP GRAT-EX (deburringtools.com). Engineered with an ergonomic soft-grip handle and push-button chuck that allows 360° free rotation of the HSS swivel blade for smooth, fatigue-free burr removal.',
    materials: ['Alloy Steels', 'Stainless Steel', 'Aluminum & Copper', 'Engineering Plastics'],
    tolerance: 'Free 360° Swivel Action',
    stock: 'In Stock (Central Depot Gurugram)',
    rating: 5.0,
    inStock: true,
    featured: true,
    brand: 'CP GRAT-EX',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/C-BuRR-34016.png',
    externalUrl: 'https://deburringtools.com/shop/',
    specs: [
      { label: 'Handle Type', value: 'Ergonomic 34016 Grip' },
      { label: 'Blade Shank', value: '3.2 mm Standard Chuck' },
      { label: 'Blade Material', value: 'M2 Grade HSS 64 HRC' },
      { label: 'Swivel Angle', value: '360° Continuous Rotational' },
      { label: 'Origin', value: 'Made in India (Since 1992)' },
      { label: 'Manufacturer', value: 'CP GRAT-EX MFG. CO.' }
    ]
  },
  {
    id: 'cpg-blade-01',
    name: 'C-101(C) Heavy-Duty Cobalt Deburring Blades (10 Pc. Pack)',
    category: 'deburring',
    sku: 'CPG-C101C-10PK',
    isoCode: 'C-101(C) 3.2mm Swivel Blade',
    grade: 'Cobalt Enhanced M2 High-Speed Steel (64-66 HRC)',
    coating: 'Heat Treated Wear-Resistant Polish',
    application: 'Heavy Burr Stripping on Steel Plates, Castings & Deep Holes',
    description: 'Heavy-duty 3.2mm shank replacement swivel blades from CP GRAT-EX. Ground with optimized cutting rake for aggressive stock removal and burr shedding on heavy gauge sheet metal, flame cut blanks, and cast iron parts.',
    materials: ['P - Carbon Steels', 'M - Stainless Steel', 'K - Cast Iron'],
    tolerance: '±0.02 mm Blade Geometry',
    stock: 'In Stock (Boxes of 10 Pcs)',
    rating: 4.9,
    inStock: true,
    featured: true,
    brand: 'CP GRAT-EX',
    image: 'https://deburringtools.com/wp-content/uploads/2026/09/C-101C.png',
    externalUrl: 'https://deburringtools.com/shop/',
    specs: [
      { label: 'Blade Series', value: 'C-101(C) Heavy Duty' },
      { label: 'Shank Diameter', value: '3.2 mm' },
      { label: 'Pack Quantity', value: '10 Pieces per Box' },
      { label: 'Hardness', value: '64 - 66 HRC' },
      { label: 'Cutting Direction', value: 'Clockwise & Multi-Angle' },
      { label: 'Manufacturer', value: 'CP GRAT-EX MFG. CO.' }
    ]
  },
  {
    id: 'cpg-cs30-01',
    name: 'CS-30-3F VIBRA CUT (48340) Vibration-Free Hole Countersink',
    category: 'deburring',
    sku: 'CPG-CS30-48340',
    isoCode: 'VIBRA CUT CS-30-3F (1–30mm)',
    grade: 'M2 High-Speed Steel Precision Ground',
    coating: 'Bright Polished Flute / Anti-Friction Rake',
    application: 'Chatter-Free Countersinking & Chamfering on Drill Presses, Mills & Hand Tools',
    description: 'Unique chatter-suppressing 3-flute countersink manufactured by CP GRAT-EX. Features unequal angular flute spacing that eliminates harmonic resonance, producing glass-smooth 90-degree chamfers without secondary chatter rings.',
    materials: ['Structural Steels', 'Stainless 304/316', 'Cast Aluminum', 'Brass Alloys'],
    tolerance: 'Concentricity < 0.01 mm',
    stock: 'In Stock (Ready to Dispatch)',
    rating: 5.0,
    inStock: true,
    featured: true,
    brand: 'CP GRAT-EX',
    image: 'https://deburringtools.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-26-2026-01_17_48-PM-1.png',
    externalUrl: 'https://deburringtools.com/shop/',
    specs: [
      { label: 'Countersink Series', value: 'CS-30-3F VIBRA CUT' },
      { label: 'Hole Range', value: '1 mm to 30 mm Diameter' },
      { label: 'Flute Count', value: '3 Unequal Pitch Flutes' },
      { label: 'Included Angle', value: '90° Standard Chamfer' },
      { label: 'Anti-Vibration', value: 'Patented Chatter Elimination' },
      { label: 'Manufacturer', value: 'CP GRAT-EX MFG. CO.' }
    ]
  },
  {
    id: 'cpg-set21-01',
    name: 'C-BuRR Set 21 (31621) Multi-Piece Deburring Master Kit',
    category: 'deburring',
    sku: 'CPG-SET21-31621',
    isoCode: 'C-BuRR Set 21 Master Case',
    grade: 'Industrial Grade HSS Blades & Telescopic Holders',
    coating: 'Multi-Coated Assorted Profiles',
    application: 'Comprehensive Maintenance, Mould Shop & Production Line Edge Deburring',
    description: 'Complete all-in-one deburring workstation kit from deburringtools.com. Includes heavy ergonomic handle, telescopic holder bar for deep recess access, countersink cutter head, and 20 assorted interchangeable curved, straight, and scraper blades in a rugged case.',
    materials: ['Universal All Metals & Plastics', 'Deep Internal Cavities'],
    tolerance: 'ISO Grade Professional Kit',
    stock: 'In Stock (Full Kits)',
    rating: 5.0,
    inStock: true,
    featured: false,
    brand: 'CP GRAT-EX',
    image: 'https://deburringtools.com/wp-content/uploads/2026/06/C-Burr-Set-21-.png',
    externalUrl: 'https://deburringtools.com/shop/',
    specs: [
      { label: 'Kit Model', value: 'Set 21 (Part No. 31621)' },
      { label: 'Components', value: 'Handle + Telescopic Bar + 20 Blades' },
      { label: 'Storage', value: 'Rugged Fitted Organizer Case' },
      { label: 'Applications', value: 'Holes, Slots, Cross-Drills, Faces' },
      { label: 'Warranty', value: '100% Genuine CP GRAT-EX' },
      { label: 'Manufacturer', value: 'CP GRAT-EX MFG. CO.' }
    ]
  },
  {
    id: 'cpg-dt25-01',
    name: 'DT-25 (31025) Sheet Metal Double-Edge Deburring System',
    category: 'deburring',
    sku: 'CPG-DT25-31025',
    isoCode: 'DT-25 Dual Blade System',
    grade: 'Twin Circular M2 HSS Hardened Cutting Discs',
    coating: 'Precision Ground Cutting Periphery',
    application: 'Simultaneous Deburring of Both Top & Bottom Sheet Metal Edges in One Stroke',
    description: 'Engineered specifically for fabrication shops and laser cutting facilities. Features two opposing circular HSS cutting wheels with integrated hand safety guard, cleanly deburring both edges of sheet metal up to 10mm thickness in a single linear pass.',
    materials: ['Laser Cut Sheet Metal', 'Punched Plates', 'Ducting & Chassis'],
    tolerance: 'Sheets up to 10 mm Thickness',
    stock: 'In Stock',
    rating: 4.8,
    inStock: true,
    featured: false,
    brand: 'CP GRAT-EX',
    image: 'https://deburringtools.com/wp-content/uploads/2026/06/DT-25-Set-blades-1.jpg',
    externalUrl: 'https://deburringtools.com/shop/',
    specs: [
      { label: 'Model', value: 'DT-25 (Part No. 31025)' },
      { label: 'Cutting Blades', value: 'Dual Circular Replaceable Discs' },
      { label: 'Max Sheet Thickness', value: 'Up to 10 mm' },
      { label: 'Safety Feature', value: 'Built-in Hand Guard Shield' },
      { label: 'Operation', value: 'Single-Pass Dual Edge' },
      { label: 'Manufacturer', value: 'CP GRAT-EX MFG. CO.' }
    ]
  },

  // CNC & Carbide Cutting Tools
  {
    id: 'pps-ins-01',
    name: 'TNMG 160408-TM Carbide Turning Insert',
    category: 'inserts',
    sku: 'PPS-TNMG-160408',
    isoCode: 'TNMG 160408 (Triangle 60°)',
    grade: 'P20-P35 / M20-M30 (Steel & Stainless)',
    coating: 'CVD Multi-Layer TiCN + Al2O3 + TiN (Gold)',
    application: 'Medium-to-Rough Steel & Cast Iron Turning',
    description: 'High-efficiency 60° triangular double-sided insert offering 6 usable cutting edges. Features TM wave chipbreaker geometry that promotes rapid spiral curl and fracture of steel swarf, drastically lowering spindle load and cutting heat.',
    materials: ['P - Steels', 'M - Stainless', 'K - Cast Iron'],
    tolerance: '±0.013 mm Class M',
    stock: 'In Stock (Warehouse Sector 5)',
    rating: 4.9,
    inStock: true,
    featured: true,
    image: '/hero-banner.jpg',
    specs: [
      { label: 'Insert Shape', value: 'Triangle 60° Negative' },
      { label: 'Corner Radius', value: '0.8 mm' },
      { label: 'Thickness', value: '4.76 mm' },
      { label: 'Cutting Edges', value: '6 Usable Edges' },
      { label: 'Feed Rate', value: '0.15 - 0.45 mm/rev' },
      { label: 'Speed Range', value: '140 - 280 m/min' }
    ]
  },
  {
    id: 'pps-ins-02',
    name: 'CNMG 120408-MA Precision Finishing Insert',
    category: 'inserts',
    sku: 'PPS-CNMG-120408',
    isoCode: 'CNMG 120408 (Diamond 80°)',
    grade: 'P15-P25 Hardened Steels',
    coating: 'PVD Nano TiAlN + AlCrN (Bronze)',
    application: 'High-Speed CNC Finishing & General Turning',
    description: 'Industry-standard 80° rhombic insert designed for precision continuous CNC lathe profiling. The fine micro-grain substrate combined with polished MA rake face suppresses built-up edge (BUE) to yield Ra 0.8µm surface finishes.',
    materials: ['P - Alloy Steels', 'M - Stainless', 'H - Hardened'],
    tolerance: '±0.008 mm High Precision',
    stock: 'Ready to Dispatch (4,800+ units)',
    rating: 5.0,
    inStock: true,
    featured: true,
    image: '/lexustec/cnmg-turning.png',
    specs: [
      { label: 'Insert Shape', value: '80° Rhombic Negative' },
      { label: 'Corner Radius', value: '0.8 mm' },
      { label: 'Thickness', value: '4.76 mm' },
      { label: 'Inscribed Circle', value: '12.7 mm' },
      { label: 'Cutting Edges', value: '4 Usable Edges' },
      { label: 'Speed Range', value: '180 - 320 m/min' }
    ]
  },
  {
    id: 'pps-mil-01',
    name: 'Solid Carbide 4-Flute Micro-Grain End Mill',
    category: 'milling',
    sku: 'PPS-EM4-12R',
    isoCode: 'EM4-12.0-55HRC',
    grade: 'Ultra-Fine Grain Tungsten 0.4µm',
    coating: 'Balzers Balinit Futura Nano (Iridescent Violet)',
    application: 'Slotting, Shoulder Milling & Die Contouring',
    description: 'Manufactured from 0.4µm European micro-grain carbide rods with unequal flute indexing (35°/38°). This geometry actively disrupts harmonic frequency resonance, delivering vibration-free slotting and exceptional sidewall squareness.',
    materials: ['P - Carbon/Alloy', 'M - Stainless', 'H - Die Steel ≤ 55 HRC'],
    tolerance: 'h6 Shaft Tolerance',
    stock: 'In Stock (Gurugram Depot)',
    rating: 4.8,
    inStock: true,
    featured: true,
    image: '/collet-milling.jpg',
    specs: [
      { label: 'Cutting Diameter', value: '12.0 mm' },
      { label: 'Shank Diameter', value: '12.0 mm h6' },
      { label: 'Flute Length', value: '30 mm' },
      { label: 'Total Length', value: '75 mm' },
      { label: 'Helix Angle', value: '35°/38° Unequal Pitch' },
      { label: 'Hardness Target', value: 'Up to 55 HRC' }
    ]
  },
  {
    id: 'pps-col-01',
    name: 'BT40-ER32-70 Dynamic Balanced Collet Chuck',
    category: 'holders',
    sku: 'PPS-BT40-ER32',
    isoCode: 'BT40 MAS 403 / DIN 69871',
    grade: '20CrMnTi Alloy Forged & Carburized',
    coating: 'Black Oxide Anti-Corrosion Treated',
    application: 'High-Torque Milling & CNC Spindle Clamping',
    description: 'High-integrity BT40 collet chuck arbor forged from 20CrMnTi structural steel and carburized to HRC 58-62. Precision-ground inner and outer tapers guarantee under 0.003mm radial runout at 4D gauge length, protecting spindle bearings at 25,000 RPM.',
    materials: ['Spindle Standard: BT40', 'Collets: ER32 (2-20mm)'],
    tolerance: 'Runout < 0.003 mm at 4D',
    stock: 'In Stock (Same-Day Dispatch)',
    rating: 4.9,
    inStock: true,
    featured: true,
    image: '/collet-milling.jpg',
    specs: [
      { label: 'Taper Standard', value: 'BT40 MAS 403 Spindle' },
      { label: 'Collet Series', value: 'ER32 (Clamping 2-20mm)' },
      { label: 'Gauge Length (A)', value: '70 mm' },
      { label: 'Balance Rating', value: 'G2.5 @ 25,000 RPM' },
      { label: 'Surface Hardness', value: 'HRC 58-62' },
      { label: 'Runout Accuracy', value: '< 0.003 mm' }
    ]
  },
  {
    id: 'pps-cbn-01',
    name: 'Solid CBN Indexable Tip Insert for Hard Turning (HRC 45-65)',
    category: 'cbn-pcd',
    sku: 'PPS-CBN-DNGA',
    isoCode: 'DNGA 150408 S01020',
    grade: 'High Content Polycrystalline CBN 90%',
    coating: 'Uncoated Mirror Lapped / TiN Tipped',
    application: 'Hardened Bearing Steel, Die Steels, Chill Cast',
    description: 'Superhard polycrystalline cubic boron nitride (PCBN) cutting insert designed to replace cylindrical and surface grinding operations. Directly machines hardened transmission gears and bearing components between 45 and 65 HRC with Ra < 0.2µm finish.',
    materials: ['H - Hardened Steels (45-65 HRC)', 'K - Chilled Cast Iron'],
    tolerance: '±0.005 mm Optical Class G',
    stock: 'Custom & Immediate Stock Available',
    rating: 5.0,
    inStock: true,
    featured: true,
    image: '/contact-illustration.jpg',
    specs: [
      { label: 'CBN Content', value: 'High CBN 90-92% Grain' },
      { label: 'Edge Preparation', value: '20° Chamfer x 0.10mm Hone' },
      { label: 'Substrate', value: 'Tungsten Carbide Base' },
      { label: 'Cutting Speed', value: '100 - 240 m/min in 60 HRC' },
      { label: 'Achieved Finish', value: 'Ra < 0.2 µm Mirror' },
      { label: 'Process Replacement', value: 'Replaces Grinding' }
    ]
  },
  {
    id: 'pps-col-02',
    name: 'Ultra-Precision ER25 / ER32 Collet Set (0.005mm)',
    category: 'collets',
    sku: 'PPS-ER32-SET18',
    isoCode: 'DIN 6499B Precision Class UP',
    grade: 'SUJ2 High Carbon Bearing Chromium Steel',
    coating: 'Cryogenic Stress-Relieved Treatment',
    application: 'High-Precision CNC Drilling, Milling & Tapping',
    description: 'Crafted from premium Japanese SUJ2 bearing steel and deep-cryogenically stabilized to prevent dimensional distortion under continuous thermal cycles. Guarantees total indicated runout (TIR) ≤ 0.005 mm at 4D projection.',
    materials: ['DIN 6499B Class UP', 'Runout: ≤ 0.005mm'],
    tolerance: 'Total Runout TIR ≤ 0.005 mm (5 Microns)',
    stock: 'In Stock (Sets & Individual Sizes)',
    rating: 4.8,
    inStock: true,
    featured: false,
    image: '/collet-milling.jpg',
    specs: [
      { label: 'Clamping Range', value: '3.0 mm to 20.0 mm' },
      { label: 'Hardness', value: 'HRC 44 - 48' },
      { label: 'Angle', value: '16° Cone Self-Centering' },
      { label: 'Inspection', value: '100% Optical Runout Tested' },
      { label: 'Runout TIR', value: '≤ 0.005 mm (5 Microns)' },
      { label: 'Compatibility', value: 'All ISO/DIN ER32 Nut Chucks' }
    ]
  }
];
