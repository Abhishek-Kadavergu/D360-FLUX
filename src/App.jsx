import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <div className="pt-[4.25rem] sm:pt-[4.5rem] lg:pt-[5rem] overflow-x-clip overflow-y-visible">
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            {/* POWERED BY Section */}
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-base md:text-xl font-bold tracking-[0.25em] text-n-3 uppercase mb-8">
                POWERED BY
              </p>
              <a href="https://piazza-website-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                <img src="/piazza-logo-bg.png" alt="Piazza Consulting Group" className="h-20 md:h-32 lg:h-40 object-contain drop-shadow-2xl" />
              </a>
            </div>
            <Cta />
            <Footer />
          </div>
        } />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
