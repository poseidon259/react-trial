import { ComponentStyleConfig } from "@chakra-ui/react";

import colors from "../foundations/colors";

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: colors.primary,
    fontWeight: 600,
    _hover: {
      color: colors.primaryLight,
    },
  },

  variants: {
    underline: {
      textDecor: "underline",
    },
    whiteUnderline: {
      color: "white",
      textDecor: "underline",
      _hover: {
        color: "white",
      },
    },
    breadScrum: {
      fontSize: "14px",
    },
  },
};
