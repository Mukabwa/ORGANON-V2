"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      label: "Planner",
      href: "/planner/daily",
    },
    {
      label: "Tasks",
      href: "/tasks",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Goals",
      href: "/goals",
    },
    {
      label: "Routines",
      href: "/routines",
    },
    {
      label: "Profile",
      href: "/profile",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>Organon</h1>

        <p>
          A gentle place for your
          plans
        </p>
      </div>

      <nav>
        <ul>
          {links.map((link) => {
            const active =
              pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    active
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}