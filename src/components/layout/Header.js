import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherData, fetchCurrentLocation } from "../../store/actions";
import { Menu, Input, Container, Icon, Header } from "semantic-ui-react";

class AppHeader extends Component {
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
          <Menu stackable compact>
            <Menu.Item>
              <Header color="blue">Weather Cards</Header>
            </Menu.Item>
            <Menu.Item name="location" onClick={this.getCurrentLocation}>
              <Icon name="location arrow" color="blue" />
              Current location
            </Menu.Item>
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
)(AppHeader);
