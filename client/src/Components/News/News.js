import React, { Component } from 'react';


class App extends Component {
  
  componentDidMount=()=>{
   this.fetchNews();
  }

  fetchNews =()=>{
    fetch('http://localhost:8000/api/news')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      
    });
  }
 
  render() {




    return (
      <div className="App">
      <p> cs go </p>
        
      </div>
    );
  }
}

export default App;
