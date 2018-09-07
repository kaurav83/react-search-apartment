import React, { Component } from 'react';
import ApartamentsList from './ApartamentsList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import {connect} from 'react-redux';

class ApartamentsTest extends Component {
    
  render() {
    let arartamentsFiltered = getVisibleApartaments(
      this.props.dataForApartaments.pricesList, 
      this.props.dataForApartaments.visibileFilterTotalRoom
    );
    
    return (
      <div>
        <ApartamentsList 
            arartamentsFiltered={arartamentsFiltered} 
            currency={this.props.currency}
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