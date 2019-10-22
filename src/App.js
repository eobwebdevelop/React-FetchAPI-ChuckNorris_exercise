import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import Button from "./Button";
// import Quotes from "./Quotes";
// import Lamp from "./Lamp";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo"  id="show" alt="logo" />
          <Button on onClick/>
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>


        {/* <Lamp />
        <Lamp /> */}
        <Quote working
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/homer_doh.jpg?itok=BFMZgJom"
          
        />
        {/* <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        /> */}
        {/* <Quotes /> */}
        
        
      </div>
      
    );
  }
}

export default App;