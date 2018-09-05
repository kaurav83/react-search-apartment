import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startPrice, endPrice} from '../../actions/appartamentActions';

class FilterPrice extends Component {
    constructor(props) {
        super(props);

        this.filterPrice = this.filterPrice.bind(this);
    }

    filterPrice() {
        let from = (+this.startPrice.value) !== 0 ? (+this.startPrice.value) : undefined;
        let to = (+this.endPrice.value) !== 0 ? (+this.endPrice.value) : undefined;
        this.props.dispatch(startPrice(from));
        this.props.dispatch(endPrice(to));
    }

  render() {
    return (
      <div>
        <input 
            type="number" 
            placeholder="from" 
            onChange={this.filterPrice} 
            ref={el => this.startPrice = el}
        />
        {' '}
        <input 
            type="number" 
            placeholder="to" 
            onChange={this.filterPrice} 
            ref={el => this.endPrice = el}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        priceFilter: state.priceFilter
    }
}

export default connect(mapStateToProps)(FilterPrice);