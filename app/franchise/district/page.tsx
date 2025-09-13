import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Users, TrendingUp, Phone, Star } from "lucide-react"

export default function DistrictFranchisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/solar-panels-rooftop-india.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-green-600 text-white text-lg px-6 py-2">
            <Star className="h-4 w-4 mr-1" />
            Most Popular - District Level Franchise
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Scale Your Business
            <br />
            <span className="text-green-400">At District Level</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">Investment: ₹10 Lakhs | ROI: 12-18 months</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                Why District Franchise is Most Popular?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Entire District Rights</h3>
                    <p className="text-gray-600 font-sans">
                      Complete district coverage with exclusive territory protection
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Sub-Franchise Opportunities</h3>
                    <p className="text-gray-600 font-sans">
                      Create your own network by appointing mandal level partners
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Dedicated Relationship Manager</h3>
                    <p className="text-gray-600 font-sans">
                      Personal support from dedicated business development manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/indian-family-solar-home.jpg"
                alt="Indian family with solar home"
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
            <Card className="ring-2 ring-green-500">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  Territory Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  Complete district with population coverage of 5-10 lakh people across multiple mandals
                </p>
              </CardContent>
            </Card>

            <Card className="ring-2 ring-green-500">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Users className="h-6 w-6 text-green-600 mr-2" />
                  Support Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  Advanced training, regional marketing campaigns, and priority technical support
                </p>
              </CardContent>
            </Card>

            <Card className="ring-2 ring-green-500">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                  Expected Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">
                  ₹25-40 Lakhs annual revenue potential with revenue sharing from sub-partners
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Most Preferred Franchise Model</h2>
          <p className="text-xl text-green-100 mb-8 font-sans">
            Perfect balance of investment and returns - Join our most successful partners
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
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
