"use client";

import React from "react";
import { useLang } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full px-1 py-1"
      style={{
        background: "rgba(255,253,248,0.92)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(123,28,53,0.25)",
        boxShadow: "0 4px 20px rgba(123,28,53,0.15)",
      }}
      role="group"
      aria-label="Language selector"
    >
      <button
        onClick={() => toggle()}
        className="px-3 py-1.5 rounded-full font-dm text-xs font-semibold tracking-wider transition-all duration-300"
        style={{
          background: lang === "en" ? "#7B1C35" : "transparent",
          color: lang === "en" ? "#FAF6EF" : "#7B1C35",
        }}
        aria-pressed={lang === "en"}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => toggle()}
        className="px-3 py-1.5 rounded-full font-dm text-xs font-semibold tracking-wider transition-all duration-300 devanagari"
        style={{
          background: lang === "hi" ? "#7B1C35" : "transparent",
          color: lang === "hi" ? "#FAF6EF" : "#7B1C35",
        }}
        aria-pressed={lang === "hi"}
        aria-label="हिंदी में बदलें"
      >
        हिं
      </button>
    </div>
  );
}
