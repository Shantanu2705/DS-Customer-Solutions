import { siteConfig } from "@/data/site"

export const metadata = {
  title: "Terms & Conditions | DS Customer Solution",
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
          <h1 className="text-4xl font-bold text-[var(--color-brand-blue)] mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and booking our services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Booking and Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A minimum advance payment is required to confirm any tour or vehicle booking.</li>
                <li>The remaining balance must be paid as per the agreed schedule before or during the trip.</li>
                <li>Prices are subject to change without prior notice due to fluctuations in fuel prices, taxes, or hotel rates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cancellation Policy</h2>
              <p>
                Cancellations must be made in writing. Cancellation charges will apply depending on the time of cancellation prior to the departure date. Detailed cancellation terms will be provided at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Liability</h2>
              <p>
                {siteConfig.name} acts only in the capacity of an agent for the hotels, airlines, transporters, and contractors providing other services. All itineraries are sample itineraries, intended to give you a general idea of the likely trip schedule. Numerous factors such as weather, road conditions, and physical ability of the participants may dictate itinerary changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
