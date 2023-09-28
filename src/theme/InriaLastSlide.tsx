import { ThemeProvider } from "styled-components";

import { FlexBox, Box } from "spectacle";
import type { TemplateFn } from "spectacle/lib/components/deck/deck";

import InriaTheme from "./InriaTheme";

const InriaLastSlide: TemplateFn = (opt: {
  slideNumber: number;
  numberOfSlides: number;
}) => (
  <ThemeProvider theme={InriaTheme}>
    <Box
      backgroundColor="primary"
      position="absolute"
      width="1784px"
      height="944px"
      top="68px"
      left="68px"
    ></Box>
    <Box
      backgroundColor="red"
      position="absolute"
      top="0px"
      left="0px"
      width="540px"
      height="540px"
    >
      <FlexBox
        position="absolute"
        top="122px"
        width="100%"
        flexDirection="column"
        justifyContent="center"
      >
        <img
          className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/inr_logo_blanc.svg`}
          width="263px"
          alt="logo"
        />
      </FlexBox>
    </Box>
  </ThemeProvider>
);

export default InriaLastSlide;
