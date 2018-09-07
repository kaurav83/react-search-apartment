import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Star from './Star';
import {addRaitingFilter, removeRaitingFilter} from '../../actions/appartamentActions';

class StarRating extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        starsSelected: 0
      }
      this.handleRating = this.handleRating.bind(this)
    }
      
    handleRating(starsSelected) {
        this.setState({starsSelected})
      }
      
      render() {
        let totalStars = 5;
        const {starsSelected} = this.state;
        return (
          <div className="star-rating">
            {[...Array(totalStars)].map((n, i) =>
                 <Star key={i}
                       selected={i < starsSelected}
                       onClick={() => this.handleRating(i+1)}
                />
    )}
    <p>{starsSelected} of {totalStars} stars</p>
    </div>
  )
      }
   }

// StarRating.propTypes = {
//     totalStars: React.PropTypes.number
//   }
 
//  StarRating.defaultProps = {
//    totalStars: 5
//  }
 

const mapStateToProps = (state) => {
    console.log(state)
    return {
        filterRaiting: state.filterRaiting
    };
};

export default connect(mapStateToProps, {addRaitingFilter, removeRaitingFilter})(StarRating);

