const { DateTime } = require("luxon");

const matchesRecurrenceRule = (
  definition,
  localDate
) => {

  const recurrence =
    definition.scheduling?.recurrenceRule;

  if (!recurrence) return false;

  const date =
    DateTime.fromISO(localDate);

  // DAILY
  if (recurrence.frequency === "daily") {
    return true;
  }

  // WEEKLY
  if (recurrence.frequency === "weekly") {

    const weekday =
      date.toFormat("cccc").toLowerCase();

    return recurrence.daysOfWeek?.includes(
      weekday
    );
  }

  // MONTHLY
  if (recurrence.frequency === "monthly") {

    return (
      date.day === recurrence.dayOfMonth
    );
  }

  // YEARLY
  if (recurrence.frequency === "yearly") {

    return (
      date.ordinal ===
      DateTime.fromISO(
        recurrence.startDate
      ).ordinal
    );
  }

  return false;
};

module.exports = {
  matchesRecurrenceRule,
};