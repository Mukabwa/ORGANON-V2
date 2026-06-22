"use client";

const OPTIONS = [
  "once",
  "daily",
  "weekly",
  "monthly",
  "yearly",
];

export default function RecurrenceSelector({
  value,
  onChange,
}) {
  return (
    <div className="recurrence-grid">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={
            value === option
              ? "recurrence-card active"
              : "recurrence-card"
          }
          onClick={() =>
            onChange(option)
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}