"use client";

import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import ProjectHero from "./ProjectHero";
import ProjectSnapshot from "./ProjectSnapshot";
import TaskSnapshot from "./TaskSnapshot";
import ContinueWorking from "./ContinueWorking";
import ProjectTasks from "./ProjectTasks";
import ProjectSectionGrid from "./ProjectSectionGrid";

import "@/styles/pages/project-detail.css";

export default function ProjectDetailPage() {
  return (
    <main className="project-detail-page">

      <ProjectBreadcrumbs />

      <ProjectHero />

      <div className="project-dashboard">

        <div className="dashboard-left">

          <ProjectSnapshot />

          <TaskSnapshot />

        </div>

        <ContinueWorking />

      </div>

      <ProjectTasks />

      <ProjectSectionGrid />

    </main>
  );
}