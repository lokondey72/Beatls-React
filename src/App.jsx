import About from "./components/About"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Heading from "./components/Heading"
import Main_menu from "./components/Main_menu"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <>
        <Heading/>
        <Main_menu/>
        <Banner/>
        <About/>
        <Services/>
        <Portfolio/>
        <Team/>
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default App