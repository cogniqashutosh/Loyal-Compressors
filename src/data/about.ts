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
}

export const timeline: Milestone[] = [
  {
    year: "2011",
    title: "Company Founded",
    description: "Shandong Loyal Machinery established, focused on rotary screw compressor manufacturing.",
    icon: "Rocket",
    image: "/images/factory/facility.webp",
  },
  {
    year: "2014",
    title: "First Export Markets",
    description: "Began exporting fixed-speed screw compressors to Southeast Asia and the Middle East.",
    icon: "Globe",
    image: "/images/contact-hero.jpg",
  },
  {
    year: "2017",
    title: "VSD Product Line Launched",
    description: "Introduced variable-speed drive compressors to reduce customer energy costs.",
    icon: "Zap",
    image: "/images/timeline-vsd.jpg",
  },
  {
    year: "2020",
    title: "Oil-Free Line & ISO Certification",
    description: "Launched ISO 8573-1 Class 0 certified oil-free compressors for food and pharma customers.",
    icon: "ShieldCheck",
    image: "/images/factory/quality-testing.webp",
  },
  {
    year: "2023",
    title: "50+ Export Markets",
    description: "Expanded to serve customers across more than 50 countries worldwide.",
    icon: "TrendingUp",
    image: "/images/timeline-export.jpg",
  },
  {
    year: "2026",
    title: "15+ Years of Manufacturing",
    description: "Continuing to invest in energy-efficient technology and expanded production capacity.",
    icon: "Award",
    image: "/images/about-hero.jpg",
  },
]

export const rdOverview =
  "Our in-house engineering team continuously refines airend efficiency, VSD control algorithms, and noise/vibration performance — testing every design change on the factory floor before it reaches a production line."
