import { ThemeProvider } from "styled-components";

import { Box, Heading } from "spectacle";
import type { TemplateFn } from "spectacle/lib/components/deck/deck";

import Config from "../config";
import InriaTheme from "./InriaTheme";

const InriaTemplate: TemplateFn = (opt: {
  slideNumber: number;
  numberOfSlides: number;
}) => (
  <ThemeProvider theme={InriaTheme}>
    <Box
      backgroundColor="red"
      position="absolute"
      top="0px"
      width="68px"
      height="540px"
    ></Box>
    <Box
      backgroundColor="red"
      position="absolute"
      top="0px"
      width="540px"
      height="68px"
    ></Box>
    <Box
      backgroundColor="white"
      position="absolute"
      top="0px"
      left="540px"
      width="1380px"
      height="68px"
    >
      <Heading
        color="primary"
        fontSize="h2"
        textAlign="left"
        margin="0px 0px 0px 0px"
        padding="10px 10px 10px 10px"
      >
        {Config.shortTitle}
      </Heading>
    </Box>
    <Box
      backgroundColor="white"
      position="absolute"
      bottom="68px"
      left="68px"
      width="992px"
      height="48px"
    >
      <Heading
        color="secondary"
        fontSize="text"
        textAlign="left bottom"
        margin="0px 0px 0px 0px"
        padding="10px 10px 10px 10px"
      >
        {opt.slideNumber}/{opt.numberOfSlides} - {Config.date} -{" "}
        {Config.shortAuthor} - {Config.conference}
      </Heading>
    </Box>
    <Box
      backgroundColor="white"
      position="absolute"
      bottom="68px"
      left="1060px"
      width="792px"
      height="48px"
    >
      <Heading
        color="secondary"
        fontSize="text"
        textAlign="right"
        margin="0px 0px 0px 0px"
        padding="0px 0px 0px 0px"
      >
        <img
          className="img-fluid"
          src={`${process.env.PUBLIC_URL}/assets/inr_logo_rouge.svg`}
          height="48px"
          width="auto"
          alt="logo"
        />
      </Heading>
    </Box>
  </ThemeProvider>
);

export default InriaTemplate;
