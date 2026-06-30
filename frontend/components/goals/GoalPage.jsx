"use client";

export default function GoalPage({
  goal,
  current,
  total,
}) {
  return (
    <section className="goal-page">

      <div className="goal-left">

        <p className="goal-count">
          GOAL {current} OF {total}
        </p>

        <h2>{goal.title}</h2>

        <p className="goal-description">
          {goal.description}
        </p>

        <div className="goal-progress">

          <span>Overall Progress</span>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${goal.progress}%`,
              }}
            />

          </div>

          <strong>{goal.progress}%</strong>

        </div>

        <blockquote>
          "{goal.quote}"
        </blockquote>

      </div>

      <aside className="goal-right">

        <div className="insight-card">

          <h3>Momentum</h3>

          <p>{goal.momentum}</p>

        </div>

        <div className="insight-card">

          <h3>Consistency</h3>

          <p>{goal.consistency} / 7 days</p>

        </div>

      </aside>

    </section>
  );
}