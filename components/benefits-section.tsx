import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Partner with Unite Solar?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join India's most profitable solar franchise network with proven revenue streams and comprehensive support
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Key Revenue Streams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/profit-share-infographic.jpg"
                    alt="25% Profit Share Infographic"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-white">25% Profit Share</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Direct profit sharing from all district operations and solar installations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/solar-park-commission.jpg"
                    alt="Solar Park Commission Infographic"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-white">Solar Park Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Earn commission on solar park facilitation and land procurement projects
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/solcart-app-revenue.jpg"
                    alt="Solcart App Revenue Infographic"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-white">Solcart App Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Generate income through our marketplace with 100+ products and vendors</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-blue-900 to-orange-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[400px]">
              <div className="p-8 lg:p-12 text-center lg:text-left">
                <Badge className="mb-4 bg-white text-blue-900 text-lg px-6 py-2">Projected Earnings</Badge>
                <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-white">₹50 Lakhs+ Yearly</h3>
                <p className="text-xl text-white mb-6">
                  With good and reasonable efforts, franchisees can expect substantial returns on their investment
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">25%</div>
                    <div className="text-blue-100">Profit Share</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100+</div>
                    <div className="text-blue-100">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-blue-100">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-full">
                <Image
                  src="/images/professional-woman-blazer.jpg"
                  alt="Professional woman in blazer with folded arms"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Comprehensive Support Provided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    src="/images/dedicated-team-support.jpg"
                    alt="Dedicated Team Support"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg text-white">Dedicated Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300">1 technician + 2 telecallers for the first year</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    src="/images/training-marketing-support.jpg"
                    alt="Training & Marketing Support"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg text-white">Training & Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300">Comprehensive training and marketing support</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    src="/images/24-7-customer-support.jpg"
                    alt="24/7 Customer Support"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg text-white">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300">Dedicated liaison & corporate services</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image
                    src="/images/outlet-design-setup.jpg"
                    alt="Outlet Design & Setup"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg text-white">Outlet Design</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-300">Standardized franchise outlet design & setup</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
