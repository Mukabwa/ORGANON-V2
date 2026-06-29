"use client";

import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function ProjectBreadcrumbs() {
  return (
    <nav className="project-breadcrumbs">

      <Link href="/projects">
        Projects
      </Link>

      <ChevronRight size={16} />

      <button>
        Webtoon BL
        <ChevronDown size={14} />
      </button>

      <ChevronRight size={16} />

      <button>
        Plot
        <ChevronDown size={14} />
      </button>

    </nav>
  );
}