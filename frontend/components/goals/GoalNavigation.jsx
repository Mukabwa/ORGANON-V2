"use client";

export default function GoalNavigation({
  current,
  total,
  onPrevious,
  onNext,
}) {
  return (
    <footer className="goal-navigation">

      <button onClick={onPrevious}>
        ← Previous
      </button>

      <span>
        Goal {current} of {total}
      </span>

      <button onClick={onNext}>
        Next →
      </button>

    </footer>
  );
}