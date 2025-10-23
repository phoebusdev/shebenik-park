"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Mountain } from "lucide-react"
import { siteConfig } from "@/config/site"

const navigation = siteConfig.navigation

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white/98 backdrop-blur-md border-b border-gray-100/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Mountain className="h-9 w-9 text-primary group-hover:text-primary-dark transition-colors duration-300" />
            <div className="flex flex-col">
              <span className="font-extralight text-2xl text-foreground tracking-tight leading-tight">{siteConfig.name}</span>
              <span className="text-xs text-primary uppercase tracking-wider -mt-1">{siteConfig.tagline}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm transition-all duration-300 tracking-wide",
                    pathname === item.href
                      ? "bg-accent text-primary font-normal"
                      : "text-foreground-muted hover:text-primary hover:bg-accent/50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded="false"
              className="hover:bg-accent"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 text-gray-600" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-gray-600" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100/50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base transition-all duration-300",
                  pathname === item.href
                    ? "bg-accent text-primary font-normal"
                    : "text-foreground-muted hover:text-primary hover:bg-accent/50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}