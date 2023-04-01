import { ComponentStyleConfig } from "@chakra-ui/react";
import colors from "../foundations/colors";


export const Select: ComponentStyleConfig = {
  baseStyle: {
    color: colors.primary,
    borderColor: colors.primary,
    _focusWithin: {
      ringColor: "purple.200",
      ring: "2px",
      ringOffset: "1px",
      ringOffsetColor: "purple.100",
      borderColor: "purple.50",
    },
  },
};
