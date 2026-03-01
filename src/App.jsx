import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import EducationResearch from "./components/EducationResearch";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <EducationResearch />
      <Awards />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;