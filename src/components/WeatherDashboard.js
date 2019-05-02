import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import WeatherCard from './WeatherCard';
import Landing from './Landing';
import * as actions from '../store/actions';

class WeatherDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchLocalForage();
  }
  render() {
    const { asyncStatus, weatherData } = this.props;
    if (asyncStatus === 'asyncSuccess' || asyncStatus === 'asyncError') {
      if (weatherData.length === 0) {
        return <Landing />;
      }
      return (
        <Grid container columns="equal" centered stretched>
          <Grid.Row>
            {weatherData.map(city => {
              return <WeatherCard city={city} key={city.name} />;
            })}
          </Grid.Row>
        </Grid>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weather,
    asyncStatus: state.async
  };
};

export default connect(
  mapStateToProps,
  actions
)(WeatherDashboard);
