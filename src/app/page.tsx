import { Hero } from "@/components/sections/Hero"

import { About } from "@/components/sections/About"
import { PopularTours } from "@/components/sections/PopularTours"
import { OurFleet } from "@/components/sections/OurFleet"
import { DestinationsList } from "@/components/sections/DestinationsList"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { CtaSection } from "@/components/sections/CtaSection"

export default function Home() {
  return (
    <>
      <Hero />

      <About />
      <PopularTours />
      <OurFleet />
      <DestinationsList />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
