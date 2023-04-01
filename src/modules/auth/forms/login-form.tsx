import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  VStack,
  Text,
  Box,
  InputGroup,
  InputRightElement,
  Icon,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { useMutationLogin } from "../api";
import { LoginFormSchema } from "~/validations";
import { CustomInput, CustomPasswordInput } from "~/components";
import { navigationFn } from "~/routes";
import colors from "~/libs/chakra/foundations/colors";

type TLogin = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
} as TLogin;

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValid },
  } = useForm<TLogin>({
    defaultValues: initialValues,
    resolver: zodResolver(LoginFormSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const { mutate } = useMutationLogin();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data: TLogin) => {
    mutate(data);
  };

  console.log('first')
  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w="min(100%, 700px)"
      spacing={8}
      p="60px 16px"
      borderRadius={8}
    >
      <Text variant="headingLight">Sign in Admin Account</Text>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              Email{" "}
              <Text as="span" color="white">
                *
              </Text>
            </Text>
            <InputGroup>
              <CustomInput
                {...field}
                placeholder="Enter your email"
                pr={8}
                isInvalid={!!errors.email}
                minLength={8}
                maxLength={100}
              />
              <InputRightElement>
                <Icon as={EmailIcon} color={colors.primary} />
              </InputRightElement>
            </InputGroup>
            {errors.email && (
              <Text variant="error">{errors.email.message}</Text>
            )}
          </Box>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Box w="100%">
            <Text variant="menuLabelLight" paddingBottom={4}>
              Password{" "}
              <Text as="span" color="white">
                *
              </Text>
            </Text>
            {/* <InputGroup>
              <CustomInput
                {...field}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                isInvalid={!!errors.password}
              />
              <InputRightElement>
                <Button bg="transparent" onClick={togglePassword}>
                  <Icon as={showPassword ? ViewOffIcon : ViewIcon} />
                </Button>
              </InputRightElement>
            </InputGroup> */}
            <CustomPasswordInput {...field} />
            {errors.password && (
              <Text variant="error">{errors.password.message}</Text>
            )}
          </Box>
        )}
      />
      <Box w="100%" textAlign="right">
        <ChakraLink
          as={Link}
          to={navigationFn.FORGOT_PASSWORD}
          variant="whiteUnderline"
        >
          Forgot your password?
        </ChakraLink>
      </Box>
      <Button
        type="submit"
        isLoading={isSubmitting}
        w="100%"
        disabled={!isValid}
      >
        Log in
      </Button>
    </VStack>
  );
};

export default LoginForm;
