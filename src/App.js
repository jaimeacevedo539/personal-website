import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App(){
  return(
    <div className='App'>
     <Navbar/>
     <Home/>
     <About/>     
     <Portfolio/>
     <Contact/>
    </div>
  );
};

export default App;