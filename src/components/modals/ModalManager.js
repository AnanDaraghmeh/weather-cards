import React from "react";
import { connect } from "react-redux";

import WeatherMoreInfo from "./WeatherMoreInfo";

class ModalManager extends React.Component {
  renderModal = () => {
    if (this.props.modal !== null) {
      const { modal } = this.props;
      switch (modal.name) {
        case "additionalInfo":
          return <WeatherMoreInfo city={modal.extraInfo} />;
        default:
          return null;
      }
    }
  };
  render() {
    return <div>{this.renderModal()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

export default connect(mapStateToProps)(ModalManager);
