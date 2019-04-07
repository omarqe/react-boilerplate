import React from "react";
import fn from "./includes/Functions";
import CONST from "./includes/Constants";
import Routes from "./routes.json";
import { HandleProgressBar } from "./components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./styles/style.scss";

class App extends React.Component {
    constructor(props) {
        super(props);

        // Set global variables
        window.fn = fn;
        window.func = fn;
        window.CONST = CONST;
    }

    render() {
        if (Routes.length < 1) {
            return (
                <div>
                    Routes are unavailable. Please add some routes in <code>src/routes.js</code>
                </div>
            );
        } else {
            return (
                <BrowserRouter>
                    <>
                        <HandleProgressBar />

                        <Switch>
                            {Routes.map((v, k) => {
                                if (typeof v.exact === "undefined") v.exact = true;
                                return (
                                    <Route
                                        key={k}
                                        path={v.path}
                                        exact={v.exact}
                                        component={require(`./pages/${v.component}`).default}
                                    />
                                );
                            })}

                            <Route component={NotFound} />
                        </Switch>
                    </>
                </BrowserRouter>
            );
        }
    }
}

const NotFound = () => <Redirect to="/404" />;

export default App;
