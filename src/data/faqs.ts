export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "What size air compressor do I need for my facility?",
    answer:
      "Sizing depends on your total air demand (CFM), required pressure (PSI), and duty cycle across all connected equipment. Our engineering team can review your application and recommend the right model — request a quote and share your equipment list for a free sizing consultation.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "MOQs vary by product line and customization level. Standard catalog models typically have no strict minimum for single-unit orders; OEM/private-label and custom configurations may have a small MOQ. Contact our sales team for specifics on your target product.",
  },
  {
    question: "What is your typical lead time for export orders?",
    answer:
      "Standard models typically ship within 2–4 weeks of order confirmation. Custom or large-volume orders may take 4–8 weeks depending on configuration. We'll confirm an exact lead time when you request a quote.",
  },
  {
    question: "Do you provide installation and after-sales technical support?",
    answer:
      "Yes. Our team provides remote commissioning guidance, spare parts support, and troubleshooting for the operating life of the equipment, along with documentation for local qualified technicians.",
  },
  {
    question: "Can compressors be customized for voltage, enclosure, or OEM branding?",
    answer:
      "Yes. We support custom voltage/frequency configurations, enclosure types, control panel languages, and OEM/private-label branding for distributor and OEM partners.",
  },
  {
    question: "Do you handle export documentation and shipping?",
    answer:
      "Yes. We manage export packaging, commercial invoices, certificates of origin, and coordination with freight forwarders for FOB, CIF, or DDP shipping terms depending on your preference.",
  },
]
