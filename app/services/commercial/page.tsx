import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Building, TrendingUp, Phone, Factory } from "lucide-react"

export default function CommercialSolarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/solar-manufacturing-india.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-blue-600 text-white text-lg px-6 py-2">
            <Building className="h-4 w-4 mr-1" />
            Commercial Solar Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Scale Your Business with
            <br />
            <span className="text-blue-400">Commercial Solar Power</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">
            Reduce operational costs by up to 80% with large-scale commercial solar installations
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-orange-500 text-white font-sans transition-colors duration-300"
          >
            Get Commercial Quote
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Commercial Solar Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Comprehensive solar solutions for businesses, industries, and commercial establishments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Factory className="h-6 w-6 text-blue-600 mr-2" />
                  Industrial Solar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-farm-india.jpg"
                  alt="Industrial solar installation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Large-scale solar installations for manufacturing units and industrial facilities
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Mega-watt scale installations</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Accelerated depreciation benefits</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Power purchase agreements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Building className="h-6 w-6 text-green-600 mr-2" />
                  Office Buildings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-panels-rooftop-india.jpg"
                  alt="Office building solar"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Rooftop solar solutions for office complexes and commercial buildings
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Reduced electricity bills</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Green building certification</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Corporate sustainability goals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                  Solar Financing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/solar-installation-team-india.jpg"
                  alt="Solar financing solutions"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-4 font-sans">
                  Flexible financing options including CAPEX, OPEX, and lease models
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Zero upfront investment options</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Power purchase agreements</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-sans">Flexible payment terms</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Commercial Solar Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Significant Cost Savings</h3>
                    <p className="text-gray-600 font-sans">
                      Reduce electricity costs by 70-90% with commercial solar installations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Tax Benefits</h3>
                    <p className="text-gray-600 font-sans">
                      Accelerated depreciation up to 40% in the first year and other tax incentives
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Corporate Sustainability</h3>
                    <p className="text-gray-600 font-sans">
                      Enhance brand image and meet ESG goals with clean energy adoption
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/solar-technician-india.jpg"
                alt="Commercial solar benefits"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Transform Your Business with Solar</h2>
          <p className="text-xl text-blue-100 mb-8 font-sans">
            Get a customized commercial solar solution and start saving from day one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-white hover:text-blue-600 text-white font-sans transition-colors duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91-9876543210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-sans transition-colors duration-300 bg-transparent"
            >
              Get Commercial Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
