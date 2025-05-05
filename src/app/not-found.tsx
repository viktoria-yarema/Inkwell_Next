import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, the page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary-yellow mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
