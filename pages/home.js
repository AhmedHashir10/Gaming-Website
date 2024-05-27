import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Media from "@/components/Media";
import NavBar from "@/components/NavBar";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-auto m-0">
      <NavBar />
      <HeroSection />
      <Media />
      <Footer />
    </div>
  );
}
