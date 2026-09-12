"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, PhoneCall } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { siteConfig } from "@/data/site"

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "TOURS", href: "/tours" },
  { name: "OUR FLEET", href: "/fleet" },
  { name: "DESTINATIONS", href: "/destinations" },
  { name: "WHY US", href: "/why-us" },
  { name: "CONTACT", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-3" 
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          {/* Fallback text if logo image is missing, but trying to load image */}
          <div className="relative h-12 w-32 md:h-14 md:w-40 flex items-center">
             <Image 
               src="/logo.jpeg" 
               alt={siteConfig.name} 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide transition-colors hover:text-[var(--color-brand-yellow)]",
                    isScrolled ? "text-[var(--color-brand-blue)]" : "text-white",
                    pathname === link.href && (isScrolled ? "text-[var(--color-brand-yellow)]" : "text-[var(--color-brand-yellow)]")
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Button 
              variant={isScrolled ? "default" : "secondary"}
              asChild
              className={cn(
                "font-bold tracking-wide",
                !isScrolled && "bg-[var(--color-brand-yellow)] text-[var(--color-brand-blue)] hover:bg-white hover:text-[var(--color-brand-blue)]"
              )}
            >
              <Link href="/tours">BOOK NOW</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden relative z-50 p-2 -mr-2 text-2xl",
            isScrolled || isMobileMenuOpen ? "text-[var(--color-brand-blue)]" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-gray-200 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block text-lg font-semibold text-[var(--color-brand-blue)]",
                        pathname === link.href && "text-[var(--color-brand-yellow)]"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <Button className="w-full text-lg h-12" asChild>
                  <Link href="/tours">BOOK NOW</Link>
                </Button>
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 text-[var(--color-brand-blue)] font-semibold py-2"
                >
                  <PhoneCall size={20} />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
