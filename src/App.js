import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact,{Footer} from './components/Contact';
import Portfolio from './components/Portfolio';

function App(){
  return(
    <div className='App'>
     <Navbar/>
     <Home/>
     <About/>     
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;