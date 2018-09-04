import React, { Component } from 'react';
import layout from './Layout.css';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getAppartament, selectCurrency } from '../../actions/appartamentActions';
import Filters from '../Filters/Filters';
import Apartaments from '../Apartaments/Apartaments';

class Main extends Component {
  componentDidMount() {
    this.props.getAppartament();
  }

  render() {
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