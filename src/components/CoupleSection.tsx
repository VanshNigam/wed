import Divider from "./Divider";
import { useLang } from "@/contexts/LanguageContext";
import FloralCorner from "./FloralCorner";

const CoupleSection = () => {
  const { t } = useLang();

  return (
    <section id="couple" className="py-20 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FAF6EF 0%, #F5EBD8 100%)" }}
    >
      <div className="absolute top-16 left-8 sm:left-16 float-1 opacity-40" aria-hidden="true">
              <FloralCorner size={70} />
            </div>
            <div className="absolute top-16 right-8 sm:right-16 float-2 opacity-40" aria-hidden="true">
              <FloralCorner size={70} style={{
                  transform: "rotate(90deg)",}}/>
            </div>
      <p className="text-center tracking-[0.2em] text-maroon-light text-sm mb-2">
        {t("THE BLESSED UNION", "पवित्र मिलन")}
      </p>
      <h2 className="font-display italic text-7xl md:text-5xl text-center text-maroon mb-4">
        {t("The Couple", "दूल्हा-दुल्हन")}
      </h2>
      <Divider icon="✻" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8  ">
        {/* Groom */}
        <div className=" ornament-card p-8 text-center relative lg:w-96 lg:ml-auto">
          <FloralCorner size={36} className="corner-ornament " style={{  position: "absolute",
  top: "8px",
  left: "8px", }} />
          <FloralCorner size={36} flip className="corner-ornament " style={{
            transform: "rotate(90deg)",
  position: "absolute",
  top: "8px",
  right: "8px",
}} />
          <FloralCorner size={36} className="corner-ornament " style={{  position: "absolute",
          transform: "rotate(-90deg)",
  bottom: "8px",
  left: "8px", }} />
          <FloralCorner size={36} flip className="corner-ornament" style={{ transform: "rotate(-180deg)", position: "absolute",
  bottom: "8px",
  right: "8px", }} />
           <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl pulse-glow"
                style={{ background: "linear-gradient(135deg, #7B1C35, #A63050)" }}
                aria-label="Groom icon"
              >
                🤵
              </div>
          <p className="tracking-[0.2em] text-maroon-light text-xs mb-2">{t("GROOM", "दूल्हा")}</p>
          <h3 className="font-script text-3xl text-maroon mb-4">{t("Naeem Ahmad", "नईम अहमद")}</h3>
          <Divider />
          <p className="text-sm text-muted-foreground">
            {t("Son of", "पिसर:")} <span className="font-semibold text-foreground">{t("Wakeel Ahmad", "वकील अहमद")}</span>
          </p>
          <p className="text-sm text-muted-foreground">{t("F-78, Rajiv Nagar, Machhariya", "एफ-78, राजीव नगर, मछरिया")}</p>
          <p className="text-sm text-muted-foreground">{t("Naubasta, Kanpur", "नौबस्ता, कानपुर")}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-display font-bold text-foreground">{t( "नईम अहमद","Naeem Ahmad")}</p>
            <p className="text-sm text-muted-foreground">{t("पिसर: वकील अहमद","Son of Wakeel Ahmad" )}</p>
          </div>
        </div>

        {/* Bride */}
        <div className="ornament-card p-8 text-center lg:w-96 lg:mr-auto relative">
             <FloralCorner size={36} className="corner-ornament " style={{  position: "absolute",
  top: "8px",
  left: "8px", }} />
          <FloralCorner size={36} flip className="corner-ornament " style={{
            transform: "rotate(90deg)",
  position: "absolute",
  top: "8px",
  right: "8px",
}} />
          <FloralCorner size={36} className="corner-ornament " style={{  position: "absolute",
          transform: "rotate(-90deg)",
  bottom: "8px",
  left: "8px", }} />
          <FloralCorner size={36} flip className="corner-ornament" style={{ transform: "rotate(-180deg)", position: "absolute",
  bottom: "8px",
  right: "8px", }} />
          <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl pulse-glow"
                style={{ background: "linear-gradient(135deg, #A63050, #C9A84C)" }}
                aria-label="Bride icon"
              >
                👰
              </div>
          <p className="tracking-[0.2em] text-maroon-light text-xs mb-2">{t("BRIDE", "दुल्हन")}</p>
          <h3 className="font-script text-3xl text-maroon mb-4">{t("Mehvish Anjum", "मेहविश अन्जुम")}</h3>
          <Divider />
          <p className="text-sm text-muted-foreground">
            {t("Daughter of", "दुख्तर:")} <span className="font-semibold text-foreground">{t("Mr. Fakhre Alam", "जनाब फख़रे आलम")}</span>
          </p>
          <p className="text-sm text-muted-foreground">{t("131/127, Begumpurwa", "131/127, बेगमपुरवा")}</p>
          <p className="text-sm text-muted-foreground">{t("Kanpur Nagar", "कानपुर नगर")}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="font-display font-bold text-foreground">{t( "मेहविश अन्जुम","Mehvish Anjum")}</p>
            <p className="text-sm text-muted-foreground">{t("दुख्तर: जनाब फख़रे आलम","Daughter of Mr. Fakhre Alam")}</p>
          </div>
        </div>
      </div>

      {/* Quran verse */}
      <div className=" text-center mt-10">
         <div
            className="inline-block px-8 py-4 rounded-sm"
            style={{
              background: "rgba(123,28,53,0.05)",
              border: "1px solid rgba(123,28,53,0.15)",
            }}
          >
        <p className="font-display italic text-maroon text-sm md:text-base leading-relaxed">
          {t(
            '"And of His signs is that He created for you from yourselves mates that you may find tranquility in them."',
            '"और उसकी निशानियों में से यह है कि उसने तुम्हारे लिए तुम्हीं में से जोड़े बनाए ताकि तुम उनसे सकून पाओ।"'
          )}
        </p>
        <p className="font-dm text-xs mt-2" style={{ color: "#C9A84C" }}>
          {t("Quran 30:21", "कुरान 30:21")}
            </p>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
