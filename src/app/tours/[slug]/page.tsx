import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Clock, Users, CheckCircle2 } from "lucide-react"

import { tours } from "@/data/tours"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug)
  if (!tour) return { title: "Tour Not Found" }
  return {
    title: `${tour.title} | DS Customer Solution`,
    description: `Book our ${tour.duration} ${tour.title} starting from ₹${tour.price}.`
  }
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tour = tours.find((t) => t.slug === resolvedParams.slug)
  
  if (!tour) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Badge className="bg-[var(--color-brand-blue)] mb-4">{tour.packageType}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
            {tour.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-brand-blue)]">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Duration</div>
                  <div className="font-bold text-gray-900">{tour.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-brand-blue)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Route</div>
                  <div className="font-bold text-gray-900">{tour.route}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[var(--color-brand-blue)]">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase">Minimum</div>
                  <div className="font-bold text-gray-900">{tour.minimumPax} Pax Required</div>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-brand-blue)] mb-6">Package Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.inclusions.map((inclusion, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 size={20} className="text-[var(--color-brand-yellow)]" />
                    <span className="font-medium text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            {(tour.importantNote || tour.marketingLine) && (
              <div className="bg-[var(--color-brand-light)] border-l-4 border-[var(--color-brand-yellow)] p-6 rounded-r-lg">
                <h4 className="font-bold text-lg mb-2">Important Information</h4>
                {tour.importantNote && <p className="text-gray-700 mb-2">{tour.importantNote}</p>}
                {tour.marketingLine && <p className="text-gray-700 italic">{tour.marketingLine}</p>}
                <p className="text-gray-500 text-sm mt-4">Detailed itinerary available on request.</p>
              </div>
            )}
          </div>

          {/* Sidebar / Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-28" id="book">
              <div className="text-center mb-6 pb-6 border-b border-gray-100">
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Starting Price</div>
                <div className="text-4xl font-bold text-[var(--color-brand-blue)]">
                  ₹{tour.price.toLocaleString("en-IN")}
                </div>
                <div className="text-sm text-gray-500 mt-1">Per Person</div>
              </div>
              
              <Button className="w-full h-14 text-lg bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow)]/90 font-bold shadow-md mb-4" asChild>
                <Link href={`/contact?tour=${tour.slug}`}>Book This Tour</Link>
              </Button>
              <Button variant="outline" className="w-full h-14 text-lg border-[var(--color-brand-blue)] text-[var(--color-brand-blue)]" asChild>
                <Link href="/contact">Send Inquiry</Link>
              </Button>
              <p className="text-center text-xs text-gray-400 mt-4">
                No payment required at this step.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
