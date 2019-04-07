import React from "react";
import { connect } from "react-redux";
import { Global } from "../components";
import * as actions from "../actions";

class Main extends React.Component {
    render() {
        return <Global wait={10000}>Hello world.</Global>;
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    actions
)(Main);
