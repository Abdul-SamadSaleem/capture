import { Switch, Route, useLocation } from "react-router-dom";


const { default: AboutsUs } = require("./pages/AboutsUs");
// Global Style
const {default: GlobalStyle} = require("./components/GlobalStyle")
const {default: Nav} = require("./components/Nav")
const {default: ContactUs} = require("./pages/ContactUs")
const {default: OurWork} = require("./pages/OurWork")


const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Route path="/" exact>
            <AboutsUs />
            </Route>
            <Route path="/work">
            <OurWork />
            </Route>
            <Route path="/contact">        
            <ContactUs />
            </Route>
        </div>
    )
}

export default App