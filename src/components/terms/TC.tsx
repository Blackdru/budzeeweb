
import Terms from "../home/Terms"
import Navbar from "../navbar/Navbar"


export default function TC() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar/>
      <main id="terms" className="container mx-auto pt-8"><Terms/></main>
    </div>
  )
}