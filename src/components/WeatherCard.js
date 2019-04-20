import React from "react";
import { connect } from "react-redux";
import { Card, Grid, Label, Icon } from "semantic-ui-react";

import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { capitalizeString } from "../helpers";
import { openModal, removeCard } from "../store/actions";

class WeatherCard extends React.Component {
  openAdditionalInfoModal = e => {
    const city = e.target.dataset.city;
    this.props.openModal("additionalInfo", city);
  };

  removeWeatherCard = e => {
    const city = e.target.dataset.city;
    this.props.removeCard(city);
  };

  render() {
    const { city } = this.props;
    return (
      <Grid.Column
        mobile={14}
        tablet={6}
        computer={4}
        style={{ marginBottom: "2rem" }}
      >
        <Card style={{ width: "100%" }}>
          {getWeatherIcon(city)}
          <Card.Content>
            <Card.Header>
              {capitalizeString(city.weather[0].description)} in {city.name},{" "}
              {city.sys.country}
            </Card.Header>
            <Card.Description>
              <Label.Group>
                <Label>
                  <Icon name="thermometer" />
                  {parseInt(city.main.temp)}°C
                </Label>
                <Label>
                  <Icon name="arrow down" />
                  {parseInt(city.main.temp_min)}°C
                </Label>
                <Label>
                  <Icon name="arrow up" />
                  {parseInt(city.main.temp_max)}°C
                </Label>
              </Label.Group>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a data-city={city.name} onClick={this.openAdditionalInfoModal}>
              <Icon name="info" />
              Additional Information
            </a>
            <br />
            <a
              data-city={city.name}
              onClick={this.removeWeatherCard}
              className="remove-card"
            >
              <Icon name="delete" />
              Remove this card
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default connect(
  null,
  { openModal, removeCard }
)(WeatherCard);
