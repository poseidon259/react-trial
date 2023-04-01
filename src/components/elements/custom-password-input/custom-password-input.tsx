import React, { forwardRef, useState } from "react";
import {
  InputProps,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { CustomInput } from "~/components";


export const CustomPasswordInput = forwardRef((props: InputProps, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <InputGroup>
      <CustomInput
        {...props}
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        minLength={4}
        maxLength={32}
      />
      <InputRightElement>
        <Button bg="transparent" onClick={togglePassword}>
          <Icon as={showPassword ? ViewOffIcon : ViewIcon} />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
});
