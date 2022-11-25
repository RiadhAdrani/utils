import { it, expect, describe } from "@jest/globals";
import { since, timeUnitSince, YEAR, MONTH, DAY, MINUTE, SECOND, WEEK } from ".";

describe("timeUnitSince", () => {
  it("should throw with a non-number time", () => {
    expect(() => timeUnitSince("" as unknown as number, 1, "", "")).toThrow();
  });

  it("should throw when time is from the future (:p)", () => {
    expect(() => timeUnitSince(Date.now() + 1000, 1000, "", "")).toThrow();
  });

  it("should throw with a non-number timeUnit", () => {
    expect(() => timeUnitSince(Date.now(), "" as unknown as number, "", "")).toThrow();
  });

  it("should return correct count and well formatted string", () => {
    expect(timeUnitSince(Date.now() - 1000, 1000, "second", "seconds")).toStrictEqual({
      count: 1,
      formatted: "1 second",
    });

    expect(timeUnitSince(Date.now() - 2500, 1000, "second", "seconds")).toStrictEqual({
      count: 2,
      formatted: "2 seconds",
    });
  });
});

describe("since", () => {
  it.each([
    [
      [Date.now() - 1000],
      {
        formatted: "1 second",
        seconds: { count: 1, formatted: "1 second" },
        minutes: { count: 0, formatted: "0 minute" },
        hours: { count: 0, formatted: "0 hour" },
        days: { count: 0, formatted: "0 day" },
        weeks: { count: 0, formatted: "0 week" },
        months: { count: 0, formatted: "0 month" },
        years: { count: 0, formatted: "0 year" },
      },
    ],
    [
      [Date.now() - 2000],
      {
        formatted: "2 seconds",
        seconds: { count: 2, formatted: "2 seconds" },
        minutes: { count: 0, formatted: "0 minute" },
        hours: { count: 0, formatted: "0 hour" },
        days: { count: 0, formatted: "0 day" },
        weeks: { count: 0, formatted: "0 week" },
        months: { count: 0, formatted: "0 month" },
        years: { count: 0, formatted: "0 year" },
      },
    ],
    [
      [Date.now() - 2 * YEAR - 1 * MONTH - 3 * DAY - 1.5 * MINUTE],
      {
        formatted: "2 years",
        seconds: { count: 30, formatted: "30 seconds" },
        minutes: { count: 1, formatted: "1 minute" },
        hours: { count: 0, formatted: "0 hour" },
        days: { count: 3, formatted: "3 days" },
        weeks: { count: 0, formatted: "0 week" },
        months: { count: 1, formatted: "1 month" },
        years: { count: 2, formatted: "2 years" },
      },
    ],
    [
      [Date.now() - 0 * YEAR - 2 * WEEK - 15 * DAY - 15.5 * MINUTE - 1.5 * SECOND],
      {
        formatted: "4 weeks",
        seconds: { count: 31, formatted: "31 seconds" },
        minutes: { count: 15, formatted: "15 minutes" },
        hours: { count: 0, formatted: "0 hour" },
        days: { count: 1, formatted: "1 day" },
        weeks: { count: 4, formatted: "4 weeks" },
        months: { count: 0, formatted: "0 month" },
        years: { count: 0, formatted: "0 year" },
      },
    ],
  ])("should ", (args, expected) => {
    expect(since(args[0])).toStrictEqual(expected);
  });
});
