import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import { connect } from "react-redux";

TopBarProgress.config({
    barColors: {
        "0": "#6a95fc",
        "1.0": "#6a95fc"
    },
    shadowBlur: 0,
    barThickness: 2
});

export class ProgressBar extends React.Component {
    render() {
        const { CONST } = window;
        const { progressBarStatus } = this.props;

        if (CONST.PROGRESS_BAR === true && progressBarStatus === true) {
            return <TopBarProgress />;
        } else {
            return "";
        }
    }
}

//redux container component
const mapStateToProps = (state, ownProps) => {
    return {
        progressBarStatus: state.ui.progressBarStatus
    };
};

export const HandleProgressBar = connect(
    mapStateToProps,
    null
)(ProgressBar);

export default HandleProgressBar;
