import { ComponentStyleConfig } from "@chakra-ui/react";

import colors from "../foundations/colors";

export const Text: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "md",
    fontWeight: 500,
    color: colors.grey[900],
  },

  variants: {
    error: {
      color: "crimson",
      fontSize: "sm",
      paddingTop: "8px",
    },
    menuLabel: {
      fontWeight: 600,
    },
    menuLabelLight: {
      fontWeight: 600,
      color: "white",
    },
    heading: {
      fontWeight: 600,
      fontSize: "32px",
    },
    headingLight: {
      fontWeight: 600,
      fontSize: "32px",
      color: "white",
    },
    white: {
      color: "white",
    },
    name: {
      fontSize: "xl",
      fontWeight: 600,
    },
    blankHeading: {
      fontSize: "60px",
      fontWeight: 600,
      color: colors.primaryDark,
    },
    blankSubTitle: {
      fontSize: "28px",
      color: colors.grey[900],
    },
    notFoundText: {
      fontSize: "22px",
      textAlign: "center",
    },
    breadScrum: {
      fontSize: "14px",
    },

    // privacy policy
    privacyHeading: {
      fontSize: "18px",
      fontWeight: 700,
      textDecor: "underline",
      py: 8,
    },
    privacySubHeading: {
      textDecor: "underline",
      py: 6,
    },
    privacyParagraph: {
      pb: 6,
    },
  },
};
