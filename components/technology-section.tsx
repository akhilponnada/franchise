import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Wifi, Zap, CreditCard } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Cpu,
      title: "High-Efficiency Solar Modules",
      description: "Latest monocrystalline and bifacial solar panels with 22%+ efficiency ratings",
      image: "/high-efficiency-solar-panels-technology.jpg",
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Monitoring",
      description: "Real-time performance monitoring and predictive maintenance through smart sensors",
      image: "/iot-solar-monitoring-dashboard.jpg",
    },
    {
      icon: Zap,
      title: "Net Metering Expertise",
      description: "Complete grid-tie solutions with seamless utility integration and billing optimization",
      image: "/net-metering-solar-grid-connection.jpg",
    },
    {
      icon: CreditCard,
      title: "Smart Financing Models",
      description: "Flexible payment options including solar loans, leasing, and CAPEX/OPEX models",
      image: "/solar-financing-digital-solutions.jpg",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">Technology That Compounds Your Results</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge solar technology and digital solutions to maximize efficiency and profitability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <div className="relative overflow-hidden">
                <img src={tech.image || "/placeholder.svg"} alt={tech.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-green-600 p-2 rounded-lg">
                  <tech.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-2">Advanced Technology Stack</h3>
            <p className="text-lg">Giving you competitive advantage in the solar market</p>
          </div>
        </div>
      </div>
    </section>
  )
}
