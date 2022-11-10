export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const MONTH = DAY * 30;
export const YEAR = DAY * 365;

/**
 * Count the time since date with a given time of unit (in milliseconds).
 * @param time date as a number.
 * @param timeUnit the unit of time in milliseconds.
 * @param singular the word to be appended when the result is singular.
 * @param plural the word to be appended when the result is plural.
 */
export function timeUnitSince(time: number, timeUnit: number, singular: string, plural: string) {
  if (typeof time !== "number") {
    throw new Error("time is not a number.");
  }

  if (time > Date.now()) {
    throw new Error("the given time is superior to the current time.");
  }

  if (typeof timeUnit !== "number" || timeUnit < 0) {
    throw new Error("time unit is not a positive number.");
  }

  const delta = Date.now() - time;

  const count = Math.trunc(delta / timeUnit);

  return {
    count,
    formatted: `${count} ${count < 2 ? singular : plural}`,
  };
}

/**
 * Count the time since a given date in seconds.
 * @param time date.
 * @param plural `seconds` by default
 * @param singular `second` by default
 */
export function secondsSince(time: number, singular = "second", plural = "seconds") {
  return timeUnitSince(time, SECOND, singular, plural);
}

/**
 * Count the time since a given date in minutes.
 * @param time date.
 * @param plural `minutes` by default
 * @param singular `minute` by default
 */
export function minutesSince(time: number, singular = "minute", plural = "minutes") {
  return timeUnitSince(time, MINUTE, singular, plural);
}

/**
 * Count the time since a given date in hours.
 * @param time date.
 * @param plural `hours` by default
 * @param singular `hour` by default
 */
export function hoursSince(time: number, singular = "hour", plural = "hours") {
  return timeUnitSince(time, HOUR, singular, plural);
}

/**
 * Count the time since a given date in days.
 * @param time date.
 * @param plural `days` by default
 * @param singular `day` by default
 */
export function daysSince(time: number, singular = "day", plural = "days") {
  return timeUnitSince(time, DAY, singular, plural);
}

/**
 * Count the time since a given date in weeks.
 * @param time date.
 * @param plural `weeks` by default
 * @param singular `week` by default
 */
export function weeksSince(time: number, singular = "week", plural = "weeks") {
  return timeUnitSince(time, WEEK, singular, plural);
}

/**
 * Count the time since a given date in months.
 * @param time date.
 * @param plural `months` by default
 * @param singular `month` by default
 */
export function monthsSince(time: number, singular = "month", plural = "months") {
  return timeUnitSince(time, MONTH, singular, plural);
}

/**
 * Count the time since a given date in years.
 * @param time date.
 * @param plural `years` by default
 * @param singular `year` by default
 */
export function yearsSince(time: number, singular = "year", plural = "years") {
  return timeUnitSince(time, YEAR, singular, plural);
}

/**
 * Count the time since a given date an return the appropriate format with additional information.
 * @param time date.
 * @param _second array of [`singular`,`plural`]
 * @param _minute array of [`singular`,`plural`]
 * @param _hour array of [`singular`,`plural`]
 * @param _day array of [`singular`,`plural`]
 * @param _week array of [`singular`,`plural`]
 * @param _month array of [`singular`,`plural`]
 * @param _year array of [`singular`,`plural`]
 */
export function since(
  time: number,
  _second = ["second", "seconds"],
  _minute = ["minute", "minutes"],
  _hour = ["hour", "hours"],
  _day = ["day", "days"],
  _week = ["week", "weeks"],
  _month = ["month", "months"],
  _year = ["year", "years"]
) {
  if (typeof time !== "number") {
    throw new Error("time is not a number.");
  }

  let t = time;

  const years = yearsSince(t, ..._year);
  t += years.count * YEAR;

  const months = monthsSince(t, ..._month);
  t += months.count * MONTH;

  const weeks = weeksSince(t, ..._week);
  t += weeks.count * WEEK;

  const days = daysSince(t, ..._day);
  t += days.count * DAY;

  const hours = hoursSince(t, ..._hour);
  t += hours.count * HOUR;

  const minutes = minutesSince(t, ..._minute);
  t += minutes.count * MINUTE;

  const seconds = secondsSince(t, ..._second);

  const res = {
    formatted: "",
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  };

  res.formatted = (() => {
    if (years.count > 0) return years.formatted;
    else if (months.count > 0) return months.formatted;
    else if (weeks.count > 0) return weeks.formatted;
    else if (days.count > 0) return days.formatted;
    else if (hours.count > 0) return hours.formatted;
    else if (minutes.count > 0) return minutes.formatted;
    else return seconds.formatted;
  })();

  return res;
}
