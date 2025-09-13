import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Globe } from "lucide-react"

export function WhyFranchiseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Join the Largest Green Business Network Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with Unite Solar and become part of India's fastest-growing solar franchise network
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">₹50+ Lakhs Revenue</h3>
              <p className="text-gray-600">Annual earning potential after expenses</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Partners</h3>
              <p className="text-gray-600">Growing network across India</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">MNRE Approved</h3>
              <p className="text-gray-600">Government certified solar solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pan-India Presence</h3>
              <p className="text-gray-600">Expanding to 28 states</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Apply Now - Start Your Solar Business
          </Button>
        </div>
      </div>
    </section>
  )
}
