
import Navbar from "../navbar/Navbar"
import Contact from "./Contact"
import SEO from "../SEO"


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO 
        title="Contact Us - Budzee Memory Game Support"
        description="Get in touch with the Budzee team. Contact us for support, questions, or feedback about our ultimate memory game challenge."
        canonical="https://budzee.in/contact"
        keywords="contact us, support, help, Budzee, memory game, customer service"
      />
      <Navbar/>
      <main id="contact" className="container mx-auto pt-8"><Contact/></main>
    </div>
  )
}