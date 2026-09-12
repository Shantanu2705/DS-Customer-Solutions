"use client";

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function QuickBooking() {
  return (
    <section className="relative z-20 -mt-16 mb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 max-w-5xl mx-auto"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            <div className="space-y-2 lg:col-span-1">
              <label className="text-sm font-semibold text-[var(--color-brand-dark)] flex items-center gap-2">
                <MapPin size={16} className="text-[var(--color-brand-blue)]" />
                Destination
              </label>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2 lg:col-span-1">
              <label className="text-sm font-semibold text-[var(--color-brand-dark)] flex items-center gap-2">
                <Briefcase size={16} className="text-[var(--color-brand-blue)]" />
                Travel Type
              </label>
              <select className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all bg-white">
                <option value="">Select Type</option>
                <option value="private">Private Tour</option>
                <option value="group">Group Tour</option>
                <option value="car-only">Car Only</option>
              </select>
            </div>

            <div className="space-y-2 lg:col-span-1">
              <label className="text-sm font-semibold text-[var(--color-brand-dark)] flex items-center gap-2">
                <Users size={16} className="text-[var(--color-brand-blue)]" />
                Travellers
              </label>
              <input 
                type="number" 
                min="1"
                placeholder="How many?" 
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2 lg:col-span-1">
              <label className="text-sm font-semibold text-[var(--color-brand-dark)] flex items-center gap-2">
                <Calendar size={16} className="text-[var(--color-brand-blue)]" />
                Travel Date
              </label>
              <input 
                type="date" 
                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent transition-all text-gray-600"
              />
            </div>

            <div className="lg:col-span-1 pt-4 lg:pt-0">
              <Button type="button" className="w-full h-12 bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] font-bold text-base hover:bg-[var(--color-brand-yellow)]/90 shadow-md">
                PLAN MY TRIP
              </Button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  )
}
