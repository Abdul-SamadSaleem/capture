import { Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

const { default: AboutsUs } = require("./pages/AboutsUs");
// Global Style
const {default: GlobalStyle} = require("./components/GlobalStyle")
const {default: Nav} = require("./components/Nav")
const {default: ContactUs} = require("./pages/ContactUs")
const {default: OurWork} = require("./pages/OurWork")
const {default: MovieDetail} = require("./pages/MovieDetail")



const App = () => {

    const location = useLocation();

    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter> 

            <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
            <AboutsUs />
            </Route>
            <Route path="/work" exact>
            <OurWork />
            </Route>
            <Route>
                <MovieDetail path="/work/:id"/>
            </Route>
            <Route path="/contact">        
            <ContactUs />
            </Route>
            </Switch>
            </AnimatePresence>

        </div>
    )
}

export default App