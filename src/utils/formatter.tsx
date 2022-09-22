import moment from "moment";

export function joinedDate(dt: string): string {
  const formateDate = `@${moment(dt).format("MMMM Do YYYY")}`;

  return formateDate;
}
