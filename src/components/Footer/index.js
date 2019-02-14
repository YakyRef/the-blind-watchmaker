import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import PropTypes from "prop-types";
import { getFutureHistoryState, getPastHistoryState } from "../../selectors";

const { undo, redo } = ActionCreators;

class Footer extends Component {
  render() {
    const nextBtnStyle = {
      opacity: this.props.futureHistory.length < 1 ? "0.4" : "1",
      cursor: this.props.futureHistory.length < 1 ? "not-allowed" : "pointer"
    };

    const backBtnStyle = {
      opacity: this.props.pastHistory.length < 3 ? "0.4" : "1",
      cursor: this.props.pastHistory.length < 3 ? "not-allowed" : "pointer"
    };

    return (
      <div className="footer">
        <span
          role="img"
          aria-label="Back"
          onClick={this.props.undo}
          style={backBtnStyle}
        >
          ⬅️ Back
        </span>
        <span
          role="img"
          aria-label="Next"
          onClick={this.props.redo}
          style={nextBtnStyle}
        >
          Next ➡️
        </span>
      </div>
    );
  }
}

Footer.propTypes = {
  undo: PropTypes.func,
  redo: PropTypes.func,
  pastHistory: PropTypes.array,
  futureHistory: PropTypes.array
};

const mapStateToProps = state => {
  return {
    futureHistory: getFutureHistoryState(state),
    pastHistory: getPastHistoryState(state)
  };
};

export default connect(
  mapStateToProps,
  { undo, redo }
)(Footer);
