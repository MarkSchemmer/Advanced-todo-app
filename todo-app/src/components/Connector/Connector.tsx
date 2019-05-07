import React from "react";
import { Switch, Route } from "react-router-dom";
import BoardPage from "../../containers/BoardPage/BoardPage";
import Footer from "../Footer/Footer";
import CreateProfilePage from "../../containers/CreateProfilePage/CreateProfilePage";
import MainPage from "../../containers/MainPage/MainPage";
import SignInPage from "../../containers/SignInPage/SignInPage";
import PageNotFound from "../PageNotFound/PageNotFound";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import { mergeStyleSets } from "@uifabric/merge-styles";

const stylesForMain = () => {
    return mergeStyleSets({
        main: {
            display:'flex',
            width: '100%',
            height: '100%'
        }
    })
}

class Connector extends React.Component {
    render () {
        const { main } = stylesForMain();
        return (
            <React.Fragment> 
            <div className={main}>
                <Switch>
                        <Route exact  path="/" component={SignInPage} />
                        <Route  path="/create-profile" component={CreateProfilePage} />
                        <Route  path="/main" component={MainPage} />
                        <Route  path="/boards" component={BoardPage} />
                        <Route  path="*" component={PageNotFound} />
                </Switch>
            </div>
             <Footer /> 
             </React.Fragment>
        );
    }
}

export default Connector;