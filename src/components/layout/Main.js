import React, { Component } from 'react';
import layout from './Layout.css';

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Price from '../Price';
import { connect } from 'react-redux';
import { getAppartament, selectCurrency } from '../../actions/appartamentActions';

// import PriceList from '../Price/PriceList';
// import SelectBox from '../Filters/SelectBox';
import Filters from '../Filters/Filters';
// import FilterItem from '../FilterBar/FilterItem';
import Apartaments from '../Apartaments/Apartaments';


class Main extends Component {
  componentDidMount() {
    this.props.getAppartament();
  }

  // changeFilter = (selectedApartments) => {
  //   this.props.filterApartament(selectedApartments);
  // }

  render() {
    // const { isFetching } = this.props;
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
                <Filters 
                  dataFilter={this.props}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={layout.paper}>
                <Apartaments 
                  dataForApartaments={this.props}
                />
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