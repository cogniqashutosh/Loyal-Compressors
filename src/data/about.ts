export const mission =
  "Provide reliable, energy-efficient compressed air solutions that empower businesses to operate at peak productivity."

export const vision =
  "To be the trusted global partner of choice for industrial compressed air, recognized for engineering quality, reliability, and responsive export support."

export const coreValues = [
  {
    title: "Quality First",
    description: "Every unit is factory-tested for output, noise, and vibration before it ships.",
  },
  {
    title: "Customer Focus",
    description: "Engineering support that starts before the sale and continues after installation.",
  },
  {
    title: "Innovation",
    description: "Continuous investment in VSD, oil-free, and energy-efficient compressor technology.",
  },
  {
    title: "Integrity",
    description: "Transparent pricing, honest lead times, and documentation you can rely on.",
  },
]

export type MilestoneIconName = "Rocket" | "Globe" | "Zap" | "ShieldCheck" | "TrendingUp" | "Award"

export interface Milestone {
  year: string
  title: string
  description: string
  icon: MilestoneIconName
  image: string
  facts: [string, string]
}

export const timeline: Milestone[] = [
  {
    year: "2011",
    title: "Company Founded",
    description:
      "Shandong Loyal Machinery was established in Jinan with a single production line and a focused mission: build reliable rotary screw compressors at a fair, factory-direct price. That first line laid the foundation for everything that followed.",
    icon: "Rocket",
    image: "/images/factory/facility.webp",
    facts: ["Founded in Jinan, Shandong", "Started with rotary screw compressors"],
  },
  {
    year: "2014",
    title: "First Export Markets",
    description:
      "We shipped our first containers of fixed-speed screw compressors to Southeast Asia and the Middle East, learning export documentation, freight logistics, and international after-sales support from the ground up.",
    icon: "Globe",
    image: "/images/contact-hero.jpg",
    facts: ["First shipments to Southeast Asia", "Entered Middle East markets"],
  },
  {
    year: "2017",
    title: "VSD Product Line Launched",
    description:
      "Rising energy costs pushed us to introduce variable-speed drive compressors, matching output to real-time air demand and cutting customer electricity bills by up to 35% compared to fixed-speed units.",
    icon: "Zap",
    image: "/images/timeline-vsd.jpg",
    facts: ["Up to 35% lower electricity bills", "Output matched to real-time air demand"],
  },
  {
    year: "2020",
    title: "Oil-Free Line & ISO Certification",
    description:
      "We launched an ISO 8573-1 Class 0 certified oil-free line and earned ISO 9001 quality certification, opening the door to food, beverage, and pharmaceutical customers who require zero oil-contamination risk.",
    icon: "ShieldCheck",
    image: "/images/factory/quality-testing.webp",
    facts: ["ISO 8573-1 Class 0 certified", "ISO 9001 quality management"],
  },
  {
    year: "2023",
    title: "50+ Export Markets",
    description:
      "Our distributor and OEM network grew to cover more than 50 countries across Asia, Africa, Latin America, and the Middle East, backed by multilingual sales support and regional spare-parts stocking.",
    icon: "TrendingUp",
    image: "/images/timeline-export.jpg",
    facts: ["Distributors across 4 continents", "Regional spare-parts stocking"],
  },
  {
    year: "2026",
    title: "15+ Years of Manufacturing",
    description:
      "Today our factory runs multiple production lines with in-house R&D, full quality testing, and expanded capacity — while we keep investing in energy-efficient technology for the next 15 years of growth.",
    icon: "Award",
    image: "/images/about-hero.jpg",
    facts: ["Multiple active production lines", "Dedicated in-house R&D team"],
  },
]

export const rdOverview =
  "Our in-house engineering team continuously refines airend efficiency, VSD control algorithms, and noise/vibration performance — testing every design change on the factory floor before it reaches a production line."
