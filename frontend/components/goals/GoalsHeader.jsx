"use client";

export default function GoalsHeader() {
  return (
    <header className="goals-header">

      <div>
        <h1>Goals</h1>

        <p>
          Your long-term ambitions.
          Every contribution moves you closer.
        </p>
      </div>

      <button className="new-goal-button">
        + New Goal
      </button>

    </header>
  );
}