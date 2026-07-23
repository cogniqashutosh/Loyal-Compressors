export interface Stat {
  value: number
  suffix: string
  label: string
}

export const trustedWorldwideStats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Industrial Solutions Delivered" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
]

export const manufacturingStats: Stat[] = [
  { value: 5000, suffix: " m²", label: "Manufacturing Facility" },
  { value: 100, suffix: "+", label: "Skilled Employees" },
  { value: 8000, suffix: "+", label: "Units Annual Capacity" },
  { value: 3, suffix: "-stage", label: "Quality Testing Process" },
]
