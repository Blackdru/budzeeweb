"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Mail, MessageSquare } from "lucide-react"
import { FaBrain, FaDiscord, FaEnvelope, FaPhone } from "react-icons/fa"
import { apiRequest, API_ENDPOINTS } from "../../config/api"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, issue: value }))
  }

  useEffect(() => {
    if (formStatus) {
      setTimeout(() => {
        setFormStatus(null)
        setIsSubmitting(false)
      }, 5000)
    }
  }, [formStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Update the API endpoint to match your backend
      const result = await apiRequest(API_ENDPOINTS.contact, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          app: "budzee",
          timestamp: new Date().toISOString()
        })
      })

      if (result.success) {
        setFormStatus("success")
        setFormData({
          name: "",
          email: "",
          issue: "",
          description: "",
        })
      } else {
        setFormStatus("error")
      }
      
    } catch (error) {
      console.error('Contact form error:', error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.issue && formData.description

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/10 to-background text-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
              <MessageSquare className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Contact Us
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about Budzee? Need support? We're here to help! Reach out to our friendly team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need technical support, have feedback about the game, or want to learn more about Budzee's memory training features, we're here to assist you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-primary text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Support</h3>
                  <p className="text-muted-foreground">support@budzee.in</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <FaDiscord className="text-accent text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Community Discord</h3>
                  <p className="text-muted-foreground">Join our gaming community</p>
                  <p className="text-sm text-muted-foreground">Real-time chat support</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <FaBrain className="text-primary text-xl" />
                <h3 className="font-semibold text-foreground">Quick Help</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Looking for instant answers? Check our FAQ section for common questions about Budzee gameplay, features, and troubleshooting.
              </p>
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300"
                onClick={() => window.location.href = '/#faq'}
              >
                View FAQ
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>

            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-secondary/20 border border-secondary/50 rounded-xl flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-secondary font-medium">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-destructive/20 border border-destructive/50 rounded-xl flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <div>
                  <p className="text-destructive font-medium">Failed to send message</p>
                  <p className="text-sm text-muted-foreground">Please try again or contact us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="issue" className="text-foreground font-medium">
                  Issue Type *
                </Label>
                <Select value={formData.issue} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="bg-background border-border text-foreground focus:ring-primary/20">
                    <SelectValue placeholder="Select the type of inquiry" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border text-foreground">
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="gameplay">Gameplay Help</SelectItem>
                    <SelectItem value="account">Account Issues</SelectItem>
                    <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  Message *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your question or issue in detail. Include any relevant information such as device type, error messages, or specific game features you're asking about..."
                  required
                  className="min-h-[120px] bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-muted disabled:to-muted"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>We typically respond within 24-48 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}