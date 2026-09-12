"use client";

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              EXPLORE MORE. <br/>
              <span className="text-[var(--color-brand-yellow)]">TRAVEL BETTER.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
          >
            Discover unforgettable journeys across Darjeeling, Sikkim, Kashmir, Goa and beyond with comfortable private travel, carefully planned tours and complete travel solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" asChild className="bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue)]/90 text-base h-14 px-8 shadow-lg">
              <Link href="/tours">EXPLORE TOURS</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-brand-blue)] text-base h-14 px-8 shadow-lg backdrop-blur-sm">
              <Link href="/contact">BOOK YOUR JOURNEY</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-12 flex items-center gap-4 text-sm md:text-base font-medium text-gray-300 uppercase tracking-widest"
          >
            <span className="w-12 h-[1px] bg-[var(--color-brand-yellow)]"></span>
            PRIVATE TOURS • GROUP TOURS • COMPLETE TRAVEL SOLUTIONS
          </motion.div>
        </div>
      </div>
    </section>
  )
}
