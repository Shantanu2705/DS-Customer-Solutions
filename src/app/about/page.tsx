import { About } from "@/components/sections/About"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"

export const metadata = {
  title: "About Us | DS Customer Solution",
  description: "Learn more about DS Customer Solution, your trusted travel partner for Darjeeling, Sikkim, Kashmir, and Goa.",
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="bg-[var(--color-brand-blue)] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Your trusted partner for memorable journeys across beautiful destinations.</p>
        </div>
      </div>
      <About />
      <WhyChooseUs />
    </div>
  )
}
