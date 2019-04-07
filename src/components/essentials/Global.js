import _ from "lodash";
import React from "react";
import GlobalRedux from "./GlobalRedux";

class Global extends React.Component {
    render() {
        const rest = _.omit(this.props, ["children"]);
        const { children } = this.props;

        return <GlobalRedux {...rest}>{children}</GlobalRedux>;
    }
}

export { Global };
