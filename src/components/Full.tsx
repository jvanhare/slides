import { Box, Slide } from "spectacle";
import type { SlideProps } from "spectacle/lib/components/slide/slide";

const Full = ({ children, ...props }: SlideProps) => (
  <Slide {...props}>
    <Box
      position="absolute"
      width="1784px"
      top="68px"
      left="68px"
      padding="0px 0px 0px 0px"
      color="secondary"
    >
      {children}
    </Box>
  </Slide>
);

export default Full;
