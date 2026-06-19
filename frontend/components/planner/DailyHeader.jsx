export default function DailyHeader({
  selectedDate,
  today,
  onPrevious,
  onNext,
  onReturnToToday,
}) {

  const currentDate =
    selectedDate.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

  const dayName =
    selectedDate.toLocaleDateString(
      "en-US",
      {
        weekday: "long",
      }
    );

  const previousDate =
    new Date(selectedDate);

  previousDate.setDate(
    previousDate.getDate() - 1
  );

  const nextDate =
    new Date(selectedDate);

  nextDate.setDate(
    nextDate.getDate() + 1
  );

  const isToday =
    selectedDate.toDateString() ===
    today.toDateString();

  return (
    <div className="daily-header">

      <button
        className="date-nav-side"
        onClick={onPrevious}
      >
        ←{" "}
        {previousDate.toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
          }
        )}
      </button>

      <h1 className="daily-date">
        {currentDate}
      </h1>

      <button
        className="date-nav-side"
        onClick={onNext}
      >
        {nextDate.toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
          }
        )}{" "}
        →
      </button>

      <p className="daily-day">
        {dayName} 🌿
      </p>

      {isToday ? (

        <div className="today-badge">
          Today
        </div>

      ) : (

        <button
          className="today-button"
          onClick={onReturnToToday}
        >
          Return to Today
        </button>

      )}

    </div>
  );
}