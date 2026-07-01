"use client";

export default function RoutineCard({ routine }) {
  return (
    <article className="routine-card">

      <div className="routine-gradient" />

      <div className="routine-content">

        <h2>{routine.name}</h2>

        <ul>

          {routine.tasks.slice(0, 4).map((task) => (

            <li key={task}>
              ○ {task}
            </li>

          ))}

          {routine.tasks.length > 4 && (

    <li className="more-tasks">
        +{routine.tasks.length - 4} more tasks
    </li>

)}

        </ul>

        <footer>

          <span>{routine.category}</span>

          <span>{routine.tasks.length} Tasks</span>

        </footer>

      </div>

    </article>
  );
}