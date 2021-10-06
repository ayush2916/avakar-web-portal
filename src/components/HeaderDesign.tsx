import React from 'react'
import HeaderStyles from './HederStyles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

function HeaderDesign() {

    const classes=HeaderStyles()
    return (
        <nav className={classes.navbar}>
            <p className={classes.navbarBrand} >
                Carbon Heroes
            </p>

            <div className={classes.linksContainer}>
                <ul className={classes.navLinks}>
                    <li>
                        <IconButton className={classes.links}>
                            Home
                        </IconButton>
                    </li>
                    <li>
                        <IconButton className={classes.links}>
                            Index
                        </IconButton>                    
                    </li>
                    <li>
                        <IconButton className={classes.links}>
                            Blog
                        </IconButton>
                    
                    </li>
                </ul>
            </div>

            <div className={classes.userProfile}>
                <IconButton className={classes.links}>
                    <AccountCircleIcon fontSize="large"/>
                </IconButton>
                <p className={classes.signOut}>Sign Out</p>
            </div>
        </nav>
    )
}

export default HeaderDesign
