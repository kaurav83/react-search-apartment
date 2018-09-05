import React, { Component } from 'react';
import ApartamentsList from './ApartamentsList';
import getVisibleApartaments from '../../utils/getVisibleApartaments';
import {connect} from 'react-redux';
// import PriceList from '../Price/PriceList';
import selectorForPriceFilter from '../../utils/selectorForPriceFilter'

class ApartamentsTest extends Component {
    
  render() {
    // let list  = selectorForPriceFilter(this.props.dataForApartaments.appa.stuff, this.props.dataForApartaments.priceFilter)
    let arartamentsFiltered = getVisibleApartaments(this.props.dataForApartaments.appa.stuff, this.props.dataForApartaments.testFilter);
    
    return (
      <div>
        <ApartamentsList 
            arartamentsFiltered={arartamentsFiltered} 
            newList={this.props.pricesList}
            currency={this.props.currency}
        />
        {/* <PriceList apartaments={this.props.dataForApartaments} /> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        pricesList: selectorForPriceFilter(state.appartament.stuff, state.priceFilter),
        currency: state.currency
    };
};

export default connect(mapStateToProps)(ApartamentsTest);