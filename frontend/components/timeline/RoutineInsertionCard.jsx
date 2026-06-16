export default function RoutineInsertionCard({
  item,
}) {
  return (
    <div className="planner-card routine">

      <div className="planner-card-top">

        <span className="planner-tag">
          Routine
        </span>

      </div>

      <h3>
        {item.title}
      </h3>

      <p>
        {item.items.length} steps
      </p>

    </div>
  );
}