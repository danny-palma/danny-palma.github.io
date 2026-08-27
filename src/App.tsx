import { BrowserRouter } from "react-router-dom";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Experience from "./features/experience/Experience";
import Hero from "./features/hero/Hero";
import Navbar from "./layout/Navbar";
import Tech from "./features/tech/Tech";
import Projects from "./features/projects/Projects";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="relative z-0">
        <section aria-label="Hero Section">
          <Hero />
        </section>

        <section aria-label="About Section" className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </section>

        <section aria-label="Technologies" className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </section>

        <section aria-label="Projects">
          <Projects />
        </section>

        <section
          aria-label="Experience"
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
        >
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
          >
            <Experience />
          </div>
        </section>

        <section aria-label="Contact Section" className="relative z-0">
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
