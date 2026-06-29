"use client";

export default function ProjectScope({ scope }) {
  return (
    <div className="project-scope">

      {[1,2,3,4,5,6].map((drop)=>(
        <span
          key={drop}
          className={
            drop <= scope
              ? "scope-drop active"
              : "scope-drop"
          }
        >
          💧
        </span>
      ))}

    </div>
  );
}