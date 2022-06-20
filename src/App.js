import About from "./Components/About.comp";
import Contact from "./Components/Contact/Contact.comp";
import Header from "./Components/Header/Header.comp";
import Main from "./Components/Main/Main.comp";
import Projects from "./Components/Projects/Projects.comp";
import Skills from "./Components/Skills/Skills.comp";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
