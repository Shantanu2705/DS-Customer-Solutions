"use client";

import { motion } from "framer-motion"
import { fleet } from "@/data/fleet"
import { FleetCard } from "@/components/shared/FleetCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export function OurFleet() {
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
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="TRAVEL IN COMFORT" 
          subtitle="Choose the right vehicle for your journey. We offer a wide range of well-maintained cars."
          centered
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {fleet.slice(0, 4).map((vehicle) => (
            <motion.div key={vehicle.id} variants={item}>
              <FleetCard vehicle={vehicle} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/90 text-white px-8" asChild>
            <Link href="/fleet">View Entire Fleet</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
