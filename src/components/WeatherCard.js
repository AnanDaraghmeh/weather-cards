import React from "react";
import { connect } from "react-redux";
import { Card, Image, Grid, Label, Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { capitalizeString } from "../helpers";
import { openModal, removeCard } from "../store/actions";

const Wrapper = styled.div`
  flex-basis: 80%;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    flex-basis: 40%;
  }
  @media only screen and (min-width: 992px) {
    flex-basis: 25%;
  }
`;

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
      <Wrapper>
        <Card raised>
          <Image
            src={getWeatherIcon(city)}
            style={{ width: "300px", padding: ".5rem 1rem" }}
          />
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
            <a data-city={city.name} onClick={this.removeWeatherCard}>
              <Icon name="delete" />
              Remove this card
            </a>
          </Card.Content>
        </Card>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { openModal, removeCard }
)(WeatherCard);
