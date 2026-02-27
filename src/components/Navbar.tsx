import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logoLightBg from "@/assets/logo-light-bg.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav_home, to: "/" },
    { label: t.nav_about, to: "/philosophy" },
    { label: t.nav_services, to: "/services" },
    { label: t.nav_faq, to: "/faq" },
  ];

  const privateOfficeLink = { label: t.nav_private, to: "/private-office" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-elan-offwhite/60 border-b border-elan-slate/10">
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center">
          <img src={logoLightBg} alt="Élan Kliinik" className="h-14" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-elan-slate hover:text-elan-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Language toggle */}
          <li className="flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.15em] select-none">
            <button
              onClick={() => setLang("et")}
              className={`${lang === "et" ? "text-elan-slate font-semibold" : "text-elan-slate/40 hover:text-elan-slate/60"} transition-colors`}
            >
              EST
            </button>
            <span className="text-elan-slate/20">|</span>
            <button
              onClick={() => setLang("en")}
              className={`${lang === "en" ? "text-elan-slate font-semibold" : "text-elan-slate/40 hover:text-elan-slate/60"} transition-colors`}
            >
              ENG
            </button>
          </li>

          {/* Private Office — elite tab */}
          <li>
            <Link
              to={privateOfficeLink.to}
              className="font-body text-[10px] uppercase tracking-[0.25em] text-elan-gold hover:text-elan-gold/70 transition-colors duration-300"
            >
              {privateOfficeLink.label}
            </Link>
          </li>

          <li>
            <Link
              to="/broneeri"
              className="font-body text-[11px] uppercase tracking-[0.15em] px-5 py-2 border border-elan-slate/30 text-elan-slate hover:border-elan-slate hover:bg-elan-slate hover:text-elan-offwhite transition-all duration-300"
            >
              {t.nav_cta}
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-elan-slate" aria-label="Ava menüü">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-elan-offwhite/95 backdrop-blur-md border-elan-slate/10 w-72">
            <SheetTitle className="sr-only">Navigatsioonimenüü</SheetTitle>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="font-body text-[11px] uppercase tracking-[0.2em] text-elan-slate/80 hover:text-elan-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to={privateOfficeLink.to}
                onClick={() => setOpen(false)}
                className="font-body text-[10px] uppercase tracking-[0.25em] text-elan-gold hover:text-elan-gold/70 transition-colors"
              >
                {privateOfficeLink.label}
              </Link>

              {/* Mobile language toggle */}
              <div className="flex items-center gap-2 font-body text-[10px] uppercase tracking-[0.15em] select-none">
                <button
                  onClick={() => setLang("et")}
                  className={`${lang === "et" ? "text-elan-slate font-semibold" : "text-elan-slate/40"} transition-colors`}
                >
                  EST
                </button>
                <span className="text-elan-slate/20">|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`${lang === "en" ? "text-elan-slate font-semibold" : "text-elan-slate/40"} transition-colors`}
                >
                  ENG
                </button>
              </div>

              <Link
                to="/broneeri"
                onClick={() => setOpen(false)}
                className="font-body text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 border border-elan-slate/30 text-elan-slate hover:border-elan-slate hover:bg-elan-slate hover:text-elan-offwhite transition-all duration-300 text-center mt-4"
              >
                {t.nav_cta}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
