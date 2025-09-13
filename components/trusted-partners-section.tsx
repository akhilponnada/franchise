import { Card, CardContent } from "@/components/ui/card"

export function TrustedPartnersSection() {
  const epcPartners = ["Tata Power Solar", "Adani Solar", "Vikram Solar", "Waaree Energies", "Luminous Power"]

  const suppliers = ["Longi Solar", "JinkoSolar", "Canadian Solar", "First Solar", "SunPower"]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Trusted EPC Partners & Suppliers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Backed by India's leading solar manufacturers and premium quality suppliers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EPC Partners */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-center font-serif">Trusted EPC Partners</h3>
              <div className="grid grid-cols-1 gap-4">
                {epcPartners.map((partner, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img
                      src={`/images/solar-company-logo.jpg?height=60&width=120&query=${partner.toLowerCase().replace(/\s+/g, "-")}-logo`}
                      alt={partner}
                      className="h-12 w-24 object-contain mr-4"
                    />
                    <span className="font-semibold text-gray-800 font-sans">{partner}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Suppliers */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-center font-serif">Trusted Suppliers</h3>
              <div className="grid grid-cols-1 gap-4">
                {suppliers.map((supplier, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img
                      src={`/images/solar-manufacturer-logo.jpg?height=60&width=120&query=${supplier.toLowerCase().replace(/\s+/g, "-")}-logo`}
                      alt={supplier}
                      className="h-12 w-24 object-contain mr-4"
                    />
                    <span className="font-semibold text-gray-800 font-sans">{supplier}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
