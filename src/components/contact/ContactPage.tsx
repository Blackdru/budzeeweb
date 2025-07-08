
import Navbar from "../navbar/Navbar"
import Contact from "./Contact"


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar/>
      <main id="contact" className="container mx-auto pt-8"><Contact/></main>
    </div>
  )
}