import Nav from "./components/NavBar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
  <main className="bg-black">
    <Nav />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
  );
}

export default App;
