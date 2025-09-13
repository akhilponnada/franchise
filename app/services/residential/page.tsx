import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Home, Zap, Shield, Phone, Calculator } from "lucide-react"

export default function ResidentialSolarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/indian-family-solar-home.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-green-600 text-white text-lg px-6 py-2">
            <Home className="h-4 w-4 mr-1" />
            Residential Solar Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Power Your Home with
            <br />
            <span className="text-green-400">Clean Solar Energy</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">
            Save up to 90% on electricity bills with our premium residential solar systems
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-orange-500 text-white font-sans transition-colors duration-300"
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Our Residential Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Complete solar solutions for your home with premium quality components and professional installation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Zap className="h-6 w-6 text-blue-600 mr-2" />
                  On-Grid Solar Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-panels-rooftop-india.jpg"
                  alt="On-grid solar system"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Grid-tied systems that reduce your electricity bills and provide net metering benefits
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Net metering facility</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Lower installation cost</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Government subsidies available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Shield className="h-6 w-6 text-green-600 mr-2" />
                  Off-Grid Solar Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-installation-team-india.jpg"
                  alt="Off-grid solar system"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Independent systems with battery backup for complete energy independence
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Complete energy independence</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Battery backup included</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Perfect for remote areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Calculator className="h-6 w-6 text-orange-500 mr-2" />
                  Hybrid Solar Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-technician-india.jpg"
                  alt="Hybrid solar system"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Best of both worlds - grid connection with battery backup for maximum reliability
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Grid connection + battery backup</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Uninterrupted power supply</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Maximum energy savings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Choose Our Residential Solar?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Premium Quality Components</h3>
                    <p className="text-gray-600 font-sans">
                      Tier-1 solar panels with 25-year warranty and high-efficiency inverters
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Professional Installation</h3>
                    <p className="text-gray-600 font-sans">
                      Certified technicians ensure safe and efficient installation with minimal disruption
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Complete Support</h3>
                    <p className="text-gray-600 font-sans">
                      From design to commissioning, we handle all paperwork and approvals
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/solar-farm-india.jpg"
                alt="Solar installation process"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Go Solar?</h2>
          <p className="text-xl text-green-100 mb-8 font-sans">
            Get a free consultation and customized solar solution for your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-white hover:text-green-600 text-white font-sans transition-colors duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91-9876543210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 font-sans transition-colors duration-300 bg-transparent"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
