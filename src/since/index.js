const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;

function timeUnitSince(time, timeUnit, singularUnit, pluralUnit) {
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
        formatted: `${count} ${count < 2 ? singularUnit : pluralUnit}`,
    };
}

function secondsSince(time, singular = "second", plural = "seconds") {
    return timeUnitSince(time, SECOND, singular, plural);
}

function minutesSince(time, singular = "minute", plural = "minutes") {
    return timeUnitSince(time, MINUTE, singular, plural);
}

function hoursSince(time, singular = "hour", plural = "hours") {
    return timeUnitSince(time, HOUR, singular, plural);
}

function daysSince(time, singular = "day", plural = "days") {
    return timeUnitSince(time, DAY, singular, plural);
}

function weeksSince(time, singular = "week", plural = "weeks") {
    return timeUnitSince(time, WEEK, singular, plural);
}

function monthsSince(time, singular = "month", plural = "months") {
    return timeUnitSince(time, MONTH, singular, plural);
}

function yearsSince(time, singular = "year", plural = "years") {
    return timeUnitSince(time, YEAR, singular, plural);
}

function since(
    time,
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

module.exports = {
    SECOND,
    MINUTE,
    DAY,
    WEEK,
    MONTH,
    YEAR,
    timeUnitSince,
    secondsSince,
    minutesSince,
    hoursSince,
    daysSince,
    weeksSince,
    monthsSince,
    yearsSince,
    since,
};
