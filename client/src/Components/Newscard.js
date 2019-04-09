import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "./Newscard.css";
export default class Newscard extends Component {
  render() {
    return (
      <div>
        <Card className="news-card" color="light">
          <CardImg
            className="image"
            right
            width="10px"
            src="https://www.hltv.org/img/static/openGraphHltvLogo.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h1>{this.props.title}</h1>
            </CardTitle>
            <CardText>
              <h3>{this.props.description}</h3>
            </CardText>
            <CardText>
              <small className="text-muted">
                Posted on : {this.props.date}
              </small>
            </CardText>
            <p>
              <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>{" "}
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

/*<Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          title="Powered by HLTV"
          image="https://www.hltv.org/img/static/openGraphHltvLogo.png"
          gutterBottom
        />

        <CardContent>
          <Typography className={classes.title} variant="headline">
            {props.title}
          </Typography>
          <Typography className={classes.body}>{props.description}</Typography>
          <Typography className={classes.link}>
            See More : {props.link}
          </Typography>
          <Typography className={classes.date} color="textSecondary">
            Posted On : {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>*/
