import React from "react";
import { Message } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
0% {
    visibility: visible;
    transform:translateY(100px);
    opacity:.3;
}
30% {
    transform: translateY(0);
    opacity:1;
}
100%{
    opacity:0;
    visibility: hidden;
}
`;
const Toaster = styled.div`
  position: fixed;
  right: 10%;
  bottom: 20%;
  z-index: 10;
  animation: ${slideIn} 5s ease-in forwards;
`;

const ToasterError = () => {
  return (
    <Toaster>
      <Message negative>
        <Message.Header>Oops! Something went wrong!</Message.Header>
        <p>Please check the name in search field.</p>
      </Message>
    </Toaster>
  );
};

export default ToasterError;
