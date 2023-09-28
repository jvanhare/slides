import { Deck } from "spectacle";
import type { DeckProps } from "spectacle/lib/components/deck/deck";

import InriaTheme from "../theme/InriaTheme";
import InriaTemplate from "../theme/InriaTemplate";
import InriaTransition from "../theme/InriaTransition";

import FirstSlide from "../components/FirstSlide";
import LastSlide from "../components/LastSlide";
import License from "./License";

const InriaDeck = ({ children, ...props }: DeckProps) => (
  <Deck
    {...props}
    theme={InriaTheme}
    template={InriaTemplate}
    transition={InriaTransition}
  >
    <FirstSlide />
    {children}
    <LastSlide />
    <License />
  </Deck>
);

export default InriaDeck;
