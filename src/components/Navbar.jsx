import React from 'react'
import {AppBar, Button , Grid, Toolbar} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../util/const';

function Navbar() {

    const user = false;

    return (
        <AppBar style={{background:"linear-gradient(-45deg,#24C6DC, #514A9D)"}} position="static">
            <Toolbar variant="dense">
                <h3>Habibov Ulug`bek</h3>
                <Grid container justify={'flex-end'}>
                    {user ?  
                    <Button variant={'outlined'}>Quit</Button>  
                    :
                     <NavLink to={LOGIN_ROUTE}>
                         <Button variant={'outlined'}>Login</Button>
                     </NavLink>
                     }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
