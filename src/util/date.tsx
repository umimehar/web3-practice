import { format, parseISO } from "date-fns";

export function formatStringToDate(
  dateString = new Date().toISOString(),
  dateFormat = "yyyy-MM-dd"
): string {
  return format(parseISO(dateString), dateFormat);
}
