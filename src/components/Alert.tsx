import React from "react";
import styled from "styled-components";

const StyledAlert = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
`;

const Alert: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledAlert>{children}</StyledAlert>;
};

export default Alert;
