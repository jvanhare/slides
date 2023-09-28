import { Box, FlexBox, Slide } from "spectacle";
import type { SlideProps } from "spectacle/lib/components/slide/slide";

const Centered = ({ children, ...props }: SlideProps) => (
  <Slide {...props}>
    <FlexBox
      position="absolute"
      width="1648px"
      top="0px"
      left="136px"
      padding="0px 0px 0px 0px"
      color="secondary"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box>{children}</Box>
    </FlexBox>
  </Slide>
);

export default Centered;
