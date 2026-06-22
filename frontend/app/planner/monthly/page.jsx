import AppShell
  from "@/components/shell/AppShell";

import MonthlyPlanner
  from "@/components/planner/MonthlyPlanner";

export default function MonthlyPage() {
  return (
    <AppShell>
      <MonthlyPlanner />
    </AppShell>
  );
}