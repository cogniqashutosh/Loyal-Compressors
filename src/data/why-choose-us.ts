import {
  Factory,
  Wrench,
  Leaf,
  ShieldCheck,
  Truck,
  Globe2,
  type LucideIcon,
} from "lucide-react"

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChooseUs: FeatureItem[] = [
  {
    icon: Factory,
    title: "Factory Direct",
    description: "Buy direct from the manufacturer — no middleman markup, full control over quality.",
  },
  {
    icon: Wrench,
    title: "OEM Support",
    description: "Custom configurations and private-label options for OEM and distributor partners.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    description: "Variable-speed drive technology engineered to cut energy costs across duty cycles.",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description: "Manufactured under rigorous ISO quality management and testing standards.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Streamlined production and logistics for reliable, on-time global shipping.",
  },
  {
    icon: Globe2,
    title: "Global Export",
    description: "Trusted by customers in 50+ countries with full export documentation support.",
  },
]
