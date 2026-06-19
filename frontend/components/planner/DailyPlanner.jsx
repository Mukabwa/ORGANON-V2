"use client";

import { useState } from "react";

import DailyHeader from "./DailyHeader";
import DailyLayout from "./DailyLayout";
import DailyQuote from "./DailyQuote";
import PlannerViewSwitcher from "./PlannerViewSwitcher";

import FocusCard from "./FocusCard";
import NotesCard from "./NotesCard";
import AddTaskButton from "./AddTaskButton";

import TimelineColumn from "@/components/timeline/TimelineColumn";

export default function DailyPlanner() {

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const handlePreviousDay = () => {

    const previous =
      new Date(selectedDate);

    previous.setDate(
      previous.getDate() - 1
    );

    setSelectedDate(previous);
  };

  const handleNextDay = () => {

    const next =
      new Date(selectedDate);

    next.setDate(
      next.getDate() + 1
    );

    setSelectedDate(next);
  };

  const handleReturnToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="daily-page">
      <PlannerViewSwitcher />

      <DailyHeader
        selectedDate={selectedDate}
        today={new Date()}
        onPrevious={handlePreviousDay}
        onNext={handleNextDay}
        onReturnToToday={
          handleReturnToToday
        }
      />

      <DailyLayout

        left={
          <>
            <DailyQuote />

            <div className="timeline-paper">
              <TimelineColumn />
            </div>
          </>
        }

        right={
          <>
            <FocusCard />

            <NotesCard />

            <AddTaskButton />
          </>
        }

      />

    </div>
  );
}