import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectorForPriceFilter from '../../utils/selectorForPriceFilter'
import PriceFilteredItem from './PriceFilteredItem';

class PricesFiltered extends Component {
  render() {
    
    return (
      <div>
          <ul>
          {this.props.pricesList.map(item => {
              let USD = this.props.currency === "USD" ? `${Math.floor(item.price/28)} $` : null;
              let EUR = this.props.currency === "EUR" ? `${Math.floor(item.price/33)} €` : null;
            return (
              <div key={item.id}>
                {
                  
                  item.id === this.props.item.id ?
                    <li key={item.id}>
                      <PriceFilteredItem name={USD || EUR || `${item.price} ₴`} />
                    </li>
                    :
                    null
                }
              </div>
            )


          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'PriceFiltered')
  return {
    pricesList: selectorForPriceFilter(state.appartament.stuff, state.priceFilter),
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(PricesFiltered);