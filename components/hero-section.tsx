import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, MapPin, DollarSign, Headphones } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-solar-panels-india.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <Badge className="mb-4 bg-green-600 text-white text-lg px-6 py-2">
          🌟 Join the Largest Green Business Network Today
        </Badge>

        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance text-white">
          Invest in Solar,
          <br />
          <span className="text-green-400">Invest in the Future</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto opacity-90 font-sans text-white">
          Projected earnings up to ₹50 Lakhs+ per annum after expenses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="text-lg px-8 py-6 font-sans bg-blue-600 hover:bg-orange-500 text-white transition-colors duration-300"
          >
            Apply Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-orange-500 border-orange-500 text-white hover:bg-blue-600 hover:border-blue-600 font-sans transition-colors duration-300"
          >
            Why Franchise?
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white border-white text-black hover:bg-orange-500 hover:text-white hover:border-orange-500 font-sans transition-colors duration-300"
            asChild
          >
            <a href="/franchise_brochure.pdf" download="Unite_Solar_Franchise_Brochure.pdf">
              Download Brochure
            </a>
          </Button>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          <Card className="bg-blue-900/20 border-green-500/50 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold font-serif text-white">25%</div>
              <div className="text-sm font-sans text-green-200 font-medium">Profit Share</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-green-500/50 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold font-serif text-white">100+</div>
              <div className="text-sm font-sans text-green-200 font-medium">Products & Vendors</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-green-500/50 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-4 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold font-serif text-white">Territory</div>
              <div className="text-sm font-sans text-green-200 font-medium">Rights</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-green-500/50 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold font-serif text-white">₹50L+</div>
              <div className="text-sm font-sans text-green-200 font-medium">Annual Earnings</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-green-500/50 backdrop-blur-md hover:bg-blue-900/30 transition-all duration-300 shadow-lg">
            <CardContent className="p-4 text-center">
              <Headphones className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold font-serif text-white">24/7</div>
              <div className="text-sm font-sans text-green-200 font-medium">Support</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
