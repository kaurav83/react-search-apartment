import React, { Component } from 'react';
import ApartamentsList from './ApartamentsList';
import {getFilterRaiting} from '../../selectors';
import {connect} from 'react-redux';

class ApartamentsTest extends Component {
    
  render() {
    let raitingApartamentFilter = getFilterRaiting(this.props.dataForApartaments, this.props.filterRaiting);
    
    return (
      <div>
        <ApartamentsList 
            currency={this.props.currency}
            raitingApartamentFilter={raitingApartamentFilter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        filterRaiting: state.filterRaiting
    };
};

export default connect(mapStateToProps)(ApartamentsTest);