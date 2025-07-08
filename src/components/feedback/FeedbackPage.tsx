
import Navbar from "../navbar/Navbar"
import FeedBack from "./Feedback"


export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar/>
      <main id="feedback" className="container mx-auto pt-8"><FeedBack/></main>
    </div>
  )
}