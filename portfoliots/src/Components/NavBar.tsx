import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link as ScrollLink } from "react-scroll";
import { Drawer, List, ListItem, ListItemText, Typography } from "@material-ui/core"

import { AppBar, MenuItem } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => createStyles({
    navDisplayFlex: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: theme.palette.primary.main,
        justifyContent: `center`,
        "&:hover": {
            color: theme.palette.secondary.main
        }

    },
    navbar: {
        backgroundColor: `#000000`,
        borderBottomWidth: `2px`,
        borderLeftWidth: `2px`,
        borderRightWidth: `2px`,
        borderColor: `transparent`,
        // borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
        border: `solid`,
        height: `75px`,
        justifyContent: `center`
    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: 10
    },
    mobileNav: {
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        justifyContent: `flex-end`,
    },
    links: {
        margin: `5px`,
        padding: `5px`,
        color: theme.palette.primary.main,
        // backgroundColor: `rgba(255,255,255,0.6)`,
        width: `100%`,
        fontSize: `1.2rem`,
        alignContent: `center`
    },
    menu: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        border: `0px`,
        borderLeft: `2px`,
        borderStyle: `solid`,
        borderColor: `white`,
        width: `50vw`,
    }
}));


const navLinks: { title: string, path: string }[] = [
    { title: `Home`, path: `home` },
    { title: `About`, path: `about` },
    { title: `Projects`, path: `projects` },
    { title: `Resume`, path: `resume` }
]

const NavBar: React.FC = (): JSX.Element => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 600
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const classes = useStyles();

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <AppBar position="fixed" className={classes.navbar}>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,

                    }}
                    className={classes.mobileNav}
                >
                    <MenuIcon className={classes.linkText}/>
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'right',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                        // className: classes.mobileNav
                    }}>
                         <List component="nav" aria-labelledby="main navigation" className={classes.mobileNav}>
                        {navLinks.map(({ title, path }) => (
                            <ScrollLink smooth={true} duration={500} to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </ScrollLink>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        )
    }

    const displayDesktop = () => {
        return (
            <AppBar position="fixed" className={classes.navbar}>
                {/* <section>Toni Powell</section> */}
                <section className={classes.rightAppBar}>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                       {/* <Typography>Toni Powell</Typography> */}
                    {navLinks.map(({ title, path }) => (
                            <ScrollLink smooth={true} duration={500} to={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </ScrollLink>
                        ))}
                    </List>
             
                </section>
            </AppBar>
        )
    }


    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
    )
}

export default withRouter(NavBar)