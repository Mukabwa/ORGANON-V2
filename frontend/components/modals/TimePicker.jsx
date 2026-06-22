"use client";

import { useEffect, useState } from "react";

export default function TimePicker({
  value = "09:00",
  onChange,
}) {

  const [hourTens, setHourTens] =
    useState(0);

  const [hourOnes, setHourOnes] =
    useState(9);

  const [minuteTens, setMinuteTens] =
    useState(0);

  const [minuteOnes, setMinuteOnes] =
    useState(0);

  const [period, setPeriod] =
    useState("AM");

  useEffect(() => {

    let hour =
      hourTens * 10 + hourOnes;

    if (hour === 0) {
      hour = 12;
    }

    const displayTime =
      `${hour
        .toString()
        .padStart(2, "0")}:${minuteTens}${minuteOnes} ${period}`;

    onChange?.(displayTime);

  }, [
    hourTens,
    hourOnes,
    minuteTens,
    minuteOnes,
    period,
    onChange,
  ]);

  const Wheel = ({
    value,
    values,
    onSelect,
  }) => (

    <div className="time-wheel">

      <button
        type="button"
        className="wheel-arrow"
        onClick={() => {

          const index =
            values.indexOf(
              value
            );

          const next =
            index <= 0
              ? values.length - 1
              : index - 1;

          onSelect(
            values[next]
          );

        }}
      >
        ▲
      </button>

      <div className="wheel-value">
        {value}
      </div>

      <button
        type="button"
        className="wheel-arrow"
        onClick={() => {

          const index =
            values.indexOf(
              value
            );

          const next =
            index >=
            values.length - 1
              ? 0
              : index + 1;

          onSelect(
            values[next]
          );

        }}
      >
        ▼
      </button>

    </div>

  );

  return (

    <div className="organon-time-picker">

      <div className="time-picker-row">

        <Wheel
          value={hourTens}
          values={[0, 1]}
          onSelect={setHourTens}
        />

        <Wheel
          value={hourOnes}
          values={[
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9,
          ]}
          onSelect={setHourOnes}
        />

        <span className="time-separator">
          :
        </span>

        <Wheel
          value={minuteTens}
          values={[
            0,
            1,
            2,
            3,
            4,
            5,
          ]}
          onSelect={setMinuteTens}
        />

        <Wheel
          value={minuteOnes}
          values={[
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9,
          ]}
          onSelect={setMinuteOnes}
        />

        <Wheel
          value={period}
          values={[
            "AM",
            "PM",
          ]}
          onSelect={setPeriod}
        />

      </div>

      <div className="selected-time">

        Selected Time

        <strong>
          {`${hourTens}${hourOnes}:${minuteTens}${minuteOnes} ${period}`}
        </strong>

      </div>

    </div>

  );
}