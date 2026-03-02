import Divider from "./Divider";
import { useLang } from "@/contexts/LanguageContext";
import FloralCorner from "./FloralCorner";
import { Phone } from "lucide-react";
import chacha1 from "../images/WhatsApp Image 2026-03-02 at 10.20.33AM.jpeg"
import chacha2 from "../images/WhatsApp Image 2026-03-02 at 10.20.34 AM.jpeg"
import mama1 from "../images/WhatsApp Image 2026-03-02 at 10.20.31 AM.jpeg"
import mama2 from "../images/WhatsApp Image 2026-03-02 at 10.20.32 AM.jpeg"


const wellWishers = [
  { name: "Abdul Salam", nameHi: "अब्दुल सलाम", role: "R.S.V.P." },
  { name: "Alamgeer (Mukhiya)", nameHi: "आलमगीर (मुखिया)", role: "W.B.C.F." },
  { name: "Wasim Ahmad", nameHi: "वसीम अहमद", role: "W.B.C.F." },
  { name: "Haseen Ahmad", nameHi: "हसीन अहमद", role: "W.B.C.F." },
  { name: "Nadeem Ahmad", nameHi: "नदीम अहमद", role: "W.B.C.F." },
  { name: "Mohd. Akram", nameHi: "मोहम्मद अकरम", role: "W.B.C.F." },
];

const warmRegards = [
  { en: "Khush Mohammad", hi: "खुश मोहम्मद" },
  { en: "Mo. Aifaz", hi: "मो. ऐफ़ाज़" },
  { en: "Mo. Arhan", hi: "मो. अरहान" },
  { en: "Abdul Hadi", hi: "अब्दुल हादी" },
  { en: "Mo. Hasir", hi: "मो. हासिर" },
];


const lovedOnesQuotes = [
  {
    quote: "You are cordially invited to my uncle's wedding! ❤️",
    quoteHi: "मेरे चाचू की शादी है, आना ❤️",
    image1: chacha1,
    image2:chacha2
  },
  {
    quote: "It's my maternal uncle's wedding, please do come!",
    quoteHi: "मेरे मामू की शादी है, आना ❤️",
    image1: mama1,
    image2:mama2  
  },
];


const WishesSection = () => {
  const { t } = useLang();

  return (
    <section id="wishes" className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FAF6EF 0%, #F5EBD8 100%)" }}>
      <p className="text-center tracking-[0.2em] text-maroon-light text-sm mb-2">
        {t("WITH LOVE & BLESSINGS", "प्यार एवं दुआओं के साथ")}
      </p>
      <h2 className="font-display italic text-4xl md:text-5xl text-center text-foreground mb-4">
        {t("Best Wishes", "शुभकामनाएं")}
      </h2>
      <Divider icon="🌺" />

      {/* Blessing Card */}
      <div className="max-w-3xl mx-auto ornament-card p-8 md:p-12 text-center mt-8 mb-12">
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
        <p className="text-3xl mb-4">🤲</p>
        <p className="font-display italic text-muted-foreground text-base md:text-lg leading-relaxed">
          {t(
            "May Allah bless this union with love, happiness, and prosperity. May Naeem and Mehvish find in each other a source of joy and strength throughout their lives together.",
            "अल्लाह इस जोड़ी को प्यार, खुशियों और समृद्धि से नवाज़े। नईम और मेहविश को एक-दूसरे में खुशी और ताकत का स्रोत मिले।"
          )}
        </p>
        <Divider />
        <p className="text-muted-foreground text-sm mt-4" dir="rtl">آمین ثم آمین</p>
      </div>







      <h3 className="font-display italic text-2xl text-center text-foreground mb-2 mt-16">
        {t("Words from Loved Ones", "अपनों के बोल")}
      </h3>
      <p className="text-center text-muted-foreground text-sm mb-8">
        {t("Heartfelt messages from our dear ones", "हमारे प्रियजनों के दिल से संदेश")}
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {lovedOnesQuotes.map((q) => (
          <div key={q.quote}
            className=" relative bg-card border border-border rounded-sm p-6 pt-14 text-center group hover:shadow-lg transition-shadow duration-300"
            style={{ background: "linear-gradient(135deg, #fffdf8 0%, #fdf5e8 50%, #faf0e0 100%)" }}
          >
            {/* Decorative quote mark */}
            <span className="absolute top-3 left-4 text-4xl font-script text-maroon opacity-20 select-none">"</span>
            <span className="absolute bottom-3 right-4 text-4xl font-script text-maroon opacity-20 select-none rotate-180">"</span>

            {/* Avatar */}
            <div className="absolute -top-8 left-1/3 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-[3px] border-gold flex items-center justify-center overflow-hidden shadow-md">
                <img src={q.image1} alt="Naeem & Mehvish" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="absolute -top-8 left-2/3 -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-[3px] border-gold flex items-center justify-center overflow-hidden shadow-md">
                <img src={q.image2} alt="Naeem & Mehvish" className="w-full h-full object-cover" />

              </div>
            </div>
            {/* Quote */}
            <p className="font-display italic text-muted-foreground text-sm leading-relaxed mb-5">
              "{q.quote}"
            </p>

            {/* Thin divider */}
            <div className="w-12 h-px bg-maroon/40 mx-auto mb-3" />

            <p className="font-display italic text-muted-foreground text-sm leading-relaxed mb-5">
              "{q.quoteHi}"
            </p>

          </div>
        ))}
      </div>


      {/* Well-Wishers */}
      <h3 className="font-display italic text-2xl text-center text-maroon mb-6">
        {t("Well-Wishers", "शुभचिंतक")}
      </h3>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {wellWishers.map((w) => (
          <div key={w.name} className="bg-card border border-border rounded-sm p-4 text-center" style={{ background: "linear-gradient(135deg, #fffdf8 0%, #fdf5e8 50%, #faf0e0 100%)" }}>
            <div className="text-2xl mb-2" aria-hidden="true">🌟</div>
            <p className="font-display font-semibold text-foreground">{t(w.name, w.nameHi)}</p>
            <p className="font-dm text-xs mt-1" style={{ color: "#C9A84C" }}>{w.role}</p>
          </div>
        ))}
      </div>

      {/* Warm Regards Banner */}
      <div className="max-w-4xl mx-auto bg-maroon rounded-sm p-6 text-center">
        <p className="tracking-[0.2em] text-primary-foreground/80 text-sm mb-3">
          {t("WARM REGARDS", "शुभकामनाएं")}
        </p>
        <p className="font-display italic text-primary-foreground text-sm md:text-base">
          {warmRegards.map((r) => t(r.en, r.hi)).join("  ·  ")}
        </p>
      </div>

      {/* Contact Details */}
      <div className="max-w-2xl mx-auto text-center mt-10 pt-6  border-t border-border">
        <p className="text-muted-foreground text-sm mb-3">
          {t("For any queries, contact:", "किसी भी जानकारी के लिए संपर्क करें:")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-foreground text-sm">
          <a href="tel:9956099866" className="flex items-center gap-1.5 hover:text-maroon transition-colors">
            <Phone className="w-3.5 h-3.5" /> 9956099866
          </a>
          <span className="text-muted-foreground">·</span>
          <a href="tel:7011256992" className="flex items-center gap-1.5 hover:text-maroon transition-colors">
            <Phone className="w-3.5 h-3.5" /> 7011256992
          </a>
          <span className="text-muted-foreground">·</span>
          <a href="tel:8957505406" className="flex items-center gap-1.5 hover:text-maroon transition-colors">
            <Phone className="w-3.5 h-3.5" /> 8957505406
          </a>
        </div>
      </div>

    </section>
  );
};

export default WishesSection;
