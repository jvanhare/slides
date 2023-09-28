import { Box, FlexBox, Grid, Heading, Link, Slide, Text } from "spectacle";

import Config from "../config";

import InriaLastSlide from "../theme/InriaLastSlide";

const LastSlide = () => (
  <Slide template={InriaLastSlide}>
    <Grid
      gridTemplateColumns="100%"
      width="1312px"
      position="absolute"
      left="540px"
      top="540px"
      justifyContent="center"
      textAlign="center"
    >
      <FlexBox justifyContent="center">
        <Heading
          color="white"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          Thank you for your attention!
        </Heading>
      </FlexBox>
      <FlexBox justifyContent="center">
        <Heading
          color="white"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          Any questions?
        </Heading>
      </FlexBox>
      <FlexBox justifyContent="center">
        <Text
          fontSize="text"
          color="lightblue"
          margin="32px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          {Config.authors.map<React.ReactNode>((author) => {
            if (author.name === Config.speaker) {
              return (
                <Box>
                  E-mail:{" "}
                  <Link color="lightblue" href={`mailto:${author.mail}`}>
                    {author.mail}
                  </Link>
                </Box>
              );
            }
            return null;
          })}
        </Text>
      </FlexBox>
      <FlexBox justifyContent="center">
        <Text
          fontSize="text"
          color="lightblue"
          margin="0px 0px 0px 0px"
          padding="8px 16px 8px 16px"
        >
          {Config.authors.map<React.ReactNode>((author) => {
            if (author.name === Config.speaker) {
              return (
                <Box>
                  Homepage:{" "}
                  <Link color="lightblue" href={author.website}>
                    {author.website}
                  </Link>
                </Box>
              );
            }
            return null;
          })}
        </Text>
      </FlexBox>
    </Grid>
  </Slide>
);

export default LastSlide;
