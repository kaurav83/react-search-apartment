import React, { Component } from 'react';
import FilterBar from './FilterBar';
import TabSet from './TabSet';
import FilterPrice from './FilterPrice';
import StarRating from '../UI/StarRating';
import './Filters.css';

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import FilterList from "@material-ui/icons/FilterList";
import ChevronLeftIcon from "@material-ui/icons/FilterList";

const drawerWidth = 320;

const styles = theme => ({
    mobileFilter: {
        maxHeight: "100%",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%",
        margin: "0",
        padding: "0",

        [theme.breakpoints.up('xs')]: {
            display: "block",
        },

        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    desktopFilter: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    },
    menuButton: {
        position: "fixed",
        zIndex: "100",
        top: "0",
        backgroundColor: "#2196f3",
        padding: ".5rem",
        color: "#fff",
        fontSize: "2rem",
        cursor: "pointer",
    },
    hide: {
        display: "none"
    },
    drawerPaper: {
        top: "0",
        position: "fixed",
        width: drawerWidth,
        background: "#ffc107",
        border: ".0625rem solid yellow",
        height: "auto",

        [theme.breakpoints.down('xs')]: {
            height: "100vh"
        }
    },
    drawerHeader: {
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#2196f3",
    },
    drawerHeaderIcon: {
        color: "#fff",
        fontSize: "2rem"
    },

});

class FiltersMobile extends Component {
    state = {
        open: false,
        anchor: "left"
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { anchor, open } = this.state;

        const drawer = (
            <Drawer
                variant="persistent"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose} >
                        <ChevronLeftIcon className={classes.drawerHeaderIcon} />
                    </IconButton>
                </div>
                <TabSet>
                    <div label="UAH"></div>
                    <div label="USD"></div>
                    <div label="EUR"></div>
                </TabSet>
                <FilterBar />
                <FilterPrice />
                <List>
                    <StarRating />
                </List>
            </Drawer>
        );

        let before = null;

        if (anchor === "left") {
            before = drawer;
        }
        return (
            <div>
                <div className={classes.mobileFilter}>
                    <FilterList
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    />

                    {before}
                    <main
                        className={classNames(
                            classes.content,
                            classes[`content-${anchor}`]
                        )}
                    >
                    </main>
                </div>
            </div>

        );
    }

};

export default withStyles(styles, { withTheme: true })(FiltersMobile);