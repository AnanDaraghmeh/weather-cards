import React from "react";

import Header from "./Header";
import ModalManager from "../modals/ModalManager";
import LoadingBar from "react-redux-loading-bar";
import ReduxToastr from "react-redux-toastr";

const Layout = () => {
  return (
    <div>
      <LoadingBar showFastActions />
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
      <Header />
    </div>
  );
};

export default Layout;
