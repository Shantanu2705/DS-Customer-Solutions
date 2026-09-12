import { fleet } from "@/data/fleet"
import { FleetCard } from "@/components/shared/FleetCard"

export const metadata = {
  title: "Our Fleet | DS Customer Solution",
  description: "Travel in comfort with our well-maintained fleet of vehicles including Dzire, Innova, and more.",
}

export default function FleetPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-[var(--color-brand-blue)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Choose from our wide range of well-maintained and comfortable vehicles for your journey.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </div>
  )
}
