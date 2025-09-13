import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Calculator, Target } from "lucide-react"

export function FinancialProjectionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">💰 Financial Projections</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Why Solar Beats Traditional Investments</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Compare the returns and see why solar franchise is the smartest investment choice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bank FD Comparison */}
          <Card className="border-2 border-red-200 bg-red-50/50">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-700">Bank Fixed Deposit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">7%</div>
                <p className="text-red-600 font-medium">Annual Returns</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Investment</span>
                  <span className="font-medium">₹10 Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Annual Return</span>
                  <span className="font-medium">₹70,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">5-Year Total</span>
                  <span className="font-medium">₹3.5 Lakhs</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Risk Level</span>
                  <span className="text-red-600 font-medium">Low Growth</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solar Investment */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-yellow-50 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white">Recommended</Badge>
            </div>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-700">Solar Franchise Investment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">2x+</div>
                <p className="text-green-600 font-medium">Returns Potential</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Investment</span>
                  <span className="font-medium">₹10 Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Projected Annual</span>
                  <span className="font-bold text-green-600">₹50+ Lakhs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">5-Year Potential</span>
                  <span className="font-bold text-green-600">₹2.5+ Crores</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Business Model</span>
                  <span className="text-green-600 font-medium">Scalable Growth</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Minimum Guaranteed</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">₹50 Lakhs</p>
              <p className="text-sm text-muted-foreground">Annual earnings after all expenses</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">ROI Timeline</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">12-18</p>
              <p className="text-sm text-muted-foreground">Months to break even</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
              <p className="text-3xl font-bold text-purple-600 mb-2">Unlimited</p>
              <p className="text-sm text-muted-foreground">Scale with market demand</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
          >
            Calculate Your ROI
          </Button>
        </div>
      </div>
    </section>
  )
}
