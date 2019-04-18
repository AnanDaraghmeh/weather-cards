import React from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
position:fixed;
top:50%;
left:50%;
z-index: 10
transform:translate(-50% -50%);
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Loader active size="large" inverted />
    </Wrapper>
  );
};

export default Spinner;
