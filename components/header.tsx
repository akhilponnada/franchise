import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/unite-logo.png"
            alt="Unite Solar"
            width={235} // Increased logo width by another 25% from 188 to 235
            height={79} // Increased logo height proportionally from 63 to 79
            className="h-20 w-auto" // Increased height class from h-16 to h-20
            priority
          />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">Franchise</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                  <div className="row-span-4">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/franchise"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-foreground">Join Unite Solar</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Start your profitable solar business today
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <Link
                    href="/franchise/mandal"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Mandal Franchise</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      ₹5 Lakhs investment | 18-24 months ROI
                    </p>
                  </Link>
                  <Link
                    href="/franchise/district"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">District Franchise</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      ₹10 Lakhs investment | 12-18 months ROI
                    </p>
                  </Link>
                  <Link
                    href="/franchise/zonal"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Zonal Franchise</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      ₹15 Lakhs investment | 8-15 months ROI
                    </p>
                  </Link>
                  <Link
                    href="/franchise/master-stockist"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Master Stockist</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      ₹25 Lakhs investment | 6-12 months ROI
                    </p>
                  </Link>
                  <Link
                    href="/why-franchise"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Why Franchise?</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Discover the benefits of partnering with us
                    </p>
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">How It Works</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Simple 4-step process to get started
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-foreground">Solar Services</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Complete solar solutions for every need
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <Link
                    href="/services/residential"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Residential Solar</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Solar solutions for homes and families
                    </p>
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Commercial Solar</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Large-scale business solar installations
                    </p>
                  </Link>
                  <Link
                    href="/products/solar-panels"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Solar Panels</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Premium quality solar panels
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground">Solutions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/solutions"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-foreground">Solar Solutions</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive solar energy solutions for every need
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <Link
                    href="/solutions/turnkey"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Solar Turnkey Solutions</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Complete end-to-end solar installations
                    </p>
                  </Link>
                  <Link
                    href="/solutions/epc"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">EPC Services</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Engineering, Procurement & Construction
                    </p>
                  </Link>
                  <Link
                    href="/solutions/rooftop"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none text-foreground">Rooftop Solar</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Solar solutions for homes and businesses
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/roi-calculator" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground">
                  ROI Calculator
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground">
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
          >
            Why Franchise?
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex bg-transparent text-foreground border-foreground/20 hover:bg-accent hover:text-accent-foreground"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Back
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
            Apply Now
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium text-foreground hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary">
                  About Us
                </Link>

                <div className="space-y-2">
                  <div className="text-lg font-medium text-foreground">Franchise</div>
                  <div className="ml-4 space-y-2">
                    <Link href="/franchise/mandal" className="block text-sm text-muted-foreground hover:text-primary">
                      Mandal Franchise
                    </Link>
                    <Link href="/franchise/district" className="block text-sm text-muted-foreground hover:text-primary">
                      District Franchise
                    </Link>
                    <Link href="/franchise/zonal" className="block text-sm text-muted-foreground hover:text-primary">
                      Zonal Franchise
                    </Link>
                    <Link
                      href="/franchise/master-stockist"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      Master Stockist
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-lg font-medium text-foreground">Services</div>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/services/residential"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      Residential Solar
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      Commercial Solar
                    </Link>
                    <Link
                      href="/products/solar-panels"
                      className="block text-sm text-muted-foreground hover:text-primary"
                    >
                      Solar Panels
                    </Link>
                  </div>
                </div>

                <Link href="/solutions" className="text-lg font-medium text-foreground hover:text-primary">
                  Solutions
                </Link>
                <Link href="/roi-calculator" className="text-lg font-medium text-foreground hover:text-primary">
                  ROI Calculator
                </Link>
                <Link href="/gallery" className="text-lg font-medium text-foreground hover:text-primary">
                  Gallery
                </Link>
                <Link href="/contact" className="text-lg font-medium text-foreground hover:text-primary">
                  Contact
                </Link>
                <Button className="bg-blue-600 hover:bg-orange-500 text-white mt-4 transition-colors duration-300">
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
