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
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
                <h4 style={{ margin: "0", marginTop: "1rem", marginLeft: "1rem" }}>КОЛИЧЕСТВО КОМНАТ:</h4>
                <div style={{marginLeft: "1rem"}}>
                    <div style={{ display: "flex", alignItems: "center", margin: ".5rem 0" }}>
                        <MuiThemeProvider theme={theme}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        value="all"
                                        onClick={(e) => this.handleAllRoomsFilter(e)}
                                    />
                                }
                                label="Все"
                            />
                        </MuiThemeProvider>

                    </div>
                    <div style={{ display: "flex", alignItems: "center", margin: ".5rem 0" }}>
                        <MuiThemeProvider theme={theme}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        value="1"
                                        onClick={(e) => this.handleRoomFilter(e)}
                                    />
                                }
                                label="1 комната"
                            />
                        </MuiThemeProvider>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", margin: ".5rem 0" }}>
                        <MuiThemeProvider theme={theme}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        value="2"
                                        onClick={(e) => this.handleRoomFilter(e)}
                                    />
                                }
                                label="2 комнаты"
                            />
                        </MuiThemeProvider>

                    </div>
                    <div style={{ display: "flex", alignItems: "center", margin: ".5rem 0" }}>
                        <MuiThemeProvider theme={theme}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        value="3"
                                        onClick={(e) => this.handleRoomFilter(e)}
                                    />
                                }
                                label="3 комнаты"
                            />
                        </MuiThemeProvider>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { addRoomFilter, removeRoomFilter, addAllRoomsFilter, removeAllRoomsFilter })(FilterBar);