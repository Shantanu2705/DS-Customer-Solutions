import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center space-y-6 px-4">
        <div className="w-24 h-24 bg-[var(--color-brand-light)] text-[var(--color-brand-blue)] rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertCircle size={48} />
        </div>
        <h1 className="text-6xl font-bold text-[var(--color-brand-blue)]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="pt-8">
          <Button size="lg" className="bg-[var(--color-brand-yellow)] text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-yellow)]/90 font-bold" asChild>
            <Link href="/">RETURN HOME</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
