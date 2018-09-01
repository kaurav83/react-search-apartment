import React, { Component } from 'react';
import layout from './Layout.css';

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Price from '../Price';
import {connect} from 'react-redux';
import {getAppartament, selectCurrency} from '../../actions/appartamentActions';
import PriceList from '../Price/PriceList';
import SelectBox from '../SelectBox';
import FilterBar from '../FilterBar/FilterBar';
import Apartaments from '../Apartaments/Apartaments';

const CURRENCY = [
  "UAH",
  "USD",
  "EUR"
];

class Main extends Component {
  componentDidMount() {
    this.props.getAppartament();
}

handleCurrencyChange = currency => {
  this.props.selectCurrency(currency);
}
  render() {
    const {isFetching, currency} = this.props;
    
    return (
      <div className={layout.main}>
        <div className={layout.grid}>
          <Grid 
            container 
            spacing={24}
            justify="center"
          >
            <Grid item xs={12} sm={4}>
              <Paper className={layout.paper}>
              <h2>ВАЛЮТА</h2>
              <SelectBox
                value={currency}
                options={CURRENCY}
                onChange={this.handleCurrencyChange}
              />

              <FilterBar/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={layout.paper}>
              {
                  isFetching ?
                    <div>Loading...</div>
                        :
                    <PriceList apartaments={this.props} />
              }
              </Paper>
              <Paper>
                {
                  isFetching ?
                    <div>Loading...</div>
                    : 
                    <Apartaments 
                      apartaments={this.props}
                    />
                }
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  getAppartament: PropTypes.func.isRequired,
    appa: PropTypes.object.isRequired,
    selectCurrency: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
      appa: state.appartament,
      isFetching: state.appartament.isFetching,
      currency: state.currency
  }
}

export default connect(mapStateToProps, {getAppartament, selectCurrency})(Main);