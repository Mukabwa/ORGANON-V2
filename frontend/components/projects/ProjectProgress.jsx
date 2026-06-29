"use client";

export default function ProjectProgress({
  progress,
  completed,
  planned,
}) {
  return (
    <section className="project-progress">

      <div className="progress-top">

        <span>Planned Work</span>

        <strong>{progress}%</strong>

      </div>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="progress-bottom">

        <span>
          {completed} / {planned} completed
        </span>

      </div>

    </section>
  );
}