import React, {Component} from "react";
import Calc from "./pages/calc";
import "./App.css"

class App extends Component{
  render() {
    return(
      <div className="container">
        <Calc/>
      </div>
    )
  }
}

export default App;
