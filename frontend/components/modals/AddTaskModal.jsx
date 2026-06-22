"use client";

import { useState } from "react";

import PrioritySelector from "./PrioritySelector";
import RecurrenceSelector from "./RecurrenceSelector";
import TimePicker from "./TimePicker";

export default function AddTaskModal({
  isOpen,
  onClose,
}) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("09:00");

  const [priority, setPriority] =
    useState("medium");

  const [repeat, setRepeat] =
    useState("once");

  const [selectedDays, setSelectedDays] =
    useState([]);

  const [dayOfMonth, setDayOfMonth] =
    useState(1);

  if (!isOpen) return null;

  const weekDays = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleSubmit = () => {
    const payload = {
      kind: "task",

      title,

      description,

      scheduling: {
        type:
          repeat === "once"
            ? "once"
            : "recurring",

        localDate: date,

        time,

        recurrenceRule:
          repeat === "once"
            ? null
            : {
                frequency: repeat,

                startDate: date,

                ...(repeat === "weekly" && {
                  daysOfWeek:
                    selectedDays,
                }),

                ...(repeat === "monthly" && {
                  dayOfMonth,
                }),
              },
      },

      metadata: {
        priority,
      },
    };

    console.log(
      "TASK PAYLOAD"
    );

    console.log(
      JSON.stringify(
        payload,
        null,
        2
      )
    );

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="task-modal">

        <div className="modal-header">

          <h2>
            Create Task
          </h2>

          <button
            className="modal-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        {/* TITLE */}

        <div className="form-group">

          <label>
            Title
          </label>

          <input
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

        </div>

        {/* PRIORITY */}

        <div className="form-group">

          <label>
            Priority
          </label>

          <PrioritySelector
            value={priority}
            onChange={
              setPriority
            }
          />

        </div>

        {/* DESCRIPTION */}

        <div className="form-group">

          <label>
            Description
          </label>

          <textarea
            rows={4}
            placeholder="Add notes..."
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

        </div>

        {/* DATE */}

        <div className="form-group">

          <label>
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
          />

        </div>

        {/* TIME */}

        <div className="form-group">

          <label>
            Time
          </label>

          <TimePicker
            value={time}
            onChange={setTime}
          />

        </div>

        {/* REPEAT */}

        <div className="form-group">

          <label>
            Repeat
          </label>

          <RecurrenceSelector
            value={repeat}
            onChange={setRepeat}
          />

        </div>

        {/* WEEKLY */}

        {repeat === "weekly" && (

          <div className="form-group">

            <label>
              Repeat On
            </label>

            <div className="weekday-grid">

              {weekDays.map(
                (day) => (

                  <button
                    key={day}
                    type="button"
                    className={
                      selectedDays.includes(
                        day
                      )
                        ? "weekday active"
                        : "weekday"
                    }
                    onClick={() =>
                      toggleDay(
                        day
                      )
                    }
                  >
                    {day}
                  </button>

                )
              )}

            </div>

          </div>

        )}

        {/* MONTHLY */}

        {repeat === "monthly" && (

          <div className="form-group">

            <label>
              Day Of Month
            </label>

            <input
              type="number"
              min="1"
              max="31"
              value={
                dayOfMonth
              }
              onChange={(e) =>
                setDayOfMonth(
                  Number(
                    e.target.value
                  )
                )
              }
            />

          </div>

        )}

        <div className="modal-actions">

          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="primary-btn"
            onClick={
              handleSubmit
            }
          >
            Create Task
          </button>

        </div>

      </div>

    </div>
  );
}