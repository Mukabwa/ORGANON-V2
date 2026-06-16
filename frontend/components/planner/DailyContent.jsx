import TasksCard from "./TasksCard";
import NotesCard from "./NotesCard";

export default function DailyContent() {
  return (
    <div className="daily-content">

      <TasksCard />

      <NotesCard />

    </div>
  );
}