// src/app/layout.jsx

import "../styles/globals.css";

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