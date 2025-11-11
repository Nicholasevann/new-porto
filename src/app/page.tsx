import AboutMe from "@/component/AboutMe";
import ContactForm from "@/component/Contact";
import ContentNavigation from "@/component/Content";
import Education from "@/component/Education";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Project from "@/component/Project";

const App = () => {
  return (
    <div>
      <div className="relative z-0 bg-black">
        <Navbar />
        <Hero />
        <ContentNavigation />
        <AboutMe />
        <Project />
        <Experience />
        <Education />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
