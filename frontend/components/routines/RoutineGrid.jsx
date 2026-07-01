"use client";

import RoutineCard from "./RoutineCard";

const routines = [
  {
    id: 1,
    name: "Morning Routine",
    category: "Morning",
    tasks: [
      "Make Bed",
      "Brush Teeth",
      "Water Plants",
      "Journal",
      "Read 10 Pages",
    ],
  },

  {
    id: 2,
    name: "Evening Reset",
    category: "Evening",
    tasks: [
      "Tidy Desk",
      "Plan Tomorrow",
      "Skincare",
      "Read",
      "Gratitude Note",
    ],
  },

  {
    id: 3,
    name: "Study Routine",
    category: "Study",
    tasks: [
      "Pomodoro",
      "Short Break",
      "Calculations",
      "Long Break",
      "Review Notes",
    ],
  },
];

export default function RoutineGrid() {
  return (
    <section className="routine-grid">

      {routines.map((routine) => (

        <RoutineCard
          key={routine.id}
          routine={routine}
        />

      ))}

    </section>
  );
}