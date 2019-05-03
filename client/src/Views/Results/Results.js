import React, { Component } from "react";

import MatchCard from "../../Components/MatchCard";
import "./Results.css";
import resultsBackground from "../../img/reults.png";
class App extends Component {
  state = {
    resultData: []
  };

  componentDidMount = () => {
    fetch("/api/results")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ resultData: responseData.slice(0, 15) });
        console.log(this.state.resultData);
      });
  };

  render() {
    const renderMatchResult = this.state.resultData.map((item, index) => (
      <MatchCard
        key={index}
        event={item.event}
        maps={item.maps}
        team1Name={item.team1.name}
        team1Crest={item.team1.crest}
        team1Mapscore={item.team1.result}
        team2Name={item.team2.name}
        team2Crest={item.team2.crest}
        team2Mapscore={item.team2.result}
        matchId={item.matchId}
      />
    ));

    return (
      <div class="container">
        <img className="bg" src={resultsBackground} alt="logo" />
        <div>{renderMatchResult}</div>
      </div>
    );
  }
}

export default App;
