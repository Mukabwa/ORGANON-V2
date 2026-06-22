// src/app/layout.jsx

import "../styles/globals.css";

import "../styles/planner/daily.css";
import "../styles/planner/timeline.css";
import "../styles/planner/weekly.css";
import "../styles/planner/monthly.css";

import "../styles/modals/add-task-modal.css";

import "../styles/components/buttons.css";
import "../styles/modals/add-task-modal.css";
import "../styles/modals/time-picker.css";
import "../styles/modals/priority-selector.css";
import "../styles/modals/recurrence-selector.css";

import {
  Inter,
  Playfair_Display,
  Great_Vibes,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata = {
  title: "Organon",
  description: "A planner-centered life system",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${playfair.variable}
          ${greatVibes.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}