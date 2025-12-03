import { MongoClient } from "mongodb";

const translations = [
  {
    language: "fi",
    translations: {
    "nav.home": "Koti",
    "nav.ideology": "Ideologia",
    "nav.service": "Palvelu",
    "nav.team": "Tiimi",
    "nav.contact": "Yhteystiedot",
    "header.title":"BeneCare",
    "header.subtitle":"Varmistamme, että ikäihmiset saavat oikeanlaista hoitoa oikea-aikaisesti.",
    "homepage.introduction_title":"Älykäs tuki hoitotyöhön ja arjen hyvinvointiin",
    "homepage.introduction_p1" : "BeneCare on kehitetty hoitotyön ammattilaisille  sekä yksityiskäyttäjille, jotka haluavat seurata läheistensä hyvinvointia turvallisesti ja huomaamattomasti.",
    "homepage.introduction_p2": "Palvelu tarjoaa ympärivuorokautisen seurannan ilman puettavia laitteita, tehden hoitotyöstä ja arjen huolenpidosta tehokkaampaa ja mielekkäämpää. BeneCare hyödyntää sensoriteknologiaa ja älykkäitä algoritmeja mallintaakseen henkilön päivittäistä rytmiä ja toimintatapoja. ",
    "homepage.introduction_p3" :"Näiden tietojen avulla voidaan havaita muutoksia terveydessä, hyvinvoinnissa, toimintakyvyssä ja kognitiossa  ja reagoida ajoissa ennen kuin tilanne vaatii akuuttia hoitoa.",
    "service.privacyTitle": "Pidämme henkilötiedot turvassa",
    "service.privacyText": "BeneCare -palvelun tuottamat analyysit ovat seniorin, hänen omaistensa ja hoitohenkilökunnan nähtävissä verkkopalvelun kautta tai tulosteena. Palvelun käyttö ja datan kerääminen perustuvat aina henkilön suostumukseen. Kerättyä henkilötietoa ei käytetä tai välitetä muuhun kuin palvelun käyttöön liittyvään tarkoitukseen. Tietosuojalain mukaisesti seniorilla on oikeus omiin henkilötietoihinsa ja hän voi pyytää henkilötietojensa poistamista tai palvelun lopettamista milloin tahansa.",
    
    "selector.title": "Valitse asiakastyyppi",
    "selector.subtitle": "Räätälöimme palvelumme tarpeidesi mukaan",
    "selector.private.title": "Yksityisasiakkaat",
    "selector.private.description": "Turvaa läheisesi hyvinvointi ja seuranta kotona",
    "selector.company.title": "Yritysasiakkaat",
    "selector.company.description": "Tehosta hoitotyötä ja paranna palvelun laatua",
    "common.readMore":"Lue lisää",
    "readMore.description":"Lue lisää palveluistamme ja miten tarjoamme ainutlaatuisen tavan analysoida elämää.",
    "footer.followUs":"Seuraa meitä",
    "footer.privacy":"Yksityisyys",
    "footer.terms":"Tietosuoja",
    // Carousel
    "carousel.elderly.title": "Turvallinen arki ikäihmisille",
    "carousel.elderly.desc": "BeneCare tukee itsenäistä asumista ja antaa turvallisuuden tunteen päivittäisessä elämässä.",
    "carousel.family.title": "Mielenrauha omaisille",
    "carousel.family.desc": "Perheet voivat seurata läheistensä vointia ja saada ajantasaista tietoa heidän hyvinvoinnistaan.",
    "carousel.nurse.title": "Ammattitaitoinen hoitotyö",
    "carousel.nurse.desc": "Hoitohenkilöstö saa tarkat tiedot asukkaiden toimintakyvystä ja voi reagoida muutoksiin nopeasti.",
    "carousel.assistant.title": "Älykäs teknologia avuksi",
    "carousel.assistant.desc": "BeneCare-järjestelmä tarjoaa helppokäyttöisen alustan kaiken tiedon hallintaan ja analysointiin.",
    // service
    "service.heading.intro": "Toimintakyvyn arviointi",
    "service.heading.title": "BeneCare",
    "features.title": "Mitä BeneCare seuraa?",
    "features.subtitle": "Palvelumme tarjoaa jatkuvasti päivittyvää tietoa henkilön toimintakyvystä ja hyvinvoinnista",
    "features.activity.title": "Aktiivisuuden seuranta",
    "features.activity.desc": "Huoneessa vietetty aika, liikkuminen sisällä ja ulkona, päivittäinen aktiivisuus",
    "features.sleep.title": "Unen laatu",
    "features.sleep.desc": "Unen ja levon määrä, laatu ja ajankohdat. Yöllisen käyttäytymisen muutokset",
    "features.hygiene.title": "Hygienian seuranta",
    "features.hygiene.desc": "Suihkussa käynti ja pesualtaan käyttö. Hygienian hoidon muutosten tunnistus",
    "features.wc.title": "WC-käynnit",
    "features.wc.desc": "WC-käyntien määrä, ajankohdat ja kesto. Tihentyneiden käyntien havaitseminen",
    "features.health.title": "Terveysmittarit",
    "features.health.desc": "Paino, BMI, verenpaine ja muut terveysmittarit integroituna järjestelmään",
    "features.alerts.title": "Hälytykset",
    "features.alerts.desc": "Hälytysranneke akuutin avun saamiseksi. Kaikki tapahtumat kirjautuvat järjestelmään",
     // How It Works
    "how.title": "Kuinka BeneCare toimii?",
    "how.subtitle": "Yksinkertainen ja tehokas prosessi, joka ei vaadi toimenpiteitä henkilöltä",
    "how.step1.title": "Asennus",
    "how.step1.desc": "Huomaamattomat sensorit asennetaan henkilön asuntoon ilman häiriötä arkeen",
    "how.step2.title": "Tiedon keruu",
    "how.step2.desc": "Sensorit keräävät tietoa päivittäisestä toiminnasta automaattisesti",
    "how.step3.title": "Analysointi",
    "how.step3.desc": "Sofistikoituneet algoritmit tunnistavat toimintoja ja mallintavat toimintatapoja",
    "how.step4.title": "Raportointi",
    "how.step4.desc": "Hoitajat, lääkärit ja omaiset saavat ajankohtaista tietoa toimintakyvystä",
    // Private Customer Page
    "private.hero.title": "Turvaa läheisesi hyvinvointi",
    "private.hero.subtitle": "BeneCare tarjoaa huomaamattoman seurannan ja turvaa ikääntyville kotona asumiseen",
    "private.hero.cta": "Ota yhteyttä",
    "private.benefits.title": "Miksi BeneCare yksityisasiakkaille?",
    "private.benefits.peace.title": "Mielenrauha",
    "private.benefits.peace.text": "Voit luottaa, että läheisesi on turvassa 24/7 seurannan ansiosta",
    "private.benefits.safety.title": "Turvallisuus",
    "private.benefits.safety.text": "Automaattinen hälytys poikkeustilanteissa - apu tulee ajoissa",
    "private.benefits.response.title": "Nopea reagointi",
    "private.benefits.response.text": "Välitön tieto mahdollisista ongelmista omaisille ja hoitajille",
    "private.benefits.family.title": "Perheen tuki",
    "private.benefits.family.text": "Koko perhe voi seurata läheisen vointia helposti",
    
    // Company Customer Page
    "company.hero.title": "Tehosta hoitotyötä",
    "company.hero.subtitle": "BeneCare auttaa hoitotyön ammattilaisia toimimaan tehokkaammin ja parantamaan palvelun laatua",
    "company.hero.cta": "Pyydä tarjous",
    "company.benefits.title": "Miksi BeneCare yrityksille?",
    "company.benefits.efficiency.title": "Tehokkuus",
    "company.benefits.efficiency.text": "Vähennä turhia käyntejä ja optimoi työvuorot",
    "company.benefits.cost.title": "Kustannussäästöt",
    "company.benefits.cost.text": "Merkittävät säästöt henkilöstökustannuksissa",
    "company.benefits.quality.title": "Laatuetu",
    "company.benefits.quality.text": "Paranna palvelun laatua reaaliaikaisella tiedolla",
    "company.benefits.data.title": "Datalähtöisyys",
    "company.benefits.data.text": "Tee päätökset luotettavan datan pohjalta",
    //Contact
    "contact.form.title": "Ota yhteyttä",
    "contact.form.type": "Olen kiinnostunut:",
    "contact.form.type.general": "Yleinen yhteydenotto",
    "contact.form.type.assessment": "Toimintakyvyn arviointi",
    "contact.form.firstName": "Etunimi",
    "contact.form.lastName": "Sukunimi",
    "contact.form.email": "Sähköposti",
    "contact.form.helper-text":"Anna sähköposti tai puhelinnumero *",
    "contact.form.phone": "Puhelinnumero",
    "contact.form.organization": "Organisaatio (valinnainen)",
    "contact.form.role": "Roolisi (valinnainen)",
    "contact.form.message": "Kirjoita viesti...",
    "contact.form.submit": "Lähetä",
    "contact.form.successH1": "Kiitos yhteydenotosta!",
    "contact.form.successP": "Otamme sinuun yhteyttä vuorokauden sisällä",
    "contact.form.successB": "Sulje",
    "contact.company": "Benete Oy",
    "contact.address1": "Tykistökatu 4b",
    "contact.address2": "20520 Turku, Suomi",
    "contact.floor": "(5. kerros)",
    "contact.ceo": "Kari Bäckman, Toimitusjohtaja",
    "contact.phone": "+358 50 052 4514",
    "contact.email": "kari.backman@benete.com",
    "contact.heading.intro": "Jutellaan",
    "contact.heading.title": "Kuinka voimme auttaa?",
    
    // Ideology Page
    "ideology.hero.subtitle": "Hoitotyön asiantuntijana",
    "ideology.hero.title1": "Helpottaa arkea",
    "ideology.hero.title1b": "ja lisää turvallisuutta",
    "ideology.hero.title2": "Tuo mielen rauhaa",
    "ideology.hero.title2b": "perheille ja omaisille",
    "ideology.hero.title3": "Tukee ikäihmisten aktiivista",
    "ideology.hero.title3b": "ja vapaata elämää",
    "ideology.title":"Sinun ehdoillasi",
    "hero.subtitleLines": [
  [
    { "text": "Yksilöllinen", "color": "black" },
    { "text": "itsenäisyys", "color": "blue" }
  ],
  [
    { "text": "Digitaalinen", "color": "black" },
    { "text": "arvokkuus", "color": "blue" }
  ],
  [
    { "text": "Arvokas", "color": "black" },
    { "text": "elämä", "color": "blue" }
  ]
],


    "ideology.values.care": "Välittäminen",
    "ideology.values.careDesc": "Jokainen ihminen ansaitsee huomiota, lämpöä ja yksilöllistä hoivaa",
    "ideology.values.safety": "Turvallisuus",
    "ideology.values.safetyDesc": "Luotettava teknologia ja ympärivuorokautinen valvonta takaavat rauhan mielen",
    "ideology.values.quality": "Laatu",
    "ideology.values.qualityDesc": "Sitoudumme korkeimpaan laatuun kaikessa tekemisessämme",
    "ideology.section1.title": "Oivalluksia päivittäisistä rutiineista",
    "ideology.section1.p1": "Yksinkertaiset arkipäivän toiminnot luovat rytmin jokapäiväiseen elämäämme, kuten ruoan valmistus, lepo sekä hygieniasta huolehtiminen. Nämä ovat osa tavallista elämäämme, mutta niillä on myös ajateltua suurempi merkitys. Yhdistettynä ja analysoituna ne tuottavat arvokkaita havaintoja fyysisestä ja emotionaalisesta hyvinvoinnistamme.",
    "ideology.section1.p2": "BeneCare palvelun avulla on mahdollista tunnistaa toimintakyvyssä ja kognitiossa tapahtuvia muutoksia jo aikaisessa vaiheessa. Yleisistä terveys- ja hyvinvointipalveluista poiketen analysoimme henkilön elämää kokonaisvaltaisesti kattaen paljon enemmän kuin pelkkiä fysiologisia tietoja.",
    "ideology.section2.title": "Elinympäristö",
    "ideology.section2.p1": "Elinympäristöllä on tunnetusti suuri vaikutus hyvinvointiimme ja se voi myös kertoa paljon jokapäiväisestä elämästämme. Älyteknologioiden käyttö yleistyy jatkuvasti ja on vain ajan kysmys, kun kotimme ovat varustettuja moninaisilla sensoriteknologioilla mahdollistaen reaaliaikaisen elämän seuraamisen.",
    "ideology.section2.p2": "BeneCare palvelun sofistikoituneet algoritmit tunnistavat ihmisen päivittäisiä toimintoja, mallintavat toimintatapoja tämän omassa elinympäristössä ja arvioivat toimintakyvyssä tapahtuvia mahdollisia muutoksia. Päivittäistä toimintaa havainnoimalla ja analysoimalla haitalliset muutokset toimintakyvyssä pystytään havaitsemaan paljon aikaisemmassa vaiheessa, kuin mitä tavanomaisten menetelmien avulla on mahdollista.",
    "ideology.section3.title": "Elinvoimainen ikääntyminen",
    "ideology.section3.p1": "Elämänlaatu paranee kun henkilö voi toimia itsenäisesti omassa tutussa ympäristössä. Se luo turvallisuudentunnetta ja riippumattomuutta muista. Elinvoimaisen ikääntymisen perusta on oma aktiivisuus ja motivaatio elämään.",
    "ideology.section3.p2": "Toimintakyvyn muutosten ja kognitiivisten häiriöiden varhainen tunnistaminen auttaa aikaisen ja täsmällisen hoidon tuottamisessa. Tällä on suuri vaikutus ihmisten elämään lisäten elämän aktiivisia ja itsenäisiä päiviä. Hellän huolenpidon mahdollistaminen ja itsenäisyyden tunteen vaaliminen ovat keskeisiä tavoitteitamme.",
    "ideology.section3.p3": "Toimintamme tuloksena sosiaali- ja terveydenhuolto hyötyy merkittävästi alentuneista vanhusten hoitokustannuksista ja uusista tehokkaammista palveluista.",
    "ideology.section4.title": "OmaData",
    "ideology.section4.p1": "Henkilöistä kerätty data on erittäin sensitiivistä. Palvelumme mahdollistaa asiakkaillemme täyden pääsyn ja kontrollin heidän omiin tietoihinsa. Palvelumme noudattaa uusimpia tietosuojan ja tietoturvallisuuden vaatimuksia huomioimalla nämä jo palvelujen suunnittelussa yhdessä meidän omien datan eettisten ja digitaalisen arvokkuuden periaatteiden kanssa.",
    "ideology.section5.title": "Arvomme",
    "ideology.section5.p1": "Henkilökohtaisten toimintakyvyn muutoksia ei yleensä seurata tai kirjata ennen kuin on liian myöhäistä ja diagnoosi on annettu. Monet ihmiset ovat riippuvaisia toisista selvitäkseen päivästä mikä heikentää heidän itsenäisyyden tunnettansa. On tärkeää havaita mitä yksilöllinen itsenäisyys merkitsee jokaiselle.",
    "ideology.section5.p2": "Palvelumme avulla on mahdollista tunnistaa toimintaan ja muistiin liittyviä häiriöitä mahdollisimman varhaisessa vaiheessa ja aloittaa tarvittavat hoitotoimenpiteet mahdollisimman aikaisin.",
    // Benefits
    "benefits.title": "Hyödyt kaikille osapuolille",
    "benefits.subtitle": "BeneCare parantaa hoitotyön laatua ja tukee ikäihmisten hyvinvointia",
    "benefits.caregivers": "Hoitajille",
    "benefits.caregivers.1": "Tehokkaampaa ja mielekkäämpää hoitotyötä",
    "benefits.caregivers.2": "Aikaisempi puuttuminen ongelmiin",
    "benefits.caregivers.3": "Täsmällisempi vastaus asukkaiden tarpeisiin",
    "benefits.caregivers.4": "Ympärivuorokautinen turvallinen seuranta",
    "benefits.elderly": "Ikäihmisille",
    "benefits.elderly.1": "Normaali arki ilman häiritseviä laitteita",
    "benefits.elderly.2": "Ei puettavaa teknologiaa",
    "benefits.elderly.3": "Parempi elämänlaatu",
    "benefits.elderly.4": "Turvallisuuden tunne",
    "benefits.family": "Omaisille & Ammattilaisille",
    "benefits.family.1": "Ajankohtainen tieto toimintakyvystä",
    "benefits.family.2": "Varhaisessa vaiheessa olevien ongelmien havaitseminen",
    "benefits.family.3": "Datan pohjalta tehdyt hoitopäätökset",
    "benefits.family.4": "Läpinäkyvä raportointi",
    // Funding
    "funding.horizon.title": "Horizon 2020 tutkimus",
    "funding.horizon.text": "Benete Oy on saanut rahoitusta Euroopan unionin Horizon 2020 -tutkimus ja innovaatio-ohjelman avustussopimuksen Nro 877503 mukaisesti.",
    "funding.ely.title": "ELY rahoitus",
    "funding.ely.text": "Benete Oy on saanut rahoitusta Elinkeino-, liikenne- ja ympäristökeskukselta BNT-MDR hankkeeseen. Hankkeessa on kyseessä Benete Oy:n ikääntyneiden toimintakyvyn analysointipalvelun jatkokehitys.",
    
privacy: {
      title: "Tietosuojakäytäntö",
      customerInfo: {
        title: "Asiakastiedot",
        content: "Pysyäksemme yhteydessä nykyisiin tai potentiaalisiin asiakkaisiimme keräämme tietoja, joita annat ottaessasi meihin yhteyttä."
      },
      analytics: {
        title: "Analytiikkapalvelut",
        content: "Parantaaksemme vuorovaikutustasi verkkosivustomme kanssa voimme saada tietoa verkossa tapahtuvasta käyttäytymisestäsi ja käyttötiedoistasi. Emme yhdistä tältä verkkosivustolta kerättyjä tietoja mihinkään henkilökohtaisesti tunnistettaviin tietoihin muista lähteistä. Verkossa tapahtuva käyttäytymistieto poistetaan automaattisesti, jos se on yli 6 kuukautta vanhaa."
      },
      dataSecurity: {
        title: "Tietoturva",
        content: "Noudattaen yleisesti hyväksyttyjä verkkotietoturvastandardeja olemme varmistaneet, että keräämämme henkilötiedot tallennetaan turvallisiin käyttöympäristöihin. Henkilötietoihisi pääsevät käsiksi vain henkilöt, joiden on käsiteltävä niitä työtehtäviensä suorittamiseksi."
      },
      access: {
        title: "Pääsy ja siirto ETA:n ulkopuolelle",
        content1: "Henkilökohtaisia tietojasi ei paljasteta tai myydä kolmansille osapuolille. Analytiikkapalveluiden kautta kerättyjä tietoja voidaan tallentaa Euroopan talousalueen ulkopuolelle, jos analytiikkapalvelun tai ohjelmiston tarjoaja tallentaa tiedot ETA:n ulkopuolelle. Muutoin emme säännöllisesti siirrä tietojasi Euroopan talousalueen ulkopuolelle.",
        content2: "Toteutamme aina vahvimmat meille saatavilla olevat oikeudelliset, menettelylliset, fyysiset ja tekniset toimenpiteet parantaaksemme anonymiteettiäsi ja välttääksemme tietojesi ei-toivotun paljastamisen muille henkilöille, yrityksille ja hallinnolle, ellei laki, oikeuselin tai valtion virasto vaadi meitä paljastamaan niitä."
      },
      updates: {
        title: "Käytännön päivitykset",
        content: "Saatamme päivittää tätä tietosuojakäytäntöä ajoittain ja kannustamme sinua tarkistamaan uusimman version säännöllisesti osoitteessa www.benete.com. Pyrimme parhaaamme mukaan tiedottamaan sinulle kaikista tähän tietosuojakäytäntöön tehtävistä päivityksistä."
      },
      contact: {
        title: "Ota yhteyttä",
        content: "Jos sinulla on kysyttävää tai haluat pyytää pääsyä, poistamista tai korjaamista antamiisi tietoihin, ota meihin yhteyttä osoitteessa privacy@benete.com."
      }
    },
    terms: {
      title: "Käyttöehdot",
      introduction: {
        title: "Johdanto",
        content: "Nämä käyttöehdot koskevat tämän verkkosivuston käyttöä; käyttämällä tätä verkkosivustoa hyväksyt nämä käyttöehdot kokonaisuudessaan. Jos olet eri mieltä näistä käyttöehdoista tai mistä tahansa osasta näitä käyttöehtoja, et saa käyttää tätä verkkosivustoa."
      },
      intellectual: {
        title: "Immateriaalioikeudet",
        content: "Ellei toisin mainita, Benete Oy omistaa immateriaalioikeudet verkkosivustoon ja kaikkeen siinä julkaistuun materiaaliin (mukaan lukien mutta ei rajoittuen tekstiin, valokuviin ja muihin kuviin, tavaramerkkeihin ja logoihin)."
      },
      warranties: {
        title: "Ei takuita",
        content1: "Tämä verkkosivusto tarjotaan \"sellaisena kuin se on\" ilman mitään edustuksia tai takuita, ilmaistuja tai oletettuja. Benete Oy ei anna mitään edustuksia tai takuita tähän verkkosivustoon tai tällä verkkosivustolla tarjottuihin tietoihin ja materiaaleihin liittyen.",
        content2: "Tällä verkkosivustolla olevat tiedot tarjotaan vain tiedotustarkoituksiin ja Benete Oy käyttää kohtuullista huolellisuutta ja taitoa varmistaakseen, että ne ovat oikein julkaisupäivänä. Mikään tällä verkkosivustolla ei ole, tai ole tarkoitettu olemaan, minkäänlaista neuvontaa. Benete Oy ei siksi hyväksy mitään vastuuta, joka aiheutuu verkkosivustolla tarjottuihin tietoihin luottamisesta minkään vierailijan tai kolmannen osapuolen toimesta, joka saattaa saada tietoa sen sisällöstä."
      },
      law: {
        title: "Laki ja lainkäyttövalta",
        content: "Näitä käyttöehtoja sääntelevät ja tulkitaan Suomen lain mukaisesti, ja kaikki näihin käyttöehtoihin liittyvät riidat kuuluvat Suomen tuomioistuinten yksinomaiseen toimivaltaan."
      }
    },
"cookie.paragraph":'"Hyväksyn evästeet" -nappia painamalla hyväksyt, että evästeet tallennetaan laitteellesi. Näitä evästeitä käytetään tietojen keräämiseksi siitä, miten verkkosivustomme vierailijat käyttävät sivustoamme. Hyödynnämme kerättyä tietoa laatiaksemme yhteenvetoja ja kehittääksemme sivustoamme käyttäjäystävällisemmäksi.',
"cookie.title":"Evästekäytäntö",
"cookie.readMore":"Lisätietoa",
"cookie.decline":" Kieltäydy",
"cookie.accept":"Hyväksy evästeet"  
  
    }
  },
  {
    language: "en",
    translations: {"nav.home": "Home",
    "nav.ideology": "Ideology",
    "nav.service": "Service",
    "nav.team": "Our team",
    "nav.contact": "Contact",
    "header.title":"BeneCare",
    "header.subtitle":"We ensure that elderly people receive the right care at the right time.",
    "homepage.introduction_title":"Smart Support for Care Work and Everyday Wellbeing",
    "homepage.introduction_p1" : "BeneCare is designed for healthcare professionals including elderly care staff, nurses, doctors, and physiotherapists  as well as private users who want to monitor the wellbeing of their loved ones safely and unobtrusively.",
    "homepage.introduction_p2": "The service provides round-the-clock monitoring without wearable devices, making both professional care and everyday support more efficient and meaningful. BeneCare uses sensor technology and intelligent algorithms to model a person’s daily rhythm and behavior. ",
    "homepage.introduction_p3" :"This data helps detect changes in health, wellbeing, functional ability, and cognition  enabling timely responses before urgent care is needed.",
    "service.privacyTitle": "We Keep Personal Data Safe",
    "service.privacyText": "The analyses produced by BeneCare service are available to the senior, their relatives, and care staff through the web service or as printouts. The use of the service and data collection are always based on the person's consent. The collected personal data is not used or transmitted for any purpose other than related to the use of the service. In accordance with data protection law, the senior has the right to their own personal data and can request deletion of their personal data or termination of the service at any time.",
    "footer.followUs":"Follow us",
    "footer.privacy":"Privacy policy",
    "footer.terms":"Terms",
    "selector.title": "Choose Customer Type",
    "selector.subtitle": "We tailor our services to your needs",
    "selector.private.title": "Private Customers",
    "selector.private.description": "Secure your loved one's wellbeing and monitoring at home",
    "selector.company.title": "Business Customers",
    "selector.company.description": "Improve care efficiency and enhance service quality",
    "common.readMore":"Read more",
    "readMore.description":"Learn more about our services and how we offer a unique way to analyze life.",
    
    // Carousel
    "carousel.elderly.title": "Safe daily life for the elderly",
    "carousel.elderly.desc": "BeneCare supports independent living and provides a sense of security in everyday life.",
    "carousel.family.title": "Peace of mind for families",
    "carousel.family.desc": "Families can monitor their loved ones' well-being and receive up-to-date information about their health.",
    "carousel.nurse.title": "Professional care work",
    "carousel.nurse.desc": "Healthcare staff receive accurate information about residents' functional capacity and can respond to changes quickly.",
    "carousel.assistant.title": "Smart technology assistance",
    "carousel.assistant.desc": "The BeneCare system provides an easy-to-use platform for managing and analyzing all information.",
    // service
    "service.heading.intro": "Functionality assessment",
    "service.heading.title": "BeneCare",
    "features.title": "What does BeneCare monitor?",
    "features.subtitle": "Our service provides continuously updated information about a person's functional capacity and well-being",
    "features.activity.title": "Activity Monitoring",
    "features.activity.desc": "Time spent in rooms, indoor and outdoor movement, daily activity levels",
    "features.sleep.title": "Sleep Quality",
    "features.sleep.desc": "Amount, quality and timing of sleep and rest. Changes in nighttime behavior",
    "features.hygiene.title": "Hygiene Monitoring",
    "features.hygiene.desc": "Shower usage and sink activity. Identification of changes in hygiene care",
    "features.wc.title": "Bathroom Visits",
    "features.wc.desc": "Number, timing and duration of bathroom visits. Detection of increased frequency",
    "features.health.title": "Health Metrics",
    "features.health.desc": "Weight, BMI, blood pressure and other health metrics integrated into the system",
    "features.alerts.title": "Alerts",
    "features.alerts.desc": "Emergency bracelet for immediate assistance. All events are logged in the system",
      // How It Works
    "how.title": "How does BeneCare work?",
    "how.subtitle": "A simple and effective process that requires no action from the individual",
    "how.step1.title": "Installation",
    "how.step1.desc": "Unobtrusive sensors are installed in the person's home without disrupting daily life",
    "how.step2.title": "Data Collection",
    "how.step2.desc": "Sensors automatically collect information about daily activities",
    "how.step3.title": "Analysis",
    "how.step3.desc": "Sophisticated algorithms identify activities and model behavior patterns",
    "how.step4.title": "Reporting",
    "how.step4.desc": "Caregivers, doctors and family members receive up-to-date information about functional capacity",
    // Private Customer Page
    "private.hero.title": "Secure Your Loved One's Wellbeing",
    "private.hero.subtitle": "BeneCare provides unobtrusive monitoring and security for elderly living at home",
    "private.hero.cta": "Contact Us",
    "private.benefits.title": "Why BeneCare for Private Customers?",
    "private.benefits.peace.title": "Peace of Mind",
    "private.benefits.peace.text": "You can trust that your loved one is safe with 24/7 monitoring",
    "private.benefits.safety.title": "Safety",
    "private.benefits.safety.text": "Automatic alert in exceptional situations - help arrives on time",
    "private.benefits.response.title": "Quick Response",
    "private.benefits.response.text": "Immediate notification of potential issues to family and caregivers",
    "private.benefits.family.title": "Family Support",
    "private.benefits.family.text": "The whole family can easily monitor their loved one's wellbeing",
    
    // Company Customer Page
    "company.hero.title": "Improve Care Efficiency",
    "company.hero.subtitle": "BeneCare helps care professionals work more efficiently and improve service quality",
    "company.hero.cta": "Request Quote",
    "company.benefits.title": "Why BeneCare for Companies?",
    "company.benefits.efficiency.title": "Efficiency",
    "company.benefits.efficiency.text": "Reduce unnecessary visits and optimize work shifts",
    "company.benefits.cost.title": "Cost Savings",
    "company.benefits.cost.text": "Significant savings in personnel costs",
    "company.benefits.quality.title": "Quality Advantage",
    "company.benefits.quality.text": "Improve service quality with real-time information",
    "company.benefits.data.title": "Data-Driven",
    "company.benefits.data.text": "Make decisions based on reliable data",
    //Conatct
    "contact.form.title": "Contact us",
    "contact.form.type": "I'm interested in:",
    "contact.form.type.general": "General contact",
    "contact.form.type.assessment": "Functionality assessment",
    "contact.form.firstName": "First name",
    "contact.form.lastName": "Last name",
    "contact.form.helper-text":"Provide an email or phone number *",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone number",
    "contact.form.organization": "Organization (optional)",
    "contact.form.role": "Your role (optional)",
    "contact.form.message": "Write your message...",
    "contact.form.submit": "Send",
    "contact.form.successH1": "Thank you for contacting us!",
    "contact.form.successP": "We will get back to you within 24 hours",
    "contact.form.successB": "Close",
    "contact.company": "Benete Ltd",
    "contact.address1": "Tykistökatu 4b",
    "contact.address2": "20520 Turku, Finland",
    "contact.floor": "(5th floor)",
    "contact.ceo": "Kari Bäckman, CEO",
    "contact.phone": "+358 50 052 4514",
    "contact.email": "kari.backman@benete.com",
    "contact.heading.intro": "Let’s talk",
    

   // Ideology Page
    "ideology.hero.subtitle": "As a care expert",
    "ideology.hero.title1": "Makes everyday life easier",
    "ideology.hero.title1b": "and increases security",
    "ideology.hero.title2": "Brings peace of mind",
    "ideology.hero.title2b": "to families and loved ones",
    "ideology.hero.title3": "Supports active",
    "ideology.hero.title3b": "and independent living for seniors",
    "ideology.title":"On your terms",
    "hero.subtitleLines": [
  [
    { "text": "Individual", "color": "black" },
    { "text": "independence", "color": "blue" }
  ],
  [
    { "text": "Digital", "color": "black" },
    { "text": "dignity", "color": "blue" }
  ],
  [
    { "text": "Valuable", "color": "black" },
    { "text": "life", "color": "blue" }
  ]
],
    "ideology.values.care": "Caring",
    "ideology.values.careDesc": "Every person deserves attention, warmth, and individualized care",
    "ideology.values.safety": "Security",
    "ideology.values.safetyDesc": "Reliable technology and 24/7 monitoring ensure peace of mind",
    "ideology.values.quality": "Quality",
    "ideology.values.qualityDesc": "We are committed to the highest quality in everything we do",
    "ideology.section1.title": "Insights from daily routines",
    "ideology.section1.p1": "Simple daily activities create the rhythm of our everyday life, such as cooking, rest, and personal hygiene. These are part of our normal lives, but they also have a greater significance than we think. Combined and analyzed, they provide valuable insights into our physical and emotional well-being.",
    "ideology.section1.p2": "With the BeneCare service, it is possible to identify changes in functional capacity and cognition at an early stage. Unlike general health and wellness services, we analyze a person's life holistically, covering much more than just physiological data.",
    "ideology.section2.title": "Living environment",
    "ideology.section2.p1": "The living environment is known to have a great impact on our well-being and can also tell a lot about our daily life. The use of smart technologies is constantly increasing and it is only a matter of time before our homes are equipped with various sensor technologies enabling real-time life monitoring.",
    "ideology.section2.p2": "BeneCare service's sophisticated algorithms recognize a person's daily activities, model behaviors in their own living environment, and assess possible changes in functional capacity. By observing and analyzing daily activities, harmful changes in functional capacity can be detected at a much earlier stage than is possible with conventional methods.",
    "ideology.section3.title": "Active aging",
    "ideology.section3.p1": "Quality of life improves when a person can function independently in their own familiar environment. It creates a sense of security and independence from others. The foundation of active aging is one's own activity and motivation for life.",
    "ideology.section3.p2": "Early identification of changes in functional capacity and cognitive disorders helps in providing early and precise care. This has a great impact on people's lives, adding active and independent days to life. Enabling gentle care and cherishing the sense of independence are our key goals.",
    "ideology.section3.p3": "As a result of our activities, social and healthcare benefits significantly from reduced elderly care costs and new, more effective services.",
    "ideology.section4.title": "MyData",
    "ideology.section4.p1": "Data collected from individuals is extremely sensitive. Our service enables our customers to have full access and control over their own data. Our service complies with the latest data protection and information security requirements, taking these into account already in the design of services, together with our own ethical data and digital dignity principles.",
    "ideology.section5.title": "Our values",
    "ideology.section5.p1": "Personal changes in functional capacity are usually not monitored or recorded until it is too late and a diagnosis has been given. Many people are dependent on others to get through the day, which weakens their sense of independence. It is important to recognize what individual independence means for each person.",
    "ideology.section5.p2": "With our service, it is possible to identify functional and memory-related disorders as early as possible and start the necessary treatment measures as early as possible.",
    // Benefits
    "benefits.title": "Benefits for all parties",
    "benefits.subtitle": "BeneCare improves the quality of care and supports the well-being of elderly people",
    "benefits.caregivers": "For Caregivers",
    "benefits.caregivers.1": "More efficient and meaningful care work",
    "benefits.caregivers.2": "Earlier intervention in problems",
    "benefits.caregivers.3": "More precise response to residents' needs",
    "benefits.caregivers.4": "24/7 secure monitoring",
    "benefits.elderly": "For the Elderly",
    "benefits.elderly.1": "Normal daily life without intrusive devices",
    "benefits.elderly.2": "No wearable technology",
    "benefits.elderly.3": "Better quality of life",
    "benefits.elderly.4": "Sense of security",
    "benefits.family": "For Families & Professionals",
    "benefits.family.1": "Up-to-date information on functional capacity",
    "benefits.family.2": "Early detection of emerging problems",
    "benefits.family.3": "Data-driven care decisions",
    "benefits.family.4": "Transparent reporting",
    
    // Funding
    "funding.horizon.title": "Horizon 2020 Research",
    "funding.horizon.text": "Benete Oy has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 877503.",
    "funding.ely.title": "ELY Funding",
    "funding.ely.text": "Benete Oy has received funding from the Centre for Economic Development, Transport and the Environment for the BNT-MDR project. The project involves the further development of Benete Oy's elderly functional capacity analysis service.",
    

privacy: {
      title: "Privacy policy",
      customerInfo: {
        title: "Customer information",
        content: "To stay in touch with our current or prospective customers, we will collect information you provide when contacting us."
      },
      analytics: {
        title: "Analytics services",
        content: "To improve your interaction with our website, we can get information about your online behavioural and usage data. We will not associate any data gathered from this website with any personally identifying information from any other source. Online behavioural data will be automatically deleted if older than 6 months."
      },
      dataSecurity: {
        title: "Data security",
        content: "Complying with generally accepted online security standards, we have ensured that the personal data we collect is stored in secure operating environments. Your personal data can only be accessed by individuals who need to process it for the performance of their work duties."
      },
      access: {
        title: "Access and transfer outside EEA",
        content1: "Your personal information will not be disclosed or sold to third parties. Information collected through analytics services can be stored outside the European Economic Area if the analytics services or software provider stores the data outside the EEA. Otherwise, we do not regularly transfer your data outside the European Economic Area.",
        content2: "We will always implement the most robust legal, procedural, physical and technical measures available to us in order to improve your anonymity and avoid unwanted disclosure of your data to other individuals, corporations and administrations, unless we are required to disclose it by law, judicial body or government agency."
      },
      updates: {
        title: "Policy updates",
        content: "We may periodically update this Privacy Policy and encourage you to check the latest version regularly at www.benete.com. We will put our best effort to inform you about any updates to this Privacy policy."
      },
      contact: {
        title: "Contact us",
        content: "In case you have any questions or would like to request access, removal or correction of the information you have provided, please contact us at privacy@benete.com."
      }
    },
    terms: {
      title: "Terms & Conditions",
      introduction: {
        title: "Introduction",
        content: "These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website."
      },
      intellectual: {
        title: "Intellectual property rights",
        content: "Unless otherwise stated, Benete Oy owns the intellectual property rights in the website and in any material published on it (including but not limited to text, photographs and other images, trademarks and logos)."
      },
      warranties: {
        title: "No warranties",
        content1: "This website is provided \"as is\" without any representations or warranties, express or implied. Benete Oy makes no representations or warranties in relation to this website or the information and materials provided on this website.",
        content2: "The information contained on this website is provided for information purposes only and Benete Oy will use reasonable care and skill to ensure that it is accurate at the date of publication. Nothing on this website constitutes, or is meant to constitute, advice of any kind. Benete Oy, therefore, accepts no liability or responsibility arising from any reliance placed on information provided on the website by any visitor, or by any third party who may be informed of any of its contents."
      },
      law: {
        title: "Law and jurisdiction",
        content: "These terms and conditions will be governed by and construed in accordance with Finnish law, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Finland."
      }
    },
    

"cookie.paragraph":'By clicking “ Allow cookies”, you agree to the storing of cookies on your device, to enhance site navigation, analyse site usage, and assist in our marketing efforts',
"cookie.title":"Cookie policy",
"cookie.readMore":"Learn more",
"cookie.decline":" Decline",
"cookie.accept":"Allow cookies"
    }
  },
  {
    language: "sv",
    translations: {
     "nav.home": "Hem",
  "nav.ideology": "Ideologi",
  "nav.service": "Tjänster",
  "nav.team": "Teamet",
  "nav.contact": "Kontakt",
  "header.title":"BeneCare",
  "header.subtitle": "Vi säkerställer att äldre får rätt vård i rätt tid.",
  "homepage.introduction_title":"Smart stöd för vårdarbete och vardagligt välbefinnande",
  "homepage.introduction_p1" : "BeneCare är utvecklat för vårdpersonal inklusive personal inom äldrevård, sjuksköterskor, läkare och sjukgymnaster  samt privatanvändare som vill övervaka sina närståendes välbefinnande säkert och diskret.",
  "homepage.introduction_p2": "Tjänsten erbjuder dygnet-runt-övervakning utan bärbara enheter, vilket gör både professionell vård och vardagligt stöd mer effektivt och meningsfullt. BeneCare använder sensorteknik och intelligenta algoritmer för att modellera en persons dagliga rytm och beteende. ",
  "homepage.introduction_p3" :"Denna data hjälper till att upptäcka förändringar i hälsa, välbefinnande, funktionsförmåga och kognition  vilket möjliggör snabba åtgärder innan akut vård behövs.",
  "service.privacyTitle": "Vi håller personuppgifter säkra",
  "service.privacyText": "Analyserna som produceras av BeneCare-tjänsten är tillgängliga för senioren, deras anhöriga och vårdpersonal via webbtjänsten eller som utskrifter. Användningen av tjänsten och datainsamlingen baseras alltid på personens samtycke. Insamlade personuppgifter används eller överförs inte för något annat syfte än relaterat till användningen av tjänsten. I enlighet med dataskyddslagen har senioren rätt till sina egna personuppgifter och kan när som helst begära radering av sina personuppgifter eller avslutande av tjänsten.",
  
  "selector.title": "Välj kundtyp",
  "selector.subtitle": "Vi skräddarsyr våra tjänster efter dina behov",
  "selector.private.title": "Privatkunder",
  "selector.private.description": "Säkra din närståendes välbefinnande och övervakning hemma",
  "selector.company.title": "Företagskunder",
  "selector.company.description": "Förbättra vårdeffektiviteten och höj servicekvaliteten",
  "common.readMore":"Läs mer",
  "readMore.description":"Läs mer om våra tjänster och hur vi erbjuder ett unikt sätt att analysera livet.",
  "footer.privacy":"Integritetspolicy",
  "footer.terms":"Villkor",
  // Carousel
    "carousel.elderly.title": "Säkert dagligt liv för äldre",
    "carousel.elderly.desc": "BeneCare stöder självständigt boende och ger en känsla av trygghet i vardagen.",
    "carousel.family.title": "Sinnesro för familjer",
    "carousel.family.desc": "Familjer kan övervaka sina närståendes välbefinnande och få uppdaterad information om deras hälsa.",
    "carousel.nurse.title": "Professionellt vårdarbete",
    "carousel.nurse.desc": "Vårdpersonal får exakt information om invånares funktionsförmåga och kan svara snabbt på förändringar.",
    "carousel.assistant.title": "Smart teknikassistans",
    "carousel.assistant.desc": "BeneCare-systemet tillhandahåller en lättanvänd plattform för att hantera och analysera all information.",
    // service
    "service.heading.intro": "Funktionsbedömning",
    "service.heading.title": "BeneCare",
    "features.title": "Vad övervakar BeneCare?",
    "features.subtitle": "Vår tjänst tillhandahåller kontinuerligt uppdaterad information om en persons funktionsförmåga och välbefinnande",
    "features.activity.title": "Aktivitetsövervakning",
    "features.activity.desc": "Tid i rum, inomhus- och utomhusrörelse, dagliga aktivitetsnivåer",
    "features.sleep.title": "Sömnkvalitet",
    "features.sleep.desc": "Mängd, kvalitet och timing av sömn och vila. Förändringar i nattligt beteende",
    "features.hygiene.title": "Hygienövervakning",
    "features.hygiene.desc": "Dusch- och handfatanvändning. Identifiering av förändringar i hygienvård",
    "features.wc.title": "Toalettbesök",
    "features.wc.desc": "Antal, timing och varaktighet av toalettbesök. Upptäckt av ökad frekvens",
    "features.health.title": "Hälsomått",
    "features.health.desc": "Vikt, BMI, blodtryck och andra hälsomått integrerade i systemet",
    "features.alerts.title": "Larm",
    "features.alerts.desc": "Nödarmband för omedelbar hjälp. Alla händelser loggas i systemet",
    // How It Works
    "how.title": "Hur fungerar BeneCare?",
    "how.subtitle": "En enkel och effektiv process som inte kräver någon åtgärd från individen",
    "how.step1.title": "Installation",
    "how.step1.desc": "Diskreta sensorer installeras i personens hem utan att störa det dagliga livet",
    "how.step2.title": "Datainsamling",
    "how.step2.desc": "Sensorer samlar automatiskt information om dagliga aktiviteter",
    "how.step3.title": "Analys",
    "how.step3.desc": "Sofistikerade algoritmer identifierar aktiviteter och modellerar beteendemönster",
    "how.step4.title": "Rapportering",
    "how.step4.desc": "Vårdgivare, läkare och familjemedlemmar får uppdaterad information om funktionsförmåga",
    // Private Customer Page
    "private.hero.title": "Säkra din närståendes välbefinnande",
    "private.hero.subtitle": "BeneCare tillhandahåller diskret övervakning och säkerhet för äldre som bor hemma",
    "private.hero.cta": "Kontakta oss",
    "private.benefits.title": "Varför BeneCare för privatkunder?",
    "private.benefits.peace.title": "Sinnesro",
    "private.benefits.peace.text": "Du kan lita på att din närstående är säker med 24/7 övervakning",
    "private.benefits.safety.title": "Säkerhet",
    "private.benefits.safety.text": "Automatiskt larm vid exceptionella situationer - hjälpen kommer i tid",
    "private.benefits.response.title": "Snabb respons",
    "private.benefits.response.text": "Omedelbar avisering om potentiella problem till familj och vårdgivare",
    "private.benefits.family.title": "Familjestöd",
    "private.benefits.family.text": "Hela familjen kan enkelt övervaka sin närståendes välbefinnande",
    
    // Company Customer Page
    "company.hero.title": "Förbättra vårdeffektiviteten",
    "company.hero.subtitle": "BeneCare hjälper vårdproffs att arbeta mer effektivt och förbättra servicekvaliteten",
    "company.hero.cta": "Begär offert",
    "company.benefits.title": "Varför BeneCare för företag?",
    "company.benefits.efficiency.title": "Effektivitet",
    "company.benefits.efficiency.text": "Minska onödiga besök och optimera arbetspass",
    "company.benefits.cost.title": "Kostnadsbesparingar",
    "company.benefits.cost.text": "Betydande besparingar i personalkostnader",
    "company.benefits.quality.title": "Kvalitetsfördel",
    "company.benefits.quality.text": "Förbättra servicekvaliteten med realtidsinformation",
    "company.benefits.data.title": "Datadriven",
    "company.benefits.data.text": "Fatta beslut baserade på tillförlitlig data",
    //Contact
    "contact.form.title": "Kontakta oss",
    "contact.form.type": "Jag är intresserad av:",
    "contact.form.type.general": "Allmän kontakt",
    "contact.form.type.assessment": "Funktionsbedömning",
    "contact.form.firstName": "Förnamn",
    "contact.form.lastName": "Efternamn",
    "contact.form.helper-text":"Ange e‑post eller telefonnummer *",
    "contact.form.email": "E-post",
    "contact.form.phone": "Telefonnummer ",
    "contact.form.organization": "Organisation (valfritt)",
    "contact.form.role": "Din roll (valfritt)",
    "contact.form.message": "Skriv ditt meddelande...",
    "contact.form.submit": "Skicka",
    "contact.form.successH1": "Tack för att du kontaktade oss!",
    "contact.form.successP": "Vi återkommer till dig inom 24 timmar",
    "contact.form.successB": "Stäng",
    "contact.company": "Benete Oy",
    "contact.address1": "Artillerigatan 4b",
    "contact.address2": "20520 Åbo, Finland",
    "contact.floor": "(5:e våningen)",
    "contact.ceo": "Kari Bäckman, Verkställande direktör",
    "contact.phone": "+358 50 052 4514",
    "contact.email": "kari.backman@benete.com",
    "contact.heading.intro": "Låt oss prata",
    "contact.heading.title": "Hur kan vi hjälpa till?",
    "footer.followUs":" Följ oss",
  // Ideology Page
    "ideology.hero.subtitle": "Som vårdexpert",
    "ideology.hero.title1": "Förenklar vardagen",
    "ideology.hero.title1b": "och ökar tryggheten",
    "ideology.hero.title2": "Ger sinnesro",
    "ideology.hero.title2b": "till familjer och anhöriga",
    "ideology.hero.title3": "Stödjer aktivt",
    "ideology.hero.title3b": "och självständigt boende för äldre",
    "ideology.title":"På dina villkor",
    "hero.subtitleLines": [
  [
    { "text": "Individuell", "color": "black" },
    { "text": "självständighet", "color": "blue" }
  ],
  [
    { "text": "Digital", "color": "black" },
    { "text": "värdighet", "color": "blue" }
  ],
  [
    { "text": "Värdefullt", "color": "black" },
    { "text": "liv", "color": "blue" }
  ]
],
    "ideology.values.care": "Omsorg",
    "ideology.values.careDesc": "Varje person förtjänar uppmärksamhet, värme och individualiserad vård",
    "ideology.values.safety": "Säkerhet",
    "ideology.values.safetyDesc": "Pålitlig teknologi och övervakning dygnet runt garanterar sinnesro",
    "ideology.values.quality": "Kvalitet",
    "ideology.values.qualityDesc": "Vi är engagerade i högsta kvalitet i allt vi gör",
    "ideology.section1.title": "Insikter från dagliga rutiner",
    "ideology.section1.p1": "Enkla dagliga aktiviteter skapar rytmen i vårt vardagliga liv, såsom matlagning, vila och personlig hygien. Dessa är en del av vårt normala liv, men de har också en större betydelse än vi tror. Kombinerade och analyserade ger de värdefulla insikter om vårt fysiska och emotionella välbefinnande.",
    "ideology.section1.p2": "Med BeneCare-tjänsten är det möjligt att identifiera förändringar i funktionsförmåga och kognition i ett tidigt skede. Till skillnad från allmänna hälso- och välbefinnandetjänster analyserar vi en persons liv holistiskt och täcker mycket mer än bara fysiologisk data.",
    "ideology.section2.title": "Livsmiljö",
    "ideology.section2.p1": "Livsmiljön har känt stor påverkan på vårt välbefinnande och kan också berätta mycket om vårt dagliga liv. Användningen av smarta teknologier ökar ständigt och det är bara en tidsfråga innan våra hem är utrustade med olika sensorteknologier som möjliggör realtidsövervakning av livet.",
    "ideology.section2.p2": "BeneCare-tjänstens sofistikerade algoritmer känner igen en persons dagliga aktiviteter, modellerar beteenden i deras egen livsmiljö och bedömer möjliga förändringar i funktionsförmåga. Genom att observera och analysera dagliga aktiviteter kan skadliga förändringar i funktionsförmåga upptäckas i ett mycket tidigare skede än vad som är möjligt med konventionella metoder.",
    "ideology.section3.title": "Aktivt åldrande",
    "ideology.section3.p1": "Livskvaliteten förbättras när en person kan fungera självständigt i sin egen välbekanta miljö. Det skapar en känsla av trygghet och oberoende från andra. Grunden för aktivt åldrande är egen aktivitet och motivation för livet.",
    "ideology.section3.p2": "Tidig identifiering av förändringar i funktionsförmåga och kognitiva störningar hjälper till att tillhandahålla tidig och precis vård. Detta har stor påverkan på människors liv och lägger till aktiva och oberoende dagar i livet. Att möjliggöra mild omsorg och vårda känslan av oberoende är våra huvudmål.",
    "ideology.section3.p3": "Som ett resultat av vår verksamhet gynnas sociala och hälsovården avsevärt av minskade vårdkostnader för äldre och nya, mer effektiva tjänster.",
    "ideology.section4.title": "MinData",
    "ideology.section4.p1": "Data som samlas in från individer är extremt känslig. Vår tjänst gör det möjligt för våra kunder att ha full tillgång och kontroll över sina egna data. Vår tjänst följer de senaste kraven på dataskydd och informationssäkerhet och tar hänsyn till dessa redan i utformningen av tjänster, tillsammans med våra egna etiska data- och digitala värdighets principer.",
    "ideology.section5.title": "Våra värderingar",
    "ideology.section5.p1": "Personliga förändringar i funktionsförmåga övervakas eller registreras vanligtvis inte förrän det är för sent och en diagnos har ställts. Många människor är beroende av andra för att klara dagen, vilket försvagar deras känsla av oberoende. Det är viktigt att inse vad individuellt oberoende betyder för varje person.",
    "ideology.section5.p2": "Med vår tjänst är det möjligt att identifiera funktionella och minnesrelaterade störningar så tidigt som möjligt och påbörja nödvändiga behandlingsåtgärder så tidigt som möjligt.",
 
    // Benefits
    "benefits.title": "Fördelar för alla parter",
    "benefits.subtitle": "BeneCare förbättrar vårdens kvalitet och stöder äldres välbefinnande",
    "benefits.caregivers": "För vårdgivare",
    "benefits.caregivers.1": "Mer effektivt och meningsfullt vårdarbete",
    "benefits.caregivers.2": "Tidigare intervention vid problem",
    "benefits.caregivers.3": "Mer exakt respons på invånares behov",
    "benefits.caregivers.4": "24/7 säker övervakning",
    "benefits.elderly": "För äldre",
    "benefits.elderly.1": "Normalt dagligt liv utan påträngande enheter",
    "benefits.elderly.2": "Ingen bärbar teknik",
    "benefits.elderly.3": "Bättre livskvalitet",
    "benefits.elderly.4": "Känsla av trygghet",
    "benefits.family": "För familjer och professionella",
    "benefits.family.1": "Uppdaterad information om funktionsförmåga",
    "benefits.family.2": "Tidig upptäckt av uppkommande problem",
    "benefits.family.3": "Datadrivna vårdbeslut",
    "benefits.family.4": "Transparent rapportering",
     // Funding
    "funding.horizon.title": "Horizon 2020 forskning",
    "funding.horizon.text": "Benete Oy har erhållit finansiering från Europeiska unionens Horizon 2020 forsknings- och innovationsprogram enligt bidragsavtal nr 877503.",
    "funding.ely.title": "ELY-finansiering",
    "funding.ely.text": "Benete Oy har erhållit finansiering från Närings-, trafik- och miljöcentralen för projektet BNT-MDR. Projektet handlar om vidareutveckling av Benete Oy:s analystjänst för äldres funktionsförmåga.",
    
privacy: {
      title: "Integritetspolicy",
      customerInfo: {
        title: "Kundinformation",
        content: "För att hålla kontakten med våra nuvarande eller potentiella kunder samlar vi in information som du tillhandahåller när du kontaktar oss."
      },
      analytics: {
        title: "Analystjänster",
        content: "För att förbättra din interaktion med vår webbplats kan vi få information om ditt onlinebeteende och användningsdata. Vi kommer inte att associera någon data som samlas in från denna webbplats med någon personligt identifierande information från någon annan källa. Onlinebeteendedata raderas automatiskt om den är äldre än 6 månader."
      },
      dataSecurity: {
        title: "Datasäkerhet",
        content: "I enlighet med allmänt accepterade onlinesäkerhetsstandarder har vi säkerställt att de personuppgifter vi samlar in lagras i säkra driftsmiljöer. Dina personuppgifter kan endast nås av personer som behöver behandla dem för att utföra sina arbetsuppgifter."
      },
      access: {
        title: "Åtkomst och överföring utanför EES",
        content1: "Din personliga information kommer inte att avslöjas eller säljas till tredje part. Information som samlas in genom analystjänster kan lagras utanför Europeiska ekonomiska samarbetsområdet om analystjänsten eller mjukvaruleverantören lagrar data utanför EES. Annars överför vi inte regelbundet dina uppgifter utanför Europeiska ekonomiska samarbetsområdet.",
        content2: "Vi kommer alltid att implementera de mest robusta juridiska, procedurella, fysiska och tekniska åtgärder som är tillgängliga för oss för att förbättra din anonymitet och undvika oönskad avslöjande av dina uppgifter till andra individer, företag och administrationer, såvida vi inte är skyldiga att avslöja det enligt lag, rättslig myndighet eller statlig myndighet."
      },
      updates: {
        title: "Policyuppdateringar",
        content: "Vi kan periodiskt uppdatera denna integritetspolicy och uppmuntrar dig att regelbundet kontrollera den senaste versionen på www.benete.com. Vi kommer att göra vårt bästa för att informera dig om eventuella uppdateringar av denna integritetspolicy."
      },
      contact: {
        title: "Kontakta oss",
        content: "Om du har några frågor eller vill begära åtkomst, borttagning eller korrigering av den information du har tillhandahållit, kontakta oss på privacy@benete.com."
      }
    },
    terms: {
      title: "Villkor",
      introduction: {
        title: "Introduktion",
        content: "Dessa villkor styr din användning av denna webbplats; genom att använda denna webbplats accepterar du dessa villkor i sin helhet. Om du inte håller med om dessa villkor eller någon del av dessa villkor får du inte använda denna webbplats."
      },
      intellectual: {
        title: "Immateriella rättigheter",
        content: "Om inte annat anges äger Benete Oy de immateriella rättigheterna till webbplatsen och till allt material som publiceras på den (inklusive men inte begränsat till text, fotografier och andra bilder, varumärken och logotyper)."
      },
      warranties: {
        title: "Inga garantier",
        content1: "Denna webbplats tillhandahålls \"som den är\" utan några representationer eller garantier, uttryckliga eller underförstådda. Benete Oy lämnar inga representationer eller garantier i förhållande till denna webbplats eller informationen och materialet som tillhandahålls på denna webbplats.",
        content2: "Informationen som finns på denna webbplats tillhandahålls endast i informationssyfte och Benete Oy kommer att använda rimlig omsorg och skicklighet för att säkerställa att den är korrekt vid publiceringsdatumet. Ingenting på denna webbplats utgör, eller är avsett att utgöra, råd av något slag. Benete Oy accepterar därför inget ansvar eller ansvar som uppstår från något förlitande på information som tillhandahålls på webbplatsen av någon besökare, eller av någon tredje part som kan informeras om något av dess innehåll."
      },
      law: {
        title: "Lag och jurisdiktion",
        content: "Dessa villkor kommer att regleras av och tolkas i enlighet med finsk lag, och alla tvister som rör dessa villkor kommer att vara föremål för den exklusiva jurisdiktionen hos domstolarna i Finland."
      }
    },
    "cookie.paragraph":'Genom att klicka på ”Tillåt cookies” samtycker du till att cookies lagras på din enhet. Detta förbättrar navigeringen på webbplatsen, möjliggör analys av användningen och stödjer våra marknadsföringsinsatser.',
    "cookie.title":"Cookie policy",
    "cookie.readMore":"Lära sig mer",
    "cookie.decline":" Tillbakagång",
    "cookie.accept":"Tillåt cookies"
    }
  }
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("translationDB");
    const collection = db.collection("translation");

    const results = [];

    for (const entry of translations) {
      const existing = await collection.findOne({ language: entry.language });
      if (existing) {
        results.push({ language: entry.language, status: "already exists" });
      } else {
        await collection.insertOne(entry);
        results.push({ language: entry.language, status: "inserted" });
      }
    }

    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error("Seeding error:", error);
    res.status(500).json({ error: "Failed to seed translations" });
  }
}
// add this button in anywhere in component andwhen you click it it will activat the function so it add the translation object to mongodb
/*<button onClick={() => fetch("/api/seed-translations", { method: "POST" })}>Seed Translations</button>*/ 
