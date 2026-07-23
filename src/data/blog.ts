import type { BlogPost } from "@/types/blog"

// Placeholder blog content — replace with real articles before launch.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-size-a-screw-air-compressor",
    title: "How to Size a Screw Air Compressor for Your Facility",
    excerpt:
      "Sizing a compressor incorrectly leads to wasted energy or unreliable pressure. Here's how to calculate your real air demand before you buy.",
    category: "Buyer Education",
    author: "LOYAL Engineering Team",
    date: "2026-05-12",
    readTime: "6 min read",
    image: "/images/products/screw-air-compressor.png",
    content: [
      "Before specifying a compressor, calculate your total air demand across every connected tool and process — not just the nameplate rating, but actual duty cycle and simultaneous usage.",
      "Add a safety margin of 15–20% for future expansion and to avoid running your compressor at its absolute maximum output continuously, which shortens component life.",
      "Consider your required pressure at the point of use, not just at the compressor outlet — pressure drop across piping, filters, and dryers all reduce delivered pressure.",
      "Finally, factor in duty cycle: applications with continuous, steady demand suit fixed-speed compressors, while highly variable demand is often better served by a VSD unit.",
    ],
  },
  {
    slug: "oil-injected-vs-oil-free-compressors",
    title: "Oil-Injected vs. Oil-Free Compressors: Which Do You Need?",
    excerpt:
      "Not every application needs oil-free air — but some can't risk anything else. Here's how to decide.",
    category: "Buyer Education",
    author: "LOYAL Engineering Team",
    date: "2026-04-03",
    readTime: "5 min read",
    image: "/images/products/oil-free-compressor.png",
    content: [
      "Oil-injected screw compressors are the industry standard for general manufacturing — lower upfront cost, proven reliability, and lower noise in many cases.",
      "Oil-free compressors are required wherever compressed air contacts food, pharmaceuticals, or sensitive electronics — any oil carryover risk is unacceptable in these environments.",
      "ISO 8573-1 Class 0 certification is the benchmark to look for if air purity is non-negotiable for your process.",
      "For most general industrial applications without contamination risk, oil-injected units offer the best total cost of ownership.",
    ],
  },
  {
    slug: "preventive-maintenance-schedule-for-screw-compressors",
    title: "A Preventive Maintenance Schedule for Screw Compressors",
    excerpt:
      "Unplanned compressor downtime is expensive. This maintenance schedule keeps your equipment running at peak efficiency.",
    category: "Maintenance",
    author: "LOYAL Service Team",
    date: "2026-03-18",
    readTime: "7 min read",
    image: "/images/factory/quality-testing.webp",
    content: [
      "Daily: check for unusual noise or vibration, monitor discharge temperature and pressure gauges.",
      "Weekly: inspect for air or oil leaks, check condensate drain operation.",
      "Every 2,000 hours: replace air/oil separator element and oil filter, check belt tension on belt-driven models.",
      "Every 8,000 hours: full oil change, inspect and clean cooler fins, verify safety valve operation.",
      "Following a documented schedule extends compressor life significantly and avoids the majority of unplanned downtime incidents we see in the field.",
    ],
  },
  {
    slug: "reducing-energy-costs-with-vsd-compressors",
    title: "Reducing Energy Costs with Variable-Speed Drive Compressors",
    excerpt:
      "Compressed air can account for a significant share of a plant's electricity bill. VSD technology is one of the most effective ways to cut it.",
    category: "Technology",
    author: "LOYAL Engineering Team",
    date: "2026-02-21",
    readTime: "5 min read",
    image: "/images/products/models/screw-vsd.webp",
    content: [
      "Fixed-speed compressors run at full motor speed regardless of actual demand, wasting energy during partial-load periods that make up most operating hours in many facilities.",
      "VSD compressors adjust motor speed continuously to match real-time air demand, often cutting energy consumption by 20–35% compared to fixed-speed equivalents.",
      "The energy savings typically pay back the VSD price premium within 12–24 months for facilities with variable demand profiles.",
      "Facilities with genuinely constant, near-100% duty cycle demand see less benefit from VSD and may be better served by a well-sized fixed-speed unit.",
    ],
  },
  {
    slug: "understanding-iso-8573-1-air-quality-classes",
    title: "Understanding ISO 8573-1 Air Quality Classes",
    excerpt:
      "ISO 8573-1 defines compressed air purity in terms of particles, water, and oil content. Here's what the classes actually mean.",
    category: "Technical Education",
    author: "LOYAL Engineering Team",
    date: "2026-01-15",
    readTime: "6 min read",
    image: "/images/products/air-dryer.png",
    content: [
      "ISO 8573-1 rates compressed air quality across three categories: solid particles, water content, and total oil content, each on a numeric class scale.",
      "Class 0 is the strictest oil rating, indicating air quality better than the standard's own detection limit — required for pharmaceutical and food-contact applications.",
      "Most general industrial applications operate comfortably within Class 1–4 depending on the specific tooling and process requirements.",
      "Specifying air quality by ISO class rather than generic terms like 'clean air' ensures your equipment supplier delivers a system that actually meets your requirement.",
    ],
  },
  {
    slug: "diesel-vs-electric-portable-compressors",
    title: "Diesel vs. Electric Portable Compressors: Choosing for Field Work",
    excerpt:
      "Job site power availability, mobility requirements, and duty cycle all factor into the diesel-vs-electric decision for portable compressors.",
    category: "Industry Solutions",
    author: "LOYAL Engineering Team",
    date: "2025-12-08",
    readTime: "5 min read",
    image: "/images/products/portable-compressor.png",
    content: [
      "Diesel portable compressors run fully off-grid, making them the default choice for remote construction and mining sites without reliable power access.",
      "Electric portable units cost less to run where grid power is available and produce lower noise and zero local emissions — a better fit for urban or indoor job sites.",
      "Fuel logistics and refueling schedules are a real operating cost for diesel units on remote sites — factor this into total cost of ownership calculations.",
      "For sites with intermittent grid access, a hybrid fleet of both types often provides the most operational flexibility.",
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)))
