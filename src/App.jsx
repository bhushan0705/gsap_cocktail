import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Types from "./components/Types";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <div className=" scroll-zone ">
          <Hero></Hero>
          <Cocktails></Cocktails>
        </div>
        <About></About>
        <Art></Art>
        <Types></Types>
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
