"use client";

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function CtaSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/cta.jpg')" }}
      />
      <div className="absolute inset-0 bg-[var(--color-brand-blue)]/80 backdrop-blur-sm" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            READY TO START YOUR NEXT JOURNEY?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tell us where you want to go, and let DS Customer Solution take care of the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow)]/90 h-14 px-8 text-base shadow-lg font-bold">
              <Link href="/tours">EXPLORE TOURS</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white text-[var(--color-brand-blue)] hover:bg-gray-100 border-none h-14 px-8 text-base shadow-lg font-bold">
              <Link href="/contact">BOOK NOW</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
