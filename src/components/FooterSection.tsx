import Divider from "./Divider";
import { useLang } from "@/contexts/LanguageContext";
import image from "../image/download.png"
import { Mail, MessageCircle, Phone } from "lucide-react";

const FooterSection = () => {
  const { t } = useLang();

  return (
    <footer className="relative z-10 py-12 px-4 text-center border-t border-border">
      <p className="text-2xl mb-4"><img src={image} alt="Footer Flower" className="w-12 h-12 mx-auto" /></p>
      <h3 className="font-display italic text-xl md:text-2xl text-maroon mb-2">
        Naeem Ahmad &amp; Mehvish Anjum
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {t(
          "Walima Ceremony · 6 April 2026 · Jashan Palace, Kanpur",
          "वलीमा समारोह · 6 अप्रैल 2026 · जश्न पैलेस, कानपुर"
        )}
      </p>
      <div className="flex items-center justify-center gap-2 text-gold-light text-lg mb-4 " >
        <span>✻</span>
        <span>✻</span>
        <span>✻</span>
      </div>
      <p className="text-xs text-muted-foreground mb-8">
        © 2026 {t("Wakeel Ahmad Family · All Rights Reserved", "वकील अहमद परिवार · सर्वाधिकार सुरक्षित")}
      </p>


            <div className="border-t border-border pt-6 max-w-md mx-auto">
        <p className="text-[11px] text-muted-foreground/70 mb-1">
          {t("Website crafted by", "वेबसाइट निर्माता")}
        </p>
        <p className="text-xs font-semibold text-muted-foreground tracking-wide mb-2">
          Rtech Global
        </p>
        <p className="text-[11px] text-muted-foreground/60 mb-4">
          {t("Want a wedding website like this? Contact us.", "ऐसी शादी की वेबसाइट चाहिए? संपर्क करें।")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-muted-foreground/60">
          <a href="tel:7755044399" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Phone className="w-3 h-3" /> 7755044399
          </a>
          <a href="https://wa.me/917755044399" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <MessageCircle className="w-3 h-3" /> WhatsApp
          </a>
          <a href="mailto:rtechglobaledu@gmail.com" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Mail className="w-3 h-3" /> rtechglobaledu@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
