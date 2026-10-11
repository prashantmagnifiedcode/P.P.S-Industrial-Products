export interface ToolingItem {
  id: string;
  code: string;
  name: string;
  gradeOrType: string;
  materials: ('P' | 'M' | 'K' | 'N' | 'S' | 'H')[];
  application: string;
  specs: { label: string; value: string }[];
  stock: string;
  brand: string;
  image: string;
  highlight?: string;
}

export interface ToolingCategoryData {
  slug: string;
  titlePrefix: string;
  titleHighlight: string;
  categoryLabel: string;
  badge: string;
  subtitle: string;
  heroImage: string;
  popularStandards: string[];
  techOverview: string;
  machiningParameters: {
    workpiece: string;
    cuttingSpeed: string;
    feedRate: string;
    depthOfCut: string;
    coolant: string;
  }[];
  items: ToolingItem[];
}

export const TOOLING_CATEGORIES: Record<string, ToolingCategoryData> = {
  'tnmg-cnmg-wnmg-inserts': {
    slug: 'tnmg-cnmg-wnmg-inserts',
    titlePrefix: 'TNMG / CNMG / WNMG',
    titleHighlight: 'Turning Inserts',
    categoryLabel: 'Carbide Turning & Boring',
    badge: 'ISO Standard Negative Turning • Gurugram Hub',
    subtitle: 'High-production double-sided indexable negative inserts engineered with dual-layer CVD/PVD coatings for general turning, facing, and profiling across steels and cast irons.',
    heroImage: '/lexustec/tnmg-turning.jpg',
    popularStandards: ['TNMG 160408', 'CNMG 120408', 'WNMG 080408', 'TNMG 160404', 'CNMG 160612', 'LT10 CVD'],
    techOverview: 'Negative rake angle geometry provides 6 cutting edges for TNMG and WNMG (trigon), and 4 cutting edges for CNMG (80° diamond). Built with heavy-duty chipbreakers (MA/MS/GH) to handle interrupted cuts and heavy depth of cut.',
    machiningParameters: [
      { workpiece: 'P - Carbon & Alloy Steels', cuttingSpeed: '180 - 320 m/min', feedRate: '0.15 - 0.45 mm/rev', depthOfCut: '1.0 - 5.0 mm', coolant: 'Wet Flood / Dry' },
      { workpiece: 'M - Stainless Steels (304/316)', cuttingSpeed: '120 - 220 m/min', feedRate: '0.12 - 0.35 mm/rev', depthOfCut: '0.8 - 3.5 mm', coolant: 'High Pressure Wet' },
      { workpiece: 'K - Cast Iron (GG25 / GGG50)', cuttingSpeed: '160 - 280 m/min', feedRate: '0.18 - 0.50 mm/rev', depthOfCut: '1.2 - 6.0 mm', coolant: 'Dry / Air Blast' },
    ],
    items: [
      {
        id: 'tnmg-160408-ma',
        code: 'TNMG 160408-MA LT10',
        name: 'Triangular Negative Turning Insert (0.8mm Corner Radius)',
        gradeOrType: 'LT10 (CVD Al2O3 + TiCN Coated Carbide)',
        materials: ['P', 'M', 'K'],
        application: 'Medium Turning & Roughing with Smooth Chip Curler',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '9.525 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Corner Radius (RE)', value: '0.8 mm' },
          { label: 'Hole Dia (D1)', value: '3.81 mm' },
          { label: 'Number of Edges', value: '6 Edges' }
        ],
        stock: '1,200+ Pcs in Stock (Sector 5 Gurugram)',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/tnmg-turning.jpg',
        highlight: 'Best Seller for CNC Lathes'
      },
      {
        id: 'cnmg-120408-ma',
        code: 'CNMG 120408-MA LT10',
        name: '80° Diamond Negative Turning Insert for Heavy Stock Removal',
        gradeOrType: 'LT10 (Multi-layer CVD Gradient Substrate)',
        materials: ['P', 'K'],
        application: 'Heavy Facing & Longitudinal Rough Turning on Steel Forgings',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '12.7 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Corner Radius (RE)', value: '0.8 mm' },
          { label: 'Hole Dia (D1)', value: '5.16 mm' },
          { label: 'Number of Edges', value: '4 Edges' }
        ],
        stock: '950+ Pcs in Stock (Ready for Dispatch)',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/cnmg-turning.jpg',
        highlight: 'Maximum Rigidity'
      },
      {
        id: 'wnmg-080408-ms',
        code: 'WNMG 080408-MS LT20',
        name: '80° Trigon Negative Insert with Optimized Clearance Angle',
        gradeOrType: 'LT20 (PVD TiAlN Nanocoat for High Temperature)',
        materials: ['P', 'M', 'S'],
        application: 'Medium Turning of Stainless Steel 304/316 and Alloy Steels',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '12.7 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Corner Radius (RE)', value: '0.8 mm' },
          { label: 'Hole Dia (D1)', value: '5.16 mm' },
          { label: 'Number of Edges', value: '6 Edges' }
        ],
        stock: '800+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/wnmg-trigon.jpg',
        highlight: 'Cost-Effective Trigon'
      },
      {
        id: 'tnmg-160404-fp',
        code: 'TNMG 160404-FP LT10',
        name: 'Triangular Negative Turning Insert (0.4mm Fine Finishing)',
        gradeOrType: 'LT10 (Fine-Grained Micro-Wear Grade)',
        materials: ['P', 'M'],
        application: 'Light Finishing & Precision Tolerance OD/ID Turning',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '9.525 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Corner Radius (RE)', value: '0.4 mm' },
          { label: 'Surface Finish', value: 'Ra < 0.8 µm' },
          { label: 'Number of Edges', value: '6 Edges' }
        ],
        stock: '650+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/tnmg-turning.jpg'
      }
    ]
  },

  'dnmg-vnmg-finishing-inserts': {
    slug: 'dnmg-vnmg-finishing-inserts',
    titlePrefix: 'DNMG & VNMG',
    titleHighlight: 'Finishing Inserts',
    categoryLabel: 'Carbide Turning & Boring',
    badge: 'Precision Profile Turning & Copying',
    subtitle: 'Narrow diamond geometry (55° DNMG and 35° VNMG) designed for intricate contouring, deep undercut tracing, and high-precision mirror finish tolerances.',
    heroImage: '/lexustec/cnmg-turning.jpg',
    popularStandards: ['DNMG 150604', 'DNMG 150608', 'DNMG 110404', 'VNMG 160404', 'VNMG 160408', 'LT20 PVD'],
    techOverview: 'DNMG (55°) and VNMG (35°) inserts offer superior clearance for profile tracing and steep bevel copying. Sharp micro-radii (0.2 - 0.4mm) eliminate chatter on slender shafts and thin-walled workpieces.',
    machiningParameters: [
      { workpiece: 'P - Alloy Steels & Shafts', cuttingSpeed: '220 - 350 m/min', feedRate: '0.08 - 0.22 mm/rev', depthOfCut: '0.2 - 1.5 mm', coolant: 'Wet Flood' },
      { workpiece: 'M - Austenitic Stainless Steel', cuttingSpeed: '140 - 240 m/min', feedRate: '0.06 - 0.18 mm/rev', depthOfCut: '0.2 - 1.2 mm', coolant: 'Wet Flood' },
      { workpiece: 'H - Hardened Steels (45-60 HRC)', cuttingSpeed: '80 - 150 m/min', feedRate: '0.05 - 0.12 mm/rev', depthOfCut: '0.1 - 0.5 mm', coolant: 'Dry / MQL' },
    ],
    items: [
      {
        id: 'dnmg-150604-fp',
        code: 'DNMG 150604-FP LT20',
        name: '55° Diamond Profiling Insert (0.4mm Radius Finishing)',
        gradeOrType: 'LT20 (PVD Ultra-Smooth TiAlN)',
        materials: ['P', 'M', 'S'],
        application: 'Contour Copying, Chamfering, and Mirror Finish Turning',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '12.7 mm' },
          { label: 'Thickness (S)', value: '6.35 mm' },
          { label: 'Corner Radius (RE)', value: '0.4 mm' },
          { label: 'Included Angle', value: '55° Diamond' },
          { label: 'Tolerance Class', value: 'M (Precision Ground)' }
        ],
        stock: '750+ Pcs in Stock (Sector 5 Gurugram)',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/cnmg-turning.jpg',
        highlight: 'Popular for Shaft Profiling'
      },
      {
        id: 'dnmg-150608-mp',
        code: 'DNMG 150608-MP LT10',
        name: '55° Diamond Medium Turning Insert (0.8mm Radius)',
        gradeOrType: 'LT10 (CVD Multi-layer Coating)',
        materials: ['P', 'K'],
        application: 'Semi-Finishing and Tracing on Castings & Steels',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '12.7 mm' },
          { label: 'Thickness (S)', value: '6.35 mm' },
          { label: 'Corner Radius (RE)', value: '0.8 mm' },
          { label: 'Included Angle', value: '55° Diamond' }
        ],
        stock: '600+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/cnmg-turning.jpg'
      },
      {
        id: 'vnmg-160404-fp',
        code: 'VNMG 160404-FP LT20',
        name: '35° Sharp Diamond Profile Insert for Deep Undercut Tracing',
        gradeOrType: 'LT20 (PVD High Thermal Barrier)',
        materials: ['P', 'M', 'S', 'H'],
        application: 'Deep Undercuts, Pulleys, Thread Reliefs, Aerospace Profiles',
        specs: [
          { label: 'Inscribed Circle (IC)', value: '9.525 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Corner Radius (RE)', value: '0.4 mm' },
          { label: 'Included Angle', value: '35° Pointed' },
          { label: 'Accessibility', value: 'Deep Undercut Clearance' }
        ],
        stock: '480+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/cnmg-turning.jpg',
        highlight: 'Maximum Geometric Clearance'
      }
    ]
  },

  'carbide-boring-bars-adapters': {
    slug: 'carbide-boring-bars-adapters',
    titlePrefix: 'Carbide Boring Bars',
    titleHighlight: '& Adapters',
    categoryLabel: 'Carbide Turning & Boring',
    badge: 'Internal Turning • Anti-Vibration Reach',
    subtitle: 'High-density solid carbide and steel-shank internal boring bars featuring internal through-coolant ports for deep cavity machining with up to 7xD reach.',
    heroImage: '/collet-milling.jpg',
    popularStandards: ['S16Q-SCLCR09', 'S20R-MWLNR08', 'S25S-MDUNR15', 'E12M-SCLCR06', 'C16R-STFCR11', 'Through Coolant'],
    techOverview: 'Solid tungsten carbide shanks provide 3x the modulus of elasticity compared to standard steel bars, eliminating deflection and high-frequency screech on deep bore applications.',
    machiningParameters: [
      { workpiece: 'Steel Internal Boring (3xD)', cuttingSpeed: '160 - 240 m/min', feedRate: '0.12 - 0.25 mm/rev', depthOfCut: '0.8 - 2.5 mm', coolant: 'Through Coolant Wet' },
      { workpiece: 'Deep Cavity Boring (5xD - 7xD)', cuttingSpeed: '120 - 180 m/min', feedRate: '0.08 - 0.16 mm/rev', depthOfCut: '0.5 - 1.5 mm', coolant: 'High Pressure Through Tool' },
      { workpiece: 'Internal Blind Hole Finishing', cuttingSpeed: '180 - 260 m/min', feedRate: '0.06 - 0.14 mm/rev', depthOfCut: '0.2 - 0.8 mm', coolant: 'Wet Flood' },
    ],
    items: [
      {
        id: 's20r-mwlnr08',
        code: 'S20R-MWLNR08 (Ø20mm Shank)',
        name: 'Internal Boring Bar for WNMG 0804 Inserts with Internal Coolant',
        gradeOrType: 'High Tensile 42CrMo Alloy Steel Shank',
        materials: ['P', 'M', 'K'],
        application: 'Internal ID Roughing & Facing from Ø25mm Bore Onwards',
        specs: [
          { label: 'Shank Diameter', value: '20 mm' },
          { label: 'Overall Length (L)', value: '200 mm' },
          { label: 'Min. Bore Dia (Dmin)', value: '25 mm' },
          { label: 'Insert Type', value: 'WNMG 080408 / 080404' },
          { label: 'Coolant Port', value: 'Axial Through Coolant' }
        ],
        stock: '85+ Units in Stock (Gurugram Depot)',
        brand: 'LexusTec Industrial',
        image: '/collet-milling.jpg',
        highlight: 'Heavy Clamping Rigidity'
      },
      {
        id: 's16q-sclcr09',
        code: 'S16Q-SCLCR09 (Ø16mm Shank)',
        name: 'Precision Internal Screw-Clamp Boring Bar for CCMT 09T3',
        gradeOrType: 'Tough Alloy Steel Body + Torx Clamping',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Precision Semi-Finishing and Finishing in Small Bores',
        specs: [
          { label: 'Shank Diameter', value: '16 mm' },
          { label: 'Overall Length (L)', value: '180 mm' },
          { label: 'Min. Bore Dia (Dmin)', value: '20 mm' },
          { label: 'Insert Type', value: 'CCMT 09T304 / 09T308' },
          { label: 'Lead Angle', value: '95° Side Cutting' }
        ],
        stock: '120+ Units in Stock',
        brand: 'LexusTec Industrial',
        image: '/collet-milling.jpg'
      },
      {
        id: 'e16r-sclcr09-carbide',
        code: 'E16R-SCLCR09 (Solid Carbide Shank)',
        name: 'Anti-Vibration Solid Tungsten Carbide Boring Bar (7xD Overhang)',
        gradeOrType: 'Solid Sintered Tungsten Carbide (HRC 90+)',
        materials: ['P', 'M', 'K', 'S', 'H'],
        application: 'Deep Bore High-L/D Ratio Machining without Chatter',
        specs: [
          { label: 'Shank Material', value: 'Solid Micrograin Carbide' },
          { label: 'Shank Diameter', value: '16 mm' },
          { label: 'Overall Length (L)', value: '200 mm' },
          { label: 'Elastic Modulus', value: '600 GPa (3x Steel)' },
          { label: 'Reach Capability', value: 'Up to 7 x Diameter' }
        ],
        stock: '35+ Units in Stock',
        brand: 'LexusTec Premium Series',
        image: '/collet-milling.jpg',
        highlight: 'Vibration-Free Overhang'
      }
    ]
  },

  'grooving-parting-blades': {
    slug: 'grooving-parting-blades',
    titlePrefix: 'Grooving & Parting',
    titleHighlight: 'Blades & Inserts',
    categoryLabel: 'Carbide Turning & Boring',
    badge: 'Precision Cut-Off & Deep O-Ring Grooving',
    subtitle: 'High-stability double-edged MGMN indexable grooving inserts and deep parting tool blocks engineered to prevent swarf entrapment and catastrophic tool failure.',
    heroImage: '/lexustec/mgmn-grooving.jpg',
    popularStandards: ['MGMN 200-G', 'MGMN 300-M', 'MGMN 400-M', 'MGEHR 2020-3', 'MGEHR 2525-4', 'NCIH 32-3'],
    techOverview: 'W-profile clamping pocket ensures that the insert seats securely under extreme radial and lateral cutting forces. Dual cutting edge design halves per-edge tooling expenditure.',
    machiningParameters: [
      { workpiece: 'Solid Bar Cut-Off (Mild Steel)', cuttingSpeed: '120 - 180 m/min', feedRate: '0.08 - 0.16 mm/rev', depthOfCut: 'Grooving Width 2-4mm', coolant: 'Continuous High Pressure' },
      { workpiece: 'Stainless Steel Tube Parting', cuttingSpeed: '90 - 140 m/min', feedRate: '0.05 - 0.12 mm/rev', depthOfCut: 'Wall Thickness', coolant: 'Direct Flood' },
      { workpiece: 'External CIRCLIP / O-Ring Grooving', cuttingSpeed: '140 - 200 m/min', feedRate: '0.06 - 0.14 mm/rev', depthOfCut: 'Radial Plunge', coolant: 'Wet Flood' },
    ],
    items: [
      {
        id: 'mgmn-300-m',
        code: 'MGMN 300-M LT10',
        name: '3.0mm Double-Ended Indexable Parting & Grooving Insert',
        gradeOrType: 'LT10 (CVD Al2O3 Multi-Layer Hardcoat)',
        materials: ['P', 'M', 'K'],
        application: 'Solid Bar Parting up to Ø60mm and Profile Grooving',
        specs: [
          { label: 'Groove Width (W)', value: '3.0 mm ± 0.03' },
          { label: 'Overall Length (L)', value: '21.0 mm' },
          { label: 'Corner Radius (R)', value: '0.4 mm' },
          { label: 'Chipbreaker Type', value: 'M - General Medium Feed' },
          { label: 'Number of Edges', value: '2 Reversible Edges' }
        ],
        stock: '1,400+ Pcs in Stock (Sector 5 Gurugram)',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/mgmn-grooving.jpg',
        highlight: 'Top Industrial Consumable'
      },
      {
        id: 'mgmn-200-g',
        code: 'MGMN 200-G LT20',
        name: '2.0mm Narrow Parting Insert for Material Conservation',
        gradeOrType: 'LT20 (PVD Ultra-Dense TiAlN)',
        materials: ['P', 'M', 'S'],
        application: 'Narrow Part-Off to Reduce Raw Material Swarf Scrap',
        specs: [
          { label: 'Groove Width (W)', value: '2.0 mm ± 0.02' },
          { label: 'Overall Length (L)', value: '16.0 mm' },
          { label: 'Corner Radius (R)', value: '0.2 mm' },
          { label: 'Scrap Reduction', value: '33% Savings vs 3mm' }
        ],
        stock: '850+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/mgmn-grooving.jpg'
      },
      {
        id: 'mgehr-2525-3',
        code: 'MGEHR 2525-3 Holder (25x25mm)',
        name: 'Heavy Duty CNC Lathe External Grooving Toolholder',
        gradeOrType: 'Hardened 40Cr Steel (HRC 42-45)',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Parting-Off & Grooving on Heavy CNC Turning Centers',
        specs: [
          { label: 'Shank Size', value: '25 x 25 mm' },
          { label: 'Overall Length', value: '150 mm' },
          { label: 'Compatible Insert', value: 'MGMN 300 Series' },
          { label: 'Max Cut-Off Dia', value: 'Ø65 mm' }
        ],
        stock: '95+ Units in Stock',
        brand: 'LexusTec Industrial',
        image: '/lexustec/mgmn-grooving.jpg'
      }
    ]
  },

  'apmt-face-mills': {
    slug: 'apmt-face-mills',
    titlePrefix: 'APMT 1135 & 1604',
    titleHighlight: 'Face Mills & Cutters',
    categoryLabel: 'Milling & Holemaking',
    badge: '90° True Square Shoulder Indexable Milling',
    subtitle: 'Helical cutting edge APMT inserts and modular BAP 300R / 400R milling cutter bodies delivering smooth axial cutting and true 90-degree clean step shoulders.',
    heroImage: '/lexustec/apmt-milling.jpg',
    popularStandards: ['APMT 1135 PDER', 'APMT 1604 PDER', 'BAP 300R C20', 'BAP 400R 50-22', 'BAP 400R 63-22', 'LT20 PVD'],
    techOverview: 'True 90-degree square shoulder milling eliminates secondary finishing passes on stepped pockets and guide rails. The high-rake parallelogram geometry dramatically cuts spindle load.',
    machiningParameters: [
      { workpiece: 'P - Carbon Steel Shoulder Milling', cuttingSpeed: '180 - 280 m/min', feedRate: '0.10 - 0.25 mm/tooth', depthOfCut: 'ap up to 8.0 mm', coolant: 'Dry Air Blast / Wet' },
      { workpiece: 'M - Stainless Steel Face Milling', cuttingSpeed: '120 - 200 m/min', feedRate: '0.08 - 0.18 mm/tooth', depthOfCut: 'ap up to 5.0 mm', coolant: 'Wet Flood Emulsion' },
      { workpiece: 'K - Cast Iron Pocket Roughing', cuttingSpeed: '160 - 240 m/min', feedRate: '0.12 - 0.30 mm/tooth', depthOfCut: 'ap up to 9.0 mm', coolant: 'Dry Air Blast' },
    ],
    items: [
      {
        id: 'apmt-1135-pder',
        code: 'APMT 1135 PDER-M2 LT20',
        name: 'Parallelogram 90° Shoulder Milling Insert (11mm Edge)',
        gradeOrType: 'LT20 (PVD Heat-Resistant TiAlN Nanocoat)',
        materials: ['P', 'M', 'K', 'S'],
        application: 'High-Speed Shoulder, Slot, and Face Milling on VMC Machines',
        specs: [
          { label: 'Cutting Edge Length (L)', value: '11.0 mm' },
          { label: 'Thickness (S)', value: '3.5 mm' },
          { label: 'Nose Radius (R)', value: '0.8 mm' },
          { label: 'Shoulder Angle', value: '90° True Square' },
          { label: 'Rake Geometry', value: 'High Positive Axial Rake' }
        ],
        stock: '2,200+ Pcs in Stock (Sector 5 Gurugram)',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/apmt-milling.jpg',
        highlight: 'VMC Industry Standard'
      },
      {
        id: 'apmt-1604-pder',
        code: 'APMT 1604 PDER-M2 LT10',
        name: 'Heavy Duty 90° Shoulder Milling Insert (16mm Edge)',
        gradeOrType: 'LT10 (CVD Multi-Layer Thick Al2O3)',
        materials: ['P', 'K'],
        application: 'Heavy Stock Removal & Large Face Mill Shell Cutters',
        specs: [
          { label: 'Cutting Edge Length (L)', value: '16.0 mm' },
          { label: 'Thickness (S)', value: '4.76 mm' },
          { label: 'Nose Radius (R)', value: '0.8 mm' },
          { label: 'Max Depth of Cut', value: '12.0 mm per pass' }
        ],
        stock: '1,500+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/apmt-milling.jpg',
        highlight: 'Heavy Depth of Cut'
      },
      {
        id: 'bap-300r-c20-20-150',
        code: 'BAP 300R-C20-20-150-2T',
        name: 'Modular End Mill Body for APMT 1135 (Ø20mm, 2 Teeth)',
        gradeOrType: 'High-Strength Nickel-Plated Alloy Steel Body',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Plunge, Slotting, and Ramping in Deep Mould Cavities',
        specs: [
          { label: 'Cutter Diameter', value: '20 mm' },
          { label: 'Shank Diameter', value: '20 mm' },
          { label: 'Overall Length', value: '150 mm' },
          { label: 'Flute Count', value: '2 Teeth Indexable' },
          { label: 'Through Coolant', value: 'Yes (Internal Port)' }
        ],
        stock: '65+ Units in Stock',
        brand: 'LexusTec Industrial',
        image: '/lexustec/apmt-milling.jpg'
      }
    ]
  },

  'solid-carbide-end-mills': {
    slug: 'solid-carbide-end-mills',
    titlePrefix: 'Solid Carbide',
    titleHighlight: 'End Mills (4F / 2F)',
    categoryLabel: 'Milling & Holemaking',
    badge: 'Micrograin Solid Carbide • 55 HRC / 65 HRC',
    subtitle: 'High-performance 4-flute flat and 2-flute ball nose solid carbide end mills with AlTiN / Nano-Si coatings for high-speed machining (HSM) and hard milling.',
    heroImage: '/lexustec/lexustec-endmills-studio.jpg',
    popularStandards: ['4F Flat (Ø3 - Ø20mm)', '2F Ball Nose (R1 - R8)', 'Unequal Flute Pitch', '55 HRC Series', '65 HRC Hardened', 'Hittco HSS-Co8'],
    techOverview: 'Crafted from 0.4µm ultra-fine submicron tungsten carbide blanks. Variable flute spacing and unequal helix angles break harmonic frequency, enabling aggressive trochoidal milling without tool chatter.',
    machiningParameters: [
      { workpiece: 'Pre-Hardened Steels (30-45 HRC)', cuttingSpeed: '120 - 200 m/min', feedRate: '0.04 - 0.12 mm/tooth', depthOfCut: 'ae 0.2D, ap 1.5D', coolant: 'Dry Air Blast / Mist' },
      { workpiece: 'Hardened Mould Steels (48-60 HRC)', cuttingSpeed: '80 - 140 m/min', feedRate: '0.02 - 0.08 mm/tooth', depthOfCut: 'ae 0.1D, ap 1.0D', coolant: 'Compressed Air' },
      { workpiece: 'Stainless Steel 304/316 Slotting', cuttingSpeed: '70 - 130 m/min', feedRate: '0.03 - 0.09 mm/tooth', depthOfCut: 'ae 1.0D, ap 0.5D', coolant: 'High Pressure Wet' },
    ],
    items: [
      {
        id: 'em-4f-10-55hrc',
        code: 'EM-4F-10D-55HRC AlTiN',
        name: '4-Flute Solid Carbide Flat End Mill (Ø10mm Shank & Cut)',
        gradeOrType: 'Ultra-Fine Grain Carbide (55 HRC Series + AlTiN)',
        materials: ['P', 'M', 'K', 'H'],
        application: 'Side Milling, Profiling, and Trochoidal Pocket Roughing',
        specs: [
          { label: 'Cutting Diameter (D)', value: '10.0 mm (h6 tolerance)' },
          { label: 'Shank Diameter (d)', value: '10.0 mm' },
          { label: 'Flute Length (L1)', value: '25.0 mm' },
          { label: 'Overall Length (L)', value: '75.0 mm' },
          { label: 'Helix Angle', value: '35° / 38° Differential' }
        ],
        stock: '350+ Units in Stock (Gurugram Central Depot)',
        brand: 'LexusTec / Hittco Series',
        image: '/lexustec/lexustec-endmills-studio.jpg',
        highlight: 'Top Seller for Die & Mould'
      },
      {
        id: 'em-4f-12-65hrc',
        code: 'EM-4F-12D-65HRC Blue Nano',
        name: 'Hard Milling End Mill for Quenched Steels up to 65 HRC',
        gradeOrType: 'Nano-Composite Blue Silicon Coated Carbide',
        materials: ['H', 'S'],
        application: 'Direct Milling of Hardened Tool Steels (D2, H13, 2379)',
        specs: [
          { label: 'Cutting Diameter (D)', value: '12.0 mm' },
          { label: 'Shank Diameter (d)', value: '12.0 mm' },
          { label: 'Flute Length (L1)', value: '30.0 mm' },
          { label: 'Overall Length (L)', value: '75.0 mm' },
          { label: 'Hardness Capability', value: 'Up to 65 HRC' }
        ],
        stock: '180+ Units in Stock',
        brand: 'LexusTec Premium',
        image: '/lexustec/lexustec-endmills-actual.jpg',
        highlight: 'Ultra-Hard Material Specialist'
      },
      {
        id: 'bn-2f-r4-60hrc',
        code: 'BN-2F-R4-50L Ball Nose',
        name: '2-Flute Solid Carbide Ball Nose End Mill (R4.0 / Ø8.0mm)',
        gradeOrType: 'AlCrN High Lubricity Hard Coating',
        materials: ['P', 'M', 'K', 'H'],
        application: '3D 5-Axis Curved Profile Contouring and Mould Finishing',
        specs: [
          { label: 'Ball Radius (R)', value: 'R4.0 mm ± 0.005' },
          { label: 'Cutting Diameter (D)', value: '8.0 mm' },
          { label: 'Overall Length (L)', value: '60.0 mm' },
          { label: 'Surface Roughness', value: 'Ra < 0.2 µm Mirror Grade' }
        ],
        stock: '210+ Units in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/lexustec-endmills-studio.jpg'
      }
    ]
  },

  'indexable-u-drills': {
    slug: 'indexable-u-drills',
    titlePrefix: 'Indexable U-Drills',
    titleHighlight: '(2D – 5D Depth)',
    categoryLabel: 'Milling & Holemaking',
    badge: 'High-Penetration Solid Drilling • Sector 5 Stock',
    subtitle: 'Through-coolant indexable insert drills for direct high-speed holemaking into solid metal without pilot drilling, offering 2D, 3D, 4D, and 5D drilling depths.',
    heroImage: '/lexustec/inserts-hero-bg.jpg',
    popularStandards: ['WCMX Series', 'SPGT / SPMT', '2D Short Series', '3D General Series', '5D Deep Hole', 'Through Coolant Dual Port'],
    techOverview: 'Dual-insert configuration: Central insert centers the cut with low peripheral speed while the peripheral insert balances centrifugal forces and sizes the final diameter with zero taper.',
    machiningParameters: [
      { workpiece: 'Structural & Carbon Steel (3D Hole)', cuttingSpeed: '140 - 220 m/min', feedRate: '0.08 - 0.18 mm/rev', depthOfCut: 'Solid Hole Penetration', coolant: 'Internal High-Pressure (>10 Bar)' },
      { workpiece: 'Stainless Steel Flange Drilling', cuttingSpeed: '90 - 150 m/min', feedRate: '0.06 - 0.14 mm/rev', depthOfCut: 'Solid Hole Penetration', coolant: 'Through Spindle High Flow' },
      { workpiece: 'Cast Iron Transmission Blocks', cuttingSpeed: '120 - 200 m/min', feedRate: '0.10 - 0.22 mm/rev', depthOfCut: 'Solid Hole Penetration', coolant: 'Internal Air/Emulsion' },
    ],
    items: [
      {
        id: 'udrill-3d-25mm',
        code: 'UD-3D-D25-C25 (Ø25mm Hole)',
        name: '3D Indexable Insert U-Drill Body (75mm Drilling Depth)',
        gradeOrType: 'High-Toughness 42CrMo Alloy Body + Nitrided Flutes',
        materials: ['P', 'M', 'K'],
        application: 'High-Efficiency Direct Drilling on VMCs & CNC Lathes',
        specs: [
          { label: 'Drilling Diameter', value: '25.0 mm' },
          { label: 'Drill Depth Ratio', value: '3D (75 mm Depth)' },
          { label: 'Shank Diameter', value: '25 mm (Weldon Flat)' },
          { label: 'Insert System', value: 'SPGT 07T308 (Center & Edge)' },
          { label: 'Coolant Design', value: 'Dual Spiral Through-Coolant' }
        ],
        stock: '45+ Units in Stock (Gurugram Depot)',
        brand: 'LexusTec Industrial',
        image: '/lexustec/inserts-hero-bg.jpg',
        highlight: 'No Pilot Drill Needed'
      },
      {
        id: 'spgt-07t308-insert',
        code: 'SPGT 07T308-EM LT20',
        name: 'Square Indexable U-Drill Insert (4 Cutting Edges)',
        gradeOrType: 'LT20 (PVD Ultra-Dense Wear Layer)',
        materials: ['P', 'M', 'K'],
        application: 'Central & Peripheral Pockets for 20-25mm U-Drills',
        specs: [
          { label: 'Insert Shape', value: 'Square 90°' },
          { label: 'Thickness', value: '3.97 mm' },
          { label: 'Corner Radius', value: '0.8 mm' },
          { label: 'Cutting Edges', value: '4 Indexable Positions' }
        ],
        stock: '900+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/inserts-hero-bg.jpg'
      },
      {
        id: 'udrill-4d-32mm',
        code: 'UD-4D-D32-C32 (Ø32mm Hole)',
        name: '4D Indexable Insert U-Drill Body (128mm Drilling Depth)',
        gradeOrType: 'Reinforced Web Section with Polished Chip Flutes',
        materials: ['P', 'M', 'K'],
        application: 'Deep Flange and Valve Hole Drilling',
        specs: [
          { label: 'Drilling Diameter', value: '32.0 mm' },
          { label: 'Drill Depth Ratio', value: '4D (128 mm Depth)' },
          { label: 'Shank Diameter', value: '32 mm' },
          { label: 'Insert Type', value: 'WCMX 050308 Series' }
        ],
        stock: '30+ Units in Stock',
        brand: 'LexusTec Industrial',
        image: '/lexustec/inserts-hero-bg.jpg'
      }
    ]
  },

  'roughing-cutters-alloys': {
    slug: 'roughing-cutters-alloys',
    titlePrefix: 'Roughing Cutters',
    titleHighlight: 'for Hardened Alloys',
    categoryLabel: 'Milling & Holemaking',
    badge: 'High Metal Removal Rate (MRR) Specialists',
    subtitle: 'Corrugated waveform HSS-Co8 and solid carbide roughing end mills engineered to shatter heavy chips into tiny manageable needles under extreme feeds.',
    heroImage: '/lexustec/onmu-octagonal.jpg',
    popularStandards: ['Waveform Knuckle Profile', 'Hittco HSS-Co8 Roughers', 'ONMU 0505 Heavy Milling', 'Multi-Flute High Feed Cutters', '4-Flute Rougher'],
    techOverview: 'Knuckle-profile corrugated ridges act as multi-point chip dividers, cutting cutting pressure by 40% and preventing the swarf entanglement common when hogging out forging blanks.',
    machiningParameters: [
      { workpiece: 'Heavy Steel Forging Hogging', cuttingSpeed: '90 - 150 m/min', feedRate: '0.15 - 0.40 mm/tooth', depthOfCut: 'ap up to 1.5D', coolant: 'Heavy Flood' },
      { workpiece: 'High-Nickel Aerospace Alloys (Inconel)', cuttingSpeed: '30 - 60 m/min', feedRate: '0.05 - 0.12 mm/tooth', depthOfCut: 'ap up to 0.8D', coolant: 'High-Pressure Emulsion' },
      { workpiece: 'Heavy Cast Steel Frame Facing', cuttingSpeed: '110 - 180 m/min', feedRate: '0.20 - 0.45 mm/tooth', depthOfCut: 'ap up to 2.0D', coolant: 'Flood / Air' },
    ],
    items: [
      {
        id: 'hittco-rougher-16mm',
        code: 'Hittco HSS-Co8 Roughing End Mill (Ø16mm)',
        name: '8% Cobalt High-Speed Steel Knuckle Profile Rougher',
        gradeOrType: 'M42 / HSS-Co8 (66-68 HRC) Ground from Solid',
        materials: ['P', 'M', 'K', 'S'],
        application: 'Deep Pocket Hogging on Manual Mills & Heavy CNC Machines',
        specs: [
          { label: 'Cutting Diameter', value: '16.0 mm' },
          { label: 'Shank Diameter', value: '16.0 mm' },
          { label: 'Flute Length', value: '35.0 mm' },
          { label: 'Tooth Profile', value: 'Fine-Pitch Knuckle Wave' },
          { label: 'Flute Count', value: '4 Flutes' }
        ],
        stock: '140+ Units in Stock (Authorized Hittco Stockist)',
        brand: 'Hittco Tools Authorized',
        image: '/lexustec/onmu-octagonal.jpg',
        highlight: 'Heavy Shock Resistant'
      },
      {
        id: 'onmu-050508-octagonal',
        code: 'ONMU 050508-GH LT10',
        name: 'Double-Sided 16-Edge Octagonal Heavy Face Milling Insert',
        gradeOrType: 'LT10 (Heavy-Duty CVD Coated Carbide)',
        materials: ['P', 'K'],
        application: 'High-Efficiency Heavy Surfacing on Steel Plates and Welded Bases',
        specs: [
          { label: 'Insert Shape', value: 'Octagonal 8-Sided' },
          { label: 'Total Usable Edges', value: '16 Edges (8 Front + 8 Back)' },
          { label: 'Cost-Per-Edge', value: 'Lowest in Industry' },
          { label: 'Depth of Cut', value: 'Up to 5.0 mm' }
        ],
        stock: '800+ Pcs in Stock',
        brand: 'LexusTec Germany Standard',
        image: '/lexustec/onmu-octagonal.jpg',
        highlight: '16 Usable Cutting Edges'
      }
    ]
  },

  'bt40-bt50-spindle-chucks': {
    slug: 'bt40-bt50-spindle-chucks',
    titlePrefix: 'BT40 & BT50',
    titleHighlight: 'Spindle Chucks',
    categoryLabel: 'CNC Toolholding Systems',
    badge: 'Dynamically Balanced G2.5 @ 20,000 RPM',
    subtitle: 'High-precision BT taper tool holders manufactured from forged 20CrMnTi alloy, case-hardened with high-precision ground taper angles (<AT3 tolerance) for CNC machining centers.',
    heroImage: '/collet-milling.jpg',
    popularStandards: ['BT40-ER32-70', 'BT40-ER25-100', 'BT40-ER16-70', 'BT50-ER40-100', 'BT40-SLN20-90', 'G2.5 Balancing'],
    techOverview: 'Ground to Japanese MAS 403 standard with 7:24 taper accuracy better than AT3. Cryogenically carbonitrided surface guarantees long taper socket life and zero spindle marring.',
    machiningParameters: [
      { workpiece: 'High Speed VMC Finishing (20,000 RPM)', cuttingSpeed: 'G2.5 Dynamic Balanced', feedRate: 'Runout < 0.003mm', depthOfCut: 'Zero Centrifugal Deviation', coolant: 'Through Spindle / Flange' },
      { workpiece: 'Heavy Milling Roughing (BT50 Spindle)', cuttingSpeed: 'High Clamping Force >150Nm', feedRate: 'Rigid Solid Contact', depthOfCut: 'Heavy Radial Load Proof', coolant: 'Flood Wet' },
      { workpiece: 'Precision Mould Toolholding (BT40)', cuttingSpeed: 'Runout < 0.005mm at 4D', feedRate: 'Consistent Mirror Pass', depthOfCut: 'Low Spindle Stress', coolant: 'Dual Port MQL' },
    ],
    items: [
      {
        id: 'bt40-er32-70',
        code: 'BT40-ER32-70 Chuck (G2.5 @ 20K)',
        name: 'BT40 ER32 Precision Collet Chuck (70mm Gauge Length)',
        gradeOrType: '20CrMnTi Forged Alloy Steel (HRC 56-58 Core Hardness)',
        materials: ['P', 'M', 'K', 'N', 'S', 'H'],
        application: 'General Milling, Drilling, Reaming, and Tapping on BT40 VMCs',
        specs: [
          { label: 'Spindle Taper', value: 'BT40 MAS 403 Standard' },
          { label: 'Collet Series', value: 'ER32 (Clamps 2mm - 20mm)' },
          { label: 'Gauge Length (A)', value: '70 mm (Short Rigid)' },
          { label: 'Taper Accuracy', value: '< AT3 (0.002 mm)' },
          { label: 'Balancing Grade', value: 'G2.5 @ 20,000 RPM' }
        ],
        stock: '95+ Units in Stock (Gurugram Depot)',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg',
        highlight: 'VMC Workshop Essential'
      },
      {
        id: 'bt40-er25-100',
        code: 'BT40-ER25-100 Chuck (100mm Gauge)',
        name: 'Extended Reach BT40 ER25 Collet Chuck for Deep Cavities',
        gradeOrType: 'Case Hardened & Precision Ground Alloy Steel',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Die & Mould Deep Pocket Milling with Slender Clearance',
        specs: [
          { label: 'Spindle Taper', value: 'BT40' },
          { label: 'Collet Capacity', value: 'ER25 (Clamps 1mm - 16mm)' },
          { label: 'Gauge Length (A)', value: '100 mm Extended' },
          { label: 'Nut Type', value: 'Balanced Mini-Nut / Standard UM' }
        ],
        stock: '60+ Units in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      },
      {
        id: 'bt50-er40-100',
        code: 'BT50-ER40-100 Heavy Spindle Chuck',
        name: 'Heavy Duty BT50 Spindle Chuck (Clamps up to 30mm Tools)',
        gradeOrType: 'Forged Heavy Duty Alloy Steel Block',
        materials: ['P', 'M', 'K'],
        application: 'Heavy Horizontal & Vertical Machining Centers (HMCs/VMCs)',
        specs: [
          { label: 'Spindle Taper', value: 'BT50 (Large Taper)' },
          { label: 'Collet Series', value: 'ER40 (Clamps 3mm - 30mm)' },
          { label: 'Gauge Length', value: '100 mm' },
          { label: 'Max Torque Clamp', value: '180 Nm' }
        ],
        stock: '35+ Units in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      }
    ]
  },

  'er-precision-collets': {
    slug: 'er-precision-collets',
    titlePrefix: 'ER16 / ER25 / ER32',
    titleHighlight: 'Precision Collets',
    categoryLabel: 'CNC Toolholding Systems',
    badge: 'Ultra-Precision DIN 6499 Class AA (<0.005mm)',
    subtitle: 'DIN 6499B compliant spring collets engineered from SUJ2 bearing steel, sub-zero cryogenically stabilized for permanent concentricity and repeatability.',
    heroImage: '/collet-milling.jpg',
    popularStandards: ['ER11 (1 - 7mm)', 'ER16 (1 - 10mm)', 'ER20 (1 - 13mm)', 'ER25 (1 - 16mm)', 'ER32 (2 - 20mm)', 'ER40 (3 - 30mm)'],
    techOverview: 'Precision 16-slot split geometry provides equal circumferential grip around the tool shank. Certified concentric runout <0.005mm ensures even tool tooth loading and extends end mill life by up to 40%.',
    machiningParameters: [
      { workpiece: 'Micro-Drilling & Reaming (ER11/ER16)', cuttingSpeed: 'Concentricity < 0.005mm', feedRate: 'Zero Runout Drift', depthOfCut: 'Tool Life Extended 40%', coolant: 'Flood / Dry' },
      { workpiece: 'Solid Carbide Milling (ER25/ER32)', cuttingSpeed: 'High Clamping Rigidity', feedRate: 'Vibration Dampening', depthOfCut: 'Radial Grip Standard', coolant: 'Internal / Flood' },
      { workpiece: 'Heavy Tapping / Boring (ER32/ER40)', cuttingSpeed: 'Full Length Grip Band', feedRate: 'No Tool Pullout', depthOfCut: 'High Torque Transmission', coolant: 'Wet Flood' },
    ],
    items: [
      {
        id: 'er32-collet-set',
        code: 'ER32-AA Precision Collet (Full Sizes 2-20mm)',
        name: 'ER32 Ultra-Precision Spring Collet (DIN 6499 Class AA)',
        gradeOrType: 'SUJ2 Alloy Bearing Steel (Cryogenic -120°C Treated)',
        materials: ['P', 'M', 'K', 'N', 'S', 'H'],
        application: 'High-Precision Clamping for Solid Carbide Mills, Reamers & Drills',
        specs: [
          { label: 'Collet Series', value: 'ER32 (Standard DIN 6499B)' },
          { label: 'Clamping Range', value: '2.0 mm to 20.0 mm (1mm steps)' },
          { label: 'Concentric Runout', value: '< 0.005 mm (5 Micron Class AA)' },
          { label: 'Elastic Recovery', value: '100% after 10,000 Clamps' },
          { label: 'Hardness', value: 'HRC 44 - 48' }
        ],
        stock: '2,500+ Pcs in Stock (All Sizes Individual or Set)',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg',
        highlight: '5-Micron Certified Runout'
      },
      {
        id: 'er25-collet-set',
        code: 'ER25-AA Precision Collet (Sizes 1-16mm)',
        name: 'ER25 Ultra-Precision Spring Collet (DIN 6499 Class AA)',
        gradeOrType: 'SUJ2 Alloy Bearing Steel',
        materials: ['P', 'M', 'K', 'N', 'S', 'H'],
        application: 'High-Speed Milling & Drilling on VMCs',
        specs: [
          { label: 'Collet Series', value: 'ER25' },
          { label: 'Clamping Range', value: '1.0 mm to 16.0 mm' },
          { label: 'Concentric Runout', value: '< 0.005 mm' }
        ],
        stock: '1,800+ Pcs in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      },
      {
        id: 'er16-collet-set',
        code: 'ER16-AA Precision Collet (Sizes 1-10mm)',
        name: 'ER16 Ultra-Precision Spring Collet for Small Shanks & Drills',
        gradeOrType: 'SUJ2 High-Wear Elastic Steel',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Small Diameter Tooling & High-Speed Micro Engraving',
        specs: [
          { label: 'Collet Series', value: 'ER16' },
          { label: 'Clamping Range', value: '1.0 mm to 10.0 mm' },
          { label: 'Concentric Runout', value: '< 0.005 mm' }
        ],
        stock: '1,200+ Pcs in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      }
    ]
  },

  'side-lock-end-mill-holders': {
    slug: 'side-lock-end-mill-holders',
    titlePrefix: 'Side-Lock',
    titleHighlight: 'End Mill Holders (Weldon)',
    categoryLabel: 'CNC Toolholding Systems',
    badge: 'Zero Tool Pull-Out • Heavy Roughing Security',
    subtitle: 'DIN 1835-B Weldon flat side-lock clamping adaptors engineered for extreme torque transmission and zero tool pull-out in aggressive milling operations.',
    heroImage: '/collet-milling.jpg',
    popularStandards: ['BT40-SLA16-75', 'BT40-SLA20-90', 'BT40-SLA25-100', 'BT50-SLA32-105', 'DIN 1835-B Form Flat', 'High Torque Clamping'],
    techOverview: 'Direct side-clamping screw locks into the Weldon shank flat, eliminating tool creep or axial slip under heavy downward cutting vectors and interrupted cuts.',
    machiningParameters: [
      { workpiece: 'Heavy Rough Milling on Die Steels', cuttingSpeed: '100% Slip Proof', feedRate: 'Zero Axial Pullout', depthOfCut: 'Heavy High-Torque Safe', coolant: 'Flood / Through Tool' },
      { workpiece: 'High Depth-of-Cut Slotting', cuttingSpeed: 'Rigid Mechanical Lock', feedRate: 'Continuous Heavy Feed', depthOfCut: 'Full Flute Engagement', coolant: 'Wet Flood' },
      { workpiece: 'Rough Plunging on Cast Blocks', cuttingSpeed: 'Radial Shock Absorbing', feedRate: 'High Mechanical Grip', depthOfCut: 'Heavy Plunge Pass', coolant: 'Wet Flood' },
    ],
    items: [
      {
        id: 'bt40-sla20-90',
        code: 'BT40-SLA20-90 (Ø20mm Bore)',
        name: 'Side Lock End Mill Holder Weldon Type (90mm Gauge)',
        gradeOrType: 'High-Tensile 20CrMnTi Forged Alloy Steel',
        materials: ['P', 'M', 'K'],
        application: 'Heavy Roughing End Mills with Weldon Flat (Zero Slippage)',
        specs: [
          { label: 'Spindle Connection', value: 'BT40 MAS 403' },
          { label: 'Bore Diameter (D1)', value: '20.0 mm (H4 tolerance)' },
          { label: 'Gauge Length (A)', value: '90 mm' },
          { label: 'Clamping Method', value: 'Dual Hardened Set Screws' },
          { label: 'Pull-Out Prevention', value: '100% Mechanical Lock' }
        ],
        stock: '55+ Units in Stock (Gurugram Depot)',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg',
        highlight: 'Zero Axial Pullout Guaranteed'
      },
      {
        id: 'bt40-sla16-75',
        code: 'BT40-SLA16-75 (Ø16mm Bore)',
        name: 'Compact Side Lock Holder for Ø16mm Weldon Shanks',
        gradeOrType: 'Case Hardened Alloy Steel (HRC 58)',
        materials: ['P', 'M', 'K'],
        application: 'High-Torque Milling with Short Rigid Gauge Length',
        specs: [
          { label: 'Spindle Connection', value: 'BT40' },
          { label: 'Bore Diameter (D1)', value: '16.0 mm' },
          { label: 'Gauge Length (A)', value: '75 mm Short' }
        ],
        stock: '70+ Units in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      },
      {
        id: 'bt50-sla32-105',
        code: 'BT50-SLA32-105 Heavy Side Lock',
        name: 'Heavy Duty BT50 Weldon Holder for Ø32mm Large Roughing Cutters',
        gradeOrType: 'Forged 20CrMnTi Alloy Block',
        materials: ['P', 'M', 'K'],
        application: 'Heavy Duty HMC/VMC High Metal Removal Roughing',
        specs: [
          { label: 'Spindle Taper', value: 'BT50' },
          { label: 'Bore Diameter', value: '32.0 mm' },
          { label: 'Gauge Length', value: '105 mm' }
        ],
        stock: '25+ Units in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      }
    ]
  },

  'pull-studs-torque-spanners': {
    slug: 'pull-studs-torque-spanners',
    titlePrefix: 'Pull Studs',
    titleHighlight: '& Torque Spanners',
    categoryLabel: 'CNC Toolholding Systems',
    badge: 'Spindle Safety Retention Knobs & Service Tools',
    subtitle: 'Precision machined MAS 403 / DIN 69872 retention knobs and calibrated hook spanner wrenches preventing drawbar wear and collet nut deformation.',
    heroImage: '/collet-milling.jpg',
    popularStandards: ['BT40-45° MAS 403', 'BT40-60° MAS 403', 'BT40-90° MAS 403', 'BT50-45° Coolant Through', 'ER16A / ER25UM Spanners', 'ER32UM Wrench'],
    techOverview: 'Retention knobs are heat treated to 54-58 HRC with specialized cryogenic tempering to prevent thread embrittlement, protecting the CNC machine spindle drawbar from catastrophic fracture.',
    machiningParameters: [
      { workpiece: 'Spindle Retention Retention Knob Safety', cuttingSpeed: 'Hardness 54 - 58 HRC', feedRate: 'Zero Micro-Crack Temper', depthOfCut: 'Drawbar Pull Safe >20kN', coolant: 'Through Hole O-Ring Seal' },
      { workpiece: 'ER Nut Correct Torque Tightening', cuttingSpeed: 'Calibrated Hook Fit', feedRate: 'Prevents Nut Deform', depthOfCut: 'Optimal Collet Collapse', coolant: 'Dry Clean' },
      { workpiece: 'VMC Toolchanger Arm Safety', cuttingSpeed: 'Exact Flange Flank Radii', feedRate: 'Smooth Arm Handover', depthOfCut: 'ATC Gripper Safe', coolant: 'Dry Wipe' },
    ],
    items: [
      {
        id: 'bt40-45-pullstud',
        code: 'BT40-45° MAS 403 Pull Stud (Retention Knob)',
        name: 'BT40 45-Degree High-Tensile CNC Spindle Retention Knob',
        gradeOrType: '20CrMnTi Alloy Steel (Case Hardened 55-58 HRC)',
        materials: ['P', 'M', 'K', 'N', 'S', 'H'],
        application: 'Standard Spindle Clamping for BT40 CNC Milling Machines',
        specs: [
          { label: 'Thread Size', value: 'M16 x 2.0' },
          { label: 'Knob Head Angle', value: '45° MAS 403' },
          { label: 'Overall Length', value: '60 mm' },
          { label: 'Coolant Through', value: 'Yes (With O-Ring Seal)' },
          { label: 'Tensile Strength', value: '> 1,000 MPa Fracture Proof' }
        ],
        stock: '1,500+ Pcs in Stock (Sector 5 Gurugram)',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg',
        highlight: 'Essential Safety Component'
      },
      {
        id: 'er32um-spanner',
        code: 'ER32-UM Heavy Hook Spanner',
        name: 'Forged Non-Slip Collet Nut Spanner Wrench for ER32 Nut',
        gradeOrType: 'Heat-Treated Chrome-Vanadium Alloy Steel',
        materials: ['P', 'M', 'K', 'N'],
        application: 'Safe Tightening and Loosening of ER32 Collet Nuts',
        specs: [
          { label: 'Nut Type', value: 'ER32-UM (Castellated Flange)' },
          { label: 'Grip Handle', value: 'Ergonomic PVC Soft Dip' },
          { label: 'Torque Capacity', value: 'Up to 170 Nm' },
          { label: 'Finish', value: 'Black Oxide Anti-Corrosion' }
        ],
        stock: '220+ Units in Stock',
        brand: 'LexusTec Workshop Tools',
        image: '/collet-milling.jpg'
      },
      {
        id: 'bt50-45-pullstud',
        code: 'BT50-45° MAS 403 Heavy Pull Stud',
        name: 'Heavy Duty BT50 Spindle Retention Knob (M24 Thread)',
        gradeOrType: '20CrMnTi Alloy Steel (HRC 56-58)',
        materials: ['P', 'M', 'K'],
        application: 'Heavy HMC/VMC BT50 High-Force Spindle Gripper Systems',
        specs: [
          { label: 'Thread Size', value: 'M24 x 3.0' },
          { label: 'Knob Head Angle', value: '45° MAS 403' },
          { label: 'Coolant Through', value: 'Yes (High Pressure Seal)' }
        ],
        stock: '450+ Pcs in Stock',
        brand: 'LexusTec Precision Toolholding',
        image: '/collet-milling.jpg'
      }
    ]
  }
};
