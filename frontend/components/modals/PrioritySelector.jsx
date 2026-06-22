"use client";

export default function PrioritySelector({
  value,
  onChange,
}) {
  const options = [
    "low",
    "medium",
    "high",
  ];

  return (
    <div className="priority-grid">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={
            value === option
              ? "priority-card active"
              : "priority-card"
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