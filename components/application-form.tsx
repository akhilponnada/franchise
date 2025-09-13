"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp, Send } from "lucide-react"

export function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    territory: "",
    investment: "",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Franchise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards becoming a Unite Solar franchise partner
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Franchise Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="territory">Preferred Territory/District *</Label>
                    <Input
                      id="territory"
                      value={formData.territory}
                      onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
                      placeholder="e.g., Hyderabad, Mumbai, Delhi"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment">Investment Readiness</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, investment: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your investment range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="10-20">₹10-20 Lakhs</SelectItem>
                      <SelectItem value="20-50">₹20-50 Lakhs</SelectItem>
                      <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Business Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="Tell us about your business background and why you want to join Unite Solar..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload ID Proofs</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileUp className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your documents here, or click to browse
                    </p>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
