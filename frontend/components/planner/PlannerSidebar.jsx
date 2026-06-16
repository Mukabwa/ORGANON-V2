import FocusCard from "./FocusCard";
import NotesCard from "./NotesCard";
import AddTaskButton from "./AddTaskButton";

export default function PlannerSidebar() {
  return (
    <aside className="planner-sidebar">

      <FocusCard />

      <NotesCard />

      <AddTaskButton />

    </aside>
  );
}