import React from 'react'
import { Container, Grid } from '@material-ui/core';

function Loader() {
    return (
        <div style={{background:"linear-gradient(45deg,#1CD8D2, #93EDC7)", height:'100vh'}}>
            <Container>
                <Grid container alignItems={"center"} justify={"center"} style={{height:window.innerHeight -50}}>
                        <Grid  container alignItems={"center"} justify={"center"}>
                            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Loader
