import { ThemeProvider } from "styled-components";

import { format } from "date-fns";

import { FlexBox, FullScreen, Grid, Box, Text } from "spectacle";
import type { TemplateFn } from "spectacle/lib/components/deck/deck";

import Config from "../config";
import InriaTheme from "./InriaTheme";

type Author = {
  name: string;
  mail: string;
  affiliation: number;
};

function renderAuthors(authors: Author[]) {
  return (
    <span>
      {authors
        .map<React.ReactNode>((author) => {
          if (author.name === Config.speaker) {
            return (
              <span>
                <u>{author.name}</u>
                <sup>{author.affiliation}</sup>
              </span>
            );
          } else {
            return (
              <span>
                {author.name}
                <sup>{author.affiliation}</sup>
              </span>
            );
          }
        })
        .reduce((prv, cur, idx) => {
          if (idx !== authors.length - 1) {
            return [prv, ", ", cur];
          } else {
            return [prv, ", and ", cur];
          }
        })}
    </span>
  );
}

const InriaFirstSlide: TemplateFn = (opt: {
  slideNumber: number;
  numberOfSlides: number;
}) => (
  <ThemeProvider theme={InriaTheme}>
    <FlexBox position="absolute" top="0px" right="0px">
      <FullScreen color="white" size={68} />
    </FlexBox>
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
    <Grid
      gridTemplateColumns="100%"
      width="1312px"
      position="absolute"
      left="540px"
      top="540px"
    >
      <FlexBox justifyContent="left">
        <Text
          fontSize="h1"
          color="white"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
          fontFamily="header"
        >
          {Config.title}
        </Text>
      </FlexBox>
      <FlexBox justifyContent="left">
        <Text
          fontSize="h3"
          color="lightblue"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          {Config.conference}
        </Text>
      </FlexBox>
      <FlexBox justifyContent="left">
        <Text
          fontSize="h3"
          color="lightblue"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          {format(new Date(Config.date), "LLLL d',' yyyy")} - {Config.place}
        </Text>
      </FlexBox>
      <FlexBox justifyContent="left">
        <Text
          fontSize="text"
          color="lightblue"
          margin="32px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          {renderAuthors(Config.authors)}
        </Text>
      </FlexBox>
      {Config.affiliation.map((affiliation, number) => (
        <FlexBox justifyContent="left">
          <Text
            fontSize="text"
            color="lightblue"
            margin="0px 0px 0px 0px"
            padding="8px 16px 8px 16px"
          >
            <sup>{number + 1}</sup>
            {affiliation}
          </Text>
        </FlexBox>
      ))}
      {Config.affiliation.map((affiliation, number) => (
        <FlexBox justifyContent="left">
          <Text
            fontSize="text"
            color="lightblue"
            margin="0px 0px 0px 0px"
            padding="8px 16px 8px 16px"
          >
            {Config.affiliation_address[number]}
          </Text>
        </FlexBox>
      ))}
    </Grid>
  </ThemeProvider>
);

export default InriaFirstSlide;
