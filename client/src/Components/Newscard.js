import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: 400,
    margin: 50,
    color: "transparent"
  },
  media: {
    height: 70,
    width: 120
  },
  title: {
    margin: 10,
    color: "#051659",
    fontSize: 30,
    fontWeight: 50,
    fontFamily: "Roboto"
  },
  body: {
    fontSize: 18,
    fontWeight: 20,
    fontFamily: "Roboto"
  },
  date: {
    fontSize: 14,
    margin: 10
  },
  link: {}
};

function Newscard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
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
    </Card>
  );
}

Newscard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Newscard);
