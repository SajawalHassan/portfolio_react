import About from "./Components/About.comp";
import Contact from "./Components/Contact/Contact.comp";
import Header from "./Components/Header/Header.comp";
import Main from "./Components/Main/Main.comp";
import Projects from "./Components/Projects/Projects.comp";
import Sidebar from "./Components/Sidebar/Sidebar.comp";
import Skills from "./Components/Skills/Skills.comp";
import AnimCursor from "./Components/AnimCursor/AnimCursor.comp";

function App() {
  return (
    <div className="flex">
      <AnimCursor />
      <Sidebar />
      <div className="w-screen">
        <Header />
        <div className="w-full space-y-[50rem]">
          <div id="main">
            <Main />
          </div>
          <div id="about" className="h-screen flex items-center">
            <About />
          </div>
          <div id="my-skills" className="h-screen flex items-center">
            <Skills />
          </div>
          <div id="projects" className="h-screen flex items-center">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
