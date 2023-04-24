import { extendTheme } from "@chakra-ui/react";

import type { ThemeOverride } from "@chakra-ui/react";

import colors from "./foundations/colors";
import { Button, Link, Text, Switch } from "./components";
import { StepsTheme as Steps } from "chakra-ui-steps";

export const themeOverride: ThemeOverride = extendTheme({
  colors,
  components: {
    Button,
    Link,
    Text,
    Switch,
    Steps,
  },
});
