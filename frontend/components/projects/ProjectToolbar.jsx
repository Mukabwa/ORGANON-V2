"use client";

import { Search, ChevronDown, Plus } from "lucide-react";

export default function ProjectToolbar() {
  return (
    <section className="project-toolbar">

      <div className="toolbar-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search projects..."
        />

      </div>

      <div className="toolbar-actions">

        <button className="toolbar-select">
          Status
          <ChevronDown size={16} />
        </button>

        <button className="toolbar-select">
          Sort
          <ChevronDown size={16} />
        </button>

        <button className="new-project-btn">

          <Plus size={18} />

          New Project

        </button>

      </div>

    </section>
  );
}