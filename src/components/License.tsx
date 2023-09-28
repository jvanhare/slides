import { FlexBox, Link, Slide, Text } from "spectacle";

import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNd,
} from "@fortawesome/free-brands-svg-icons";

import Config from "../config";

import InriaTemplate from "../theme/InriaTemplate";

const License = () => (
  <Slide template={InriaTemplate}>
    <FlexBox
      justifyContent="center"
      position="absolute"
      left="200px"
      width="1520px"
      height="100%"
      textAlign="center"
      flexDirection="column"
    >
      <Text color="primary" textAlign="center" margin="0px 0px 0px 0px">
        <Link color="lightblue" href={Config.homepage}>
          {Config.title + " - " + Config.conference}
        </Link>{" "}
        &copy; {format(new Date(Config.date), "yyyy")} by{" "}
        {Config.authors.map<React.ReactNode>((author) => {
          if (author.name === Config.speaker) {
            return (
              <Link color="lightblue" href={author.website}>
                {author.name}
              </Link>
            );
          }
          return null;
        })}{" "}
        is licensed under{" "}
        <Link
          color="lightblue"
          href="https://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1"
        >
          CC BY-ND 4.0
        </Link>{" "}
        <FontAwesomeIcon icon={faCreativeCommons} />{" "}
        <FontAwesomeIcon icon={faCreativeCommonsBy} />{" "}
        <FontAwesomeIcon icon={faCreativeCommonsNd} />
      </Text>
      <Text fontSize="text" margin="0px 0px 0px 0px">
        This is a human-readable summary of (and not a substitute for) the{" "}
        <Link
          color="lightblue"
          href="https://creativecommons.org/licenses/by-nd/4.0/legalcode"
        >
          license
        </Link>
        .
      </Text>
      <Text fontSize="h3" margin="0px 0px 0px 0px">
        You are free to:
      </Text>
      <Text textAlign="center" margin="0px 0px 0px 0px">
        <b>Share</b> - copy and redistribute the material in any medium or
        format for any purpose, even commercially.
      </Text>
      <Text fontSize="h3" margin="0px 0px 0px 0px">
        Under the following terms:
      </Text>
      <Text textAlign="center" margin="0px 0px 0px 0px">
        <b>Attribution </b> - You must give appropriate credit, provide a link
        to the license, and indicate if changes were made. You may do so in any
        reasonable manner, but not in any way that suggests the licensor
        endorses you or your use.
      </Text>
      <Text textAlign="center" margin="0px 0px 0px 0px">
        <b>NoDerivatives</b> - If you remix, transform, or build upon the
        material, you may not distribute the modified material.
      </Text>
    </FlexBox>
  </Slide>
);

export default License;
