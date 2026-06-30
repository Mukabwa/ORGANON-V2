"use client";

import { useState } from "react";

import GoalPage from "./GoalPage";
import GoalNavigation from "./GoalNavigation";

const goals = [
  {
    id: 1,
    title: "Graduate University",
    description:
      "One last push before graduation.",
    progress: 72,
    momentum: "Steady",
    consistency: 6,
    quote:
      "Small steps become remarkable journeys.",
  },
  {
    id: 2,
    title: "Build Organon",
    description:
      "Create a planner people genuinely love.",
    progress: 48,
    momentum: "Building",
    consistency: 5,
    quote:
      "Dreams become reality one ordinary day at a time.",
  },
];

export default function GoalViewer() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goal = goals[currentIndex];

  function previousGoal() {

    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);

  }

  function nextGoal() {

    if (currentIndex === goals.length - 1) return;

    setCurrentIndex(currentIndex + 1);

  }

  return (
    <>

      <GoalPage
        goal={goal}
        current={currentIndex + 1}
        total={goals.length}
      />

      <GoalNavigation
        current={currentIndex + 1}
        total={goals.length}
        onPrevious={previousGoal}
        onNext={nextGoal}
      />

    </>
  );

}