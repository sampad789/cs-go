import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import TeamRankingList from "../../Components/TeamRankingList";
import "./Rankings.css";
import IndividualRankingList from "../../Components/IndividualRankingList";
import rankingBackground from "../../img/rankings.jpg";
export default class Rankings extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      teamRankingData: [],
      individualData: []
    };
  }
  componentDidMount = () => {
    this.fetchTeamRankings();
    this.fetchIndividualRankings();
  };

  fetchTeamRankings = () => {
    fetch("http://localhost:8000/api/rankings/team")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ teamRankingData: responseData });
        //   console.log(this.state.teamRankingData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  fetchIndividualRankings = () => {
    fetch("http://localhost:8000/api/rankings/individual")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ individualData: responseData.slice(0, 20) });
        // console.log(this.state.individualData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const renderTeamRankCards = this.state.teamRankingData.map(
      (item, index) => (
        <TeamRankingList
          key={index}
          name={item.team.name}
          points={item.points}
          place={item.place}
          change={item.change}
          id={item.team.id}
        />
      )
    );

    const renderIndividualRankCards = this.state.individualData.map(
      (item, index) => (
        <IndividualRankingList
          key={index}
          id={item.id}
          ign={item.name}
          rating={item.rating}
        />
      )
    );

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
              style={{ fontSize: "30px", color: "#fdbb07" }}
            >
              Team Rankings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
              style={{ fontSize: "30px", color: "#fdbb07" }}
            >
              Individual Rankings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">{renderTeamRankCards}</TabPane>
          <TabPane tabId="2"> {renderIndividualRankCards}</TabPane>
        </TabContent>
        <div className="container">
          <img className="bg" src={rankingBackground} alt="logo" />
        </div>
      </div>
    );
  }
}
