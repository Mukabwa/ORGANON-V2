import WeeklyDayCard from "./WeeklyDayCard";

const DAYS = [
  {
    day: "Monday",
    tags: ["💼 Work", "📚 Study"],
    count: 4,
  },
  {
    day: "Tuesday",
    tags: ["🌱 Routine", "🏠 Home"],
    count: 3,
  },
  {
    day: "Wednesday",
    tags: ["⭐ Focus Day", "🤝 Meeting"],
    count: 6,
  },
  {
    day: "Thursday",
    tags: ["🎨 Creative", "📚 Study"],
    count: 2,
  },
  {
    day: "Friday",
    tags: ["💼 Work"],
    count: 5,
  },
  {
    day: "Saturday",
    tags: ["☕ Rest"],
    count: 1,
  },
  {
    day: "Sunday",
    tags: ["🌿 Reset"],
    count: 1,
  },
];

export default function WeeklyDaysColumn() {
  return (
    <>
      {DAYS.map((day) => (
        <WeeklyDayCard
          key={day.day}
          {...day}
        />
      ))}
    </>
  );
}