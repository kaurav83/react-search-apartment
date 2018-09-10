import React from 'react';
// import PropTypes from 'prop-types';
// import StarRate from '@material-ui/icons/StarRate';
// import StarBorder from '@material-ui/icons/StarBorder';
import './Star.css';

const Star = ({ selected=false, onClick=f=>f }) => {
    return (
  <div className={(selected) ? "star selected" : "star"}
      onClick={onClick}>
  </div>
);
};
// Star.propTypes = {
//     selected: React.PropTypes.bool,
//     onClick: React.PropTypes.func
//   }

export default Star;