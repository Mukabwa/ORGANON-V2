export default function PageHeader({
  title,
  description,
}) {
  return (
    <div className="page-header">

      <span className="page-script">
        June 12
      </span>

      <div className="page-divider">
        ✦ ───────── ✦
      </div>

      <h1>{title}</h1>

      {description && (
        <p>{description}</p>
      )}

    </div>
  );
}