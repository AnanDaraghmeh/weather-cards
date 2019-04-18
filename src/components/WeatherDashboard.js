import React from "react";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";

import WeatherCard from "./WeatherCard";
import Spinner from "./layout/Spinner";
import Landing from "./Landing";

class WeatherDashboard extends React.Component {
  render() {
    const { asyncStatus, weatherData } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row verticalAlign="middle">
            {asyncStatus === "asyncSuccess" &&
              weatherData.map(city => {
                return <WeatherCard city={city} key={city.name} />;
              })}
            {asyncStatus === "asyncError" &&
              weatherData.map(city => {
                return <WeatherCard city={city} key={city.name} />;
              })}
            {asyncStatus === "asyncStart" && <Spinner />}
            {asyncStatus === null && <Landing />}
          </Grid.Row>
        </Grid>
      </Container>
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
