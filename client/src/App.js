import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import News from "./Views/News/News";
import Results from "./Views/Results/Results";
import Rankings from "./Views/Rankings/Rankings";

import Nav from "./Components/Nav";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Nav />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/news" component={News} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/rankings" component={Rankings} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
