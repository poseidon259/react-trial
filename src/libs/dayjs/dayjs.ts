import dayjs from "dayjs";

export const formatDate = (date?: string, format?: string): string => {
  return date
    ? format
      ? dayjs(date).format(format)
      : dayjs(date).format("DD/MM/YYYY")
    : "N/A";
};

export const formatMDY = (date?: string): string => {
  const changeDate = date && date.split("/");
  const newDate =
    changeDate?.length && `${changeDate[1]}/${changeDate[0]}/${changeDate[2]}` || '';
  return newDate;
}
