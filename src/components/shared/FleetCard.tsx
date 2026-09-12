import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"

import { Vehicle } from "@/types"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="group overflow-hidden border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 bg-gray-50 p-4">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold text-[var(--color-brand-blue)] mb-2 group-hover:text-[var(--color-brand-yellow)] transition-colors">
          {vehicle.name}
        </h3>
        <div className="flex items-center text-gray-600 bg-gray-50 w-fit px-3 py-1.5 rounded-full text-sm">
          <Users size={16} className="mr-2 text-[var(--color-brand-blue)]" />
          <span className="font-medium">{vehicle.seatingCapacity}</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full" asChild>
          <Link href="/contact">Book Vehicle</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
