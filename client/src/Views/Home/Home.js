// Landing page image URl
//  "http://i.imgur.com/5vfpUaw.jpg"

import React, { Component } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <img className="bg" src="http://i.imgur.com/5vfpUaw.jpg" alt="Logo" />
        <div className="text-block">
          <p> CS&#0045;GO </p>
        </div>

        <div className="intro-text">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .typeString("Welcome to your daily dose of Counter-Strike Info")
                .start();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Home;
