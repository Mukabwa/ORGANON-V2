"use client";

import WeeklyHeader from "./WeeklyHeader";
import WeeklyLayout from "./WeeklyLayout";
import WeeklyDaysColumn from "./WeeklyDaysColumn";
import WeeklySummaryColumn from "./WeeklySummaryColumn";

export default function WeeklyPlanner() {
  return (
    <div className="weekly-page">

      <WeeklyHeader />

      <WeeklyLayout
        left={<WeeklyDaysColumn />}
        right={<WeeklySummaryColumn />}
      />

    </div>
  );
}