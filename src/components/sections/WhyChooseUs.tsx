"use client";

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { SectionHeading } from "@/components/ui/SectionHeading"

const reasons = [
  "Private Car Travel",
  "Complete Tour Packages",
  "Hotel Accommodation",
  "Local Sightseeing",
  "Food Included in Selected Packages",
  "NJP Pickup & Drop",
  "Group Travel Packages",
  "Comfortable Travel Experience",
  "Personalized Assistance"
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="WHY TRAVEL WITH DS CUSTOMER SOLUTION?" 
          subtitle="We are committed to providing you with the best travel experience."
          centered
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-brand-light)] border border-gray-100 hover:border-[var(--color-brand-yellow)] hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 className="text-[var(--color-brand-yellow)] shrink-0 mt-0.5" size={20} />
                <span className="font-semibold text-gray-700">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
