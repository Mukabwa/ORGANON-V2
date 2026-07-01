"use client";

export default function RoutinesHeader() {
  return (
    <header className="routines-header">

      <div>

        <h1>My Routines</h1>

        <p>
          Build reusable collections of tasks that you can
          quickly add to your planner.
        </p>

      </div>

      <button className="new-routine-button">
        + New Routine
      </button>

    </header>
  );
}