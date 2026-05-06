import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Programs from "../components/Programs";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Slider />
        <Programs />
        <About />
        <Testimonials />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default  LandingPage;
