export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTime(): Date {
  // Create a date object with the current UTC time
  const now = new Date();
  return now;
}

export function formatTimeForGermany(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Berlin",
    timeZoneName: 'short'
  };
  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
