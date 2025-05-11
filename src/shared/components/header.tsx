"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import LogoImage from "@/shared/assets/logos/inkwell.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80  sticky top-0 z-50 backdrop-blur-[4px] backdrop-saturate-[100%]  bg-opacity-10 border border-opacity-0 border-[#ffffff]">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src={LogoImage}
              alt="Growing Minds Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl md:text-2xl text-primary-yellow">Growing Minds</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-gray-700 hover:text-primary-yellow transition-colors">
            Home
          </Link>
          <Link href="/articles" className="font-medium text-gray-700 hover:text-primary-yellow transition-colors">
            Articles
          </Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-primary-yellow transition-colors">
            About Teacher
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-primary-yellow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-primary-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="font-medium text-gray-700 hover:text-primary-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 hover:text-primary-yellow transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Teacher
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
