import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { siteConfig } from "@/data/site"

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-brand-dark)] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <div className="bg-white/10 p-4 rounded-xl inline-block">
              <div className="relative h-12 w-32">
                <Image 
                  src="/logo.jpeg" 
                  alt={siteConfig.name} 
                  fill
                  className="object-contain object-left brightness-0 invert" 
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.socials.facebook && (
                <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-dark)] transition-colors">
                  <FacebookIcon size={18} />
                </a>
              )}
              {siteConfig.socials.instagram && (
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-dark)] transition-colors">
                  <InstagramIcon size={18} />
                </a>
              )}
              {siteConfig.socials.twitter && (
                <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-dark)] transition-colors">
                  <TwitterIcon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-[var(--color-brand-yellow)] mr-2 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Tours', 'Fleet', 'Destinations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-[var(--color-brand-yellow)] transition-colors flex items-center">
                    <span className="mr-2 text-xs">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-[var(--color-brand-yellow)] mr-2 rounded-full"></span>
              Popular Tours
            </h4>
            <ul className="space-y-3">
              {['Darjeeling', 'Sikkim', 'Kashmir', 'Goa', 'Kalimpong – Lava – Lolaygaon'].map((item) => (
                <li key={item}>
                  <Link href="/tours" className="text-gray-400 hover:text-[var(--color-brand-yellow)] transition-colors flex items-center">
                    <span className="mr-2 text-xs">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-[var(--color-brand-yellow)] mr-2 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[var(--color-brand-yellow)] shrink-0 mt-1" size={18} />
                <span className="text-gray-400">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[var(--color-brand-yellow)] shrink-0" size={18} />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[var(--color-brand-yellow)] shrink-0" size={18} />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 hover:text-white transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
