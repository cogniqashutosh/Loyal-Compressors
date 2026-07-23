export interface Certification {
  code: string
  name: string
  description: string
  placeholder: true
}

// Placeholder certification set — replace codes/descriptions with the client's
// actual certificate numbers and scopes before launch.
export const certifications: Certification[] = [
  {
    code: "ISO 9001",
    name: "Quality Management",
    description: "Certified quality management system across design, manufacturing, and testing.",
    placeholder: true,
  },
  {
    code: "CE",
    name: "European Conformity",
    description: "Meets EU health, safety, and environmental protection requirements.",
    placeholder: true,
  },
  {
    code: "ISO 8573-1",
    name: "Compressed Air Purity",
    description: "Class 0 oil-free air purity certification for sensitive applications.",
    placeholder: true,
  },
  {
    code: "ASME",
    name: "Pressure Vessel Standard",
    description: "Air receiver tanks manufactured to ASME pressure vessel code.",
    placeholder: true,
  },
]
