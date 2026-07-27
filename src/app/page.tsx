import { Hero } from "@/components/sections/hero"
import { TrustedWorldwide } from "@/components/sections/trusted-worldwide"
import { ProductCategories } from "@/components/sections/product-categories"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { IndustriesServed } from "@/components/sections/industries-served"
import { FeaturedProducts } from "@/components/sections/featured-products"
import { CustomerSuccess } from "@/components/sections/customer-success"
import { Faq } from "@/components/sections/faq"
import { JsonLd } from "@/components/shared/json-ld"
import { faqSchema } from "@/lib/seo"
import { faqs } from "@/data/faqs"

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero />
      <TrustedWorldwide />
      <ProductCategories />
      <WhyChooseUs />
      <IndustriesServed />
      <FeaturedProducts />
      <CustomerSuccess />
      <Faq />
    </>
  )
}
