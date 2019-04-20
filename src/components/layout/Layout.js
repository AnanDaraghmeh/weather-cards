import React from "react";

import AppHeader from "./Header";
import ModalManager from "../modals/ModalManager";
import LoadingBar from "react-redux-loading-bar";
import ReduxToastr from "react-redux-toastr";

const Layout = () => {
  return (
    <div>
      <LoadingBar showFastActions style={{ background: "crimson" }} />
      <ModalManager />
      <ReduxToastr
        position="bottom-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        preventDuplicates
        progressBar
        timeOut={5000}
        newestOnTop={true}
      />
      <AppHeader />
    </div>
  );
};

export default Layout;
