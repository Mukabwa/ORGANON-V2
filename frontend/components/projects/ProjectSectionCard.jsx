"use client";

export default function ProjectSectionCard({
  section,
}) {
  return (
    <article className="project-section-card">

      <h3>

        {section.title}

      </h3>

      <p>

        {section.tasks} Tasks

      </p>

      <div className="mini-progress">

        <div
          className="mini-progress-fill"
          style={{
            width: `${section.progress}%`,
          }}
        />

      </div>

      <span>

        {section.progress}% Complete

      </span>

    </article>
  );
}