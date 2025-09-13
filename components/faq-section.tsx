import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is the investment required to start a Unite Solar franchise?",
      answer:
        "Entry starts as low as ₹5 Lakhs for Outlet Partner tier, going up to ₹1 Crore for Mandal Stockist tier. The investment depends on your chosen franchise model and territory size.",
    },
    {
      question: "How soon can I start earning?",
      answer:
        "Revenue streams like rooftop solar installations and EPC contracts can start from Day One after completing our 7-day training program. Most partners see their first revenue within the first month.",
    },
    {
      question: "Do I need technical knowledge to start a solar franchise?",
      answer:
        "No technical background is required. Unite Solar provides comprehensive training covering technical aspects, sales processes, and business operations. Our ongoing support ensures you're always equipped with the latest knowledge.",
    },
    {
      question: "How long is the ROI period?",
      answer:
        "Most franchise partners recover their investment within 6-24 months depending on their tier and market activity. Higher tiers typically have faster ROI due to larger project volumes.",
    },
    {
      question: "Can I expand from Outlet Partner to City Partner?",
      answer:
        "Yes, Unite Solar encourages progressive franchise upgrades. You can scale from Outlet Partner to City Partner, District Partner, or even Mandal Stockist as your business grows.",
    },
    {
      question: "What ongoing support do you provide?",
      answer:
        "We provide continuous technical support, marketing materials, lead generation, training updates, and dedicated relationship management. You're never alone in your solar business journey.",
    },
    {
      question: "Are there any territory restrictions?",
      answer:
        "Each franchise tier comes with exclusive territory rights. We ensure no overlap and protect your market area based on your chosen franchise model.",
    },
    {
      question: "What are the main revenue sources?",
      answer:
        "Multiple revenue streams include rooftop installations, EPC contracts, solar water pumps, maintenance AMCs, accessories sales, and sub-franchise development. This diversification ensures stable income.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Unite Solar franchise opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
