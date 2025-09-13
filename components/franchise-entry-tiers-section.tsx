import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, CreditCard } from "lucide-react"

export function FranchiseEntryTiersSection() {
  const tiers = [
    {
      name: "Mandal Franchise",
      investment: "₹5 Lakhs",
      roi: "18-24 months",
      benefits: [
        "Local mandal area rights",
        "Basic training program",
        "Marketing support",
        "Technical assistance",
        "Lead generation support",
      ],
      popular: false,
    },
    {
      name: "District Franchise",
      investment: "₹10 Lakhs",
      roi: "12-18 months",
      benefits: [
        "Entire district rights",
        "Advanced training program",
        "Dedicated relationship manager",
        "Priority technical support",
        "Sub-franchise opportunities",
        "Exclusive territory protection",
      ],
      popular: true,
    },
    {
      name: "Zonal Franchise",
      investment: "₹15 Lakhs",
      roi: "8-15 months",
      benefits: [
        "Complete zonal rights",
        "Master franchise training",
        "Regional marketing campaigns",
        "Bulk pricing advantages",
        "Multiple outlet management",
        "Revenue sharing from sub-partners",
      ],
      popular: false,
    },
    {
      name: "Master Stockist",
      investment: "₹25 Lakhs",
      roi: "6-12 months",
      benefits: [
        "Regional distribution rights",
        "Inventory management support",
        "Logistics coordination",
        "Bulk supply discounts",
        "Multi-district coverage",
        "Highest profit margins",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Choose Your Entry Tier</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Select the franchise model that matches your investment capacity and business goals
          </p>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-800 font-sans">MSME Loan Available</h3>
            </div>
            <p className="text-blue-700 font-sans">
              Get up to <strong>80% financing</strong> for your franchise investment through our MSME loan partners
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-shadow ${tier.popular ? "ring-2 ring-green-500" : ""}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-700 text-white border-0 shadow-md">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold font-serif">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-green-600 mt-2 font-sans">{tier.investment}</div>
                <div className="text-sm text-gray-600 font-sans">ROI: {tier.roi}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-sans">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-sans transition-colors duration-300 ${
                    tier.popular
                      ? "bg-blue-900 hover:bg-orange-500 text-white"
                      : "bg-orange-500 hover:bg-blue-900 text-white"
                  }`}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
