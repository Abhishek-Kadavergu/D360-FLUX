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
