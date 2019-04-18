import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import WeatherCard from "./WeatherCard";
import Landing from "./Landing";

class WeatherDashboard extends React.Component {
  render() {
    const { asyncStatus, weatherData } = this.props;
    return (
      <Grid container columns="equal" centered stretched>
        <Grid.Row>
          {asyncStatus === "asyncSuccess" &&
            weatherData.map(city => {
              return <WeatherCard city={city} key={city.name} />;
            })}
          {asyncStatus === "asyncError" &&
            weatherData.map(city => {
              return <WeatherCard city={city} key={city.name} />;
            })}
          {asyncStatus === null && <Landing />}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weather,
    asyncStatus: state.async
  };
};

export default connect(mapStateToProps)(WeatherDashboard);
