import DailyHeader from "./DailyHeader";
import DailyLayout from "./DailyLayout";
import DailyQuote from "./DailyQuote";

import FocusCard from "./FocusCard";
import NotesCard from "./NotesCard";
import AddTaskButton from "./AddTaskButton";

import TimelineColumn from "@/components/timeline/TimelineColumn";

export default function DailyPlanner() {
  return (
    <div className="daily-page">

      <DailyHeader />

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
            <FocusCard
  items={[
    {
      _id: 1,
      title: "Client Meeting",
      status: "pending",
    },
    {
      _id: 2,
      title: "Read Chapter 4",
      status: "pending",
    },
    {
      _id: 3,
      title: "Portfolio Website UI",
      status: "completed",
    },
    {
      _id: 4,
      title: "Morning Routine",
      status: "completed",
    },
  ]}
/> 
            <NotesCard />
            <AddTaskButton />
          </>
        }

      />

    </div>
  );
}