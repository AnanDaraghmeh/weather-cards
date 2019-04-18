import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherData, fetchCurrentLocation } from "../../store/actions";
import { Menu, Input, Container, Icon, Popup } from "semantic-ui-react";

class App extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedQuery = this.state.searchQuery
        .toLowerCase()
        .trim()
        .replace(/\s\s*/gi, " ");
      this.props.fetchWeatherData(trimmedQuery);
      this.setState({ searchQuery: "" });
    }
  };

  getCurrentLocation = e => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.props.fetchCurrentLocation(lat, lon);
    });
  };

  render() {
    return (
      <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <Container>
          <Menu compact secondary>
            <Menu.Item header style={{ color: "white" }}>
              Weather Cards
            </Menu.Item>
            <Popup
              trigger={
                <Menu.Item
                  name="location"
                  onClick={this.getCurrentLocation}
                  style={{ color: "white" }}
                >
                  <Icon name="location arrow" />
                </Menu.Item>
              }
              content="Get current location"
              inverted
              size="small"
            />
            <Menu.Item>
              <Input
                onKeyPress={this.handleSearch}
                onChange={e => this.setState({ searchQuery: e.target.value })}
                value={this.state.searchQuery}
                placeholder="Search..."
                icon="search"
                iconPosition="left"
              />
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherData: state.weather
  };
};

export default connect(
  mapStateToProps,
  { fetchWeatherData, fetchCurrentLocation }
)(App);
