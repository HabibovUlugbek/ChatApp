import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';

import React,{ useContext } from 'react'
import { Context } from '.';
import Loader from './components/Loader';

function App() {

  const {auth} = useContext(Context);
  const [user , loading, error] = useAuthState(auth);
  if(loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
