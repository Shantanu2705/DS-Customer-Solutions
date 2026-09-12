"use client";

import { motion } from "framer-motion"
import { tours } from "@/data/tours"
import { TourCard } from "@/components/shared/TourCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function PopularTours() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="py-20 bg-[var(--color-brand-light)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            title="POPULAR TOUR PACKAGES" 
            subtitle="Explore our carefully crafted itineraries covering the best of the Himalayas and beyond."
            className="mb-0"
          />
          <Button variant="outline" asChild className="hidden md:inline-flex border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white mt-6">
            <Link href="/tours">View All Packages</Link>
          </Button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tours.slice(0, 3).map((tour) => (
            <motion.div key={tour.id} variants={item}>
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" asChild className="border-[var(--color-brand-blue)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white">
            <Link href="/tours">View All Packages</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
