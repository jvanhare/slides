import React from "react";

import { FlexBox, Grid } from "spectacle";

let equationCound = 0;

const Equation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  equationCound = equationCound + 1;
  return (
    <Grid gridTemplateColumns="10% 80% 10%" gridRowGap={1}>
      <FlexBox></FlexBox>
      <FlexBox padding="0px 0px 0px 0px" margin="0px 0px 0px 0px">
        {children}
      </FlexBox>
      <FlexBox>({equationCound})</FlexBox>
    </Grid>
  );
};

export default Equation;
