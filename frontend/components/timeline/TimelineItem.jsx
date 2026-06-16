import OccurrenceCard
  from "./OccurrenceCard";

import RoutineInsertionCard
  from "./RoutineInsertionCard";

export default function TimelineItem({
  item,
}) {

  if (
    item.type === "routine"
  ) {
    return (
      <RoutineInsertionCard
        item={item}
      />
    );
  }

  return (
    <OccurrenceCard
      item={item}
    />
  );
}