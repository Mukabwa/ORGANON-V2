"use client";

import AppShell from "@/components/shell/AppShell";
import PageHeader from "@/components/layout/PageHeader";
import ProjectToolbar from "@/components/projects/ProjectToolbar";
import ProjectGrid from "@/components/projects/ProjectGrid";

import "@/styles/pages/projects.css";

export default function ProjectsPage() {
  return (
    <AppShell>
      <div className="projects-page">
        <PageHeader
          eyebrow="Workspace"
          title="My Projects"
          subtitle="Big things have small beginnings."
        />

        <ProjectToolbar />

        <ProjectGrid />
      </div>
    </AppShell>
  );
}