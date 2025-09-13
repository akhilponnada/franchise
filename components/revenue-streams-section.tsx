import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, IndianRupee } from "lucide-react"
import Image from "next/image"

export function RevenueStreamsSection() {
  const streams = [
    {
      image: "/images/rooftop-solar-installation.jpg",
      title: "Rooftop Solar Installations",
      description: "Residential and commercial solar installations with 20-30% profit margins",
      earning: "₹2-5 Lakhs per project",
    },
    {
      image: "/images/epc-solar-contracts.jpg",
      title: "EPC Contracts",
      description: "Large-scale solar projects for industries and government contracts",
      earning: "₹10-50 Lakhs per contract",
    },
    {
      image: "/images/solar-water-pumps.jpg",
      title: "Solar Water Pumps",
      description: "Agricultural solar pumping solutions with government subsidies",
      earning: "₹25K-50K per pump",
    },
    {
      image: "/images/solar-maintenance-service.jpg",
      title: "Maintenance & AMC",
      description: "Annual maintenance contracts providing recurring revenue",
      earning: "₹5-15K per system/year",
    },
    {
      image: "/images/solar-accessories-sales.jpg",
      title: "Solar Accessories Sales",
      description: "Inverters, batteries, and solar accessories with retail margins",
      earning: "₹1-3 Lakhs monthly",
    },
    {
      image: "/images/business-network-development.jpg",
      title: "Sub-network Development",
      description: "Earn from recruiting and managing sub-franchise partners",
      earning: "₹2-10 Lakhs commission",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
            Revenue Streams You Can Start On Day One
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple income sources ensure consistent cash flow and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {streams.map((stream, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src={stream.image || "/placeholder.svg"} alt={stream.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{stream.title}</h3>
                  <p className="text-gray-600 mb-4">{stream.description}</p>
                  <div className="flex items-center text-green-600 font-semibold">
                    <IndianRupee className="h-4 w-4 mr-1" />
                    <span>{stream.earning}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Potential Annual Revenue</h3>
            <div className="text-4xl font-bold text-green-600">₹50+ Lakhs</div>
            <p className="text-gray-600 mt-2">After all expenses and operational costs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
