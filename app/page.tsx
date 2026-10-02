import About from "../components/about/About";
import CameraScroll from "../components/CameraScroll";
import Navbar from "../components/navbar/Navbar";
import Business from "../components/business/Business";
import Packags from "@/components/Packag/Packags";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="top">
          <CameraScroll />
        </div>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="work" className="scroll-mt-20">
          <Business />
        </section>

        <section id="price" className="scroll-mt-20">
          <Packags />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer/>
    </div>
  );
}