"use client";

import PlannerViewSwitcher
  from "./PlannerViewSwitcher";

export default function MonthlyPlanner() {

  return (

    <div className="monthly-page">

      <PlannerViewSwitcher />

      <div className="monthly-header">

        <button className="month-nav">
          ←
        </button>

        <h1>
          June 2025
        </h1>

        <button className="month-nav">
          →
        </button>

      </div>

      <button className="current-month-btn">
        This Month
      </button>

      <div className="month-summary-card">

        <div>
          <strong>2</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>5</strong>
          <span>Goals</span>
        </div>

        <div>
          <strong>12</strong>
          <span>Routines</span>
        </div>

      </div>

      <div className="monthly-calendar">

        {[...Array(35)].map((_, index) => (

          <div
            key={index}
            className="calendar-cell"
          >

            <span className="calendar-day">
              {index + 1}
            </span>

          </div>

        ))}

      </div>

      <div className="monthly-upcoming-card">

        <h3>
          Upcoming
        </h3>

        <ul>

          <li>
            16 • Dentist Appointment
          </li>

          <li>
            19 • Mom's Birthday
          </li>

          <li>
            23 • Project Deadline
          </li>

        </ul>

      </div>

    </div>

  );
}