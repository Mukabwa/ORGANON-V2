export default function WeeklyLayout({
  left,
  right,
}) {
  return (
    <div className="weekly-layout">

      <div className="weekly-days">
        {left}
      </div>

      <div className="weekly-summary">
        {right}
      </div>

    </div>
  );
}