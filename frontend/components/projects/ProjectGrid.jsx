"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Organon",
    description:
      "Building my life management app from the ground up.",
    progress: 82,
    completed: 278,
    planned: 341,
    scope: 5,
    status: "In Progress",
    updated: "Today",
    cover:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900",
  },

  {
    id: 2,
    title: "Portfolio Website",
    description:
      "My personal website showcasing projects and artwork.",
    progress: 46,
    completed: 23,
    planned: 50,
    scope: 3,
    status: "In Progress",
    updated: "Yesterday",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },

  {
    id: 3,
    title: "Webtoon",
    description:
      "Planning and illustrating my BL series.",
    progress: 18,
    completed: 17,
    planned: 91,
    scope: 6,
    status: "Planning",
    updated: "2 days ago",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },

  {
    id: 4,
    title: "Fitness Journey",
    description:
      "Building healthier habits one day at a time.",
    progress: 61,
    completed: 33,
    planned: 54,
    scope: 2,
    status: "In Progress",
    updated: "Today",
    cover:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
  },

  {
    id: 5,
    title: "Reading List",
    description:
      "Books, notes and learning goals.",
    progress: 74,
    completed: 31,
    planned: 42,
    scope: 2,
    status: "In Progress",
    updated: "Yesterday",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900",
  },

  {
    id: 6,
    title: "Dream Studio",
    description:
      "Collecting ideas for my future creative workspace.",
    progress: 12,
    completed: 4,
    planned: 35,
    scope: 4,
    status: "Planning",
    updated: "1 week ago",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
];

export default function ProjectGrid() {
  return (
    <section className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}