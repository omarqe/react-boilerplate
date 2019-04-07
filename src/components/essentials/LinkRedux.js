import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class LinkRedux extends React.Component {
    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);
    }

    _onClick = () => {
        const { onClick } = this.props;

        this.props.setProgressBar(true);
        if (typeof onClick === "function") onClick();
    };

    render() {
        const rest = _.omit(this.props, ["children", "onClick"]);
        const { children } = this.props;

        return (
            <Link {...rest} onClick={this._onClick}>
                {children}
            </Link>
        );
    }
}

const mapStateToProps = state => {
    return {
        ui: state
    };
};

export default connect(
    mapStateToProps,
    actions
)(LinkRedux);
