import React, { Component } from "react";
import "./News.css";
import newsBackground from "../../img/news.jpg";
import Newscard from "../../Components/Newscard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    };
  }

  componentDidMount = () => {
    this.fetchNews();
  };

  fetchNews = () => {
    fetch("/api/news")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ newsData: responseData });
        console.log(this.state.newsData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const renderNewsCards = this.state.newsData.map((item, index) => (
      <Newscard
        key={index}
        date={item.date}
        description={item.description}
        link={item.link}
        title={item.title}
      />
    ));
    return (
      <div className="container">
        <img className="bg" src={newsBackground} alt="logo" />
        <div className="card-align">{renderNewsCards}</div>
      </div>
    );
  }
}

export default App;
