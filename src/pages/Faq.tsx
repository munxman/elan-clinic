import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqSections: { title: string; intro?: string; items: FaqItem[] }[] = [
  {
    title: "Üldised küsimused kaalulangusest",
    intro: "Élan Kliinikus näeme kehakaalu kui osa tervikust, mitte ainult välimuse küsimust. Kaalu muutus on seotud hormoonide, ainevahetuse ja igapäevaste harjumustega — neid saab mõista ja juhtida teaduspõhiselt. Oleme Teie kõrval kogu teekonna vältel – nii kaalu langetamisel, tulemuse hoidmisel kui ka siis, kui tekivad tagasilöögid.",
    items: [
      {
        question: "Miks on kaalu langetamine nii keeruline?",
        answer: "Kaalulangus käivitab organismis kompensatoorsed mehhanismid – isu reguleerivad hormoonid muutuvad ja energiakulu väheneb, mistõttu keha püüab kaotatud kaalu tagasi saada. Meie keha on evolutsiooniliselt häälestatud säilitama rasvavarusid. Rasvumine ei tulene tahtejõu puudumisest; tegemist on keeruka kroonilise seisundiga, kus geenid, hormoonid ja keskkonnategurid soodustavad liigse kehakaalu säilitamist. Kaalu langedes langeb leptiini tase ja tõuseb greliin, mis suurendab söögiisu. Need bioloogilised kohanemised tähendavad, et kaalu säilitamine on sageli väljakutsuvam kui algne kaotamine.",
      },
      {
        question: "Mis põhjustab ülekaalu ja rasvumist?",
        answer: "Ülekaalul on mitmeid põhjuseid. Olulised on eluviis – energiarikas toitumine ja vähene kehaline aktiivsus –, kuid ka geneetiline eelsoodumus mängib rolli. Uuringud on näidanud, et geneetilise soodumusega inimestel võib traditsiooniliste dieedi ja liikumisega olla raskem kaalust alla võtta. Samuti mõjutavad kehakaalu hormonaalsed ja ainevahetuslikud tegurid. Kokkuvõtlikult on rasvumine kompleksne ainevahetushaigus, kus keha seab paika kõrgema kaalutaseme ning inimese bioloogia soodustab rasvamassi säilitamist.",
      },
      {
        question: "Mis vahe on ülekaalul ja rasvumisel?",
        answer: "Meditsiinis eristatakse ülekaalu ja rasvumist kehamassiindeksi (KMI) abil. KMI arvutatakse kehakaalu ja pikkuse suhte põhjal: kaal (kg) / pikkus (m²). Täiskasvanutel loetakse KMI vahemikku 18,5–24,9 normaalseks, 25–29,9 on ülekaal ning rasvumiseks loetakse KMI ≥ 30. Rasvumist jaotatakse raskusastmeteks: I aste KMI 30–34,9; II aste 35–39,9; III aste (äärmine rasvumine) ≥ 40. KMI on üldine hinnang, mis ei erista lihasmassi rasvast, kuid on kasulik esmaseks sõelumiseks.",
      },
      {
        question: "Kui kiiresti on ohutu kaalust alla võtta?",
        answer: "Ohutuks ja püsivaks kaalulangetamise kiiruseks peetakse umbes 0,5-1 kg nädalas. See vastab ligikaudu 5-10% kehakaalu vähenemisele 6 kuu jooksul. Selline mõõdukas tempo saavutatakse harilikult ~500-750 kcal päevase energiadefitsiidiga. Liiga kiire kaalulangus vallandab organismis tugevama nälgimisreaktsiooni, mis võib hiljem soodustada kiiremat kaalutõusu. Mõõdukas, järjepidev tempo on parim.",
      },
      {
        question: "Miks kipub kaal pärast dieeti tagasi tulema?",
        answer: "Paljud kaalu langetanud inimesed kogevad nn jojo-efekti. Põhjuseks on keha metaboolne kohanemine: kaalulanguse käigus langeb organismi energiakulu rohkem, kui üksnes väiksema kehakaalu põhjal ootaks. Samal ajal võivad suureneda näljatunne ja isu kaloririkaste toitude järele hormonaalsete muutuste tõttu. Kaalutõus pärast dieeti ei tähenda läbikukkumist, vaid peegeldab rasvumise bioloogia keerukust. Parimad tulemused on neil, kes jätkavad regulaarset jälgimist ja vajadusel täiendavat ravi ka pärast soovkaalu saavutamist.",
      },
      {
        question: "Mis kasu on mõõdukast kaalulangusest tervisele?",
        answer: "Juba 5–10% kehakaalu langetamine avaldab tervisele märkimisväärset positiivset mõju. Uuringute kohaselt parandab selline kaalulangus vererõhu, veresuhkru ja vere lipiidide tasakaalu ning vähendab 2. tüüpi diabeedi tekkeriski. Lisaks paranevad maksafunktsiooni näitajad, uneapnoe sümptomid leevenevad, liigeste koormus väheneb ning enesetunne ja liikumisvõime paranevad. Isegi kui lõppeesmärk on suurem kaalukaotus, on väikeste vaheetappide kaudu liikuda turvalisem ja tõendatult efektiivsem strateegia.",
      },
    ],
  },
  {
    title: "Elustiil ja toitumine",
    intro: "Toitumist ei käsitle me \"dieedina\", vaid harjumuste ja valikute süsteemina. Iga inimese ainevahetus, päevakava ja psühholoogilised mustrid on erinevad. Élan Kliinikus aitame luua jätkusuutliku toitumisviisi ja elurütmi, mis sobib Teie eesmärkide- ja tervisenäitajatega.",
    items: [
      { question: "Milline dieet on kõige tõhusam kaalulangetuseks?", answer: "Puudub üks kindel \"imeline\" dieet, mis sobiks kõigile – kõige tõhusam dieet on see, mida suudate pikaajaliselt järgida ja mis tekitab kalorite defitsiidi. Teaduslikud tõendid kinnitavad, et pea iga toitumisviis, mis viib vähendatud kaloraažini, aitab kaalust alla võtta. Populaarsete dieetide võrdlus on näidanud, et kaalu langetamisel on nende efekt pikaajalises plaanis üsna sarnane. Parim on valida toitumisviis, mis sobib Teie maitse-eelistuste ja elustiiliga, sest järjepidevus on võtmetähtsusega." },
      { question: "Kui oluline on füüsiline aktiivsus kaalulangetamisel?", answer: "Kehaline aktiivsus on kaalulangetuse tervikliku programmi oluline osa. Otseselt kaalu alandamisel mängib suurimat rolli negatiivne energiabilanss, mida on lihtsam saavutada toitumist piirates. Treeningu peamine kasu ilmneb kaalu säilitamisel ja üldtervise parandamisel. Parim kombinatsioon on mõõdukas aeroobne liikumine enamikel nädalapäevadel, kombineerituna jõuharjutustega lihasmassi säilitamiseks. Üldine soovitus on vähemalt 150 minutit mõõduka intensiivsusega aeroobset tegevust nädalas ning 2 päeval nädalas lihastreeningut." },
      { question: "Kas vahelduv paastumine on tõhus kaalulangetamiseks?", answer: "Vahelduv paastumine aitab inimestel tõepoolest kaalu langetada – tulemused on olnud 0,8% kuni 13% kehakaalu vähenemist, olenevalt režiimist ja kestusest. On siiski leitud, et vahelduva paastumise efektiivsus on võrreldav tavalise igapäevase kaloripiiranguga. Vahelduv paast võib lisaks kaalule avaldada positiivset mõju insuliinitundlikkusele. Kokkuvõttes on see üks võimalik vahend energiasisalduse vähendamiseks, ent tulemust mõjutab ikkagi üldine kaloridefitsiit ning toidu kvaliteet." },
      { question: "Kas kaalulangetamiseks peab loobuma süsivesikutest?", answer: "Ei pea. Tervisliku kaalulanguse võti on tasakaal ja mõõdukus, mitte ühegi makrotoitaine täielik vältimine. Nii süsivesikud, valgud kui rasvad on organismile vajalikud. Oluline on nende kvaliteet ja kogus. Uuringud ei näita pikaajalist ülekaalu eelist ühelgi makrotoitainel. Pigem keskenduge täisväärtuslikele ja vähetöödeldud toitudele: köögiviljad, lahjad valgud, tervislikud rasvad ja mõõdukas koguses täistera süsivesikuid." },
      { question: "Kuidas mõjutavad uni ja stress kehakaalu?", answer: "Uni ja stress mängivad kehakaalu reguleerimisel olulist rolli. Ebapiisav uni põhjustab hormonaalseid muutusi, mis soodustavad kaalutõusu – unepuudus tõstab greliini taset ja alandab leptiini taset. Krooniline stress hoiab kõrgel kortisooli taset, mis võib suurendada söögiisu. Stressi ohjamine ja piisav uni on kaalulangetuse olulised toetajad. Hea unehügieen ja aktiivsed meetodid stressiga toimetulekuks on osa terviklikust kaaluregulatsiooni programmist." },
      { question: "Kas toidulisandid või \"rasvapõletajad\" aitavad kaalust alla võtta?", answer: "Teaduslikud tõendid enamiku selliste toidulisandite kohta on väga nõrgad või puuduvad. Enamik käsimüügi kaalulangetustooteid ei oma olulist mõju kehakaalule. Ohutus on suur probleem: kuna käsimüügi toidulisandeid ei reguleerita sama rangelt kui ravimeid, võivad need sisaldada teadmata koguses koostisosi. Me ei soovita kaalulangetuseks käsimüügi toidulisandeid. Kaalulangus peab põhinema elustiilimuutustel ja vajadusel arsti poolt määratud ravimitel." },
    ],
  },
  {
    title: "Ravimid ja meditsiiniline ravi",
    intro: "Kaasaegne kaalulangetus ei tähenda ainult tahtejõudu ja dieeti. Mõnikord on vaja toetada keha bioloogilisi mehhanisme ravimitega. Élan Kliinikus alustatakse ravimiteraapiat alati arsti hindamise järel. Meie raviplaanid põhinevad Euroopa jt. rahvusvahelistel ravijuhistel (EMA, NICE, ADA).",
    items: [
      { question: "Mis on GLP-1 ja GIP analoogid ning kuidas need aitavad kaalu langetada?", answer: "GLP-1 ja GIP analoogid on uue põlvkonna hormoonsarnased ravimid, mis on välja töötatud algselt 2. tüüpi diabeedi raviks, kuid on osutunud väga tõhusaks ka kehakaalu langetamisel. GLP-1 analoogid (näiteks semaglutiid – Ozempic® ja Wegovy®) jäljendavad GLP-1 hormooni toimet, pärssides söögiisu, aeglustades mao tühjenemist ja soodustades täiskõhutunde tekkimist. Tirzepatiid (Mounjaro®) stimuleerib korraga nii GLP-1 kui GIP retseptoreid. Need ravimid ei ole ainevahetuse \"kiirendid\", vaid isu reguleerijad." },
      { question: "Kui tõhusad on kehakaalu langetavad ravimid?", answer: "Semaglutiidiga saavutatakse umbes 12–15% kaalulangus aastaga. Tirzepatiidiga ~15–21% kaalulangus ~1,5 aastaga. Vanemad ravimid (orlistat, naltreksoon/bupropioon) annavad keskmiselt 5–10% kaalulanguse. Võrdluseks: bariaatrilise kirurgia järel on tüüpiline kaalulangus ~25–30%. Seega toovad uued ravimid paljudele patsientidele kirurgiale lähedase tulemuse ilma operatsioonita. Individuaalne tulemus varieerub – oluline on hinnata ravivastust ja vajadusel raviplaani korrigeerida." },
      { question: "Kellele on kaalulangetusravimid näidustatud?", answer: "Kaalulangetusravimid on mõeldud rasvumise raviks, mitte kosmeetiliseks kaalulangetamiseks. Üldjuhul kaalutakse ravimeid täiskasvanud patsientidel, kelle KMI on ≥ 30 (rasvumine) või KMI ≥ 27 ja lisaks esinevad ülekaaluga seotud haigusseisundid (nt diabeet, kõrge vererõhk, uneapnoe). Need kriteeriumid tagavad, et ravist saadav kasu ületab võimalike kõrvaltoimete riski." },
      { question: "Kas need ravimid on ohutud, millised on kõrvaltoimed?", answer: "Praegused rasvumise ravimid on läbinud kliinilise testimise ning on üldiselt ohutud meditsiinilise järelevalve all. GLP-1 agonistide ja tirzepatiidi kõige tavapärasemad kõrvaltoimed on seedetrakti kaebused: iiveldus, täiskõhutunne, vahel oksendamine või kõhulahtisus. Enamikel patsientidest on need sümptomid kerged kuni mõõdukad ja tekivad peamiselt ravi algfaasis. Ainult u 5% patsientidest katkestab ravi kõrvaltoimete tõttu." },
      { question: "Kas neid ravimeid peab võtma kogu elu?", answer: "Rasvumine on pikaajaline seisund. Kui ravim lõpetada, naasevad söögiisu signaalid varasemale tasemele ning paljudel juhtudel tähendab see kaalutõusu. Uuringud näitavad, et GLP-1 ravimi lõpetamisel võtavad inimesed aasta jooksul tagasi kuni 60–75% kaotatud kaalust. Kaalulangetusravimeid tuleb käsitleda nagu kõrge vererõhu ravimeid – kui seisund on krooniline, on ka ravi pikaajaline. Ravimite pikaajaline kasutamine on osutunud ohutuks." },
      { question: "Milliseid teisi kaalulangetusravimeid on olemas?", answer: "Lisaks uutele GLP-1 ja GIP analoogidele on saadaval: Orlistat (Xenical®) – takistab rasvade imendumist, ~5% kaalukaotus; Naltreksoon/Bupropioon (Mysimba®) – mõjutab ajus tasu- ja isukeskusi, ~5–8% kaalukaotus; Liraglutiid 3,0 mg (Saxenda®) – igapäevane GLP-1 analoog, ~8% kaalukaotus. Kõik kehakaaluravimid on abivahendid, mis toimivad kõige paremini koos tervisliku toitumise ja liikumisega." },
    ],
  },
  {
    title: "Bariaatriline kirurgia",
    items: [
      { question: "Mis on bariaatriline kirurgia ja millal seda kaaluda?", answer: "Bariaatriline kirurgia on kirurgilistele operatsioonidele üldnimi, mis on mõeldud rasvumise raviks. Põhilised operatsioonid on maovähendusoperatsioon (sleeve resektsioon) ja bypass-operatsioon. Keskmine kaalulangus ulatub 1–2 aasta jooksul 25–30% kehakaalust. Kirurgia on näidustatud raskekujulise rasvumise korral: KMI ≥ 40 või KMI ≥ 35 koos tõsiste terviseprobleemidega. Élan Kliinikus me operatsioone ei teosta, kuid teeme koostööd kogenud kirurgidega." },
      { question: "Millised on maovähendusoperatsioonide psühholoogilised riskid?", answer: "Peamised psühholoogilised riskid: depressioon ja ärevus (15–25% patsientidest), kõrgenenud suitsiidirisk (kuni 4 korda kõrgem), enesekahjustamise risk. Põhjused hõlmavad eelnevaid seisundeid, elustiilist tulenevat stressi, toitainete puudusi ja sotsiaalset isolatsiooni. Soovitame põhjalikku psühhiaatrilist hindamist enne operatsiooni ja regulaarset psühholoogilist jälgimist vähemalt 3 aastat pärast operatsiooni." },
      { question: "Kas pärast maovähendusoperatsiooni suureneb alkoholi kuritarvitamise risk?", answer: "Jah, oluliselt. Alkoholi kuritarvitamise risk suureneb 6–7 korda. 9–20% patsientidest tekib probleeme alkoholi tarbimisega, kusjuures kuni 70% juhtudest on uued. Kõrgriskiperiood on 1–3 aastat pärast operatsiooni. Põhjused: alkohol imendub kiiremini, sõltuvuse ülekanne (toit asendub alkoholiga), metaboolsed ja sotsiaalsed muutused. Soovitame alkoholi vältimist eriti esimesel 2–3 aastal." },
      { question: "Kui sageli tekib kaalutõus pärast bariaatrilist kirurgiat?", answer: "25–49% patsientidest kogeb olulist kaalutõusu. Kaalutõus algab tavaliselt 2–3 aastat pärast operatsiooni. Ainult 1–3% patsientidest taastub kogu kaotatud kaal — kirurgia pakub enamikule siiski pikaaegset kasu. Kaalutõusu korral on võimalikud lähenemised: elustiilimuutused, psühholoogiline tugi, GLP-1 retseptori agonistid või revisionskirurgia." },
      { question: "Kas Élan Clinic pakub tuge bariaatrilise kirurgia järgselt?", answer: "Jah. Kuigi me ei tegele ise kirurgiliste operatsioonidega, pakume: toitaineseiret ja asendamist, kaaluhaldusjärelevalvet (vajadusel GLP-1 analoogid), koostööd psühholoogide ja psühhiaatritega, ning pikaaajalist jälgimist. Meie lähenemisviis on multidistsiplinaarne – rasvumise ravi ei ole ainult operatsioon või ainult ravim, vaid terviklik elustiili- ja tervisejuhtimine." },
    ],
  },
  {
    title: "Élan Kliiniku lähenemine ja kogemus",
    items: [
      { question: "Kuidas Élan Kliinik läheneb kaalulangusele?", answer: "Élan Kliinikus käsitleme rasvumist kui kroonilist ja mitmetahulist seisundit. Meie lähenemine põhineb rahvusvahelistel ravijuhistel ning integreerib: personaalse toitumise plaani, kehalist aktiivsust vastavalt võimetele, käitumuslikku tuge (sh kogemusnõustaja ja psühholoog), ning medikamentoosset ravi (GLP-1 ja GIP agonistid) vajadusel. Élan Kliiniku eripära on terviklik käsitlus — me koostame individuaalse raviplaani, mis arvestab Teie tervislikku seisundit, eluviisi ja valmisolekut. Meie eesmärk on toetada Teie tervist ja heaolu pikas perspektiivis." },
      { question: "Kes kuuluvad Élan Kliiniku meeskonda ja kuidas nad abistavad?", answer: "Teie heaks töötavad meie põhitiim: arstid Merili Pärn ja Ingmar Lindström, kes hindavad Teie tervislikku seisundit tervikuna ja koostavad raviplaani; õde Eva-Maria Sentifoli, kes aitab mõõtmiste, analüüside ja süsteravi juhendamisega; liikumisnõustaja/füsioterapeut, kes koostab teie võimetele vastava liikumisplaani; ning vajadusel psühholoog, kes aitab tervisekäitumise nõustamisega. Multidistsiplinaarne tiim tähendab, et kõik spetsialistid teevad koostööd ühise eesmärgi nimel — teie tervisliku kaalulanguse nimel." },
      { question: "Mida oodata esimesel visiidil Élan Kliinikusse?", answer: "Esmane konsultatsioon on põhjalik ja hõlmab mitmeid komponente: vestlus kehakaalu ajaloo, elustiili, motivatsiooni ja eesmärkide üle; meditsiiniline hindamine (kehakaal, vererõhk, keha koostise analüüs, vereanalüüsid sh veresuhkur, kilpnäärme-hormoonid, maksanäitajad); ning arutelu, kus koostame üldise pildi Teie olukorrast ja sõnastame realistlikud esmased eesmärgid — sageli 5-10% kaalulangus, mis tervise mõttes juba palju parandab." },
    ],
  },
];

const allFaqItems = faqSections.flatMap((s) => s.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const Faq = () => {
  return (
    <>
      <SEOHead
        title="Korduma kippuvad küsimused — Élan Kliinik"
        description="Vastused korduma kippuvatele küsimustele kaalulanguse, GLP-1 ravimite, toitumise ja bariaatrilise kirurgia kohta. Élan Kliinik, Eesti."
        canonicalUrl="https://elanclinic.ee/faq"
        schema={faqJsonLd}
      />

      {/* Hero */}
      <section className="bg-elan-offwhite pt-32 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-normal text-elan-gold tracking-tight">
            Korduma kippuvad küsimused
          </h1>
          <div className="w-20 h-px bg-elan-gold mx-auto mt-6" />
          <p className="font-body text-base md:text-lg text-elan-slate/60 mt-6 max-w-2xl mx-auto">
            Teaduspõhised vastused kaalulanguse, ravimite ja tervise kohta.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-elan-offwhite pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqSections.map((section, sIdx) => (
            <div key={sIdx} className="mb-16">
              <h2 className="font-heading text-xl md:text-2xl font-normal text-elan-gold mb-3">
                {section.title}
              </h2>
              <div className="w-12 h-px bg-elan-gold mb-4" />
              {section.intro && (
                <p className="font-body text-sm text-elan-slate/50 mb-8 leading-relaxed">
                  {section.intro}
                </p>
              )}
              <Accordion type="multiple" className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <AccordionItem
                    key={iIdx}
                    value={`s${sIdx}-i${iIdx}`}
                    className="border border-elan-slate/10 px-6 data-[state=open]:border-elan-gold/30 transition-colors"
                  >
                    <AccordionTrigger className="font-body text-sm md:text-base text-elan-slate/90 hover:text-elan-gold text-left py-5 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-elan-slate/60 leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
