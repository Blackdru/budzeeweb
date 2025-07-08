"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle, Star, MessageCircle, ThumbsUp, Lightbulb } from "lucide-react"
import { FaBrain, FaHeart, FaGamepad, FaTrophy } from "react-icons/fa"
import { apiRequest, API_ENDPOINTS } from "../../config/api"

export default function Feedback() {
  const [feedback, setFeedback] = useState("")
  const [rating, setRating] = useState(0)
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value)
  }

  useEffect(() => {
    if (formStatus) {
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }
  }, [formStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Update API endpoint to match your backend
      const result = await apiRequest(API_ENDPOINTS.feedback, {
        method: "POST",
        body: JSON.stringify({
          feedback,
          rating,
          category,
          app: "budzee"
        })
      })

      if (result.success) {
        setFormStatus("success")
        setFeedback("")
        setRating(0)
        setCategory("")
      } else {
        setFormStatus("error")
      }
      
    } catch (error) {
      console.error("Error submitting feedback:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const feedbackCategories = [
    { id: "gameplay", label: "Gameplay", icon: <FaGamepad className="text-primary" />, description: "Memory games, difficulty, features" },
    { id: "ui", label: "User Interface", icon: <FaBrain className="text-secondary" />, description: "Design, navigation, accessibility" },
    { id: "performance", label: "Performance", icon: <FaTrophy className="text-accent" />, description: "Speed, bugs, crashes" },
    { id: "suggestion", label: "Suggestions", icon: <Lightbulb className="text-primary" />, description: "New features, improvements" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/10 to-background text-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
              <FaHeart className="text-3xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
              Share Your Feedback
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your thoughts help us make Budzee better! Share your experience, suggestions, or report any issues you've encountered.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feedback Categories */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Feedback Categories</h2>
              <div className="space-y-3">
                {feedbackCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                      category === cat.id
                        ? 'bg-primary/20 border-primary shadow-lg shadow-primary/25'
                        : 'bg-card/50 border-border hover:bg-card/70'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-background/50 rounded-lg flex items-center justify-center">
                        {cat.icon}
                      </div>
                      <span className="font-medium text-foreground">{cat.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </button>
                ))}
              </div>
            </div>


          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Tell Us What You Think</h2>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-secondary/20 border border-secondary/50 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-secondary font-medium">Thank you for your feedback!</p>
                    <p className="text-sm text-muted-foreground">Your input helps us improve Budzee for everyone.</p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-destructive/20 border border-destructive/50 rounded-xl flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                  <div>
                    <p className="text-destructive font-medium">Failed to submit feedback</p>
                    <p className="text-sm text-muted-foreground">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Rating */}
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">
                    How would you rate your Budzee experience? *
                  </Label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`p-1 transition-all duration-200 ${
                          star <= rating ? 'text-accent' : 'text-muted-foreground hover:text-accent/50'
                        }`}
                      >
                        <Star className={`w-8 h-8 ${star <= rating ? 'fill-current' : ''}`} />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="ml-3 text-sm text-muted-foreground">
                        {rating === 1 && "Poor"}
                        {rating === 2 && "Fair"}
                        {rating === 3 && "Good"}
                        {rating === 4 && "Very Good"}
                        {rating === 5 && "Excellent"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">
                    Feedback Category {category && "*"}
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {category ? "Selected: " + feedbackCategories.find(c => c.id === category)?.label : "Please select a category from the above four Feedback Categories."}
                  </p>
                </div>

                {/* Feedback Text */}
                <div className="space-y-3">
                  <Label htmlFor="feedback" className="text-foreground font-medium">
                    Your Feedback *
                  </Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={handleChange}
                    placeholder="Share your thoughts about Budzee! What do you love? What could be improved? Any bugs or issues? New feature ideas? We want to hear it all..."
                    required
                    className="min-h-[150px] bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    {feedback.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !feedback.trim() || !rating || !category}
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:from-muted disabled:to-muted"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Submit Feedback
                    </div>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Your feedback is anonymous and helps us improve Budzee for everyone.</p>
              </div>
            </div>
          </div>
        </div>

         {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Community Impact
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Feedback Received</span>
                  <span className="font-medium text-foreground">2,450+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Features Added</span>
                  <span className="font-medium text-secondary">15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bugs Fixed</span>
                  <span className="font-medium text-accent">89</span>
                </div>
              </div>
            </div>
          </div>


        {/* Thank You Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8">
          <FaBrain className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">Thank You for Making Budzee Better!</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every piece of feedback helps us create a more engaging and effective memory training experience. 
            Your input directly influences our development priorities and helps us build features that matter most to our community.
          </p>
        </div>
      </div>
    </div>
  )
}