"use client";

export default function ProjectSnapshot() {
  return (
    <section className="project-snapshot">

      <div className="snapshot-progress">

        <div className="snapshot-ring">

          <span>42%</span>

        </div>

      </div>

      <div className="snapshot-details">

        <div className="snapshot-row">

          <div className="snapshot-item">
            <span className="label">
              Tasks
            </span>

            <strong>171</strong>
          </div>

          <div className="snapshot-item">
            <span className="label">
              Completed
            </span>

            <strong>72</strong>
          </div>

          <div className="snapshot-item">
            <span className="label">
              Sections
            </span>

            <strong>4</strong>
          </div>

        </div>

        <div className="snapshot-row">

          <div className="snapshot-item">
            <span className="label">
              Goals
            </span>

            <strong>2</strong>
          </div>

          <div className="snapshot-item">
            <span className="label">
              Due
            </span>

            <strong>Aug 12</strong>
          </div>

          <div className="snapshot-item">
            <span className="label">
              Status
            </span>

            <strong>Active</strong>
          </div>

        </div>

      </div>

    </section>
  );
}