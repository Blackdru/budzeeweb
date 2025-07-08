import Cards from "../home/Cards";
import Faq from "../home/FAQ";
import Footer from "../home/Footer";
import Games from "../home/Games";
import Home from "../home/Home";
import Installation from "../home/Installation";
import Reviews from "../home/Reviews";

export default function Main() {
  return (
    <main id="main" className="container mx-auto pt-8">
        <Home/>
        <Cards/>
        <Games/>
        <Installation/>
        <Reviews/>
        <Faq/>
        <Footer/>
      </main>

  )
}
