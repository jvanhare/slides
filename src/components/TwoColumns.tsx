import { ReactNode } from "react";

import { Box, Heading, FlexBox, Slide } from "spectacle";
import type { SlideProps } from "spectacle/lib/components/slide/slide";

const TwoColumns = ({
  title,
  left,
  right,
  ...props
}: Omit<SlideProps, "children"> & {
  title: ReactNode;
  left: ReactNode;
  right: ReactNode;
}) => (
  <Slide {...props}>
    <Box
      position="absolute"
      width="1784px"
      top="68px"
      left="68px"
      padding="0px 0px 0px 0px"
      color="secondary"
    >
      <Heading color="primary" textAlign="left">
        {title}
      </Heading>
    </Box>
    <FlexBox
      position="absolute"
      width="1784px"
      height="1080px"
      top="0px"
      left="68px"
      padding="0px 0px 0px 0px"
      alignItems="center"
      justifyContent="center"
      placeItems="center"
    >
      <FlexBox justifyContent="center" width="100%" height="100%">
        {left}
      </FlexBox>
      <FlexBox justifyContent="center" width="100%" height="100%">
        {right}
      </FlexBox>
    </FlexBox>
  </Slide>
);

export default TwoColumns;
