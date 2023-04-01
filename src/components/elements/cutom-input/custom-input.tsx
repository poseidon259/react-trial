import React, { forwardRef, LegacyRef } from "react";
import { Input, InputProps } from "@chakra-ui/input";
import colors from "~/libs/chakra/foundations/colors";


export const CustomInput = forwardRef(
  (props: InputProps, ref?: LegacyRef<HTMLInputElement>) => {
    return (
      <Input
        {...props}
        focusBorderColor={colors.primary}
        errorBorderColor="crimson"
        bg="white"
        ref={ref}
      />
    );
  }
);
