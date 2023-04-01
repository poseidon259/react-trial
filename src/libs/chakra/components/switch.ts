import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import colors from "../foundations/colors";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    bgColor: "grey.100",
    _checked: {
      bgColor: colors.primary,
    },
  },
});

export const Switch = defineMultiStyleConfig({ baseStyle });
