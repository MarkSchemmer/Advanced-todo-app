import React from "react";
import { Switch, Route } from "react-router-dom";
import BoardPage from "../../containers/BoardPage/BoardPage";
import CreateProfilePage from "../../containers/CreateProfilePage/CreateProfilePage";
import MainPage from "../../containers/MainPage/MainPage";
import SignInPage from "../../containers/SignInPage/SignInPage";
import PageNotFound from "../PageNotFound/PageNotFound";

class Connector extends React.Component {
    render () {
        return (
            <Switch>
                    <Route exact  path="/" component={SignInPage} />
                    <Route  path="/create-profile" component={CreateProfilePage} />
                    <Route  path="/main" component={MainPage} />
                    <Route  path="/boards" component={BoardPage} />
                    <Route  path="*" component={PageNotFound} />
            </Switch>
        );
    }
}

export default Connector;