
import Terms from "../home/Terms"
import Navbar from "../navbar/Navbar"
import SEO from "../SEO"


export default function TC() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO 
        title="Terms and Conditions - Budzee Memory Game"
        description="Read the terms and conditions for using Budzee, the ultimate multiplayer memory game challenge. Legal information and user agreements."
        canonical="https://budzee.in/terms"
        keywords="terms and conditions, legal, user agreement, Budzee, memory game"
      />
      <Navbar/>
      <main id="terms" className="container mx-auto pt-8"><Terms/></main>
    </div>
  )
}