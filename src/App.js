import About from "./Components/About.comp";
import Contact from "./Components/Contact/Contact.comp";
import Header from "./Components/Header/Header.comp";
import Main from "./Components/Main/Main.comp";
import Projects from "./Components/Projects/Projects.comp";
import Sidebar from "./Components/Sidebar/Sidebar.comp";
import Skills from "./Components/Skills/Skills.comp";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
