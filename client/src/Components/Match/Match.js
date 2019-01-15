import React, { Component } from 'react';

import News from './Components/News'

class App extends Component {
  
  componentDidMount=()=>{
    fetch('http://localhost:8000/api/match/matches/2330203/euronics-vs-valiance-united-masters-league')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      
    });
  }
 
  render() {




    return (
      <div className="App">
     <News />
      </div>
    );
  }
}

export default App;
