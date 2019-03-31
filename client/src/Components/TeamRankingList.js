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

  componentDidMount = () => {
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
      <Container className="ranking-individual">
        <ListGroup>
          <ListGroupItem color="dark">
            <ListGroupItemHeading>
              <h2>
                <b>{this.props.place} . </b>
                {this.props.name}
              </h2>{" "}
              <img
                src={this.state.crest}
                alt="Logo"
                style={{ height: "100px", width: "100px" }}
              />
            </ListGroupItemHeading>
            <ListGroupItemText>
              <h4>
                Points Aquired : {this.props.points} <br />
              </h4>
              <h5>
                Change :{" "}
                <span class="badge badge-success badge-pill">
                  {this.props.change}
                </span>
              </h5>
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
