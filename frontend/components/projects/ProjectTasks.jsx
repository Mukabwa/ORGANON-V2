"use client";

export default function ProjectTasks() {
  return (
    <section className="node-task-section">

      <div className="section-heading">

        <h2>

          Tasks for Plot

        </h2>

        <button>

          + Add Task

        </button>

      </div>

      <div className="task-list">

        <div className="task-card">

          <input type="checkbox" />

          Brainstorm overall plot

        </div>

        <div className="task-card">

          <input type="checkbox" />

          Research romance tropes

        </div>

        <div className="task-card">

          <input type="checkbox" />

          Decide emotional themes

        </div>

      </div>

    </section>
  );
}