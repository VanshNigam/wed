import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

const CountdownSection = () => {
  const { t } = useLang();
  const targetDate = new Date("2026-04-06T20:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, targetDate - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { value: timeLeft.days, en: "DAYS", hi: "दिन" },
    { value: timeLeft.hours, en: "HOURS", hi: "घंटे" },
    { value: timeLeft.mins, en: "MINS", hi: "मिनट" },
    { value: timeLeft.secs, en: "SECS", hi: "सेकंड" },
  ];

  return (
    <section className="reveal reveal-delay-4 mt-8">
      <div
        className="inline-block px-6 py-4 rounded-sm"
        style={{
          background: "rgba(123,28,53,0.06)",
          border: "1px solid rgba(123,28,53,0.2)",
        }}
      >            <p className="font-dm text-xs tracking-widest uppercase mb-3" style={{ color: "#8B6070" }}>
          {t("COUNTING DOWN TO", "उलटी गिनती")}
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {blocks.map((b, i) => (
            <div key={b.en} className="flex items-center gap-2 md:gap-4">
              <div className="bg-maroon rounded-lg w-[60px] h-[72px] md:w-[80px] md:h-[90px] flex flex-col items-center justify-center">
                <p className="text-2xl sm:text-3xl font-bold text-white font-fraunces"
                  style={{ fontVariantNumeric: "tabular-nums" }}>

                  {String(b.value).padStart(2, "0")}
                </p>
                <p className="text-xs text-gold-light mt-1 tracking-widest uppercase font-dm">
                  {t(b.en, b.hi)}
                </p>
              </div>
              {i < blocks.length - 1 && (
                <span className="text-maroon text-xl md:text-2xl font-bold select-none">:</span>
              )}
            </div>
          ))}
        </div>

        <p
          className="font-fraunces font-semibold mt-3"
          style={{ color: "#7B1C35", fontSize: "clamp(14px, 3vw, 18px)" }}
        >          {t("Monday, 6th April 2026 · 8:00 PM", "सोमवार, 6 अप्रैल 2026 · रात 8:00 बजे")}
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;
