import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import WeatherCard from "./WeatherCard";
import Spinner from "./layout/Spinner";
import Landing from "./Landing";

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class WeatherDashboard extends React.Component {
  render() {
    const { asyncStatus, weatherData } = this.props;
    return (
      <Container>
        <Grid>
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
