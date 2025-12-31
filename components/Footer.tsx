"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <footer className="py-6 text-center text-gray-500">© {year ?? "..."} Faseer Ahmed. All rights reserved.</footer>;
}
