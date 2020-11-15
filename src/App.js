import { Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

// Global Style
const {default: GlobalStyle} = require("./components/GlobalStyle")
const {default: Nav} = require("./components/Nav")
const {default: ContactUs} = require("./pages/ContactUs")
const {default: OurWork} = require("./pages/OurWork")
const {default: MovieDetail} = require("./pages/MovieDetail")
const { default: AboutUs } = require("./pages/AboutsUs");



const App = () => {

    const location = useLocation();

    return (
        <div className="App">
          <GlobalStyle />
    
          <Nav />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact>
                <AboutUs />
              </Route>
              <Route path="/work" exact>
                <OurWork />
              </Route>
              <Route path="/work/:id">
                <MovieDetail />
              </Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      );
}

export default App