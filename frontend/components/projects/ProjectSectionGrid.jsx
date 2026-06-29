"use client";

import ProjectSectionCard from "./ProjectSectionCard";

const sections = [
  {
    title: "Beginning",
    progress: 25,
    tasks: 12,
  },
  {
    title: "Middle",
    progress: 41,
    tasks: 22,
  },
  {
    title: "Ending",
    progress: 5,
    tasks: 3,
  },
  {
    title: "Relationship Arc",
    progress: 62,
    tasks: 41,
  },
];

export default function ProjectSectionGrid() {
  return (
    <section>

      <div className="section-heading">

        <h2>

          Sections

        </h2>

        <button>

          + Add Section

        </button>

      </div>

      <div className="project-section-grid">

        {sections.map((section) => (
          <ProjectSectionCard
            key={section.title}
            section={section}
          />
        ))}

      </div>

    </section>
  );
}