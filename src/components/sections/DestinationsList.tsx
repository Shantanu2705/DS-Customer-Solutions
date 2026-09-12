"use client";

import { motion } from "framer-motion"
import { destinations } from "@/data/destinations"
import { DestinationCard } from "@/components/shared/DestinationCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function DestinationsList() {
  return (
    <section className="py-20 bg-[var(--color-brand-light)]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="EXPLORE DESTINATIONS" 
          subtitle="Discover the most beautiful places with our expertly guided tours."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {destinations.slice(0, 6).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
