import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Users, TrendingUp, Phone, Diamond } from "lucide-react"

export default function MasterStockistPage() {
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
          <Badge className="mb-4 bg-blue-600 text-white text-lg px-6 py-2">
            <Diamond className="h-4 w-4 mr-1" />
            Master Stockist - Premium Level
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Become the Regional
            <br />
            <span className="text-blue-400">Distribution Leader</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">Investment: ₹25 Lakhs | ROI: 6-12 months</p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-orange-500 text-white font-sans transition-colors duration-300"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Master Stockist is Premium?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Regional Distribution Rights</h3>
                    <p className="text-gray-600 font-sans">
                      Complete regional distribution network with highest profit margins
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Inventory Management Support</h3>
                    <p className="text-gray-600 font-sans">
                      Complete logistics and inventory management with dedicated warehouse
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Multi-District Coverage</h3>
                    <p className="text-gray-600 font-sans">
                      Supply network across multiple districts with exclusive distribution rights
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/solar-installation-team-india.jpg"
                alt="Professional solar installation team"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">Investment Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  Territory Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  Regional distribution covering 10+ districts with population of 1+ crore people
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  Support Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  Dedicated warehouse, logistics team, and regional business development support
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                  Expected Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  ₹1+ Crore annual revenue potential with highest profit margins in the network
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Lead the Distribution Network?</h2>
          <p className="text-xl text-blue-100 mb-8 font-sans">
            Become the regional leader with maximum earning potential and business growth
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
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
