"use client";

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

import { siteConfig } from "@/data/site"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-24">
      <div className="bg-[var(--color-brand-blue)] text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Get in touch to book your next journey or ask any questions.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <SectionHeading title="Get In Touch" className="mb-8" />
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-[var(--color-brand-dark)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-blue)] mb-1">Our Office</h4>
                  <p className="text-gray-600">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/20 flex items-center justify-center shrink-0">
                  <Phone className="text-[var(--color-brand-dark)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-blue)] mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  {siteConfig.contact.alternatePhone && (
                    <p className="text-gray-600 mb-2 text-sm">Alt: {siteConfig.contact.alternatePhone}</p>
                  )}
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" asChild className="bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/90">
                      <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>Call Now</a>
                    </Button>
                    <Button size="sm" asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-yellow)]/20 flex items-center justify-center shrink-0">
                  <Mail className="text-[var(--color-brand-dark)]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-brand-blue)] mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-[var(--color-brand-blue)] transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--color-brand-blue)] mb-2">Send a Booking Request</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Request Sent Successfully!</h4>
                  <p>Thank you for reaching out. We will contact you soon to confirm your booking details.</p>
                  <Button className="mt-6 bg-[var(--color-brand-blue)]" onClick={() => setSubmitted(false)}>
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                      <input required type="tel" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Interested In</label>
                      <select className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all bg-white">
                        <option value="tour">Tour Package</option>
                        <option value="vehicle">Vehicle / Private Car</option>
                        <option value="hotel">Hotel Booking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Travel Date</label>
                      <input type="date" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Pickup Location</label>
                      <input type="text" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all" placeholder="e.g. NJP Station / Bagdogra" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Number of Passengers</label>
                      <input type="number" min="1" className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all" placeholder="2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message / Additional Requirements</label>
                    <textarea rows={4} className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-brand-blue)] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us more about your trip..."></textarea>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow)]/90 font-bold shadow-md">
                    {isSubmitting ? "Sending..." : "SEND BOOKING REQUEST"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
