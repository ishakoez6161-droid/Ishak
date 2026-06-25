import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
