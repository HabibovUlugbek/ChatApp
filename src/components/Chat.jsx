import { Container, Grid } from '@material-ui/core';
import React,{ useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

function Chat() {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div style={{background:"linear-gradient(45deg,#1CD8D2, #93EDC7)"}}>
           <Container>
               <Grid container style={{}}>
                    CHAT
               </Grid>
           </Container>
        </div>
    )
}

export default Chat;
