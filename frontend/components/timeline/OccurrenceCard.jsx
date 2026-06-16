export default function OccurrenceCard({
  item,
}) {

  const completed =
    item.status === "completed";

  return (
    <div
      className={`planner-card ${
        completed
          ? "completed"
          : ""
      }`}
    >

      {item.tag && (
        <span className="planner-tag">
          {item.tag}
        </span>
      )}

      <h3>
        {item.title}
      </h3>

    </div>
  );
}