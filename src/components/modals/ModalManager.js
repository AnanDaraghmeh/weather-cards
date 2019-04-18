import React from "react";
import { connect } from "react-redux";

import WeatherMoreInfo from "./WeatherMoreInfo";
import ToasterError from "./ToasterError";

class ModalManager extends React.Component {
  renderModal = () => {
    if (this.props.modal !== null) {
      const { modal } = this.props;
      switch (modal.name) {
        case "additionalInfo":
          return <WeatherMoreInfo city={modal.extraInfo} />;
        case "asyncError":
          return <ToasterError />;
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
    modal: state.modal,
    asyncStatus: state.async
  };
};

export default connect(mapStateToProps)(ModalManager);
