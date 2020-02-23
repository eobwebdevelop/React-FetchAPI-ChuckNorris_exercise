import React, { Component } from "react";
import "./App.css";
import Quote from "./Quote";
import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuotes  from  './DisplayQuotes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ''
    };
  }
  getQuote = () =>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(results  =>  results.json()) // Fetch function to get the Chuck Norris API
    .then(data  => {
            this.setState({
              quote: data.value
            });

    });

  }

  render() {
    return (
      <div className="App">
        <h1>Consuming Chuck Norris API</h1>
        <DisplayQuotes  quote = {this.state.quote}/> 
        <GenerateQuote  generateQuote={() =>  this.getQuote()}  /> 
        <Quote working
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/homer_doh.jpg?itok=BFMZgJom"          
        />
      </div>
      
    );
  }
}

export default App;