import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Bucket from "./components/Bucket";
import BucketList from "./components/BucketList";
import Data from "./bli.json";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const { result: BucketListData } = Data;
    this.setState({ data: BucketListData });
  }

  handleClick = (id) => {};

  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route
              path="/bucket/:bucketId"
              render={(props) => (
                <Bucket {...props} bucketData={this.state.data} />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <BucketList
                  {...props}
                  bucketListData={this.state.data}
                  onClick={this.handleClick}
                />
              )}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
