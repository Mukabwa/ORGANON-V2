function FocusCard({ items = [] }) {
  return (
    <div className="focus-card">
      <h3 className="focus-title">
        Today's Focus ✦
      </h3>

      <div className="focus-circle">
        <span className="focus-number">
          {items.length}
        </span>

        <span className="focus-label">
          High Priority
          <br />
          Items
        </span>
      </div>

      <ul className="focus-list">
        {items.map((item) => (
          <li
            key={item._id}
            className={`focus-item ${
              item.status === "completed"
                ? "completed"
                : ""
            }`}
          >
            <span className="focus-bullet">
              {item.status === "completed"
                ? "✓"
                : "○"}
            </span>

            <span>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FocusCard;