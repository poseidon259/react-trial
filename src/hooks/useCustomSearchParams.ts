import { useSearchParams } from "react-router-dom";

type SearchParamsProps = {
  defaultValues: any;
};

export const useCustomSearchParams = (props: SearchParamsProps) => {
  const { defaultValues } = props;
  const [search, setSearch]: [URLSearchParams, Function] =
    useSearchParams(defaultValues);
  const searchAsObject = Object.fromEntries(new URLSearchParams(search)) as any;

  return [searchAsObject, setSearch];
};
