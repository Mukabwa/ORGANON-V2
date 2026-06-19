import TimelineItem from "./TimelineItem";

export default function TimelineColumn({
  items = [],
}) {

  return (
    <section className="timeline-column">

      {items.map(
        (item, index) => (

          <div
            key={item._id}
            className="timeline-item-row"
          >

            <div className="timeline-time">
              {item.time || "--:--"}
            </div>

            <div className="timeline-track">

              <div className="timeline-dot" />

              {index !==
                items.length - 1 && (
                <div className="timeline-stem" />
              )}

            </div>

            <TimelineItem
              item={item}
            />

          </div>
        )
      )}

    </section>
  );
}