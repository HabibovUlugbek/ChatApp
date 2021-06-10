import React,{useContext} from 'react'
import Box from '@material-ui/core/Box';
import { Button, Container, Grid } from '@material-ui/core';
import { Context } from '../index';
import firebase from "firebase"

function Login() {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <div style={{background:"linear-gradient(45deg,#1CD8D2, #93EDC7)"}}>
            <Container>
                <Grid container alignItems={"center"} justify={"center"} style={{height:window.innerHeight -50}}>
                        <Grid style={{background:"lightgray",width:400}} container alignItems={"center"} justify={"center"}>
                            <Box p={5} >
                                <Button onClick={login}  style={{background:"linear-gradient(45deg,#232526, #414345)", color:"aqua"}}  variant={"outlined"}>Login in With GOOGLE </Button>
                            </Box>
                        </Grid>
                </Grid>
            </Container>
        </div>
        
    )
}

export default Login
