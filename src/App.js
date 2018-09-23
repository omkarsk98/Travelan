import React, { Component } from "react";
import "./App.css";
import AllComponents from "./components";
import { Message } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllComponents />
        <Message compact color='pink' style={{padding:15, }}>Made with ☕ by Aniket And Omkar</Message>
      </div>
    );
  }
}

export default App;
