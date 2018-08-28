import React, { Component } from 'react';
import layout from './Layout.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Currency from '../Currency';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft:  theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div className={layout.main}>
        <div className={classes.root}>
          <Grid 
            container 
            spacing={24}
            justify="center"
          >
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Currency />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);