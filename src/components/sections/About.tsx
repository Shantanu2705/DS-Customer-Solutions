"use client";

import Image from "next/image"
import { motion } from "framer-motion"
import { CarFront, BedDouble, Map, Headset } from "lucide-react"

import { SectionHeading } from "@/components/ui/SectionHeading"

const features = [
  {
    icon: CarFront,
    title: "PRIVATE TRAVEL",
    description: "Comfortable and well-maintained cars for a smooth journey across hills and plains."
  },
  {
    icon: BedDouble,
    title: "COMFORTABLE STAYS",
    description: "Carefully selected hotels and homestays ensuring rest and relaxation."
  },
  {
    icon: Map,
    title: "COMPLETE TOUR PACKAGES",
    description: "End-to-end planned itineraries so you can focus only on making memories."
  },
  {
    icon: Headset,
    title: "PERSONALIZED SUPPORT",
    description: "Dedicated assistance throughout your journey for a hassle-free experience."
  }
]

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="YOUR JOURNEY, OUR SOLUTION" 
              subtitle="DS Customer Solution is a travel agency focused on making every journey comfortable, memorable and hassle-free."
            />
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From private car travel and hotel accommodation to carefully planned tour packages, we help travellers explore beautiful destinations with complete travel support.
            </p>

            <blockquote className="border-l-4 border-[var(--color-brand-yellow)] pl-6 italic text-xl text-[var(--color-brand-blue)] font-medium mb-12">
              "Travel Made Simple. Memories Made Forever."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-light)] flex items-center justify-center text-[var(--color-brand-blue)]">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-brand-dark)] mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                alt="Comfortable Hotel View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-blue)]/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--color-brand-yellow)] rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-[var(--color-brand-silver)]/30 rounded-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
