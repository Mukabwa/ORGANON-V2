"use client";

import AppShell from "@/components/shell/AppShell";

import GoalsHeader from "@/components/goals/GoalsHeader";
import GoalViewer from "@/components/goals/GoalViewer";

import "@/styles/pages/goals.css";

export default function GoalsPage() {
  return (
    <AppShell>
      <div className="goals-page">

        <GoalsHeader />

        <GoalViewer />

      </div>
    </AppShell>
  );
}