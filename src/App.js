import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route exact path="/work/:id">
          <ProjectDetail />
        </Route>

        <Route path="/contact" exact>
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
