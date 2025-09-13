import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Shield, Award, Phone, Star } from "lucide-react"

export default function SolarPanelsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/high-efficiency-solar-panels-technology.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-green-600 text-white text-lg px-6 py-2">
            <Zap className="h-4 w-4 mr-1" />
            Premium Solar Panels
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            High-Efficiency Solar Panels
            <br />
            <span className="text-green-400">Built for Indian Conditions</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">
            Tier-1 solar panels with 25-year warranty and superior performance in extreme weather
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-orange-500 text-white font-sans transition-colors duration-300"
          >
            View Products
          </Button>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Our Solar Panel Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Premium quality solar panels from leading manufacturers with proven track record
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-green-500">
              <CardHeader>
                <Badge className="w-fit bg-green-600 text-white mb-2">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
                <CardTitle className="font-serif">Monocrystalline Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-panels-rooftop-india.jpg"
                  alt="Monocrystalline solar panels"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-green-600 font-sans">22-24% Efficiency</div>
                  <p className="text-gray-600 font-sans">
                    Highest efficiency panels with superior performance in low light conditions
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">25-year performance warranty</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Anti-reflective coating</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Weather resistant design</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif">Polycrystalline Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-installation-team-india.jpg"
                  alt="Polycrystalline solar panels"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-blue-600 font-sans">18-20% Efficiency</div>
                  <p className="text-gray-600 font-sans">
                    Cost-effective solution with reliable performance and proven technology
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">20-year performance warranty</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Budget-friendly option</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Proven reliability</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif">Bifacial Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-farm-india.jpg"
                  alt="Bifacial solar panels"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-orange-500 font-sans">25-27% Efficiency</div>
                  <p className="text-gray-600 font-sans">
                    Next-generation panels that capture sunlight from both sides for maximum output
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">30-year performance warranty</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Double-sided power generation</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-sans">Premium technology</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Choose Our Solar Panels?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Tier-1 Manufacturer</h3>
                    <p className="text-gray-600 font-sans">
                      Panels from Bloomberg Tier-1 manufacturers with proven financial stability
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">International Certifications</h3>
                    <p className="text-gray-600 font-sans">
                      IEC, UL, and BIS certified panels meeting international quality standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Superior Performance</h3>
                    <p className="text-gray-600 font-sans">
                      Optimized for Indian climate with excellent performance in high temperatures
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/solar-technician-india.jpg"
                alt="Solar panel quality testing"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Choose the Right Panels?</h2>
          <p className="text-xl text-green-100 mb-8 font-sans">
            Get expert consultation to select the perfect solar panels for your needs
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
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
