import React, { Component } from 'react';
import { connect } from "react-redux";
// import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span role="img" aria-label="Back">⬅️ Back</span>
                <span role="img" aria-label="Next">Next ➡️</span>               
            </div>
        );
    }
}

// Footer.propTypes = {

// };


const mapStateToProps = state => {
    return {
      
    };
  };
  
  export default connect(
    mapStateToProps,
    {  }
  )(Footer);
  
