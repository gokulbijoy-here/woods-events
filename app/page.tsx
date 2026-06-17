import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Instagram />
            <Contact />
            <Footer />
        </main>
    );
}