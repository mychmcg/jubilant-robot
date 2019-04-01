import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { NavigationView } from "./modules/navigation/NavigationView";

class App extends React.Component {
  state = {
    activePage: "Home"
  };

  public render() {
    return (
      <BrowserRouter>
        <div className="App full-height">
          <NavigationView />
          <div className="content">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
