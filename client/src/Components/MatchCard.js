import React, { Component } from "react";
import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  Table,
  Container
} from "reactstrap";
import "./MatchCard.css";

export default class MatchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team1Details: [],
      team2Details: []
    };
  }
  componentDidMount = () => {
    this.fetchMatchDetails();
  };
  fetchMatchDetails = () => {
    fetch("http://localhost:8000/api/match/" + this.props.matchId + "")
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          team1Details: responseData.slice(0, 5),
          team2Details: responseData.slice(5, 10)
        });
        // console.log(this.state.team2Details);
      });
  };

  render() {
    const renderTeam1Details = this.state.team1Details.map((item, index) => (
      <li key={index}>
        <ul>{item.playerName}</ul>
        <ul>{item.adr}</ul>
      </li>
    ));
    return (
      <Container className="match-card">
        <Card>
          <div>
            <h3 className="center-text">Event : {this.props.event}</h3>
            <img
              className="team1"
              src={this.props.team1Crest}
              alt="Logo"
              style={{ height: "100px", width: "100px" }}
            />
            <img
              className="team2"
              src={this.props.team2Crest}
              alt="Logo"
              style={{ height: "100px", width: "100px" }}
            />
            <h2 className="center-text">{this.props.maps}</h2>
          </div>
          <h2 className="center-text">VS</h2>
          <div>
            <h2 className="team1">{this.props.team1Name}</h2>
            <h2 className="team2">{this.props.team2Name}</h2>
          </div>

          <div>
            <h2 className="team1">{this.props.team1Mapscore}</h2>
            <h2 className="team2">{this.props.team2Mapscore}</h2>
          </div>
          <CardBody>
            <Button
              id="toggler"
              color="primary"
              style={{ marginBottom: "1rem" }}
            >
              Match Stats
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Table striped>
                <thead>
                  <tr>
                    <th>adr</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <ul>{renderTeam1Details}</ul>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </UncontrolledCollapse>
          </CardBody>
        </Card>{" "}
      </Container>
    );
  }
}
