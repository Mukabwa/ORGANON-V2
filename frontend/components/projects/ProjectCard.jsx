"use client";

import Link from "next/link";
import ProjectProgress from "./ProjectProgress";
import ProjectScope from "./ProjectScope";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="project-card-link"
    >
      <article className="project-card">

        <div
          className="project-cover"
          style={{
            backgroundImage: `url(${project.cover})`,
          }}
        />

        <div className="project-body">

          <div className="project-header">
            <h3>{project.title}</h3>

            <span
              className={`status ${project.status
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              {project.status}
            </span>
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <ProjectScope scope={project.scope} />

          <ProjectProgress
            progress={project.progress}
            completed={project.completed}
            planned={project.planned}
          />

          <div className="project-footer">
            <span>Last worked on</span>
            <strong>{project.updated}</strong>
          </div>

        </div>

      </article>
    </Link>
  );
}