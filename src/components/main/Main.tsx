import Cards from "../home/Cards";
import Faq from "../home/FAQ";
import Footer from "../home/Footer";
import Home from "../home/Home";
import Installation from "../home/Installation";
import Reviews from "../home/Reviews";

export default function Main() {
  return (
    <main id="main" className="container mx-auto pt-8">
        <Home/>
        <Cards/>
        <Installation/>
        <Reviews/>
        <Faq/>
        <Footer/>
      </main>

  )
}
