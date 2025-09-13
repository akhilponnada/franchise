import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function InvestmentSection() {
  return (
    <section
      id="investment"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">Minimum Investment Model</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transparent cost structure with proven ROI and comprehensive support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Investment Highlights Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <img
                  src="/images/investment-growth.jpg"
                  alt="Investment Growth"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Investment Highlights</CardTitle>
              <Badge className="bg-orange-500 text-white border-0">Structured Investment</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">₹10 Lakhs Initial Investment</h4>
                  <p className="text-sm text-gray-600">Structured investment model for serious partners</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Transparent cost structure</h4>
                  <p className="text-sm text-gray-600">No hidden fees or surprise costs</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven business model</h4>
                  <p className="text-sm text-gray-600">Based on successful franchise operations</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Territory protection</h4>
                  <p className="text-sm text-gray-600">Exclusive rights in your designated area</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Study Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <img
                  src="/images/success-case-study.jpg"
                  alt="Success Story"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Success Case Study</CardTitle>
              <Badge className="bg-green-600 text-white border-0">Proven Results</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Initial Investment</span>
                  <span className="font-bold text-blue-900">₹10 Lakhs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-medium">Monthly Revenue (Avg)</span>
                  <span className="font-bold text-green-600">₹4+ Lakhs</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-medium">ROI Timeline</span>
                  <span className="font-bold text-orange-600">12-18 months</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-blue-200">
                  <span className="font-bold text-gray-900">Yearly Profit</span>
                  <span className="font-bold text-blue-900 text-xl">₹50+ Lakhs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included Card */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <img
                  src="/images/franchise-package.jpg"
                  alt="Franchise Package"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">What's Included</CardTitle>
              <Badge className="bg-blue-600 text-white border-0">Complete Package</Badge>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Franchise rights & territory protection</span>
                </li>
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Complete outlet setup & design</span>
                </li>
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Initial inventory & product catalog</span>
                </li>
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Training for you and your team</span>
                </li>
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Marketing materials & campaigns</span>
                </li>
                <li className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Ongoing support & consultation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0"
          >
            Request Investment Details
          </Button>
          <p className="text-white mt-4 text-sm font-medium">Get detailed investment breakdown and ROI projections</p>
        </div>
      </div>
    </section>
  )
}
