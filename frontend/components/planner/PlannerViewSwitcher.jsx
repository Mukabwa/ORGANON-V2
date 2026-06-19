"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlannerViewSwitcher() {
  const pathname = usePathname();

  return (
    <div className="planner-view-switcher">

      <Link
        href="/planner/daily"
        className={
          pathname.includes("/daily")
            ? "planner-view-btn active"
            : "planner-view-btn"
        }
      >
        Day
      </Link>

      <Link
        href="/planner/weekly"
        className={
          pathname.includes("/weekly")
            ? "planner-view-btn active"
            : "planner-view-btn"
        }
      >
        Week
      </Link>

      <Link
        href="/planner/monthly"
        className={
          pathname.includes("/monthly")
            ? "planner-view-btn active"
            : "planner-view-btn"
        }
      >
        Month
      </Link>

    </div>
  );
}