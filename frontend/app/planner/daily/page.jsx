import AppShell
  from "@/components/shell/AppShell";

import DailyPlanner
  from "@/components/planner/DailyPlanner";

export default function DailyPlannerPage() {
  return (
    <AppShell>
      <DailyPlanner />
    </AppShell>
  );
}