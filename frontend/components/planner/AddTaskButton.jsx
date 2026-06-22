"use client";

import { useState } from "react";

import AddTaskModal
  from "@/components/modals/AddTaskModal";

export default function AddTaskButton() {

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <button
        className="add-task-btn"
        onClick={() =>
          setOpen(true)
        }
      >
        + Add Task
      </button>

      <AddTaskModal
        isOpen={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}