import Privacy from "../home/Privacy"
import Navbar from "../navbar/Navbar"


export default function Policy() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar/>
      <main id="policy" className="container mx-auto pt-8"><Privacy/></main>
    </div>
  )
}