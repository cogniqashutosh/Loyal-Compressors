import {
  Factory,
  Mountain,
  UtensilsCrossed,
  Car,
  Shirt,
  Stethoscope,
  Cpu,
} from "lucide-react"
import type { Industry } from "@/types/industry"

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Reliable, continuous-duty compressed air for production lines and automation.",
    overview:
      "Manufacturing plants run pneumatic tools, automation, and control systems around the clock — any compressed air interruption stops the line. Our screw compressors and complete systems are sized for continuous duty with minimal unplanned downtime.",
    challenges: [
      "Continuous multi-shift operation with near-zero tolerance for downtime",
      "Variable demand across different production lines and shifts",
      "Energy costs that scale directly with air demand",
    ],
    recommendedProducts: ["screw-air-compressors", "compressed-air-systems", "air-tanks"],
  },
  {
    slug: "mining",
    name: "Mining",
    icon: Mountain,
    description: "Rugged, high-capacity systems built for harsh site conditions.",
    overview:
      "Mining sites demand compressed air equipment that can handle dust, vibration, remote locations, and extreme temperatures — often with no grid power available. Our portable and skid-mounted diesel compressors are built for exactly this environment.",
    challenges: [
      "Remote sites with no reliable grid power",
      "Harsh dust, vibration, and temperature extremes",
      "High-capacity air demand for drilling and pneumatic tools",
    ],
    recommendedProducts: ["portable-compressors", "air-dryers"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: UtensilsCrossed,
    description: "Oil-free, contamination-safe air for processing and packaging lines.",
    overview:
      "Air that contacts food, beverage, or packaging must be free of oil contamination risk. Our oil-free compressors are certified to ISO 8573-1 Class 0, giving processing and packaging lines a verifiable air-quality guarantee.",
    challenges: [
      "Zero tolerance for oil contamination in product-contact air",
      "Strict food-safety audit and certification requirements",
      "Washdown-compatible equipment for sanitary environments",
    ],
    recommendedProducts: ["oil-free-compressors", "air-dryers", "accessories"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    description: "Precision pressure control for assembly, tooling, and paint booths.",
    overview:
      "Automotive assembly relies on precise, stable air pressure for torque tools, robotics, and paint booths. Our VSD screw compressors hold pressure within tight tolerances while reducing energy use during variable-demand shifts.",
    challenges: [
      "Precision pressure stability for torque-critical tooling",
      "Clean, dry air for paint booth applications",
      "Energy efficiency across variable multi-shift demand",
    ],
    recommendedProducts: ["screw-air-compressors", "air-dryers", "compressed-air-systems"],
  },
  {
    slug: "textile",
    name: "Textile",
    icon: Shirt,
    description: "Consistent airflow for looms, spinning, and finishing equipment.",
    overview:
      "Textile machinery — looms, spinning frames, and finishing lines — needs a steady, adequately dried air supply to avoid fabric defects and equipment wear. We size systems to your plant's continuous air demand.",
    challenges: [
      "Continuous operation across large textile machinery fleets",
      "Moisture control to prevent fabric and equipment issues",
      "Plant-wide air distribution across large facility footprints",
    ],
    recommendedProducts: ["screw-air-compressors", "air-dryers", "air-tanks"],
  },
  {
    slug: "medical",
    name: "Medical",
    icon: Stethoscope,
    description: "ISO Class 0 certified air purity for pharmaceutical and medical applications.",
    overview:
      "Pharmaceutical and medical-grade applications require certified oil-free air with full documentation. Our oil-free compressor line is designed to meet these air-purity and compliance requirements out of the box.",
    challenges: [
      "Certified oil-free air purity with audit-ready documentation",
      "Compliance with pharmaceutical manufacturing standards",
      "Redundant/backup capacity for critical operations",
    ],
    recommendedProducts: ["oil-free-compressors", "air-dryers"],
  },
  {
    slug: "electronics",
    name: "Electronics",
    icon: Cpu,
    description: "Ultra-clean, moisture-free air for sensitive component manufacturing.",
    overview:
      "Electronics manufacturing is sensitive to both contamination and moisture. Our oil-free compressors paired with desiccant dryers deliver the ultra-clean, ultra-dry air required for sensitive component production.",
    challenges: [
      "Ultra-low moisture requirements for sensitive components",
      "Zero particulate or oil contamination tolerance",
      "Consistent air quality across cleanroom environments",
    ],
    recommendedProducts: ["oil-free-compressors", "air-dryers", "accessories"],
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
