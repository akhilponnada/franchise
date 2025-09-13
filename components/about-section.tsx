import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Building2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Unite Solar</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by Unite Developers Inc, we've been transforming India's energy landscape since 2023
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/solar-installation-team-india.jpg"
              alt="Unite Solar Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Since our inception in 2023, Unite Solar has been at the forefront of India's renewable energy
                revolution. Backed by Unite Developers Inc, we combine cutting-edge technology with sustainable business
                practices to create profitable partnerships across the nation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Green infrastructure & renewable energy solutions for sustainable growth
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Eye className="h-8 w-8 text-secondary mb-2" />
                  <CardTitle className="text-lg">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    1000+ districts solarized with our franchise ecosystem
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <Building2 className="h-8 w-8 text-accent mb-2" />
                  <CardTitle className="text-lg">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Transforming communities through sustainable energy solutions
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button className="mt-6">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
