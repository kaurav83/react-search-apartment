import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Star from './Star';
import { addRaitingFilter } from '../../actions/appartamentActions';

class StarRating extends Component {

  constructor(props) {
    super(props)
    this.state = {
      starsSelected: 0
    }
    this.handleRating = this.handleRating.bind(this);
    // this.setRating = this.setRating.bind(this);
  }

  handleRating(index) {
    this.setState({ starsSelected:  index})
    if (index) {
      this.props.addRaitingFilter(index);
    }
  }

  // setRating(index) {
  //   this.setState({starsSelected: index + 1})
  // }

  render() {
    let totalStars = 5;
    const { starsSelected } = this.state;
    
    return (
      <div className="star-rating" style={{ display: "flex" }}>
        {[...Array(totalStars)].map((n, i) =>
          <Star key={i}
            selected={i < starsSelected}
            // onMouseOver={this.setRating.bind(this, i)}
            onClick={() => this.handleRating(i + 1)}
          />
        )}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filterRaiting: state.filterRaiting
  };
};

export default connect(mapStateToProps, { addRaitingFilter })(StarRating);

