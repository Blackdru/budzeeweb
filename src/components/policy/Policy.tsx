import Privacy from "../home/Privacy"
import Navbar from "../navbar/Navbar"
import SEO from "../SEO"


export default function Policy() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO 
        title="Privacy Policy - Budzee Memory Game"
        description="Learn about our privacy policy and data protection practices for Budzee, the ultimate multiplayer memory game challenge."
        canonical="https://budzee.in/privacy"
        keywords="privacy policy, data protection, user privacy, Budzee, memory game"
      />
      <Navbar/>
      <main id="policy" className="container mx-auto pt-8"><Privacy/></main>
    </div>
  )
}