import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import WeatherDashboard from "./components/WeatherDashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Layout />
          <WeatherDashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
