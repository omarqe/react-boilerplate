import _ from "lodash";
import React from "react";
import LinkRedux from "./LinkRedux";

const Link = props => {
    const rest = _.omit(props, ["children"]);
    const { children } = props;

    return <LinkRedux {...rest}>{children}</LinkRedux>;
};

export { Link };
