import { WhyChooseUs } from "@/components/sections/WhyChooseUs"

export const metadata = {
  title: "Why Us | DS Customer Solution",
  description: "Why travel with DS Customer Solution? We offer private car travel, complete packages, and personalized support.",
}

export default function WhyUsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-brand-light)]">
      <div className="bg-[var(--color-brand-blue)] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Experience the best in class travel services tailored to your needs.</p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  )
}
