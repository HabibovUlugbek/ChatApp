import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core';
import React,{ useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollectionData } from "react-firebase-hooks/firestore"
import Loader from './Loader';
import firebase from 'firebase';

function Chat() {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value,setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessage =async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,
            text:value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('');
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div style={{background:'no-repeat url(https://images.unsplash.com/photo-1493305457700-d3d24daf8c8c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)' , backgroundSize:'cover'}}>
           <Container>
               <Grid container style={{height:window.innerHeight - 50}}  justify={"center"}>
                    <div style={{width:'80%', height:'60vh', border: '1px solid gray', overflowX:'auto', background:"linear-gradient(45deg,#FDC830, #F37335)"}}>
                        {messages.map((message) => (
                            <div style={{margin:10, 
                                        backgroundColor:
                                        user.uid === message.uid
                                        ? 'rgba(255,255,255,0.7)'
                                        : '#1fddff',
                                  marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                  width:'40%',
                                  padding: 10,
                                  color:'#141E30',
                                  borderRadius: '10px'      }}>
                                <Grid container  style={{display:"flex", alignItems:'center'}}>
                                    <Avatar src={message.photoURL} />
                                    <div style={{marginLeft:'5px'}}>{message.displayName}</div>
                                </Grid>
                                <div style={{marginTop:'5px', textAlign:'end'}}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Grid container direction={'column'} alignItems={'flex-end'} style={{width:'80%'}}> 
                        <TextField value={value} onChange={e => setValue(e.target.value)}  placeholder={'Message'} fullWidth variant={'outlined'} />
                        <Button onClick={sendMessage} variant={'outlined'} style={{background:'blue' , marginTop:5 , color:'white'}}> 
                            Send message
                        </Button>
                    </Grid>
               </Grid>
           </Container>
        </div>
    )
}

export default Chat;
