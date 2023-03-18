import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Media from "@/components/Media";
import NavBar from "@/components/NavBar";
import News from "@/components/News";


export default function Home()
{
    return(
        <div className="overflow-x-hidden overflow-y-auto">
        <Header />
      <NavBar />
      <HeroSection/>
        
      {/* <section
        id="hero"
        className="text-white h-screen   text-center flex"
      >
        
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold " >
          HeroSection
        </h1>
      </section>
      
      <hr />
      <section id="news" className=" text-white h-screen   text-center flex">
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold ">
          News Section
        </h1>
      </section>
      <hr />
      <section
        id="media"
        className="text-white h-screen   text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold ">
            Media Section
        </h1>
      </section>
      <hr /> */}
      
      <Media/>
      <News/>
      <Footer/>
    </div>
    )
}