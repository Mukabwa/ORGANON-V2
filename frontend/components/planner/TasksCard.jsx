import TimelineColumn
  from "@/components/timeline/TimelineColumn";

export default function TasksCard() {
  return (
    <section className="tasks-card">

      <h2>
        Today's Tasks
      </h2>

      <TimelineColumn />

    </section>
  );
}