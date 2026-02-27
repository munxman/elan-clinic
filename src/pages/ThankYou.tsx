import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, Mail, ClipboardList, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ThankYou = () => {
  const { t, lang } = useLanguage();

  const steps = [
    {
      icon: <Mail className="h-6 w-6" strokeWidth={1.3} />,
      title: t.ty_step1_title,
      desc: t.ty_step1_desc,
    },
    {
      icon: <ClipboardList className="h-6 w-6" strokeWidth={1.3} />,
      title: t.ty_step2_title,
      desc: t.ty_step2_desc,
    },
    {
      icon: <Calendar className="h-6 w-6" strokeWidth={1.3} />,
      title: t.ty_step3_title,
      desc: t.ty_step3_desc,
    },
  ];

  return (
    <>
      <SEOHead
        title={lang === "et" ? "Täname | Élan Kliinik" : "Thank You | Élan Clinic"}
        description={
          lang === "et"
            ? "Teie broneering on kinnitatud. Élan Kliiniku meeskond valmistub Teie vastuvõtuks."
            : "Your booking is confirmed. The Élan Clinic team is preparing for your visit."
        }
        canonicalUrl="https://elanclinic.ee/taname"
        noindex
      />

      <section className="bg-elan-offwhite pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success icon */}
            <div className="w-16 h-16 rounded-full border-2 border-elan-gold/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-8 w-8 text-elan-gold" strokeWidth={1.3} />
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-normal text-elan-gold tracking-tight leading-tight">
              {t.ty_headline}
            </h1>
            <div className="w-16 h-px bg-elan-gold mx-auto mt-6" />
            <div className="font-body text-base md:text-lg text-elan-slate/60 mt-6 leading-relaxed">
              {t.ty_body.split(". ").map((sentence, i, arr) => (
                <p key={i} className="mb-1 last:mb-0">
                  {sentence}{i < arr.length - 1 ? "." : ""}
                </p>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="max-w-3xl mx-auto mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative p-8 border border-elan-slate/10 bg-white"
                >
                  <div className="absolute top-4 right-4 font-heading text-xs text-elan-slate/20 uppercase tracking-widest not-italic">
                    {i + 1}/{steps.length}
                  </div>
                  <div className="text-elan-gold mb-5">
                    {step.icon}
                  </div>
                  <h2 className="font-heading text-base font-normal text-elan-slate mb-2 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="font-body text-sm text-elan-slate/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              to="/"
              className="inline-block font-body text-sm px-8 py-3 bg-elan-slate text-elan-offwhite hover:bg-elan-slate/90 transition-all duration-300 tracking-wide"
            >
              {t.ty_cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
