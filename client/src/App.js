import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

import { Provider } from "react-redux";
import store from "./redux/store";

import Landing from "./components/layout/Landing";
import Login from "./modules/auth-module/Login";
import Register from "./modules/auth-module/Register";
import Dashboard from "./modules/dashboard-module/Dashboard";

import "./main.css";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());

        window.location.href = "/login";
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />

                        <Switch>
                            <PrivateRoute
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
