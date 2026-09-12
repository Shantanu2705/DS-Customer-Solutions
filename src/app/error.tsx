"use client";

import { useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center space-y-6 px-4">
        <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <AlertTriangle size={48} />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Something went wrong!</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred on our end.
        </p>
        <div className="pt-8">
          <Button 
            size="lg" 
            onClick={() => reset()}
            className="bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue)]/90"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}
