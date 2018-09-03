import React, { Component } from 'react';
import layout from './Layout.css';

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Price from '../Price';
import { connect } from 'react-redux';
import { getAppartament, selectCurrency } from '../../actions/appartamentActions';

import PriceList from '../Price/PriceList';
import SelectBox from '../SelectBox';
import FilterBar from '../FilterBar/FilterBar';
// import FilterItem from '../FilterBar/FilterItem';
import Apartaments from '../Apartaments/Apartaments';

import Filter from '../Filter';
import ApartamentsTest from '../Apartaments/ApartamentsTest';
import getVisibleApartaments from '../../utils/getVisibleApartaments';

const CURRENCY = [
  "UAH",
  "USD",
  "EUR"
];

const CHECKBOXES = [
  { id: "all" },
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

class Main extends Component {
  componentDidMount() {
    this.props.getAppartament();
  }

  handleCurrencyChange = currency => {
    this.props.selectCurrency(currency);
  }

  changeFilter = (selectedApartments) => {
    this.props.filterApartament(selectedApartments);
  }

  render() {
    const { isFetching, currency } = this.props;
    
    let arartamentsFiltering = getVisibleApartaments(this.props.appa.stuff, this.props.testFilter);
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

                <FilterBar />
                <div>RAZDELITEL</div>
                <Filter />
                {
                    // CHECKBOXES.map(item => {
                    //   return (
                    //     <FilterItem
                    //       id={item.id}
                    //       value={selectedApartments}
                    //       key={item.id}
                    //       onClick={this.changeFilter}
                    //     />
                    //   )
                    // })

                }
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

                {
                  isFetching ?
                    <div>Loading...</div>
                    :
                    <Apartaments apartaments={this.props} />
                }
                TEST RENDER
                <ApartamentsTest arartamentsFiltering={arartamentsFiltering} />
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
    currency: state.currency,

    testFilter: state.testFilter,

  }
}

export default connect(mapStateToProps, { getAppartament, selectCurrency })(Main);