import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Award, Shield, CheckCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/unite-logo.png"
              alt="Unite Solar"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-background/80 leading-relaxed">
              Powering India's renewable energy future through profitable franchise partnerships. Join the solar
              revolution with Unite Solar.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-background hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-background/80 hover:text-background transition-colors">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="text-background/80 hover:text-background transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-background transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/turnkey" className="text-background/80 hover:text-background transition-colors">
                  Solar Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/epc" className="text-background/80 hover:text-background transition-colors">
                  EPC Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/rooftop" className="text-background/80 hover:text-background transition-colors">
                  Rooftop Solar
                </Link>
              </li>
              <li>
                <span className="text-background/80">Solar Water Pumps</span>
              </li>
              <li>
                <span className="text-background/80">Maintenance & Support</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-background/80 mb-4">
              Subscribe to get the latest updates on franchise opportunities and solar industry news.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button size="sm" className="w-full bg-background text-foreground hover:bg-background/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-sm text-background/80">MNRE Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm text-background/80">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm text-background/80">BIS Compliant</span>
              </div>
            </div>
            <p className="text-sm text-background/80">
              © 2025 Unite Solar. All rights reserved. | Powered by Unite Developers Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
