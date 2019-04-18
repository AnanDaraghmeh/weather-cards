import React from "react";
import { Modal, Icon, Button, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal } from "../../store/actions";
import { getSunriseAndSunset } from "../../helpers";

class WeatherMoreInfo extends React.Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    const { weatherData } = this.props;
    return (
      <Modal open basic>
        <Header>
          {" "}
          <Icon name="info" />
          More weather Info - {weatherData.name}
        </Header>
        <Modal.Content>
          <Message color="teal">
            Pressure: <strong>{weatherData.main.pressure} hpa</strong>
          </Message>
          <Message color="teal">
            Humidity: <strong>{weatherData.main.humidity}%</strong>
          </Message>
          <Message color="teal">
            Wind Speed: <strong>{weatherData.wind.speed} m/s</strong>
          </Message>
          <Message color="teal">
            Sunrise:{" "}
            <strong>{getSunriseAndSunset(weatherData.sys.sunrise)}</strong>
            <br />
            Sunset:{" "}
            <strong>{getSunriseAndSunset(weatherData.sys.sunset)}</strong>
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeModal} basic color="red" inverted>
            <Icon name="remove" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    weatherData: state.weather.filter(city => city.name === ownProps.city)[0]
  };
};

export default connect(
  mapStateToProps,
  { closeModal }
)(WeatherMoreInfo);
