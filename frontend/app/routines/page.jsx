"use client";

import AppShell from "@/components/shell/AppShell";

import RoutinesHeader from "@/components/routines/RoutinesHeader";
import RoutineGrid from "@/components/routines/RoutineGrid";

import "@/styles/pages/routines.css";

export default function RoutinesPage() {
  return (
    <AppShell>
      <div className="routines-page">

        <RoutinesHeader />

        <RoutineGrid />

      </div>
    </AppShell>
  );
}