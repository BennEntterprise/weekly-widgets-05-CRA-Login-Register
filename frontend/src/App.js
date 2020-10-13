import React from 'react';
import './App.css';

import Router from './Router'
import {BrowserRouter} from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
    <Router/>
   </BrowserRouter>
  );
}

export default App;
