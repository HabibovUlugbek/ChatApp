import React from 'react'
import {AppBar, Button , Grid, Toolbar} from "@material-ui/core";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <h3>Habibov Ulug`bek</h3>
                <Grid container justify={'flex-end'}>
                    <Button variant={'outlined'}>Login</Button>
                    <Button variant={'outlined'}>Quit</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
