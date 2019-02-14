import React, { Component } from "react";
import { connect } from "react-redux";
import { ActionCreators } from "redux-undo";
import PropTypes from "prop-types";
const { undo,redo } = ActionCreators;

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span role="img" aria-label="Back" onClick={this.props.undo}>
          ⬅️ Back
        </span>
        <span role="img" aria-label="Next" onClick={this.props.redo}>
          Next ➡️
        </span>
      </div>
    );
  }
}

Footer.propTypes = {
  undo: PropTypes.func,
  redo: PropTypes.func
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { undo,redo }
)(Footer);
