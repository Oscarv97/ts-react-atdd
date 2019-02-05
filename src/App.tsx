import * as React from 'react';
import './App.css';
import ReactDOM = require('react-dom');
// import logo = require("./logo.svg");

export class App extends React.Component<any, any> {

  public render(): React.ReactElement<any> {
    return (
      <div className="App">
        <div className="App-header">
          <img src={"./logo.svg"} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById("root"));
