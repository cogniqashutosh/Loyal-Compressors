import { Cog, Droplets, Truck, Wind, Box, Wrench, Layers } from "lucide-react"
import type { ProductCategory } from "@/types/product"

export const productCategories: ProductCategory[] = [
  {
    slug: "screw-air-compressors",
    name: "Screw Air Compressors",
    icon: Cog,
    shortDescription:
      "Oil-injected and variable-speed rotary screw compressors built for continuous industrial duty cycles.",
    overview:
      "Our rotary screw compressors are the backbone of continuous industrial operations — engineered for round-the-clock duty cycles with minimal maintenance downtime. Available in oil-injected, oil-free, and variable-speed drive (VSD) configurations, each unit is factory-tested for output, noise, and vibration before it ships.",
    features: ["5–300+ HP range", "Oil-injected & VSD models", "Low noise, high efficiency"],
    benefits: [
      "Continuous-duty rotary screw airend rated for 24/7 operation",
      "VSD models cut energy use by matching output to real-time demand",
      "Integrated air/oil separation for cleaner discharge air",
      "Remote monitoring and diagnostics on select models",
    ],
    image: "/images/products/screw-air-compressor.png",
    featured: true,
    specs: [
      { label: "Power", value: "5 – 300+ HP" },
      { label: "Capacity", value: "15 – 1500+ CFM" },
      { label: "Pressure", value: "100 – 200 PSI" },
      { label: "Drive Type", value: "Fixed-speed / VSD" },
    ],
    applications: ["Manufacturing", "Automotive", "General industrial"],
  },
  {
    slug: "oil-free-compressors",
    name: "Oil-Free Compressors",
    icon: Droplets,
    shortDescription:
      "100% oil-free air for contamination-sensitive processes, certified to ISO Class 0 air purity.",
    overview:
      "Where product quality and air purity can't be compromised, our oil-free screw compressors deliver ISO 8573-1 Class 0 certified air with zero risk of oil carryover — critical for food, pharmaceutical, electronics, and medical-grade applications.",
    features: ["ISO Class 0 certified air", "Food & pharma grade", "Low lifecycle cost"],
    benefits: [
      "Zero oil carryover eliminates contamination risk downstream",
      "Meets food-safety and pharmaceutical air-quality standards out of the box",
      "Water- or air-cooled configurations available",
      "Lower filtration and air-treatment costs versus oil-injected alternatives",
    ],
    image: "/images/products/oil-free-compressor.png",
    featured: true,
    specs: [
      { label: "Power", value: "10 – 250 HP" },
      { label: "Capacity", value: "50 – 1200 CFM" },
      { label: "Air purity", value: "ISO 8573-1 Class 0" },
      { label: "Cooling", value: "Air / Water cooled" },
    ],
    applications: ["Food & beverage", "Pharmaceutical", "Electronics"],
  },
  {
    slug: "portable-compressors",
    name: "Portable Compressors",
    icon: Truck,
    shortDescription:
      "Diesel and electric portable/towable compressors engineered for construction and field service.",
    overview:
      "Built for job sites and field service work, our portable compressors combine rugged, weatherproof enclosures with towable or skid-mounted chassis — so reliable compressed air goes wherever the job takes you, off-grid or on.",
    features: ["Diesel & electric options", "Tow-behind & skid mounts", "Rugged field duty"],
    benefits: [
      "Weatherproof canopy protects the airend and controls on remote sites",
      "Diesel models run fully off-grid for construction and mining sites",
      "Road-legal tow-behind chassis for fast site-to-site relocation",
      "Sound-dampened enclosures for noise-sensitive job sites",
    ],
    image: "/images/products/portable-compressor.png",
    specs: [
      { label: "Power", value: "20 – 400 HP" },
      { label: "Capacity", value: "100 – 1600 CFM" },
      { label: "Mount", value: "Tow-behind / skid" },
      { label: "Fuel", value: "Diesel / Electric" },
    ],
    applications: ["Construction", "Mining", "Field service"],
  },
  {
    slug: "air-dryers",
    name: "Air Dryers",
    icon: Wind,
    shortDescription:
      "Refrigerated and desiccant air dryers that remove moisture for reliable downstream equipment protection.",
    overview:
      "Moisture in compressed air corrodes piping, damages tooling, and ruins finished product. Our refrigerated and desiccant dryers are sized to match your compressor's output, holding dew point steady even under variable demand.",
    features: ["Refrigerated & desiccant", "Low pressure dew point", "Energy-saving cycling control"],
    benefits: [
      "Refrigerated models for general industrial dew point requirements",
      "Desiccant (twin-tower) models for instrumentation-grade dry air down to -40°F",
      "Cycling controls reduce energy use at partial load",
      "Sized to match compressor output — no under- or over-drying",
    ],
    image: "/images/products/air-dryer.png",
    specs: [
      { label: "Flow", value: "10 – 3000 CFM" },
      { label: "Dew point", value: "As low as -40°F" },
      { label: "Type", value: "Refrigerated / Desiccant" },
    ],
    applications: ["Instrumentation", "Painting", "Pneumatic controls"],
  },
  {
    slug: "air-tanks",
    name: "Air Tanks",
    icon: Box,
    shortDescription:
      "ASME-rated vertical and horizontal receiver tanks for stable pressure and reduced compressor cycling.",
    overview:
      "A correctly sized receiver tank smooths pressure fluctuations, reduces compressor start/stop cycling, and buffers peak demand — extending compressor life and stabilizing supply to sensitive equipment.",
    features: ["ASME-rated construction", "Vertical & horizontal", "50 – 3000 gallon capacity"],
    benefits: [
      "Reduces compressor cycling frequency, extending motor and airend life",
      "Buffers short-duration peak demand without oversizing the compressor",
      "Vertical footprint for tight spaces, horizontal for stability at scale",
      "ASME-code construction with full certification documentation",
    ],
    image: "/images/products/air-tank.png",
    specs: [
      { label: "Capacity", value: "50 – 3000 gal" },
      { label: "Rating", value: "ASME certified" },
      { label: "Orientation", value: "Vertical / Horizontal" },
    ],
    applications: ["Buffer storage", "Peak demand smoothing"],
  },
  {
    slug: "accessories",
    name: "Accessories",
    icon: Wrench,
    shortDescription:
      "Filters, drains, piping, and control accessories to complete and protect your compressed air system.",
    overview:
      "The right accessories protect your investment and keep air quality consistent — from line filtration and automatic condensate drains to piping and system controls sized for your installation.",
    features: ["Line filtration", "Auto drains", "Condensate management"],
    benefits: [
      "Multi-stage filtration protects tooling and finished product from particulates",
      "Automatic drains remove condensate without manual intervention",
      "Piping kits sized to minimize pressure drop across the system",
      "Control accessories for sequencing multiple compressors efficiently",
    ],
    image: "/images/products/accessories.png",
    specs: [
      { label: "Filtration", value: "Particulate / Coalescing" },
      { label: "Drain type", value: "Timed / Zero-loss" },
    ],
    applications: ["System protection", "Maintenance & upgrades"],
  },
  {
    slug: "compressed-air-systems",
    name: "Complete Compressed Air Systems",
    icon: Layers,
    shortDescription:
      "Fully engineered turnkey compressed air systems — compressor, dryer, tank, and controls sized to your plant.",
    overview:
      "For new facility build-outs and plant-wide upgrades, our engineering team designs a complete compressed air system as one integrated package — compressor, dryer, receiver tank, filtration, and controls — sized together for your actual demand profile.",
    features: ["Turnkey system design", "Single-point responsibility", "Optimized for total cost of ownership"],
    benefits: [
      "One engineering team designs the compressor, dryer, tank, and controls together",
      "Single-point responsibility simplifies procurement and warranty support",
      "System sized for actual demand profile, not oversized component-by-component",
      "Skid-mounted options for faster on-site installation",
    ],
    image: "/images/products/compressed-air-system.png",
    featured: true,
    specs: [
      { label: "Configuration", value: "Compressor + Dryer + Tank" },
      { label: "Mounting", value: "Skid-mounted / Modular" },
    ],
    applications: ["New facility build-out", "Plant-wide upgrades"],
  },
]

export const featuredProductCategories = productCategories.filter((p) => p.featured)

export function getProductCategory(slug: string) {
  return productCategories.find((p) => p.slug === slug)
}
