"use client";

import ProjectProgress from "./ProjectProgress";
import ProjectScope from "./ProjectScope";

export default function ProjectHero() {
  return (
    <section className="project-hero">

      <span className="project-date">

        June 2026

      </span>

      <h1>

        Webtoon BL

      </h1>

      <p>

        Planning and illustrating my BL series.

      </p>

      <ProjectScope scope={5} />

      <ProjectProgress
        progress={42}
        completed={72}
        planned={171}
      />

    </section>
  );
}