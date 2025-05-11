import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-blue/70 pt-12 pb-6 *:hover:text-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Growing Minds</h3>
            <p className="text-gray-600 mb-4">
              A kindergarten teacher&lsquo;s blog sharing early childhood education insights, activities, and resources.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@growingminds.edu"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-primary-yellow transition-colors">
                Home
              </Link>
              <Link href="/articles" className="text-gray-600 hover:text-primary-yellow transition-colors">
                Articles
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-yellow transition-colors">
                About Teacher
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-yellow transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/articles?category=arts-crafts"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
              >
                Arts & Crafts
              </Link>
              <Link
                href="/articles?category=early-learning"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
              >
                Early Learning
              </Link>
              <Link
                href="/articles?category=activities"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
              >
                Activities
              </Link>
              <Link
                href="/articles?category=social-emotional-learning"
                className="text-gray-600 hover:text-primary-yellow transition-colors"
              >
                Social-Emotional Learning
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-black/60 pt-6 text-center text-font-secondary text-sm">
          <p>&copy; {currentYear} Growing Minds Kindergarten. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
