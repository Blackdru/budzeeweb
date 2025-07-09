
import Navbar from "../navbar/Navbar"
import FeedBack from "./Feedback"
import SEO from "../SEO"


export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO 
        title="Feedback - Budzee Memory Game"
        description="Share your feedback and suggestions for Budzee, the ultimate multiplayer memory game challenge. Help us improve your gaming experience."
        canonical="https://budzee.in/feedback"
        keywords="feedback, suggestions, review, Budzee, memory game, user experience"
      />
      <Navbar/>
      <main id="feedback" className="container mx-auto pt-8"><FeedBack/></main>
    </div>
  )
}