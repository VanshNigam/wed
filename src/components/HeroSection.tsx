import Divider from "./Divider";
import { useLang } from "@/contexts/LanguageContext";
import FloralCorner from "./FloralCorner";
import CountdownSection from "./CountdownSection";
import { useEffect, useRef } from "react";
import { Transform } from "stream";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const el = heroRef?.current;
    if (!el) return;
    const items = el?.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    items?.forEach((item) => observer?.observe(item));
    return () => observer?.disconnect();
  }, []);

  return (
    <section  ref={heroRef} className="relative z-0 min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #f5e8d0 0%, #FAF6EF 40%, #fdf8f0 100%)",
      }}>


      {/* Edge decorations */}

      <div className="absolute top-16 left-8 sm:left-16  float-1 opacity-40" aria-hidden="true">
        <FloralCorner size={70} />
      </div>
      <div className="absolute top-16 right-8 sm:right-16 float-2 opacity-40" aria-hidden="true">
        <FloralCorner size={70} style={{
            transform: "rotate(90deg)",}}/>
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237B1C35' fill-opacity='1'%3E%3Cpath d='M30 30m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

         <div className="absolute top-40 left-4 sm:left-40 xs:mt-10 float-2 hidden md:block" aria-hidden="true">
        <div
          className="px-4 py-3 rounded-lg text-center"
          style={{
            background: "rgba(255,253,248,0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(123,28,53,0.2)",
            boxShadow: "0 8px 32px rgba(123,28,53,0.1)",
          }}
        >
          <div className="text-xs text-maroon font-dm font-semibold tracking-widest uppercase">
            {t("Walima", "वलीमा")}
          </div>
          <div className="text-2xl mt-1">💍</div>
        </div>
      </div>


      <div className="absolute top-40 right-4 sm:right-40 float-1 hidden md:block" aria-hidden="true">
        <div
          className="px-4 py-3 rounded-lg text-center"
          style={{
            background: "rgba(255,253,248,0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(123,28,53,0.2)",
            boxShadow: "0 8px 32px rgba(123,28,53,0.1)",
          }}
        >
          <div className="text-xs text-maroon font-dm font-semibold tracking-widest uppercase">
            {t("Barat", "बारात")}
          </div>
          <div className="text-2xl mt-1">💍</div>
        </div>
      </div>
      <div className="absolute bottom-40 left-4 sm:left-40 xs:mt-10 float-2 hidden md:block" aria-hidden="true">
        <div
          className="px-4 py-3 rounded-lg text-center"
          style={{
            background: "rgba(255,253,248,0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(201,168,76,0.3)",
            boxShadow: "0 8px 32px rgba(201,168,76,0.15)",
          }}
        >
          <div className="text-xs font-dm font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
            6 April
          </div>
          <div className="text-2xl mt-1">📅</div>
        </div>
      </div>



      <div className="absolute bottom-40 right-4 sm:right-40 float-1 hidden md:block" aria-hidden="true">
        <div
          className="px-4 py-3 rounded-lg text-center"
          style={{
            background: "rgba(255,253,248,0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(201,168,76,0.3)",
            boxShadow: "0 8px 32px rgba(201,168,76,0.15)",
          }}
        >
          <div className="text-xs font-dm font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>
            4 April
          </div>
          <div className="text-2xl mt-1">📅</div>
        </div>
      </div>

      <p className="font-display italic text-maroon-light text-lg md:text-xl mb-1">
        {t("In The Name Of 'Allah'", "अल्लाह के नाम से")}
      </p>
      <p className="font-display italic text-maroon-light text-base md:text-lg mb-6">
        {t("the Most Beneficent & Merciful", "जो सबसे दयालु और कृपालु है")}
      </p>

      <Divider />

      <p className="tracking-[0.3em] text-muted-foreground text-sm mb-2">
        {t("MRS. & MR.", "श्रीमती एवं श्री")}
      </p>
      <h1 className="font-display text-3xl md:text-4xl font-bold  mb-4"   style={{ fontSize: "clamp(22px, 5vw, 32px)", color: "#7B1C35" }}>
        {t("Wakeel Ahmad", "वकील अहमद")}
      </h1>
      <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-l"   style={{ color: "#8B6070" }}>
        {t(
          "Request the pleasure of your gracious presence on the auspicious occasion of",
          "अपने पुत्र के वलीमा समारोह में आपकी शुभ उपस्थिति का सादर निमंत्रण देते हैं"
        )}
      </p>

      <h2 className="font-script text-6xl md:text-8xl text-gold-light tracking-wide mb-2">
        {t("Walima", "वलीमा")}
      </h2>
       <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-l"   style={{ color: "#8B6070" }}>
        {t(
          "AND",
          "और"
        )}
      </p>
      <h2 className="font-script text-6xl md:text-8xl text-gold-light tracking-wide mb-2">
        {t("Barat", "बारात")}
      </h2>
      <p className="font-display italic text-maroon text-2xl md:text-3xl mb-8">
        {t("Ceremony", "समारोह")}
      </p>

      <Divider icon="🌸" />

      <p className="tracking-[0.2em] text-muted-foreground text-sm mb-4">
        {t("OF THEIR SON", "")}
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="text-center">
          <h3 className=" text-4xl md:text-5xl text-maroon" style={{ color: "#7B1C35", fontFamily: 'Fraunces', fontStyle: 'italic' }}>{t("Naeem Ahmad", "नईम अहमद")}</h3>
          <p className="text-sm text-muted-foreground mt-2">{t("S/O. Wakeel Ahmad", "पुत्र: वकील अहमद")}</p>
          <p className="text-sm text-muted-foreground">{t("F-78, Rajiv Nagar, Machhariya", "एफ-78, राजीव नगर, मछरिया")}</p>
          <p className="text-sm text-muted-foreground">{t("Naubasta, Kanpur", "नौबस्ता, कानपुर")}</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-2xl">💕</span>
          <p className="font-display italic text-gold text-sm">{t("Weds", "विवाह")}</p>
        </div>

        <div className="text-center">
          <h3 className="font-script text-4xl md:text-5xl text-maroon" style={{ color: "#7B1C35", fontFamily: 'Fraunces', fontStyle: 'italic' }}>{t("Mehvish Anjum", "मेहविश अन्जुम")}</h3>
          <p className="text-sm text-muted-foreground mt-2">{t("D/O. Mr. Fakhre Alam", "पुत्री: जनाब फख़रे आलम")}</p>
          <p className="text-sm text-muted-foreground">{t("131/127, Begumpurwa", "131/127, बेगमपुरवा")}</p>
          <p className="text-sm text-muted-foreground">{t("Kanpur Nagar", "कानपुर नगर")}</p>
        </div>
      </div>

        <CountdownSection />


    </section>
  );
};

export default HeroSection;
















//  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//           {/* Groom */}
//           <div className="reveal wedding-card p-8 text-center relative">
//             <FloralCorner size={36} className="corner-ornament tl" />
//             <FloralCorner size={36} flip className="corner-ornament tr" />
//             <FloralCorner size={36} className="corner-ornament bl" style={{ transform: 'scaleY(-1)' }} />
//             <FloralCorner size={36} flip className="corner-ornament br" />

//             <div className="relative z-10">
//               <div
//                 className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl pulse-glow"
//                 style={{ background: "linear-gradient(135deg, #7B1C35, #A63050)" }}
//                 aria-label="Groom icon"
//               >
//                 🤵
//               </div>
//               <p
//                 className="font-dm text-xs tracking-widest uppercase mb-1"
//                 style={{ color: "#C9A84C", letterSpacing: "2px" }}
//               >
//                 {t?.groom}
//               </p>
//               <h3
//                 className="font-fraunces italic mb-3"
//                 style={{ fontSize: "clamp(22px, 5vw, 32px)", color: "#7B1C35" }}
//               >
//                 {language === "hi" ? "नईम अहमद" : "Naeem Ahmad"}
//               </h3>
//               <OrnamentalDivider symbol="✦" />
//               <div className="mt-3 space-y-1">
//                 <p className="font-dm text-sm" style={{ color: "#5C3A47" }}>
//                   {t?.sonOf} <strong>{language === "hi" ? "वकील अहमद" : "Wakeel Ahmad"}</strong>
//                 </p>
//                 <p className="font-dm text-sm" style={{ color: "#8B6070" }}>
//                   {t?.groomAddress1}
//                 </p>
//                 <p className="font-dm text-sm" style={{ color: "#8B6070" }}>
//                   {t?.groomAddress2}
//                 </p>
//               </div>
//               {/* Secondary language line */}
//               <div
//                 className="mt-4 pt-4 border-t"
//                 style={{ borderColor: "rgba(123,28,53,0.15)" }}
//               >
//                 <p className="devanagari text-base font-semibold" style={{ color: "#7B1C35" }}>
//                   {language === "hi" ? "Naeem Ahmad" : "नईम अहमद"}
//                 </p>
//                 <p className="devanagari text-xs mt-1" style={{ color: "#8B6070" }}>
//                   {language === "hi" ? "S/O. Wakeel Ahmad" : "पिसर: वकील अहमद"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Bride */}
//           <div className="reveal reveal-delay-2 wedding-card p-8 text-center relative">
//             <FloralCorner size={36} className="corner-ornament tl" />
//             <FloralCorner size={36} flip className="corner-ornament tr" />
//             <FloralCorner size={36} className="corner-ornament bl" />
//             <FloralCorner size={36} flip className="corner-ornament br" />

//             <div className="relative z-10">
//               <div
//                 className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl pulse-glow"
//                 style={{ background: "linear-gradient(135deg, #A63050, #C9A84C)" }}
//                 aria-label="Bride icon"
//               >
//                 👰
//               </div>
//               <p
//                 className="font-dm text-xs tracking-widest uppercase mb-1"
//                 style={{ color: "#C9A84C", letterSpacing: "2px" }}
//               >
//                 {t?.bride}
//               </p>
//               <h3
//                 className="font-fraunces italic mb-3"
//                 style={{ fontSize: "clamp(22px, 5vw, 32px)", color: "#7B1C35" }}
//               >
//                 {language === "hi" ? "मेहविश अन्जुम" : "Mehvish Anjum"}
//               </h3>
//               <OrnamentalDivider symbol="✦" />
//               <div className="mt-3 space-y-1">
//                 <p className="font-dm text-sm" style={{ color: "#5C3A47" }}>
//                   {t?.daughterOf} <strong>{language === "hi" ? "जनाब फखरे आलम" : "Mr. Fakhre Alam"}</strong>
//                 </p>
//                 <p className="font-dm text-sm" style={{ color: "#8B6070" }}>
//                   {t?.brideAddress1}
//                 </p>
//                 <p className="font-dm text-sm" style={{ color: "#8B6070" }}>
//                   {t?.brideAddress2}
//                 </p>
//               </div>
//               {/* Secondary language line */}
//               <div
//                 className="mt-4 pt-4 border-t"
//                 style={{ borderColor: "rgba(123,28,53,0.15)" }}
//               >
//                 <p className="devanagari text-base font-semibold" style={{ color: "#7B1C35" }}>
//                   {language === "hi" ? "Mehvish Anjum" : "मेहविश अन्जुम"}
//                 </p>
//                 <p className="devanagari text-xs mt-1" style={{ color: "#8B6070" }}>
//                   {language === "hi" ? "D/O. Mr. Fakhre Alam" : "दुख्तर: जनाब फखरे आलम"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>