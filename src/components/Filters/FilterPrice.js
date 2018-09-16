import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startPrice, endPrice } from '../../actions/appartamentActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
});

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
            <div className="filter-price">
                <MuiThemeProvider theme={theme}>
                    <TextField
                        label="От"
                        type="number"
                        onChange={this.filterPrice}
                        inputRef={el => this.startPrice = el}
                        style={{maxWidth: "7rem", margin: "0 .5rem"}}
                    />
                </MuiThemeProvider>
                {' '}
                <MuiThemeProvider theme={theme}>
                    <TextField
                        label="До"
                        type="number"
                        onChange={this.filterPrice}
                        inputRef={el => this.endPrice = el}
                        style={{maxWidth: "7rem", margin: "0 .5rem"}}
                    />
                </MuiThemeProvider>
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