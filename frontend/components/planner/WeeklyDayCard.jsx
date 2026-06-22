export default function WeeklyDayCard({
  day,
  tags,
  count,
}) {
  return (
    <div className="weekly-day-card">

      <h3>{day}</h3>

      <div className="weekly-tags">

        {tags.map((tag) => (
          <span
            key={tag}
            className="weekly-tag"
          >
            {tag}
          </span>
        ))}

      </div>

      <span className="weekly-count">
        {count} items
      </span>

    </div>
  );
}