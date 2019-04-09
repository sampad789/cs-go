import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import "./IndividualRankingList.css";

export default class IndividualRankingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }

  componentDidMount = () => {
    this.fetchPlayer();
  };
  fetchPlayer = () => {
    fetch("http://localhost:8000/api/player/" + this.props.id + "")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ player: responseData });
        console.log(this.state.player);
        this.setState({
          image: this.state.player.image,
          age: this.state.player.age,
          team: this.state.player.team.name
        });
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
              <img
                className="float"
                src={this.state.image}
                alt="Logo"
                style={{ height: "200px", width: "200px" }}
              />
              <h2 className="player-details">{this.props.ign}</h2>{" "}
            </ListGroupItemHeading>
            <ListGroupItemText className="player-details">
              <h4>
                Age : {this.state.age} <br />
              </h4>
              <h4>
                Team : {this.state.team} <br />
              </h4>
              <h5>
                Rating :{" "}
                <span class="badge badge-success badge-pill">
                  {this.props.rating}
                </span>
              </h5>
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}
