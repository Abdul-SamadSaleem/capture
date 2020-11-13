const { default: AboutsUs } = require("./pages/AboutsUs");
// Global Style
const {default: GlobalStyle} = require("./components/GlobalStyle")

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <AboutsUs />
        </div>
    )
}

export default App