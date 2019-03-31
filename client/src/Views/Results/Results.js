import React, { Component } from 'react';

import News from '../News/News'

class App extends Component {
  
  componentDidMount=()=>{
    fetch('http://localhost:8000/api/match/results')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      
    });
  }
 
  render() {




    return (
      <div className="App">
<p>boom sakala la</p>
      </div>
    );
  }
}

export default App;
