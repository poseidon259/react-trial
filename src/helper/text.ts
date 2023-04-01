export const addEllipsis = (string: string) => {
  if (string.length > 40) {
    return "...";
  }
  return "";
};
