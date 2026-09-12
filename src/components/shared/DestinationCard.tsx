import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Destination } from "@/types"

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href="/tours" className="group block h-full">
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
          <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
            {destination.name}
          </h3>
          <div className="overflow-hidden">
            <p className="text-gray-200 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 mb-4 line-clamp-2">
              {destination.shortDescription}
            </p>
          </div>
          <div className="flex items-center text-[var(--color-brand-yellow)] font-semibold text-sm transform transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
            Explore <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
