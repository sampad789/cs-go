import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "./TeamRankingList.css";

export default class TeamRankingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      crest: ""
    };
  }

  componentWillMount = () => {
    this.fetchTeam();
  };
  fetchTeam = () => {
    fetch("http://localhost:8000/api/teams/" + this.props.id + "")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ teams: responseData });
        // console.log(this.state.teams);
        this.setState({ crest: this.state.teams.logo });
        // console.log(this.state.crest);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Container className="ranking-team">
        <ListGroup>
          <ListGroupItem color="dark">
            <ListGroupItemHeading>
              <img
                className="image-float"
                src={this.state.crest}
                alt="Logo"
                style={{ height: "100px", width: "100px" }}
              />
              <h2 className="team-details">
                <b>{this.props.place} . </b>
                {this.props.name}
              </h2>{" "}
              <h4 className="team-details">
                Points Aquired : {this.props.points} <br />
              </h4>
              <h5 className="team-details">
                Change :{" "}
                <span
                  className={
                    this.props.change >= 0
                      ? " badges badge badge-success badge-pill"
                      : " badges badge badge-danger badge-pill"
                  }
                >
                  {this.props.change}
                </span>
              </h5>
            </ListGroupItemHeading>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
