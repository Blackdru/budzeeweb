
import Main from '../main/Main'
import Navbar from '../navbar/Navbar'
import SEO from '../SEO'


export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <SEO />
      <Navbar/>
      <Main/>
    </div>
  )
}