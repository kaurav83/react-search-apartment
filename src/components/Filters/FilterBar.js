import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    addRoomFilter,
    removeRoomFilter,
    addAllRoomsFilter,
    removeAllRoomsFilter
} from '../../actions/appartamentActions';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
    },
});

class FilterBar extends Component {

    handleRoomFilter(e) {
        let totalRoomType = e.target.value;
        if (e.target.checked) {
            this.props.addRoomFilter(totalRoomType);
        } else {
            this.props.removeRoomFilter(totalRoomType);
        }
    }

    handleAllRoomsFilter(e) {
        let allRooms = e.target.value;
        if (e.target.checked) {
            this.props.addAllRoomsFilter(allRooms);
        } else {
            this.props.removeAllRoomsFilter(allRooms)
        }
    }

    render() {

        return (
            <div>
                <h3>Filter Options</h3>
                <div>
                    <h4>Price</h4>
                    <div style={{display: "flex", alignItems: "center", margin: ".5rem 0"}}>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                color="primary"
                                value="all"
                                onClick={(e) => this.handleAllRoomsFilter(e)}
                                id="all"
                            />
                            <label htmlFor="all">Все</label>
                        </MuiThemeProvider>

                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: ".5rem 0"}}>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                color="primary"
                                value="1"
                                onClick={(e) => this.handleRoomFilter(e)}
                                id="one"
                            />
                            <label htmlFor="one">1 комната</label>
                        </MuiThemeProvider>

                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: ".5rem 0"}}>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                color="primary"
                                value="2"
                                onClick={(e) => this.handleRoomFilter(e)}
                                id="two"
                            />
                            <label htmlFor="two">2 комнаты</label>
                        </MuiThemeProvider>

                    </div>
                    <div style={{display: "flex", alignItems: "center", margin: ".5rem 0"}}>
                        <MuiThemeProvider theme={theme}>
                            <Checkbox
                                color="primary"
                                value="3"
                                onClick={(e) => this.handleRoomFilter(e)}
                                id="three"
                            />
                            <label htmlFor="three">3 комнаты</label>
                        </MuiThemeProvider>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addRoomFilter, removeRoomFilter, addAllRoomsFilter, removeAllRoomsFilter })(FilterBar);