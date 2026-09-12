import { tours } from "@/data/tours"
import { TourCard } from "@/components/shared/TourCard"

export const metadata = {
  title: "Tour Packages | DS Customer Solution",
  description: "Explore our complete list of tour packages including Darjeeling, Kalimpong, Sikkim, Goa, and Kashmir.",
}

export default function ToursPage() {
  return (
    <div className="pt-24 min-h-screen bg-[var(--color-brand-light)]">
      <div className="bg-[var(--color-brand-blue)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tour Packages</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Discover unforgettable journeys with our carefully planned tour packages.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  )
}
