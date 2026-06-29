"use client";

export default function TaskSnapshot() {
  return (
    <section className="task-snapshot">

      <div className="task-group">

        <h3>
          🔥 High Priority
        </h3>

        <ul>

          <li>Finish Daily Planner Polish</li>

          <li>Review Project Detail</li>

          <li>Design Goal Cards</li>

        </ul>

      </div>

      <div className="task-group">

        <h3>
          📅 Upcoming
        </h3>

        <ul>

          <li>Brainstorm Plot</li>

          <li>Weekly Review</li>

          <li>Create Character Sheet</li>

        </ul>

      </div>

      <div className="task-group">

        <h3>
          ✓ Recently Completed
        </h3>

        <ul>

          <li>Monthly Planner</li>

          <li>Sidebar Polish</li>

          <li>Authentication Layout</li>

        </ul>

      </div>

    </section>
  );
}