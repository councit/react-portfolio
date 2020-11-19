import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
