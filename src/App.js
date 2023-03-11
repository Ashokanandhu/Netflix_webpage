import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action, originals, trending } from "./urls";



function App() {
  return(
    <div className="App">
      <NavBar/>
      <Banner url ={trending}/>
      <RowPost url ={originals} title='Netflix Orginals' />
      <RowPost url ={action} title='Action Movies' isSmall/>
      
    </div>
  )
  
}

export default App;

