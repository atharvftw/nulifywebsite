import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
/*import { Footer } from "./components/Footer";*/
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import  ContactForm  from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { NulifyInterface } from "./components/Scrollanimation"; // Use curly braces for named exports
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <NulifyInterface/>
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Team />
      <Pricing />
      <ContactForm />
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
