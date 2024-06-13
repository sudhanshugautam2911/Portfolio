import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { BentoGridDemo } from "./components/BentoGridDemo";
import { FloatingNavDemo } from "./components/FloatingNavbar";
import HeroNavbar from "./components/HeroNavbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import { TabsDemo } from "./components/TabsDemo";

export default function Home() {

  return (
    <>
      {/* <FloatingNavDemo /> */}
      <div className='min-h-screen bg-black overflow-hidden '>
        <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] ">
          <div className='max-w-7xl mx-auto p-4 '>
            <HeroNavbar />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
        </div>
        <div className="max-w-7xl mx-auto p-4 mt-20">
            <Skills/>
        </div>
      </div>

      <TabsDemo />
      {/* <BentoGridDemo /> */}
      <BackgroundBeamsDemo />
    </>
  );
}
