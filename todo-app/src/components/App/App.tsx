import React from "react";
import Connector from "../Connector/Connector";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                    <Connector /> 
                <Footer /> 
            </React.Fragment>
        );
    }
}

export default App;