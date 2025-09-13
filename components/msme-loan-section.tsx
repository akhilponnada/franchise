import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, CheckCircle, TrendingUp, Phone, FileText, Users } from "lucide-react"

export function MSMELoanSection() {
  const loanFeatures = [
    {
      icon: CreditCard,
      title: "Up to 80% Financing",
      description: "Get maximum funding for your franchise investment with minimal down payment",
    },
    {
      icon: TrendingUp,
      title: "Competitive Interest Rates",
      description: "Special rates for solar franchise partners starting from 9.5% per annum",
    },
    {
      icon: FileText,
      title: "Quick Processing",
      description: "Fast approval process with minimal documentation and hassle-free procedures",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal loan advisor to guide you through the entire application process",
    },
  ]

  const eligibleTiers = [
    { tier: "Mandal Franchise", investment: "₹5 Lakhs", loan: "₹4 Lakhs" },
    { tier: "District Franchise", investment: "₹10 Lakhs", loan: "₹8 Lakhs" },
    { tier: "Zonal Franchise", investment: "₹15 Lakhs", loan: "₹12 Lakhs" },
    { tier: "Master Stockist", investment: "₹25 Lakhs", loan: "₹20 Lakhs" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white text-lg px-6 py-2">
            <CreditCard className="h-4 w-4 mr-1" />
            MSME Loan Facility
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Get Up to 80% Financing for Your Franchise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Start your solar business with minimal investment through our MSME loan partnership program
          </p>
        </div>

        {/* Loan Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {loanFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-sans">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loan Eligibility Table */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 font-serif">Loan Eligibility by Franchise Tier</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibleTiers.map((tier, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-serif">{tier.tier}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-600 font-sans">Total Investment</span>
                      <div className="text-xl font-bold text-gray-900 font-sans">{tier.investment}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600 font-sans">Loan Available</span>
                      <div className="text-xl font-bold text-green-600 font-sans">{tier.loan}</div>
                    </div>
                    <div className="flex items-center justify-center mt-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      <span className="text-sm text-green-600 font-sans">80% Financing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Choose Our MSME Loan Program?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">Pre-Approved Partnerships</h4>
                  <p className="text-gray-600 font-sans">
                    We have tie-ups with leading banks and NBFCs for faster loan approvals
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">Flexible Repayment</h4>
                  <p className="text-gray-600 font-sans">
                    Choose from 3-7 year repayment terms based on your cash flow projections
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">Business Support</h4>
                  <p className="text-gray-600 font-sans">
                    Complete business plan assistance and financial projections for loan applications
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/indian-businessman-solar-office.jpg"
              alt="MSME loan consultation"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-serif">Ready to Apply for MSME Loan?</h3>
          <p className="text-xl text-blue-100 mb-6 font-sans">
            Get pre-approval in 48 hours and start your solar franchise journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-white hover:text-blue-600 text-white font-sans transition-colors duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Loan Advisor: +91-9876543210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-sans transition-colors duration-300 bg-transparent"
            >
              <FileText className="h-5 w-5 mr-2" />
              Download Loan Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
