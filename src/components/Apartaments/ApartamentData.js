import React from 'react';
import Stars from './Stars';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CalendarToday from '@material-ui/icons/Today';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: "2rem",
        padding: "1rem",
    },
    cover: {
        width: 250,
        height: 250,
        border: ".0625rem solid #999",
        boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)'
    },
    content: {
        padding: "0",
        textAlign: "left",
        marginLeft: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",

        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
        },
    },
    description: {
        fontSize: "1.2rem",
        lineHeight: "1.3",
    },
    address: {
        marginBottom: "1rem"
    },
    innerButton: {
        padding: "0",
        margin: "0",
        lineHeight: "1",
        paddingTop: ".4rem",
        textTransform: "lowercase",
        fontSize: "1.2rem",
        fontWeight: 700,
        color: "#00352c"
    },
    pullData: {
        display: "flex",
        padding: 0,
        flex: "auto",
        // marginRight: "6rem",
    },
    icon: {
        fontSize: "1.4rem",
        color: "#2196f3",
        marginRight: ".2rem",
    },
    pullData_paragraph: {
        display: "flex",
        marginLeft: "auto",
    },
    mediaBlock: {
        [theme.breakpoints.down('md')]: {
            margin: "0 auto"
        },
    },
    buttonPrice: {
        padding: "1rem 1.4rem",
        borderRadius: "0",
        minWidth: "12rem",
        display: "inline-block",
        marginLeft: "auto",

        [theme.breakpoints.down('xs')]: {
            minWidth: "100%",
        }
    }
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffcd38',
            main: '#ffc107',
            dark: '#b28704',
            contrastText: '#000'
        },
    },
});

const ApartamentData = (props) => {
    const { classes } = props;
    let totalStars = 5;
    let USD = props.currency === "USD" ? `${Math.floor(props.apartamentItem.price / 28)} $` : null;
    let EUR = props.currency === "EUR" ? `${Math.floor(props.apartamentItem.price / 33)} €` : null;
    return (
        <Card className={classes.card}>
            <Grid container>
                <Grid className={classes.mediaBlock}>
                    <Grid sm={12} md  item>
                        <CardMedia
                            className={classes.cover}
                            image={props.apartamentItem.images[0]}
                            title="apartament"
                        />
                        <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
                            {
                                [...Array(totalStars)].map((n, i) => {
                                    return (
                                        <Stars
                                            key={i}
                                            selected={(i + 1) <= props.apartamentItem.rating}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Grid>
                </Grid>

                <Grid className={classes.content} style={{ paddingBottom: "0", }} sm={12} md   item>
                    <Typography variant="headline" color="textPrimary" className={classes.address}>
                        {props.apartamentItem.full_address}
                    </Typography>
                    <Typography paragraph variant="body2" color="textSecondary" className={classes.description}>
                        {props.apartamentItem.description}
                    </Typography>
                    <CardContent className={classes.pullData}>
                        <Typography paragraph variant="body2" color="textSecondary" className={classes.pullData_paragraph}>
                            <HomeIcon color="secondary" className={classes.icon} />{
                                props.apartamentItem.total_rooms === 1 ?
                                    `${props.apartamentItem.total_rooms} комната`
                                    :
                                    `${props.apartamentItem.total_rooms} комнаты`
                            }
                        </Typography>
                        <Typography paragraph variant="body2" color="textSecondary" className={classes.pullData_paragraph}>
                            <CalendarToday className={classes.icon} />{props.apartamentItem.public_date}
                        </Typography>
                    </CardContent>
                    <MuiThemeProvider theme={theme}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonPrice}
                        >
                            <Typography
                                color="textPrimary"
                                className={classes.innerButton}
                            >
                                {
                                    (USD || EUR || `${props.apartamentItem.price} ₴`).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
                                }
                            </Typography>
                        </Button>
                    </MuiThemeProvider>
                </Grid>
            </Grid>
        </Card>
    );
};

export default withStyles(styles)(ApartamentData);