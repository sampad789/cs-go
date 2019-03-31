import React, { Component } from 'react';
import './News.css';
import Helmet from 'react-helmet';
import Newscard from '../../Components/Newscard';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsData: [],
    }
  }
  
  componentDidMount=()=>{
   this.fetchNews();
  }

  fetchNews =()=>{
    fetch('http://localhost:8000/api/news')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({newsData:responseData})
      console.log(this.state.newsData)
    })
    .catch( (error) => {
      console.log(error);
    });
    
    ;
  }


 
  render() {
    const renderNewsCards = this.state.newsData.map((item,index)=>
      <Newscard key ={index}
      date ={item.date}
      description ={item.description}
      link ={item.link}
      title={item.title}
      />
    )
    return (
      <div className = "container">
      <Helmet bodyAttributes={{style: 'background-color : #000'}}/>
      <div className ="card-align">
        {renderNewsCards}
        </div>
      </div>
      
    );
  }
}

export default App;
