export default function DailyLayout({
  left,
  right,
}) {
  return (
    <div className="daily-layout">

      <div className="daily-main">
        {left}
      </div>

      <div className="daily-sidebar">
        {right}
      </div>

    </div>
  );
}