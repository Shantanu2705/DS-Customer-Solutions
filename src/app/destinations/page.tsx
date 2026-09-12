import { destinations } from "@/data/destinations"
import { DestinationCard } from "@/components/shared/DestinationCard"

export const metadata = {
  title: "Destinations | DS Customer Solution",
  description: "Explore the beautiful destinations we cover: Darjeeling, Kalimpong, Lava, Lolaygaon, Sikkim, Kashmir, and Goa.",
}

export default function DestinationsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="bg-[var(--color-brand-blue)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Destinations</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Explore breathtaking locations and create unforgettable memories with us.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="h-full">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
