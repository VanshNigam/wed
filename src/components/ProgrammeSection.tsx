import Divider from "./Divider";
import { useLang } from "@/contexts/LanguageContext";
import FloralCorner from "./FloralCorner";

const ProgrammeSection = () => {
  const { t } = useLang();

  const timeline = [
    { time: "7:30 PM", timeHi: "शाम 7:30", title: "Guests Arrive", titleHi: "मेहमानों का आगमन", desc: "Welcome & seating at Jashan Palace", descHi: "जश्न पैलेस में स्वागत एवं बैठक", emoji: "🌙", side: "left" },
    { time: "8:00 PM", timeHi: "रात 8:00", title: "Walima Dinner", titleHi: "वलीमा डिनर", desc: "Grand dinner reception begins", descHi: "भव्य डिनर रिसेप्शन की शुरुआत", emoji: "🍽️", side: "right" },
    { time: "9:00 PM", timeHi: "रात 9:00", title: "Blessings & Dua", titleHi: "दुआ एवं आशीर्वाद", desc: "Prayers and well-wishes for the couple", descHi: "जोड़े के लिए दुआ और शुभकामनाएं", emoji: "🤲", side: "left" },
    { time: "10:00 PM", timeHi: "रात 10:00", title: "Celebrations", titleHi: "उत्सव", desc: "Joyous family gathering and festivities", descHi: "खुशी भरा पारिवारिक जश्न", emoji: "🌹", side: "right" },
  ];

  return (
    <section id="programme" className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5EBD8 0%, #FAF6EF 100%)" }}
    >
      <div className="absolute bottom-24 left-8 sm:left-16 float-3 opacity-30" aria-hidden="true">
        <FloralCorner size={55} style={{
          transform: "rotate(-90deg)",
        }} />
      </div>
      <div className="absolute bottom-24 right-8 sm:right-16 float-4 opacity-30" aria-hidden="true">
        <FloralCorner size={55} style={{
          transform: "rotate(-180deg)",
        }} />
      </div>
      <p className="text-center tracking-[0.2em] text-maroon-light text-sm mb-2">
        {t("PROGRAMME", "कार्यक्रम")}
      </p>








      <h2 className="font-display italic text-4xl md:text-5xl text-center text-maroon mb-4">
        {t("Barat", "बारात")}
      </h2>
      <Divider icon="🌸" />

      {/* Event Info Card */}
      <div className="max-w-2xl mx-auto ornament-card p-8 text-center mt-8 mb-12">
        <FloralCorner size={36} className="corner-ornament " style={{
          position: "absolute",
          top: "8px",
          left: "8px",
        }} />
        <FloralCorner size={36} flip className="corner-ornament " style={{
          transform: "rotate(90deg)",
          position: "absolute",
          top: "8px",
          right: "8px",
        }} />
        <FloralCorner size={36} className="corner-ornament " style={{
          position: "absolute",
          transform: "rotate(-90deg)",
          bottom: "8px",
          left: "8px",
        }} />
        <FloralCorner size={36} flip className="corner-ornament" style={{
          transform: "rotate(-180deg)", position: "absolute",
          bottom: "8px",
          right: "8px",
        }} />
        <p className="tracking-[0.2em] text-muted-foreground text-sm mb-2">{t("JOIN US ON", "हमारे साथ जुड़ें")}</p>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-maroon mb-4">
          {t("Saturday, 4th April 2026", "शनिवार, 4 अप्रैल 2026")}
        </h3>
        <Divider />
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <p className="text-2xl mb-1">🕗</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("TIME Of Dept", "प्रस्थान का समय")}</p>
            <p className="font-display font-bold text-maroon">{t("8:00 PM", "रात 8:00")}</p>
          </div>
          <div>
            <p className="text-2xl mb-1">📅</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("DAY", "दिन")}</p>
            <p className="font-display font-bold text-maroon">{t("Saturday", "शनिवार")}</p>
          </div>
          <div>
            <p className="text-2xl mb-1">🎊</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("EVENT", "आयोजन")}</p>
            <p className="font-display font-bold text-maroon">{t("Barat", "बारात")}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h3 className="font-display italic text-2xl text-center text-maroon mb-8">
        {t("Barat Departure Time", "बारात प्रस्थान का समय")} 🌸
      </h3>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        <div className="relative flex items-center mb-12">
          <div className={`w-5/12 pr-6 text-right `}>
            <div className="ornament-card p-4">
              <p className="text-gold text-sm font-semibold">{t("8:00 PM", "शाम 8:00")}</p>
              <p className="font-display font-bold text-maroon">{t("Guests Arrive", "मेहमानों का आगमन")}</p>
              <p className="text-sm text-muted-foreground">{t("Welcome & seating at BagamPurva Eidgah", "बेगमपुरव| ईदगाह में स्वागत एवं बैठक")}</p>
            </div>
          </div>

          <div className="w-2/12 flex justify-center relative z-10">
            <div className="absolute left-0 sm:static flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10"
              style={{
                background: "linear-gradient(135deg, #7B1C35, #A63050)",
                boxShadow: "0 0 0 3px #FAF6EF, 0 0 0 5px rgba(123,28,53,0.3)",
              }}
              aria-hidden="true">
              🌙
            </div>
          </div>

          <div className={`w-5/12 `}>

            <div className="ornament-card p-4">
              <a
                href="https://maps.app.goo.gl/C8Y92VMRU1qCEmpQ9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-semibold"
              > {t("VIEW ON GOOGLE MAPS", "गूगल मैप पर देखें")}</a>
            </div>
          </div>
        </div>
      </div>



      <h2 className="font-display italic text-4xl md:text-5xl text-center text-maroon mb-4">
        {t("Walima Ceremony", "वलीमा समारोह")}
      </h2>
      <Divider icon="🌸" />

      {/* Event Info Card */}
      <div className="max-w-2xl mx-auto ornament-card p-8 text-center mt-8 mb-12">
        <FloralCorner size={36} className="corner-ornament " style={{
          position: "absolute",
          top: "8px",
          left: "8px",
        }} />
        <FloralCorner size={36} flip className="corner-ornament " style={{
          transform: "rotate(90deg)",
          position: "absolute",
          top: "8px",
          right: "8px",
        }} />
        <FloralCorner size={36} className="corner-ornament " style={{
          position: "absolute",
          transform: "rotate(-90deg)",
          bottom: "8px",
          left: "8px",
        }} />
        <FloralCorner size={36} flip className="corner-ornament" style={{
          transform: "rotate(-180deg)", position: "absolute",
          bottom: "8px",
          right: "8px",
        }} />
        <p className="tracking-[0.2em] text-muted-foreground text-sm mb-2">{t("JOIN US ON", "हमारे साथ जुड़ें")}</p>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-maroon mb-4">
          {t("Monday, 6th April 2026", "सोमवार, 6 अप्रैल 2026")}
        </h3>
        <Divider />
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>
            <p className="text-2xl mb-1">🕗</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("TIME", "समय")}</p>
            <p className="font-display font-bold text-maroon">{t("8:00 PM", "रात 8:00")}</p>
            <p className="text-xs text-muted-foreground">{t("Dinner onwards", "रात्रि भोज से")}</p>
          </div>
          <div>
            <p className="text-2xl mb-1">📅</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("DAY", "दिन")}</p>
            <p className="font-display font-bold text-maroon">{t("Monday", "सोमवार")}</p>
            <p className="text-xs text-muted-foreground">बरोज सोमवार</p>
          </div>
          <div>
            <p className="text-2xl mb-1">🎊</p>
            <p className="tracking-wider text-xs text-muted-foreground">{t("EVENT", "आयोजन")}</p>
            <p className="font-display font-bold text-maroon">{t("Walima", "वलीमा")}</p>
            <p className="text-xs text-muted-foreground">जश्ने-वलीमा</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <h3 className="font-display italic text-2xl text-center text-maroon mb-8">
        {t("Evening Programme", "शाम का कार्यक्रम")} 🌸
      </h3>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        {timeline.map((item, i) => (
          <div key={i} className="relative flex items-center mb-12">
            <div className={`w-5/12 ${item.side === "left" ? "pr-6 text-right" : ""}`}>
              {item.side === "left" && (
                <div className="ornament-card p-4">
                  <p className="text-gold text-sm font-semibold">{t(item.time, item.timeHi)}</p>
                  <p className="font-display font-bold text-maroon">{t(item.title, item.titleHi)}</p>
                  <p className="text-sm text-muted-foreground">{t(item.desc, item.descHi)}</p>
                </div>
              )}
            </div>

            <div className="w-2/12 flex justify-center relative z-10">
              <div className="absolute left-0 sm:static flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10"
                style={{
                  background: "linear-gradient(135deg, #7B1C35, #A63050)",
                  boxShadow: "0 0 0 3px #FAF6EF, 0 0 0 5px rgba(123,28,53,0.3)",
                }}
                aria-hidden="true">
                {item.emoji}
              </div>
            </div>

            <div className={`w-5/12 ${item.side === "right" ? "pl-6" : ""}`}>
              {item.side === "right" && (
                <div className="ornament-card p-4">
                  <p className="text-gold text-sm font-semibold">{t(item.time, item.timeHi)}</p>
                  <p className="font-display font-bold text-maroon">{t(item.title, item.titleHi)}</p>
                  <p className="text-sm text-muted-foreground">{t(item.desc, item.descHi)}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammeSection;
