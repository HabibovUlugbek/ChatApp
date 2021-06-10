import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyAbvIMTafInSE7bl5LXJ3-Wtipbcn-WmRs",
  authDomain: "chat-app-fd7c7.firebaseapp.com",
  projectId: "chat-app-fd7c7",
  storageBucket: "chat-app-fd7c7.appspot.com",
  messagingSenderId: "102287535794",
  appId: "1:102287535794:web:f55c7f5189fcb8d7bfa3ab",
  measurementId: "G-39P43J1CE4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore(); 

ReactDOM.render(
  <Context.Provider value={{firestore, auth, firebase}} >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


