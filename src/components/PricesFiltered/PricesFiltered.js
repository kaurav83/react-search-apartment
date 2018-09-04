import React, { Component } from 'react';
import {connect} from 'react-redux';
import selectorForPriceFilter from '../../utils/selectorForPriceFilter'
import PriceFilteredItem from './PriceFilteredItem';

class PricesFiltered extends Component {
  render() {
    return (
      <div>
        PRICE LIST: 
          <ul>
            {this.props.pricesList.map(item => {
              return (
                <li key={item.id}>
                  <PriceFilteredItem {...item}/>
                </li>
              )
            })}
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        pricesList: selectorForPriceFilter(state.appartament.stuff, state.priceFilter)
    };
};

export default connect(mapStateToProps)(PricesFiltered);