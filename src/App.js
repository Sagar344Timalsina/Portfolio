import About from "./pages/About";
import FooterNavBar from "./components/FooterNavBar";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import SocialLinks from "./components/SocialLinks";
import Contact from "./pages/Contact";

function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <FooterNavBar/>
    </div>
  );
}

export default App;
