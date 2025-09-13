import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Users, TrendingUp, Phone } from "lucide-react"

export default function MandalFranchisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/solar-installation-team-india.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-green-600 text-white text-lg px-6 py-2">Mandal Level Franchise</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance">
            Start Your Solar Business
            <br />
            <span className="text-green-400">At Mandal Level</span>
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto font-sans">Investment: ₹5 Lakhs | ROI: 18-24 months</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Choose Mandal Franchise?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Low Investment Entry</h3>
                    <p className="text-gray-600 font-sans">Start your solar business with just ₹5 Lakhs investment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Territory Rights</h3>
                    <p className="text-gray-600 font-sans">
                      Exclusive rights for your mandal area with protected territory
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900 font-sans">Complete Training</h3>
                    <p className="text-gray-600 font-sans">
                      Comprehensive training program covering all aspects of solar business
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/solar-technician-india.jpg"
                alt="Solar technician working on installation"
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
                  Complete mandal area with population coverage of 50,000-1,00,000 people
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
                  Marketing materials, technical support, and lead generation assistance
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
                <p className="text-gray-600 font-sans">₹8-12 Lakhs annual revenue potential with 25% profit sharing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">Ready to Start Your Solar Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 font-sans">
            Join Unite Solar's growing network of successful franchise partners
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
