import { ComponentStyleConfig } from "@chakra-ui/react";

import colors from "../foundations/colors";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "md",
    fontWeight: 500,
    color: colors.primary,
  },
  variants: {
    secondary: {
      color: colors.secondary,
    },
    cancel: {
      color: "white",
      bgColor: colors.primary,
      _hover: {
        bgColor: colors.primaryLight,
      },
    },
    goToHome: {
      color: "white",
      bgColor: colors.primary,
      _hover: {
        bgColor: colors.primaryLight,
      },
    },
  },
};
