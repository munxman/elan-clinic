import { Link } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.svg";
import textureSlate from "@/assets/texture-slate-stone.jpg";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav_home, to: "/" },
    { label: t.nav_about, to: "/philosophy" },
    { label: t.nav_services, to: "/services" },
    { label: t.nav_faq, to: "/faq" },
  ];

  return (
    <footer className="relative border-t border-elan-slate/10 overflow-hidden">
      {/* Slate stone texture background */}
      <img
        src={textureSlate}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-elan-slate/85" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logoFooter} alt="Élan Kliinik" className="h-16 md:h-20" />
            </Link>
            <p className="font-body text-sm text-elan-offwhite/50 mt-4 max-w-xs">
              Elan Clinic OÜ
            </p>
          </div>

          <div>
            {/* Links are self-explanatory; no heading needed */}
            <ul className="space-y-2">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-body text-sm text-elan-offwhite/60 hover:text-elan-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm text-elan-gold mb-4 uppercase tracking-wider not-italic">{t.footer_contact}</h4>
            <ul className="space-y-2 font-body text-sm text-elan-offwhite/60">
              <li>
                <span className="text-elan-offwhite/40">{t.footer_address}:</span>{" "}
                Sepapaja 12/1, Tallinn, 11415
              </li>
              <li>
                <span className="text-elan-offwhite/40">{t.footer_phone}:</span>{" "}
                <a href="tel:+3725299939" className="hover:text-elan-gold transition-colors">+372 52 99939</a>
              </li>
              <li>
                <span className="text-elan-offwhite/40">{t.footer_email}:</span>{" "}
                <a href="mailto:info@elanclinic.ee" className="hover:text-elan-gold transition-colors">info@elanclinic.ee</a>
              </li>
              <li>
                <span className="text-elan-offwhite/40">{t.footer_hours}:</span>{" "}
                {t.footer_hours_value}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-elan-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-elan-offwhite/40">
            © {new Date().getFullYear()} Élan Kliinik. {t.footer_rights}
          </p>
          <div className="flex gap-4">
            <span className="font-body text-xs text-elan-offwhite/40">{t.footer_privacy}</span>
            <span className="font-body text-xs text-elan-offwhite/40">Tegevusluba: L07470</span>
            <span className="font-body text-xs text-elan-offwhite/40">Elan Clinic OÜ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
