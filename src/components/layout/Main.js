import React, { Component } from 'react';
import './Layout.css';

import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { getAppartament, selectCurrency } from '../../actions/appartamentActions';
import Filters from '../Filters/Filters';
import ApartamentsTest from '../Apartaments/ApartamentsTest';
import { getVisibleApartaments, filteredPrices } from '../../selectors';

class Main extends Component {
  componentDidMount() {
    this.props.getAppartament();
  }

  render() {
    let arartamentsFiltered = getVisibleApartaments(
      this.props.pricesList,
      this.props.visibileFilterTotalRoom
    );
    return (
      <div className="main">
        <div className="grid">
          <Grid
            container
            spacing={40}
            justify="center"
          >
            <Grid item xs={12} sm={4} md={4}>
              <Paper 
                style={{ 
                  color: "#999", 
                  backgroundColor: "#fafafa", 
                  minWidth: "15rem",
                }} className="paper">
                <Filters
                  dataFilter={this.props}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Paper style={{ color: "#999", backgroundColor: "rgba(250, 250, 250, .8)", }} className="paper">
                <ApartamentsTest dataForApartaments={arartamentsFiltered} />
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

    visibileFilterTotalRoom: state.visibileFilterTotalRoom,
    filterRaiting: state.filterRaiting,
    pricesList: filteredPrices(state.appartament.stuff, state.priceFilter),
  }
}

export default connect(mapStateToProps, { getAppartament, selectCurrency })(Main);