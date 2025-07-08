

import Main from '../main/Main'
import Navbar from '../navbar/Navbar'


export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar/>
      <Main/>
    </div>
  )
}