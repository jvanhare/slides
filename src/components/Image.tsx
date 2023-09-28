import { FlexBox, Text } from "spectacle";

import Alert from "./Alert";

export type ImageType = {
  fileName: string;
  legend: string;
  height?: string;
  width?: string;
};

let figureCount = 0;

export default function Image({
  fileName,
  legend,
  height = "auto",
  width = "100%",
}: ImageType) {
  figureCount = figureCount + 1;
  return (
    <FlexBox width="100%" flexDirection="column" justifyContent="center">
      <img
        className="img-fluid"
        src={`${process.env.PUBLIC_URL}/assets/${fileName}`}
        height={height}
        width={width}
        alt={fileName}
      />
      <Text textAlign="center" fontStyle="italic">
        <Alert>Figure {figureCount}:</Alert> {legend}
      </Text>
    </FlexBox>
  );
}
