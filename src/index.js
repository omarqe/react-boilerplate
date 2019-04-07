import React from "react";
import ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";

import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

// Add FontAwesome 5 Pro icons to the library
library.add(fab, fal, far, fas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector(".global")
);
