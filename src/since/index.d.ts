export const SECOND: number = 1000;
export const MINUTE: number = SECOND * 60;
export const HOUR: number = MINUTE * 60;
export const DAY: number = HOUR * 24;
export const WEEK: number = DAY * 7;
export const MONTH: number = DAY * 30;
export const YEAR: number = DAY * 365;

interface timeSinceData {
    count: number;
    formatted: string;
}

/**
 * Count the time since date with a given time of unit (in milliseconds).
 * @param time date as a number.
 * @param timeUnit the unit of time in milliseconds.
 * @param singular the word to be appended when the result is singular.
 * @param plural the word to be appended when the result is plural.
 */
export function timeUnitSince(
    time: number,
    timeUnit: number,
    singular?: string,
    plural?: string
): timeSinceData;

/**
 * Count the time since a given date in seconds.
 * @param time date.
 * @param plural `seconds` by default
 * @param singular `second` by default
 */
export function secondsSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in minutes.
 * @param time date.
 * @param plural `minutes` by default
 * @param singular `minute` by default
 */
export function minutesSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in hours.
 * @param time date.
 * @param plural `hours` by default
 * @param singular `hour` by default
 */
export function hoursSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in days.
 * @param time date.
 * @param plural `days` by default
 * @param singular `day` by default
 */
export function daysSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in weeks.
 * @param time date.
 * @param plural `weeks` by default
 * @param singular `week` by default
 */
export function weeksSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in months.
 * @param time date.
 * @param plural `months` by default
 * @param singular `month` by default
 */
export function monthsSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date in years.
 * @param time date.
 * @param plural `years` by default
 * @param singular `year` by default
 */
export function yearsSince(time: number, singular?: string, plural?: string): timeSinceData;

/**
 * Count the time since a given date an return the appropriate format with additional information.
 * @param time date.
 * @param second array of [`singular`,`plural`]
 * @param minute array of [`singular`,`plural`]
 * @param hour array of [`singular`,`plural`]
 * @param day array of [`singular`,`plural`]
 * @param week array of [`singular`,`plural`]
 * @param month array of [`singular`,`plural`]
 * @param year array of [`singular`,`plural`]
 */
export function since(
    time: number,
    second?: [string, string],
    minute?: [string, string],
    hour?: [string, string],
    day?: [string, string],
    week?: [string, string],
    month?: [string, string],
    year?: [string, string]
): {
    formatted: string;
    seconds: timeSinceData;
    minutes: timeSinceData;
    hours: timeSinceData;
    days: timeSinceData;
    weeks: timeSinceData;
    months: timeSinceData;
    years: timeSinceData;
};
