import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, GraduationCap, Rocket, TrendingUp } from "lucide-react"

export function HowFranchiseWorksSection() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Apply & Get Approved",
      description:
        "Submit your application and get approved within 48 hours. We verify your commitment and business acumen.",
      image: "/images/application-handshake.jpg",
    },
    {
      icon: GraduationCap,
      title: "Training & Onboarding",
      description: "Complete 7-day intensive training program covering technical, sales, and business operations.",
      image: "/images/solar-training-session.jpg",
    },
    {
      icon: Rocket,
      title: "Start Operations Day One",
      description:
        "Launch your solar business with our complete support system, marketing materials, and lead generation.",
      image: "/images/solar-business-launch.jpg",
    },
    {
      icon: TrendingUp,
      title: "Earn Profits & Scale",
      description: "Generate revenue from multiple streams and scale your business with ongoing support and upgrades.",
      image: "/images/business-growth-chart.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">How Franchise Works?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple 4-step process to start your profitable solar business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <step.icon className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
