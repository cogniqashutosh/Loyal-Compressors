// Single source of truth for the legal entity name, contact details, and addresses.
// Every page/component should import from here rather than hardcoding these values,
// to avoid the naming inconsistencies found in the current site audit.
export const company = {
  legalName: "Shandong Loyal Machinery Co., Ltd.",
  brandName: "LOYAL Air Compressor Group",
  foundedYear: 2011,
  yearsExperience: "15+",
  phone: "+86-531-55583139",
  whatsapp: "+86 199 5314 4133",
  email: "info@loyalaircompressor.com",
  address: {
    line1: "Factory Industrial Park",
    city: "Jinan",
    province: "Shandong",
    country: "China",
    postalCode: "250000",
  },
  social: {
    facebook: "https://www.facebook.com/LoyalAircompressor/",
    instagram: "https://www.instagram.com/loyalaircompressor/",
    tiktok: "https://www.tiktok.com/@loyalaircompressor",
  },
  businessHours: "Mon – Sat, 9:00 AM – 6:00 PM (GMT+8)",
} as const
