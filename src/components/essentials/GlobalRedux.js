import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class GlobalRedux extends React.Component {
    state = {
        wait: false
    };

    componentWillMount() {
        const { wait } = this.props;

        this.props.setProgressBar(true);
        if (typeof wait !== "undefined" && typeof wait === "number") {
            this.setState({ wait: true });
        }
    }

    componentDidUpdate() {
        const { fn } = window;
        const { wait } = this.props;

        if (typeof wait === "number") {
            return setTimeout(() => {
                fn.hideProgressBar(this.props);
                this.setState({ wait: false });
            }, wait);
        }

        fn.hideProgressBar(this.props);
    }

    render() {
        const rest = _.pick(this.props, ["children", "key"]);
        const { children } = this.props;

        return this.state.wait ? "" : <React.Fragment {...rest}>{children}</React.Fragment>;
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    actions
)(GlobalRedux);
