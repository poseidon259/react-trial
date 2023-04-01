import { textPrimaryLogo } from "./text-primary-logo";
import { logoPrimary } from "./logo-primary";
import { logo } from "./logo";
import { textLogo } from "./text-logo";
import { textSecondaryLogo } from "./text-secondary-logo";
import { usersIcon } from "./users";

export interface IIconProps {
  w?: number;
  h?: number;
  color?: string;
}

export const Icons = {
  logo,
  textLogo,
  textSecondaryLogo,
  logoPrimary,
  textPrimaryLogo,
  usersIcon,
};
