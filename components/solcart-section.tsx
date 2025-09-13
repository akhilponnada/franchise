import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Users, Factory } from "lucide-react"

export function SolcartSection() {
  return (
    <section id="solcart" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solcart App</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your complete solar marketplace with extensive product catalog and vendor network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Featured Platform</Badge>
                <h3 className="text-3xl font-bold mb-4">Everything Solar in One App</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Solcart is your comprehensive solar marketplace, connecting you with the best products, vendors, and
                  manufacturers in the industry. Generate additional revenue through our extensive network while serving
                  your customers better.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardHeader className="pb-3">
                    <Package className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-xl">100+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Products Available</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader className="pb-3">
                    <Users className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <CardTitle className="text-xl">100+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Trusted Vendors</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader className="pb-3">
                    <Factory className="h-8 w-8 mx-auto text-accent mb-2" />
                    <CardTitle className="text-xl">50+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Manufacturers</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-time inventory management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Competitive pricing and bulk discounts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Direct manufacturer connections</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Integrated payment and logistics</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" className="w-full md:w-auto">
                Explore Solcart
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <img src="/modern-smartphone-showing-solar-marketplace-app-in.jpg" alt="Solcart Mobile App" className="mx-auto max-w-sm w-full" />
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
