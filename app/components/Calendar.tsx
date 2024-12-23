"use client"; // Required in Next.js app directory for components that use client-side hooks

import React from "react";
import { DatePicker } from "@nextui-org/react";

export default function App() {

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <DatePicker
        label="Birth date"
        className="max-w-[284px] text-white bg-amber-400" // Apply custom width using Tailwind classes
      // disabled={false}       // Disable the DatePicker (true/false)
      // fullWidth={false}      // Make DatePicker take full width
      />
    </div>
  );
}
