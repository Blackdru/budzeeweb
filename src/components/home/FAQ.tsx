'use client'

import { useState } from 'react'
import { Plus, Minus, Star } from 'lucide-react'
import { FaAndroid, FaBrain, FaDownload } from "react-icons/fa";
import { Button } from '../ui/button'

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is Budzee safe and secure to play?",
      answer: "Yes, Budzee is completely safe and secure. We use advanced encryption and security protocols to protect user data and ensure fair gameplay. All transactions are processed through secure payment gateways."
    },
    {
      question: "How do memory games help improve cognitive function?",
      answer: "Memory games like those in Budzee help strengthen neural pathways, improve concentration, enhance pattern recognition, and boost overall cognitive performance through regular brain training exercises."
    },
    {
      question: "Can I play Budzee with friends?",
      answer: "Absolutely! Budzee features real-time multiplayer modes where you can challenge friends, join tournaments, and compete with players worldwide in exciting memory battles."
    },
    {
      question: "What are the system requirements for Budzee?",
      answer: "Budzee requires Android 6.0 or higher and approximately 25MB of storage space. The app is optimized to run smoothly on most modern Android devices."
    },
    {
      question: "Are there rewards for playing Budzee?",
      answer: "Yes! Budzee features a comprehensive reward system where you can earn points, unlock achievements, and win prizes through daily challenges and tournament victories."
    },
    {
      question: "How often is new content added to Budzee?",
      answer: "We regularly update Budzee with new game modes, challenges, and features. Our development team is committed to providing fresh content and improvements based on player feedback."
    }
  ]

  const ratings = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ]

  const handleDownload = () => {
    const apkUrl = "/Budzee.apk";
    const link = document.createElement("a");
    link.href = apkUrl;
    link.setAttribute("download", "Budzee.apk");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card/10 to-background text-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg">Got questions about Budzee? We've got answers!</p>
        </div>

        {/* FAQ Section */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-foreground">Common Questions</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FaBrain className="text-primary" />
              <span>Memory Game FAQ</span>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background/50 border border-border rounded-xl overflow-hidden hover:bg-background/70 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <div className={`transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                    {openQuestion === index ? (
                      <Minus className="w-5 h-5 flex-shrink-0 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                    )}
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openQuestion === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center md:text-left">
            <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              50K+
            </div>
            <div className="text-2xl font-semibold text-foreground">DOWNLOADS</div>
            <p className="text-muted-foreground mt-2">Join thousands of players improving their memory skills</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Rate Budzee</h3>
            <p className="text-muted-foreground mb-4">
              Ratings and reviews are verified from real players
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-bold text-accent">4.9</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">12,450</div>
            </div>

            <div className="space-y-2">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-3 text-sm text-muted-foreground">{rating.stars}</span>
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{rating.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Train Your Brain?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Download Budzee now and start your memory improvement journey with engaging multiplayer games!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={handleDownload} 
                className="bg-white text-primary hover:bg-white/90 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaAndroid className="mr-3 h-5 w-5" />
                DOWNLOAD APK
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="mr-3 h-5 w-5" />
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}