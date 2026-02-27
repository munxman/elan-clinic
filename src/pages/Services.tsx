import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

interface Feature {
  text: string;
  included: boolean;
}

interface Tier {
  name: string;
  price: number;
  dailyCost: string;
  badge?: string;
  persona: string;
  features: Feature[];
}

const Services = () => {
  const { t, lang } = useLanguage();

  const tiers: Tier[] = [
    {
      name: "BASIC",
      price: 390,
      persona: lang === "et"
        ? "Iseseisvale tegutsejale. Ideaalne, kui vajad vaid ligipääsu ravile ja esmast meditsiinilist kindlustunnet."
        : "For the independent actor. Ideal if you only need access to treatment and initial medical assurance.",
      dailyCost: lang === "et" ? "Vaid 4,3 € päevas – vähem kui üks tass cappuccinot." : "Only €4.3 per day – less than a cup of cappuccino.",
      features: [
        { text: lang === "et" ? "Arsti vastuvõtt kliinikus + analüüside pakett & terviseaudit" : "Doctor's visit at clinic + test panel & health audit", included: true },
        { text: lang === "et" ? "Arsti telefoni-/videokonsultatsioon (raviplaani selgitus)" : "Doctor's phone/video consultation (treatment plan explanation)", included: true },
        { text: lang === "et" ? "Õe kõne 2. nädalal (taluvus ja kõrvaltoimed)" : "Nurse call at week 2 (tolerance and side effects)", included: true },
        { text: lang === "et" ? "Arsti telefonikonsultatsioon (annuse kohandamine)" : "Doctor's phone consultation (dose adjustment)", included: true },
        { text: lang === "et" ? "3. kuu õe järelkontroll (kaal ja enesetunne)" : "Month 3 nurse follow-up (weight and well-being)", included: true },
        { text: lang === "et" ? "Ligipääs Élan Community tugigrupile" : "Access to Élan Community support group", included: true },
        { text: lang === "et" ? "Valvekliiniku valvearsti vastuvõtt –10%" : "On-call clinic doctor's visit –10%", included: true },
        { text: lang === "et" ? "3. kuu arsti järelkontroll" : "Month 3 doctor's follow-up", included: false },
        { text: lang === "et" ? "3. kuu kordusanalüüsid ja tervise dünaamika audit" : "Month 3 repeat tests and health dynamics audit", included: false },
        { text: lang === "et" ? "Valvekliiniku soodustus pereliikmetele ja lastele" : "On-call clinic discount for family and children", included: false },
        { text: lang === "et" ? "Täielik ligipääs partner-spetsialistide võrgustikule" : "Full access to partner specialist network", included: false },
        { text: lang === "et" ? "Lisakonsultatsioonid (õe/arstiga kuni 1× nädalas)" : "Extra consultations (nurse/doctor up to 1× per week)", included: false },
        { text: lang === "et" ? "Eelisjärjekorras vastuvõtt ja tihe monitooring" : "Priority appointments and close monitoring", included: false },
      ],
    },
    {
      name: "STANDARD",
      price: 490,
      persona: lang === "et"
        ? "Tulemustele orienteeritud optimeerijale. Parim tasakaal iseseisvuse ja regulaarse meditsiinilise kontrolli vahel."
        : "For the result-oriented optimizer. The best balance between independence and regular medical oversight.",
      dailyCost: lang === "et" ? "Vaid 5,4 € ehk 1,5 cappucino´t päevas." : "Only €5.4 – about 1.5 cappuccinos per day.",
      badge: lang === "et" ? "Populaarseim" : "Most Popular",
      features: [
        { text: lang === "et" ? "Arsti vastuvõtt kliinikus + analüüside pakett & terviseaudit" : "Doctor's visit at clinic + test panel & health audit", included: true },
        { text: lang === "et" ? "Arsti telefoni-/videokonsultatsioon (raviplaani selgitus)" : "Doctor's phone/video consultation (treatment plan explanation)", included: true },
        { text: lang === "et" ? "Õe telefonikonsultatsioonid (korduv tugi)" : "Nurse phone consultations (recurring support)", included: true },
        { text: lang === "et" ? "Arsti telefonikonsultatsioonid (annuse korrigeerimine)" : "Doctor's phone consultations (dose correction)", included: true },
        { text: lang === "et" ? "3. kuu arsti järelkontroll (kaal, analüüsid, täpsustus)" : "Month 3 doctor's follow-up (weight, tests, refinement)", included: true },
        { text: lang === "et" ? "3. kuu kordusanalüüsid & kardiometaboolne audit" : "Month 3 repeat tests & cardiometabolic audit", included: true },
        { text: lang === "et" ? "Ligipääs Élan Community tugigrupile" : "Access to Élan Community support group", included: true },
        { text: lang === "et" ? "Valvekliiniku soodustus patsiendile, pereliikmetele ja lastele –10%" : "On-call clinic discount for patient, family and children –10%", included: true },
        { text: lang === "et" ? "Lisakonsultatsioonid (õe/arstiga kuni 1× nädalas)" : "Extra consultations (nurse/doctor up to 1× per week)", included: false },
        { text: lang === "et" ? "Eelisjärjekorras vastuvõtt ja tihe monitooring" : "Priority appointments and close monitoring", included: false },
        { text: lang === "et" ? "Täielik ligipääs partner-spetsialistide võrgustikule" : "Full access to partner specialist network", included: false },
      ],
    },
    {
      name: "INTENSIVE",
      price: 650,
      persona: lang === "et"
        ? "Maksimaalset tuge otsivale kliendile. Kui vajad tihedat koostööd, sagedast tagasisidet ja täielikku kindlustunnet."
        : "For the client seeking maximum support. When you need close cooperation, frequent feedback, and total assurance.",
      dailyCost: lang === "et" ? "Vaid 7,2 € ehk 2 cappuccino´t päevas." : "Only €7.2 – about 2 cappuccinos per day.",
      features: [
        { text: lang === "et" ? "Arsti vastuvõtt kliinikus + analüüside pakett & terviseaudit" : "Doctor's visit at clinic + test panel & health audit", included: true },
        { text: lang === "et" ? "Arsti telefoni-/videokonsultatsioon (raviplaani selgitus)" : "Doctor's phone/video consultation (treatment plan explanation)", included: true },
        { text: lang === "et" ? "Õe telefonikonsultatsioonid või vastuvõtt kliinikus" : "Nurse phone consultations or visit at clinic", included: true },
        { text: lang === "et" ? "Arsti telefonikonsultatsioonid või vastuvõtt kliinikus" : "Doctor's phone consultations or visit at clinic", included: true },
        { text: lang === "et" ? "3. kuu arsti järelkontroll & kordusanalüüsid" : "Month 3 doctor's follow-up & repeat tests", included: true },
        { text: lang === "et" ? "Valvekliiniku soodustus patsiendile ja pereliikmetele –10%" : "On-call clinic discount for patient and family –10%", included: true },
        { text: lang === "et" ? "Täielik ligipääs partner-spetsialistide võrgustikule" : "Full access to partner specialist network", included: true },
        { text: lang === "et" ? "Lisakonsultatsioonid telefoni teel kuni 1× nädalas" : "Extra phone consultations up to 1× per week", included: true },
        { text: lang === "et" ? "Tihedam ravi monitooring ja eelisjärjekorras vastuvõtt" : "Closer treatment monitoring and priority appointments", included: true },
        { text: lang === "et" ? "Personaaltreenerite ja toitumisnõustajate võrgustiku abi" : "Personal trainers and nutrition counsellors network support", included: true },
      ],
    },
  ];

  const introText = lang === "et"
    ? "Meie programmid on loodud arstide poolt, kes on ise kaalulangetusravi abil oma elu muutnud. Seetõttu on iga paketi taga nii põhjalikud kliinilised teadmised kui ka isiklik kogemus."
    : "Our programmes are created by physicians who have transformed their own lives through weight loss treatment. That is why every package is backed by both thorough clinical expertise and personal experience.";

  const subHeader = lang === "et"
    ? "Struktureeritud kolmekuulised stardiprogrammid"
    : "Structured three-month start programmes";

  const footnote1 = lang === "et"
    ? "*Ravimi hind ei sisaldu paketi hinnas."
    : "*Medication cost is not included in the package price.";

  const footnote2 = lang === "et"
    ? "*Enne paketi valimist palume broneerida arsti esmase konsultatsiooni."
    : "*Please book an initial doctor's consultation before choosing a package.";

  const perMonth = lang === "et" ? "/ 3 kuud" : "/ 3 months";
  const bookLabel = lang === "et" ? "Broneeri" : "Book";

  const followUpHeader = lang === "et" ? "Teekonna jätkamine" : "Continuing the journey";
  const followUpSubtext = lang === "et"
    ? "Edu võti on järjepidevus. Pärast 3-kuulist stardiprogrammi pakume paindlikke jätkupakette tulemuste kindlustamiseks."
    : "The key to success is consistency. After the 3-month starter programme, we offer flexible follow-up packages to secure your results.";

  const followUpCards = [
    {
      name: "BALANCE",
      subtitle: lang === "et" ? "Aktiivne jätkamine" : "Active continuation",
      price: 250,
      target: lang === "et"
        ? "Klientidele, kes soovivad jätkata aktiivset kaalulangetust pärast stardiprogrammi."
        : "For clients who wish to continue active weight loss after the starter programme.",
      features: [
        lang === "et" ? "Retseptide pikendamine ja annuse kohandamine" : "Prescription renewals and dose adjustments",
        lang === "et" ? "Vajaduspõhine kontakt õe või arstiga" : "Needs-based contact with nurse or doctor",
        lang === "et" ? "Täielik ligipääs Élan Community toetusele" : "Full access to Élan Community support",
        lang === "et" ? "Ligipääs partner-spetsialistide võrgustikule" : "Access to partner specialist network",
      ],
    },
    {
      name: "MAINTENANCE",
      subtitle: lang === "et" ? "Tulemuse säilitamine" : "Maintaining results",
      price: 150,
      target: lang === "et"
        ? "Klientidele, kes on saavutanud sihtkaalu ja soovivad tulemust püsivalt hoida."
        : "For clients who have reached their target weight and wish to maintain results long-term.",
      features: [
        lang === "et" ? "Ravimi säilitusannuse monitooring ja retseptid" : "Maintenance dose monitoring and prescriptions",
        lang === "et" ? "Ennetav tugi tagasilanguse vältimiseks" : "Preventive support to avoid relapse",
        lang === "et" ? "Püsiv ligipääs Élan Community toetusele" : "Ongoing access to Élan Community support",
        lang === "et" ? "Võimalus igal ajal liikuda tagasi aktiivsemasse paketti" : "Option to return to a more active package at any time",
      ],
    },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Élan Clinic Starter Programmes",
    "description": "3-month structured medical weight loss starter programmes in Tallinn.",
    "brand": { "@type": "Brand", "name": "Élan Clinic" },
    "offers": [
      { "@type": "Offer", "name": "BASIC", "price": "390", "priceCurrency": "EUR", "description": "3-month basic medical weight loss programme", "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31", "url": "https://elanclinic.ee/teenused" },
      { "@type": "Offer", "name": "STANDARD", "price": "490", "priceCurrency": "EUR", "description": "3-month standard medical weight loss programme – most popular", "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31", "url": "https://elanclinic.ee/teenused" },
      { "@type": "Offer", "name": "INTENSIVE", "price": "650", "priceCurrency": "EUR", "description": "3-month intensive medical weight loss programme with full support", "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31", "url": "https://elanclinic.ee/teenused" },
      { "@type": "Offer", "name": "BALANCE", "price": "250", "priceCurrency": "EUR", "description": "3-month active continuation follow-up package", "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31", "url": "https://elanclinic.ee/teenused" },
      { "@type": "Offer", "name": "MAINTENANCE", "price": "150", "priceCurrency": "EUR", "description": "3-month results maintenance follow-up package", "availability": "https://schema.org/InStock", "priceValidUntil": "2026-12-31", "url": "https://elanclinic.ee/teenused" },
    ]
  };

  return (
    <>
      <SEOHead
        title="Teenused — Élan Kliinik"
        description="Élan Kliiniku 3-kuulised stardiprogrammid: BASIC, STANDARD ja INTENSIVE. Arstide juhitud kaalulangetus ja metaboolne tervis Tallinnas."
        canonicalUrl="https://elanclinic.ee/teenused"
        schema={servicesSchema}
      />

      {/* Hero */}
      <section className="bg-elan-offwhite pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-normal text-elan-gold tracking-tight">
            {t.svc_title}
          </h1>
          <div className="w-20 h-px bg-elan-gold mx-auto mt-6" />
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-elan-offwhite pb-8 pt-4">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-body text-base md:text-lg text-elan-slate/70 leading-relaxed">
            {introText}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-normal text-elan-gold mt-10 tracking-tight">
            {subHeader}
          </h2>
          <div className="mt-6 space-y-1">
            <p className="font-body text-xs text-elan-slate/40 italic">{footnote1}</p>
            <p className="font-body text-xs text-elan-slate/40 italic">{footnote2}</p>
          </div>
        </div>
      </section>

      {/* Pricing Menu */}
      <section className="bg-elan-offwhite py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {tiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`py-10 ${idx < tiers.length - 1 ? "border-b border-elan-gold/30" : ""}`}
              >
                {/* Header row: Name + Badge on left, Price on right */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-normal text-elan-slate italic">
                      {tier.name.charAt(0) + tier.name.slice(1).toLowerCase()}
                    </h3>
                    {tier.badge && (
                      <span className="font-body text-[10px] tracking-widest uppercase text-elan-gold">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-body text-lg text-elan-slate/70">
                      {tier.price} €
                    </span>
                    <span className="font-body text-xs text-elan-slate/40 ml-1.5">
                      {perMonth}
                    </span>
                  </div>
                </div>

                {/* Persona */}
                <p className="font-body text-sm text-elan-slate/40 italic leading-relaxed mb-4">
                  {tier.persona}
                </p>

                {/* Daily cost */}
                <p className="font-body text-xs text-elan-slate/35 italic mb-6">
                  {tier.dailyCost}
                </p>

                {/* Feature List */}
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2.5 ${
                        feature.included ? "text-elan-slate/75" : "text-elan-slate/25"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="h-3.5 w-3.5 text-elan-gold mt-[3px] shrink-0" strokeWidth={2} />
                      ) : (
                        <X className="h-3.5 w-3.5 text-elan-slate/15 mt-[3px] shrink-0" strokeWidth={1.5} />
                      )}
                      <span className={`font-body text-sm leading-relaxed ${!feature.included ? "line-through decoration-elan-slate/10" : ""}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    to="/broneeri"
                    className="inline-block font-body text-xs uppercase tracking-widest text-elan-gold hover:text-elan-slate transition-colors duration-300"
                  >
                    {bookLabel} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up Packages */}
      <section className="bg-elan-offwhite py-16 md:py-24 border-t border-elan-slate/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="font-body text-xs tracking-widest text-elan-gold/60 uppercase mb-4">
              {lang === "et" ? "Jätkupaketid" : "Follow-up packages"}
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-normal text-elan-gold tracking-tight">
              {followUpHeader}
            </h2>
            <div className="w-12 h-px bg-elan-gold/30 mx-auto mt-5" />
            <p className="font-body text-sm md:text-base text-elan-slate/50 mt-6 leading-relaxed">
              {followUpSubtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {followUpCards.map((card) => (
              <div
                key={card.name}
                className="flex flex-col border border-elan-slate/8 bg-white p-8 hover:border-elan-slate/15 transition-all duration-500"
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-base tracking-widest text-elan-slate/70 not-italic">
                    {card.name}
                  </h3>
                  <p className="font-body text-xs text-elan-slate/40 mt-1 italic">
                    {card.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-heading text-3xl font-normal text-elan-slate not-italic">
                    {card.price} €
                  </span>
                  <span className="font-body text-sm text-elan-slate/40 ml-2">{perMonth}</span>
                </div>

                <div className="w-full h-px bg-elan-slate/5 mb-6" />

                {/* Target */}
                <p className="font-body text-xs text-elan-slate/40 leading-relaxed mb-6">
                  {card.target}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {card.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-elan-slate/70">
                      <Check className="h-4 w-4 text-elan-slate/30 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span className="font-body text-sm leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    to="/broneeri"
                    className="block text-center font-body text-sm px-6 py-2.5 border border-elan-slate/15 text-elan-slate/60 hover:border-elan-slate/30 hover:text-elan-slate/80 transition-all duration-300 tracking-wide"
                  >
                    {bookLabel}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Office subtle link */}
      <section className="bg-elan-offwhite py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-sm text-elan-slate/40 leading-relaxed">
            {lang === "et"
              ? "Otsite isiklikumat lähenemist? "
              : "Looking for a more personal approach? "}
            <Link
              to="/private-office"
              className="text-elan-gold hover:text-elan-gold/70 transition-colors duration-300 underline underline-offset-4 decoration-elan-gold/30"
            >
              {lang === "et"
                ? "Tutvuge Private Office teenustega."
                : "Discover Private Office services."}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
