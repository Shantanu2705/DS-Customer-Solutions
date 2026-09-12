import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Users, CheckCircle2 } from "lucide-react"

import { TourPackage } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

interface TourCardProps {
  tour: TourPackage
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="group flex flex-col h-full border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <Badge className="bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue)]/90 border-none">
            {tour.duration}
          </Badge>
          {tour.packageType === "Special Offer" && (
             <Badge className="bg-red-500 text-white hover:bg-red-600 border-none animate-pulse">
               LIMITED OFFER
             </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <CardTitle className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
            {tour.title}
          </CardTitle>
          <div className="flex items-center text-gray-200 text-sm mt-2">
            <MapPin size={14} className="mr-1" />
            <span className="truncate">{tour.route}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="flex-1 p-5">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
          <div className="text-gray-600 text-sm flex items-center gap-1">
             <Users size={16} />
             <span>Min {tour.minimumPax} Pax</span>
          </div>
          <div className="text-right">
             <div className="text-xs text-gray-500 uppercase tracking-wider">Starting from</div>
             <div className="text-2xl font-bold text-[var(--color-brand-blue)]">
               {tour.price ? (
                 <>
                   ₹{tour.price.toLocaleString("en-IN")}
                   <span className="text-sm font-normal text-gray-500">/pp</span>
                 </>
               ) : (
                 <span className="text-lg">On Request</span>
               )}
             </div>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {tour.inclusions.slice(0, 4).map((inclusion, i) => (
            <li key={i} className="flex items-start text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-[var(--color-brand-yellow)] mr-2 shrink-0 mt-0.5" />
              <span>{inclusion}</span>
            </li>
          ))}
          {tour.inclusions.length > 4 && (
            <li className="text-sm text-gray-500 italic pl-6">+ more inclusions</li>
          )}
        </ul>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto flex flex-col gap-3">
        {tour.marketingLine && (
          <p className="text-xs text-center text-gray-500 italic w-full">
            "{tour.marketingLine}"
          </p>
        )}
        <div className="flex gap-3 w-full">
          <Button variant="outline" className="flex-1 border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/5" asChild>
            <Link href={`/tours/${tour.slug}`}>Details</Link>
          </Button>
          <Button className="flex-1 bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow)]/80 shadow-md" asChild>
            <Link href={`/tours/${tour.slug}#book`}>Book Now</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
