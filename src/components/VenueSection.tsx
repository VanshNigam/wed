import { useLang } from "@/contexts/LanguageContext";

const VenueSection = () => {
  const { t } = useLang();

  return (
    <section id="venue"  className="py-20 px-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7B1C35 0%, #5A1226 50%, #7B1C35 100%)",
      }}>
         <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FAF6EF' fill-opacity='1'%3E%3Cpath d='M20 20m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <p className="text-center tracking-[0.2em] text-primary-foreground/70 text-sm mb-2">
        {t("Where We Celebrate", "समारोह स्थल")}
      </p>
      <h2 className="font-display text-5xl md:text-6xl text-center text-primary-foreground mb-2"  style={{ color: "#FFFFFF", fontFamily: 'Fraunces', fontStyle: 'italic' }}>
        {t("Venue", "स्थान")}
      </h2>

      <div className="flex justify-center my-4">
        <span className="inline-block bg-gold/20 border border-gold/40 rounded-full px-4 py-1 text-gold text-xs tracking-wider font-display">
           {t("VENUE", "स्थान")}
        </span>
      </div>

      <h3 className="font-display text-3xl md:text-4xl text-center text-primary-foreground font-bold mb-1">
        {t("Jashan Palace", "जश्न पैलेस")}
      </h3>
      <p className="font-display italic text-center text-gold text-lg mb-10">
        {t("जश्न पैलेस", "Jashan Palace")}
      </p>

      <div className="max-w-lg mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-sm border border-primary-foreground/20 p-8 text-center">
      <div className="text-4xl mb-4" aria-hidden="true">🏛️</div>
        <p className="font-display font-bold text-primary-foreground text-lg">
          {t("Machhariya, Awas Vikas", "मछरिया, आवास विकास")}
        </p>
        <p className="text-primary-foreground/80">{t("Office Road, Naubasta", "आफिस रोड, नौबस्ता")}</p>
        <p className="text-primary-foreground/80">{t("Kanpur, Uttar Pradesh", "कानपुर, उत्तर प्रदेश")}</p>
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">{t("Machhariya, Awas Vikas", "मछरिया, आवास विकास")}</p>
          <p className="text-primary-foreground/60 text-sm">{t("Naubasta, Kanpur Nagar", "नौबस्ता, कानपुर नगर")}</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-6">
        <a
          href="https://maps.google.com/?q=Jashan+Palace+Machhariya+Kanpur"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gold/20 border border-gold/40 rounded-sm p-4 text-center hover:bg-gold/30 transition-colors"
        ><div className="relative z-10 text-5xl" aria-hidden="true">📍</div>
          <p className="tracking-[0.2em] text-gold font-semibold text-sm">
           {t("VIEW ON GOOGLE MAPS", "गूगल मैप पर देखें")}
          </p>
          <p className="text-primary-foreground/60 text-xs mt-1">{t("Jashan Palace, Kanpur", "जश्न पैलेस, कानपुर")}</p>
        </a>
      </div>
    </section>
  );
};

export default VenueSection;
