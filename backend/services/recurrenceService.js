const { DateTime } = require("luxon");

const matchesRecurrenceRule = (
  definition,
  localDate
) => {

  const recurrence =
    definition.scheduling?.recurrenceRule;

  if (!recurrence) {
    return false;
  }

  const date =
    DateTime.fromISO(localDate);

  // DAILY
  if (
    recurrence.frequency === "daily"
  ) {
    return true;
  }

  // WEEKLY
  if (
    recurrence.frequency === "weekly"
  ) {

    const weekday =
      date
        .toFormat("cccc")
        .toLowerCase();

    return recurrence.daysOfWeek?.includes(
      weekday
    );
  }

  // MONTHLY
  if (
    recurrence.frequency === "monthly"
  ) {

    return (
      date.day ===
      recurrence.dayOfMonth
    );
  }

  // YEARLY
  if (
    recurrence.frequency === "yearly"
  ) {

    const start =
      DateTime.fromISO(
        recurrence.startDate
      );

    return (
      date.month === start.month &&
      date.day === start.day
    );
  }

  return false;
};

module.exports = {
  matchesRecurrenceRule,
};