import TimelineItem from "./TimelineItem";

const timeline = [
  {
    id: 1,
    type: "routine",
    time: "07:00",
    title: "Morning Routine",
    status: "completed",
    items: [{}, {}, {}],
  },

  {
    id: 2,
    type: "occurrence",
    time: "09:00",
    title: "Portfolio Website UI",
    status: "completed",
    tag: "Project",
  },

  {
    id: 3,
    type: "occurrence",
    time: "12:00",
    title: "Lunch & Break",
    status: "completed",
  },

  {
    id: 4,
    type: "occurrence",
    time: "14:00",
    title: "Client Meeting",
    status: "pending",
  },

  {
    id: 5,
    type: "occurrence",
    time: "17:00",
    title: "Read Chapter 4",
    status: "pending",
  },
];

export default function TimelineColumn() {
  return (
    <section className="timeline-column">

      {timeline.map((item, index) => (
        <div
          key={item.id}
          className="timeline-item-row"
        >
          <div className="timeline-time">
            {item.time}
          </div>

          <div className="timeline-track">

            <div className="timeline-dot" />

            {index !== timeline.length - 1 && (
              <div className="timeline-stem" />
            )}

          </div>

          <TimelineItem item={item} />
        </div>
      ))}
    </section>
  );
}