type DateStringType = {
  inputDate: string | Date;
  separator?: string;
};
export function getDateString({ inputDate, separator = '-' }: DateStringType) {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return [year, month, day].join(separator);
}
