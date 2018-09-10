import React, { Component } from 'react';
import ApartamentsList from './ApartamentsList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import getFilterRaiting from '../../utils/getFilterRaiting';
import {connect} from 'react-redux';

class ApartamentsTest extends Component {
    
  render() {
    let arartamentsFiltered = getVisibleApartaments(
      this.props.dataForApartaments.pricesList, 
      this.props.dataForApartaments.visibileFilterTotalRoom
    );
    let raitingApartamentFilter = getFilterRaiting(this.props.dataForApartaments.pricesList, this.props.dataForApartaments.filterRaiting);
    return (
      <div>
        <ApartamentsList 
            arartamentsFiltered={arartamentsFiltered} 
            currency={this.props.currency}
            raitingApartamentFilter={raitingApartamentFilter}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency
    };
};

export default connect(mapStateToProps)(ApartamentsTest);