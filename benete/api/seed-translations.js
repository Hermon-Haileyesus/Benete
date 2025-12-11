import { MongoClient } from "mongodb";

const translations = [
  {
    language: "fi",
    translations: {
    "navHome": "Koti",
    "navIdeology": "Ideologia",
    "navService": "Palvelu",
    "navTeam": "Tiimi",
    "navContact": "Yhteystiedot",
    "headerTitle":"BeneCare",
    "headerSubtitle":"Varmistamme, että ikäihmiset saavat oikeanlaista hoitoa oikea-aikaisesti.",
    "homepageIntroductionTitle":"Älykäs tuki hoitotyöhön ja arjen hyvinvointiin",
    "homepageIntroductionP1" : "BeneCare on kehitetty hoitotyön ammattilaisille  sekä yksityiskäyttäjille, jotka haluavat seurata läheistensä hyvinvointia turvallisesti ja huomaamattomasti.",
    "homepageIntroductionP2": "Palvelu tarjoaa ympärivuorokautisen seurannan ilman puettavia laitteita, tehden hoitotyöstä ja arjen huolenpidosta tehokkaampaa ja mielekkäämpää. BeneCare hyödyntää sensoriteknologiaa ja älykkäitä algoritmeja mallintaakseen henkilön päivittäistä rytmiä ja toimintatapoja. ",
    "homepageIntroductionP3" :"Näiden tietojen avulla voidaan havaita muutoksia terveydessä, hyvinvoinnissa, toimintakyvyssä ja kognitiossa  ja reagoida ajoissa ennen kuin tilanne vaatii akuuttia hoitoa.",
    "servicePrivacyTitle": "Pidämme henkilötiedot turvassa",
    "servicePrivacyText": "BeneCare -palvelun tuottamat analyysit ovat seniorin, hänen omaistensa ja hoitohenkilökunnan nähtävissä verkkopalvelun kautta tai tulosteena. Palvelun käyttö ja datan kerääminen perustuvat aina henkilön suostumukseen. Kerättyä henkilötietoa ei käytetä tai välitetä muuhun kuin palvelun käyttöön liittyvään tarkoitukseen. Tietosuojalain mukaisesti seniorilla on oikeus omiin henkilötietoihinsa ja hän voi pyytää henkilötietojensa poistamista tai palvelun lopettamista milloin tahansa.",
    
   "selectorTitle": "Valitse asiakastyyppi",
  "selectorSubtitle": "Räätälöimme palvelumme tarpeidesi mukaan",
  "selectorPrivateTitle": "Yksityisasiakkaat",
  "selectorPrivateDescription": "Turvaa läheisesi hyvinvointi ja seuranta kotona",
  "selectorCompanyTitle": "Yritysasiakkaat",
  "selectorCompanyDescription": "Tehosta hoitotyötä ja paranna palvelun laatua",

  "commonReadMore": "Lue lisää",
  "readMoreDescription": "Lue lisää palveluistamme ja miten tarjoamme ainutlaatuisen tavan analysoida elämää.",

  "footerFollowUs": "Seuraa meitä",
  "footerPrivacy": "Yksityisyys",
  "footerTerms": "Tietosuoja",

  "carouselElderlyTitle": "Turvallinen arki ikäihmisille",
  "carouselElderlyDesc": "BeneCare tukee itsenäistä asumista ja antaa turvallisuuden tunteen päivittäisessä elämässä.",
  "carouselFamilyTitle": "Mielenrauha omaisille",
  "carouselFamilyDesc": "Perheet voivat seurata läheistensä vointia ja saada ajantasaista tietoa heidän hyvinvoinnistaan.",
  "carouselNurseTitle": "Ammattitaitoinen hoitotyö",
  "carouselNurseDesc": "Hoitohenkilöstö saa tarkat tiedot asukkaiden toimintakyvystä ja voi reagoida muutoksiin nopeasti.",
  "carouselAssistantTitle": "Älykäs teknologia avuksi",
  "carouselAssistantDesc": "BeneCare-järjestelmä tarjoaa helppokäyttöisen alustan kaiken tiedon hallintaan ja analysointiin.",

  "serviceHeadingIntro": "Toimintakyvyn arviointi",
  "serviceHeadingTitle": "BeneCare",

  "featuresTitle": "Mitä BeneCare seuraa?",
  "featuresSubtitle": "Palvelumme tarjoaa jatkuvasti päivittyvää tietoa henkilön toimintakyvystä ja hyvinvoinnista",
  "featuresActivityTitle": "Aktiivisuuden seuranta",
  "featuresActivityDesc": "Huoneessa vietetty aika, liikkuminen sisällä ja ulkona, päivittäinen aktiivisuus",
  "featuresSleepTitle": "Unen laatu",
  "featuresSleepDesc": "Unen ja levon määrä, laatu ja ajankohdat. Yöllisen käyttäytymisen muutokset",
  "featuresHygieneTitle": "Hygienian seuranta",
  "featuresHygieneDesc": "Suihkussa käynti ja pesualtaan käyttö. Hygienian hoidon muutosten tunnistus",
  "featuresWcTitle": "WC-käynnit",
  "featuresWcDesc": "WC-käyntien määrä, ajankohdat ja kesto. Tihentyneiden käyntien havaitseminen",
  "featuresHealthTitle": "Terveysmittarit",
  "featuresHealthDesc": "Paino, BMI, verenpaine ja muut terveysmittarit integroituna järjestelmään",
  "featuresAlertsTitle": "Hälytykset",
  "featuresAlertsDesc": "Hälytysranneke akuutin avun saamiseksi. Kaikki tapahtumat kirjautuvat järjestelmään",


  "howTitle": "Kuinka BeneCare toimii?",
  "howSubtitle": "Yksinkertainen ja tehokas prosessi, joka ei vaadi toimenpiteitä henkilöltä",
  "howStep1Title": "Asennus",
  "howStep1Desc": "Huomaamattomat sensorit asennetaan henkilön asuntoon ilman häiriötä arkeen",
  "howStep2Title": "Tiedon keruu",
  "howStep2Desc": "Sensorit keräävät tietoa päivittäisestä toiminnasta automaattisesti",
  "howStep3Title": "Analysointi",
  "howStep3Desc": "Sofistikoituneet algoritmit tunnistavat toimintoja ja mallintavat toimintatapoja",
  "howStep4Title": "Raportointi",
  "howStep4Desc": "Hoitajat, lääkärit ja omaiset saavat ajankohtaista tietoa toimintakyvystä",

  "privateHeroTitle": "Turvaa läheisesi hyvinvointi",
  "privateHeroSubtitle": "BeneCare tarjoaa huomaamattoman seurannan ja turvaa ikääntyville kotona asumiseen",
  "privateHeroCta": "Ota yhteyttä",
  "privateBenefitsTitle": "Miksi BeneCare yksityisasiakkaille?",
  "privateBenefitsPeaceTitle": "Mielenrauha",
  "privateBenefitsPeaceText": "Voit luottaa, että läheisesi on turvassa 24/7 seurannan ansiosta",
  "privateBenefitsSafetyTitle": "Turvallisuus",
  "privateBenefitsSafetyText": "Automaattinen hälytys poikkeustilanteissa - apu tulee ajoissa",
  "privateBenefitsResponseTitle": "Nopea reagointi",
  "privateBenefitsResponseText": "Välitön tieto mahdollisista ongelmista omaisille ja hoitajille",
  "privateBenefitsFamilyTitle": "Perheen tuki",
  "privateBenefitsFamilyText": "Koko perhe voi seurata läheisen vointia helposti",

  "companyHeroTitle": "Tehosta hoitotyötä",
  "companyHeroSubtitle": "BeneCare auttaa hoitotyön ammattilaisia toimimaan tehokkaammin ja parantamaan palvelun laatua",
  "companyHeroCta": "Pyydä tarjous",
  "companyBenefitsTitle": "Miksi BeneCare yrityksille?",
  "companyBenefitsEfficiencyTitle": "Tehokkuus",
  "companyBenefitsEfficiencyText": "Vähennä turhia käyntejä ja optimoi työvuorot",
  "companyBenefitsCostTitle": "Kustannussäästöt",
  "companyBenefitsCostText": "Merkittävät säästöt henkilöstökustannuksissa",
  "companyBenefitsQualityTitle": "Laatuetu",
  "companyBenefitsQualityText": "Paranna palvelun laatua reaaliaikaisella tiedolla",
  "companyBenefitsDataTitle": "Datalähtöisyys",
  "companyBenefitsDataText": "Tee päätökset luotettavan datan pohjalta",

  "contactFormTitle": "Ota yhteyttä",
  "contactFormType": "Olen kiinnostunut:",
  "contactFormTypeGeneral": "Yleinen yhteydenotto",
  "contactFormTypeAssessment": "Toimintakyvyn arviointi",
  "contactFormFirstName": "Etunimi",
  "contactFormLastName": "Sukunimi",
  "contactFormEmail": "Sähköposti",
  "contactFormHelperText": "Anna sähköposti tai puhelinnumero *",
  "contactFormPhone": "Puhelinnumero",
  "contactFormOrganization": "Organisaatio (valinnainen)",
  "contactFormRole": "Roolisi (valinnainen)",
  "contactFormMessage": "Kirjoita viesti...",
  "contactFormSubmit": "Lähetä",
  "contactFormSuccessH1": "Kiitos yhteydenotosta!",
  "contactFormSuccessP": "Otamme sinuun yhteyttä vuorokauden sisällä",
  "contactFormSuccessB": "Sulje",

  "contactCompany": "Benete Oy",
  "contactAddress1": "Tykistökatu 4b",
  "contactAddress2": "20520 Turku, Suomi",
  "contactFloor": "(5. kerros)",
  "contactCeo": "Kari Bäckman, Toimitusjohtaja",
  "contactPhone": "+358 50 052 4514",
  "contactEmail": "kari.backman@benete.com",
  "contactHeadingIntro": "Jutellaan",
  "contactHeadingTitle": "Kuinka voimme auttaa?",

  "ideologySubtitleLine1a": "Yksilöllinen",
  "ideologySubtitleLine1b": "itsenäisyys",
  "ideologySubtitleLine2a": "Digitaalinen",
  "ideologySubtitleLine2b": "arvokkuus",
  "ideologySubtitleLine3a": "Arvokas",
  "ideologySubtitleLine3b": "elämä",
    
  "ideologyHeroSubtitle": "Hoitotyön asiantuntijana",
  "ideologyHeroTitle1": "Helpottaa arkea",
  "ideologyHeroTitle1b": "ja lisää turvallisuutta",
  "ideologyHeroTitle2": "Tuo mielen rauhaa",
  "ideologyHeroTitle2b": "perheille ja omaisille",
  "ideologyHeroTitle3": "Tukee ikäihmisten aktiivista",
  "ideologyHeroTitle3b": "ja vapaata elämää",
  "ideologyTitle": "Sinun ehdoillasi",


  "ideologyValuesCare": "Välittäminen",
  "ideologyValuesCareDesc": "Jokainen ihminen ansaitsee huomiota, lämpöä ja yksilöllistä hoivaa",
  "ideologyValuesSafety": "Turvallisuus",
  "ideologyValuesSafetyDesc": "Luotettava teknologia ja ympärivuorokautinen valvonta takaavat rauhan mielen",
  "ideologyValuesQuality": "Laatu",
  "ideologyValuesQualityDesc": "Sitoudumme korkeimpaan laatuun kaikessa tekemisessämme",

  "ideologySection1Title": "Oivalluksia päivittäisistä rutiineista",
  "ideologySection1P1": "Yksinkertaiset arkipäivän toiminnot luovat rytmin jokapäiväiseen elämäämme, kuten ruoan valmistus, lepo sekä hygieniasta huolehtiminen. Nämä ovat osa tavallista elämäämme, mutta niillä on myös ajateltua suurempi merkitys. Yhdistettynä ja analysoituna ne tuottavat arvokkaita havaintoja fyysisestä ja emotionaalisesta hyvinvoinnistamme.",
  "ideologySection1P2": "BeneCare palvelun avulla on mahdollista tunnistaa toimintakyvyssä ja kognitiossa tapahtuvia muutoksia jo aikaisessa vaiheessa. Yleisistä terveys- ja hyvinvointipalveluista poiketen analysoimme henkilön elämää kokonaisvaltaisesti kattaen paljon enemmän kuin pelkkiä fysiologisia tietoja.",

  "ideologySection2Title": "Elinympäristö",
  "ideologySection2P1": "Elinympäristöllä on tunnetusti suuri vaikutus hyvinvointiimme ja se voi myös kertoa paljon jokapäiväisestä elämästämme. Älyteknologioiden käyttö yleistyy jatkuvasti ja on vain ajan kysmys, kun kotimme ovat varustettuja moninaisilla sensoriteknologioilla mahdollistaen reaaliaikaisen elämän seuraamisen.",
  "ideologySection2P2": "BeneCare palvelun sofistikoituneet algoritmit tunnistavat ihmisen päivittäisiä toimintoja, mallintavat toimintatapoja tämän omassa elinympäristössä ja arvioivat toimintakyvyssä tapahtuvia mahdollisia muutoksia. Päivittäistä toimintaa havainnoimalla ja analysoimalla haitalliset muutokset toimintakyvyssä pystytään havaitsemaan paljon aikaisemmassa vaiheessa, kuin mitä tavanomaisten menetelmien avulla on mahdollista.",

  "ideologySection3Title": "Elinvoimainen ikääntyminen",
  "ideologySection3P1": "Elämänlaatu paranee kun henkilö voi toimia itsenäisesti omassa tutussa ympäristössä. Se luo turvallisuudentunnetta ja riippumattomuutta muista. Elinvoimaisen ikääntymisen perusta on oma aktiivisuus ja motivaatio elämään.",
  "ideologySection3P2": "Toimintakyvyn muutosten ja kognitiivisten häiriöiden varhainen tunnistaminen auttaa aikaisen ja täsmällisen hoidon tuottamisessa. Tällä on suuri vaikutus ihmisten elämään lisäten elämän aktiivisia ja itsenäisiä päiviä. Hellän huolenpidon mahdollistaminen ja itsenäisyyden tunteen vaaliminen ovat keskeisiä tavoitteitamme.",
  "ideologySection3P3": "Toimintamme tuloksena sosiaali- ja terveydenhuolto hyötyy merkittävästi alentuneista vanhusten hoitokustannuksista ja uusista tehokkaammista palveluista.",

  "ideologySection4Title": "OmaData",
  "ideologySection4P1": "Henkilöistä kerätty data on erittäin sensitiivistä. Palvelumme mahdollistaa asiakkaillemme täyden pääsyn ja kontrollin heidän omiin tietoihinsa. Palvelumme noudattaa uusimpia tietosuojan ja tietoturvallisuuden vaatimuksia huomioimalla nämä jo palvelujen suunnittelussa yhdessä meidän omien datan eettisten ja digitaalisen arvokkuuden periaatteiden kanssa.",

  "ideologySection5Title": "Arvomme",
  "ideologySection5P1": "Henkilökohtaisten toimintakyvyn muutoksia ei yleensä seurata tai kirjata ennen kuin on liian myöhäistä ja diagnoosi on annettu. Monet ihmiset ovat riippuvaisia toisista selvitäkseen päivästä mikä heikentää heidän itsenäisyyden tunnettansa. On tärkeää havaita mitä yksilöllinen itsenäisyys merkitsee jokaiselle.",
  "ideologySection5P2": "Palvelumme avulla on mahdollista tunnistaa toimintaan ja muistiin liittyviä häiriöitä mahdollisimman varhaisessa vaiheessa ja aloittaa tarvittavat hoitotoimenpiteet mahdollisimman aikaisin.",

  "benefitsTitle": "Hyödyt kaikille osapuolille",
  "benefitsSubtitle": "BeneCare parantaa hoitotyön laatua ja tukee ikäihmisten hyvinvointia",

  "benefitsCaregivers": "Hoitajille",
  "benefitsCaregivers1": "Tehokkaampaa ja mielekkäämpää hoitotyötä",
  "benefitsCaregivers2": "Aikaisempi puuttuminen ongelmiin",
  "benefitsCaregivers3": "Täsmällisempi vastaus asukkaiden tarpeisiin",
  "benefitsCaregivers4": "Ympärivuorokautinen turvallinen seuranta",

  "benefitsElderly": "Ikäihmisille",
  "benefitsElderly1": "Normaali arki ilman häiritseviä laitteita",
  "benefitsElderly2": "Ei puettavaa teknologiaa",
  "benefitsElderly3": "Parempi elämänlaatu",
  "benefitsElderly4": "Turvallisuuden tunne",

  "benefitsFamily": "Omaisille & Ammattilaisille",
  "benefitsFamily1": "Ajankohtainen tieto toimintakyvystä",
  "benefitsFamily2": "Varhaisessa vaiheessa olevien ongelmien havaitseminen",
  "benefitsFamily3": "Datan pohjalta tehdyt hoitopäätökset",
  "benefitsFamily4": "Läpinäkyvä raportointi",
    // Funding
  "fundingHorizonTitle": "Horizon 2020 tutkimus",
  "fundingHorizonText": "Benete Oy on saanut rahoitusta Euroopan unionin Horizon 2020 -tutkimus ja innovaatio-ohjelman avustussopimuksen Nro 877503 mukaisesti.",
  "fundingElyTitle": "ELY rahoitus",
  "fundingElyText": "Benete Oy on saanut rahoitusta Elinkeino-, liikenne- ja ympäristökeskukselta BNT-MDR hankkeeseen. Hankkeessa on kyseessä Benete Oy:n ikääntyneiden toimintakyvyn analysointipalvelun jatkokehitys.",

  "privacyTitle": "Tietosuojakäytäntö",
  "privacyCustomerInfoTitle": "Asiakastiedot",
  "privacyCustomerInfoContent": "Pysyäksemme yhteydessä nykyisiin tai potentiaalisiin asiakkaisiimme keräämme tietoja, joita annat ottaessasi meihin yhteyttä.",
  "privacyAnalyticsTitle": "Analytiikkapalvelut",
  "privacyAnalyticsContent": "Parantaaksemme vuorovaikutustasi verkkosivustomme kanssa voimme saada tietoa verkossa tapahtuvasta käyttäytymisestäsi ja käyttötiedoistasi. Emme yhdistä tältä verkkosivustolta kerättyjä tietoja mihinkään henkilökohtaisesti tunnistettaviin tietoihin muista lähteistä. Verkossa tapahtuva käyttäytymistieto poistetaan automaattisesti, jos se on yli 6 kuukautta vanhaa.",
  "privacyDataSecurityTitle": "Tietoturva",
  "privacyDataSecurityContent": "Noudattaen yleisesti hyväksyttyjä verkkotietoturvastandardeja olemme varmistaneet, että keräämämme henkilötiedot tallennetaan turvallisiin käyttöympäristöihin. Henkilötietoihisi pääsevät käsiksi vain henkilöt, joiden on käsiteltävä niitä työtehtäviensä suorittamiseksi.",
  "privacyAccessTitle": "Pääsy ja siirto ETA:n ulkopuolelle",
  "privacyAccessContent1": "Henkilökohtaisia tietojasi ei paljasteta tai myydä kolmansille osapuolille. Analytiikkapalveluiden kautta kerättyjä tietoja voidaan tallentaa Euroopan talousalueen ulkopuolelle, jos analytiikkapalvelun tai ohjelmiston tarjoaja tallentaa tiedot ETA:n ulkopuolelle. Muutoin emme säännöllisesti siirrä tietojasi Euroopan talousalueen ulkopuolelle.",
  "privacyAccessContent2": "Toteutamme aina vahvimmat meille saatavilla olevat oikeudelliset, menettelylliset, fyysiset ja tekniset toimenpiteet parantaaksemme anonymiteettiäsi ja välttääksemme tietojesi ei-toivotun paljastamisen muille henkilöille, yrityksille ja hallinnolle, ellei laki, oikeuselin tai valtion virasto vaadi meitä paljastamaan niitä.",
  "privacyUpdatesTitle": "Käytännön päivitykset",
  "privacyUpdatesContent": "Saatamme päivittää tätä tietosuojakäytäntöä ajoittain ja kannustamme sinua tarkistamaan uusimman version säännöllisesti osoitteessa www.benete.com. Pyrimme parhaaamme mukaan tiedottamaan sinulle kaikista tähän tietosuojakäytäntöön tehtävistä päivityksistä.",
  "privacyContactTitle": "Ota yhteyttä",
  "privacyContactContent": "Jos sinulla on kysyttävää tai haluat pyytää pääsyä, poistamista tai korjaamista antamiisi tietoihin, ota meihin yhteyttä osoitteessa privacy@benete.com.",

  "termsTitle": "Käyttöehdot",
  "termsIntroductionTitle": "Johdanto",
  "termsIntroductionContent": "Nämä käyttöehdot koskevat tämän verkkosivuston käyttöä; käyttämällä tätä verkkosivustoa hyväksyt nämä käyttöehdot kokonaisuudessaan. Jos olet eri mieltä näistä käyttöehdoista tai mistä tahansa osasta näitä käyttöehtoja, et saa käyttää tätä verkkosivustoa.",
  "termsIntellectualTitle": "Immateriaalioikeudet",
  "termsIntellectualContent": "Ellei toisin mainita, Benete Oy omistaa immateriaalioikeudet verkkosivustoon ja kaikkeen siinä julkaistuun materiaaliin (mukaan lukien mutta ei rajoittuen tekstiin, valokuviin ja muihin kuviin, tavaramerkkeihin ja logoihin).",
  "termsWarrantiesTitle": "Ei takuita",
  "termsWarrantiesContent1": "Tämä verkkosivusto tarjotaan \"sellaisena kuin se on\" ilman mitään edustuksia tai takuita, ilmaistuja tai oletettuja. Benete Oy ei anna mitään edustuksia tai takuita tähän verkkosivustoon tai tällä verkkosivustolla tarjottuihin tietoihin ja materiaaleihin liittyen.",
  "termsWarrantiesContent2": "Tällä verkkosivustolla olevat tiedot tarjotaan vain tiedotustarkoituksiin ja Benete Oy käyttää kohtuullista huolellisuutta ja taitoa varmistaakseen, että ne ovat oikein julkaisupäivänä. Mikään tällä verkkosivustolla ei ole, tai ole tarkoitettu olemaan, minkäänlaista neuvontaa. Benete Oy ei siksi hyväksy mitään vastuuta, joka aiheutuu verkkosivustolla tarjottuihin tietoihin luottamisesta minkään vierailijan tai kolmannen osapuolen toimesta, joka saattaa saada tietoa sen sisällöstä.",
  "termsLawTitle": "Laki ja lainkäyttövalta",
  "termsLawContent": "Näitä käyttöehtoja sääntelevät ja tulkitaan Suomen lain mukaisesti, ja kaikki näihin käyttöehtoihin liittyvät riidat kuuluvat Suomen tuomioistuinten yksinomaiseen toimivaltaan.",

  "cookieParagraph": "\"Hyväksyn evästeet\" -nappia painamalla hyväksyt, että evästeet tallennetaan laitteellesi. Näitä evästeitä käytetään tietojen keräämiseksi siitä, miten verkkosivustomme vierailijat käyttävät sivustoamme. Hyödynnämme kerättyä tietoa laatiaksemme yhteenvetoja ja kehittääksemme sivustoamme käyttäjäystävällisemmäksi.",
  "cookieTitle": "Evästekäytäntö",
  "cookieReadMore": "Lisätietoa",
  "cookieDecline": "Kieltäydy",
  "cookieAccept": "Hyväksy evästeet"


    }
  },
  {
    language: "en",
    translations: {
  "navHome": "Home",
  "navIdeology": "Ideology",
  "navService": "Service",
  "navTeam": "Our team",
  "navContact": "Contact",

  "headerTitle": "BeneCare",
  "headerSubtitle": "We ensure that elderly people receive the right care at the right time.",

  "homepageIntroductionTitle": "Smart Support for Care Work and Everyday Wellbeing",
  "homepageIntroductionP1": "BeneCare is designed for healthcare professionals including elderly care staff, nurses, doctors, and physiotherapists as well as private users who want to monitor the wellbeing of their loved ones safely and unobtrusively.",
  "homepageIntroductionP2": "The service provides round-the-clock monitoring without wearable devices, making both professional care and everyday support more efficient and meaningful. BeneCare uses sensor technology and intelligent algorithms to model a person’s daily rhythm and behavior.",
  "homepageIntroductionP3": "This data helps detect changes in health, wellbeing, functional ability, and cognition enabling timely responses before urgent care is needed.",

  "servicePrivacyTitle": "We Keep Personal Data Safe",
  "servicePrivacyText": "The analyses produced by BeneCare service are available to the senior, their relatives, and care staff through the web service or as printouts. The use of the service and data collection are always based on the person's consent. The collected personal data is not used or transmitted for any purpose other than related to the use of the service. In accordance with data protection law, the senior has the right to their own personal data and can request deletion of their personal data or termination of the service at any time.",

  "footerFollowUs": "Follow us",
  "footerPrivacy": "Privacy policy",
  "footerTerms": "Terms",

  "selectorTitle": "Choose Customer Type",
  "selectorSubtitle": "We tailor our services to your needs",
  "selectorPrivateTitle": "Private Customers",
  "selectorPrivateDescription": "Secure your loved one's wellbeing and monitoring at home",
  "selectorCompanyTitle": "Business Customers",
  "selectorCompanyDescription": "Improve care efficiency and enhance service quality",

  "commonReadMore": "Read more",
  "readMoreDescription": "Learn more about our services and how we offer a unique way to analyze life.",
    // Carousel
      "carouselElderlyTitle": "Safe daily life for the elderly",
  "carouselElderlyDesc": "BeneCare supports independent living and provides a sense of security in everyday life.",

  "carouselFamilyTitle": "Peace of mind for families",
  "carouselFamilyDesc": "Families can monitor their loved ones' well-being and receive up-to-date information about their health.",

  "carouselNurseTitle": "Professional care work",
  "carouselNurseDesc": "Healthcare staff receive accurate information about residents' functional capacity and can respond to changes quickly.",

  "carouselAssistantTitle": "Smart technology assistance",
  "carouselAssistantDesc": "The BeneCare system provides an easy-to-use platform for managing and analyzing all information.",

  "serviceHeadingIntro": "Functionality assessment",
  "serviceHeadingTitle": "BeneCare",

  "featuresTitle": "What does BeneCare monitor?",
  "featuresSubtitle": "Our service provides continuously updated information about a person's functional capacity and well-being",

  "featuresActivityTitle": "Activity Monitoring",
  "featuresActivityDesc": "Time spent in rooms, indoor and outdoor movement, daily activity levels",

  "featuresSleepTitle": "Sleep Quality",
  "featuresSleepDesc": "Amount, quality and timing of sleep and rest. Changes in nighttime behavior",

  "featuresHygieneTitle": "Hygiene Monitoring",
  "featuresHygieneDesc": "Shower usage and sink activity. Identification of changes in hygiene care",

  "featuresWcTitle": "Bathroom Visits",
  "featuresWcDesc": "Number, timing and duration of bathroom visits. Detection of increased frequency",

  "featuresHealthTitle": "Health Metrics",
  "featuresHealthDesc": "Weight, BMI, blood pressure and other health metrics integrated into the system",

  "featuresAlertsTitle": "Alerts",
  "featuresAlertsDesc": "Emergency bracelet for immediate assistance. All events are logged in the system",
      // How It Works
   "howTitle": "How does BeneCare work?",
  "howSubtitle": "A simple and effective process that requires no action from the individual",
  "howStep1Title": "Installation",
  "howStep1Desc": "Unobtrusive sensors are installed in the person's home without disrupting daily life",
  "howStep2Title": "Data Collection",
  "howStep2Desc": "Sensors automatically collect information about daily activities",
  "howStep3Title": "Analysis",
  "howStep3Desc": "Sophisticated algorithms identify activities and model behavior patterns",
  "howStep4Title": "Reporting",
  "howStep4Desc": "Caregivers, doctors and family members receive up-to-date information about functional capacity",

  "privateHeroTitle": "Secure Your Loved One's Wellbeing",
  "privateHeroSubtitle": "BeneCare provides unobtrusive monitoring and security for elderly living at home",
  "privateHeroCta": "Contact Us",
  "privateBenefitsTitle": "Why BeneCare for Private Customers?",
  "privateBenefitsPeaceTitle": "Peace of Mind",
  "privateBenefitsPeaceText": "You can trust that your loved one is safe with 24/7 monitoring",
  "privateBenefitsSafetyTitle": "Safety",
  "privateBenefitsSafetyText": "Automatic alert in exceptional situations - help arrives on time",
  "privateBenefitsResponseTitle": "Quick Response",
  "privateBenefitsResponseText": "Immediate notification of potential issues to family and caregivers",
  "privateBenefitsFamilyTitle": "Family Support",
  "privateBenefitsFamilyText": "The whole family can easily monitor their loved one's wellbeing",

  "companyHeroTitle": "Improve Care Efficiency",
  "companyHeroSubtitle": "BeneCare helps care professionals work more efficiently and improve service quality",
  "companyHeroCta": "Request Quote",
  "companyBenefitsTitle": "Why BeneCare for Companies?",
  "companyBenefitsEfficiencyTitle": "Efficiency",
  "companyBenefitsEfficiencyText": "Reduce unnecessary visits and optimize work shifts",
  "companyBenefitsCostTitle": "Cost Savings",
  "companyBenefitsCostText": "Significant savings in personnel costs",
  "companyBenefitsQualityTitle": "Quality Advantage",
  "companyBenefitsQualityText": "Improve service quality with real-time information",
  "companyBenefitsDataTitle": "Data-Driven",
  "companyBenefitsDataText": "Make decisions based on reliable data",
    //Conatct
    "contactFormTitle": "Contact us",
  "contactFormType": "I'm interested in:",
  "contactFormTypeGeneral": "General contact",
  "contactFormTypeAssessment": "Functionality assessment",
  "contactFormFirstName": "First name",
  "contactFormLastName": "Last name",
  "contactFormHelperText": "Provide an email or phone number *",
  "contactFormEmail": "Email",
  "contactFormPhone": "Phone number",
  "contactFormOrganization": "Organization (optional)",
  "contactFormRole": "Your role (optional)",
  "contactFormMessage": "Write your message...",
  "contactFormSubmit": "Send",
  "contactFormSuccessH1": "Thank you for contacting us!",
  "contactFormSuccessP": "We will get back to you within 24 hours",
  "contactFormSuccessB": "Close",

  "contactCompany": "Benete Ltd",
  "contactAddress1": "Tykistökatu 4b",
  "contactAddress2": "20520 Turku, Finland",
  "contactFloor": "(5th floor)",
  "contactCeo": "Kari Bäckman, CEO",
  "contactPhone": "+358 50 052 4514",
  "contactEmail": "kari.backman@benete.com",
  "contactHeadingIntro": "Let’s talk",

  "ideologySubtitleLine1a": "Individual",
  "ideologySubtitleLine1b": "independence",
  "ideologySubtitleLine2a": "Digital",
  "ideologySubtitleLine2b": "dignity",
  "ideologySubtitleLine3a": "Valuable",
  "ideologySubtitleLine3b": "life",

  "ideologyHeroSubtitle": "As a care expert",
  "ideologyHeroTitle1": "Makes everyday life easier",
  "ideologyHeroTitle1b": "and increases security",
  "ideologyHeroTitle2": "Brings peace of mind",
  "ideologyHeroTitle2b": "to families and loved ones",
  "ideologyHeroTitle3": "Supports active",
  "ideologyHeroTitle3b": "and independent living for seniors",
  "ideologyTitle": "On your terms",

  "ideologyValuesCare": "Caring",
  "ideologyValuesCareDesc": "Every person deserves attention, warmth, and individualized care",
  "ideologyValuesSafety": "Security",
  "ideologyValuesSafetyDesc": "Reliable technology and 24/7 monitoring ensure peace of mind",
  "ideologyValuesQuality": "Quality",
  "ideologyValuesQualityDesc": "We are committed to the highest quality in everything we do",

  "ideologySection1Title": "Insights from daily routines",
  "ideologySection1P1": "Simple daily activities create the rhythm of our everyday life, such as cooking, rest, and personal hygiene. These are part of our normal lives, but they also have a greater significance than we think. Combined and analyzed, they provide valuable insights into our physical and emotional well-being.",
  "ideologySection1P2": "With the BeneCare service, it is possible to identify changes in functional capacity and cognition at an early stage. Unlike general health and wellness services, we analyze a person's life holistically, covering much more than just physiological data.",

  "ideologySection2Title": "Living environment",
  "ideologySection2P1": "The living environment is known to have a great impact on our well-being and can also tell a lot about our daily life. The use of smart technologies is constantly increasing and it is only a matter of time before our homes are equipped with various sensor technologies enabling real-time life monitoring.",
  "ideologySection2P2": "BeneCare service's sophisticated algorithms recognize a person's daily activities, model behaviors in their own living environment, and assess possible changes in functional capacity. By observing and analyzing daily activities, harmful changes in functional capacity can be detected at a much earlier stage than is possible with conventional methods.",

  "ideologySection3Title": "Active aging",
  "ideologySection3P1": "Quality of life improves when a person can function independently in their own familiar environment. It creates a sense of security and independence from others. The foundation of active aging is one's own activity and motivation for life.",
  "ideologySection3P2": "Early identification of changes in functional capacity and cognitive disorders helps in providing early and precise care. This has a great impact on people's lives, adding active and independent days to life. Enabling gentle care and cherishing the sense of independence are our key goals.",
  "ideologySection3P3": "As a result of our activities, social and healthcare benefits significantly from reduced elderly care costs and new, more effective services.",

  "ideologySection4Title": "MyData",
  "ideologySection4P1": "Data collected from individuals is extremely sensitive. Our service enables our customers to have full access and control over their own data. Our service complies with the latest data protection and information security requirements, taking these into account already in the design of services, together with our own ethical data and digital dignity principles.",

  "ideologySection5Title": "Our values",
  "ideologySection5P1": "Personal changes in functional capacity are usually not monitored or recorded until it is too late and a diagnosis has been given. Many people are dependent on others to get through the day, which weakens their sense of independence. It is important to recognize what individual independence means for each person.",
  "ideologySection5P2": "With our service, it is possible to identify functional and memory-related disorders as early as possible and start the necessary treatment measures as early as possible.",

  "benefitsTitle": "Benefits for all parties",
  "benefitsSubtitle": "BeneCare improves the quality of care and supports the well-being of elderly people",

  "benefitsCaregivers": "For Caregivers",
  "benefitsCaregivers1": "More efficient and meaningful care work",
  "benefitsCaregivers2": "Earlier intervention in problems",
  "benefitsCaregivers3": "More precise response to residents' needs",
  "benefitsCaregivers4": "24/7 secure monitoring",

  "benefitsElderly": "For the Elderly",
  "benefitsElderly1": "Normal daily life without intrusive devices",
  "benefitsElderly2": "No wearable technology",
  "benefitsElderly3": "Better quality of life",
  "benefitsElderly4": "Sense of security",

  "benefitsFamily": "For Families & Professionals",
  "benefitsFamily1": "Up-to-date information on functional capacity",
  "benefitsFamily2": "Early detection of emerging problems",
  "benefitsFamily3": "Data-driven care decisions",
  "benefitsFamily4": "Transparent reporting",

  "fundingHorizonTitle": "Horizon 2020 Research",
  "fundingHorizonText": "Benete Oy has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 877503.",
  "fundingElyTitle": "ELY Funding",
  "fundingElyText": "Benete Oy has received funding from the Centre for Economic Development, Transport and the Environment for the BNT-MDR project. The project involves the further development of Benete Oy's elderly functional capacity analysis service.",
  
  "privacyTitle": "Privacy policy",
  "privacyCustomerInfoTitle": "Customer information",
  "privacyCustomerInfoContent": "To stay in touch with our current or prospective customers, we will collect information you provide when contacting us.",
  "privacyAnalyticsTitle": "Analytics services",
  "privacyAnalyticsContent": "To improve your interaction with our website, we can get information about your online behavioural and usage data. We will not associate any data gathered from this website with any personally identifying information from any other source. Online behavioural data will be automatically deleted if older than 6 months.",
  "privacyDataSecurityTitle": "Data security",
  "privacyDataSecurityContent": "Complying with generally accepted online security standards, we have ensured that the personal data we collect is stored in secure operating environments. Your personal data can only be accessed by individuals who need to process it for the performance of their work duties.",
  "privacyAccessTitle": "Access and transfer outside EEA",
  "privacyAccessContent1": "Your personal information will not be disclosed or sold to third parties. Information collected through analytics services can be stored outside the European Economic Area if the analytics services or software provider stores the data outside the EEA. Otherwise, we do not regularly transfer your data outside the European Economic Area.",
  "privacyAccessContent2": "We will always implement the most robust legal, procedural, physical and technical measures available to us in order to improve your anonymity and avoid unwanted disclosure of your data to other individuals, corporations and administrations, unless we are required to disclose it by law, judicial body or government agency.",
  "privacyUpdatesTitle": "Policy updates",
  "privacyUpdatesContent": "We may periodically update this Privacy Policy and encourage you to check the latest version regularly at www.benete.com. We will put our best effort to inform you about any updates to this Privacy policy.",
  "privacyContactTitle": "Contact us",
  "privacyContactContent": "In case you have any questions or would like to request access, removal or correction of the information you have provided, please contact us at privacy@benete.com.",

  "termsTitle": "Terms & Conditions",
  "termsIntroductionTitle": "Introduction",
  "termsIntroductionContent": "These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.",
  "termsIntellectualTitle": "Intellectual property rights",
  "termsIntellectualContent": "Unless otherwise stated, Benete Oy owns the intellectual property rights in the website and in any material published on it (including but not limited to text, photographs and other images, trademarks and logos).",
  "termsWarrantiesTitle": "No warranties",
  "termsWarrantiesContent1": "This website is provided \"as is\" without any representations or warranties, express or implied. Benete Oy makes no representations or warranties in relation to this website or the information and materials provided on this website.",
  "termsWarrantiesContent2": "The information contained on this website is provided for information purposes only and Benete Oy will use reasonable care and skill to ensure that it is accurate at the date of publication. Nothing on this website constitutes, or is meant to constitute, advice of any kind. Benete Oy, therefore, accepts no liability or responsibility arising from any reliance placed on information provided on the website by any visitor, or by any third party who may be informed of any of its contents.",
  "termsLawTitle": "Law and jurisdiction",
  "termsLawContent": "These terms and conditions will be governed by and construed in accordance with Finnish law, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Finland.",

  "cookieParagraph": "By clicking “Allow cookies”, you agree to the storing of cookies on your device, to enhance site navigation, analyse site usage, and assist in our marketing efforts",
  "cookieTitle": "Cookie policy",
  "cookieReadMore": "Learn more",
  "cookieDecline": "Decline",
  "cookieAccept": "Allow cookies"


    }
  },
  {
    language: "sv",
    translations: {
  "navHome": "Hem",
  "navIdeology": "Ideologi",
  "navService": "Tjänster",
  "navTeam": "Teamet",
  "navContact": "Kontakt",

  "headerTitle": "BeneCare",
  "headerSubtitle": "Vi säkerställer att äldre får rätt vård i rätt tid.",

  "homepageIntroductionTitle": "Smart stöd för vårdarbete och vardagligt välbefinnande",
  "homepageIntroductionP1": "BeneCare är utvecklat för vårdpersonal inklusive personal inom äldrevård, sjuksköterskor, läkare och sjukgymnaster samt privatanvändare som vill övervaka sina närståendes välbefinnande säkert och diskret.",
  "homepageIntroductionP2": "Tjänsten erbjuder dygnet-runt-övervakning utan bärbara enheter, vilket gör både professionell vård och vardagligt stöd mer effektivt och meningsfullt. BeneCare använder sensorteknik och intelligenta algoritmer för att modellera en persons dagliga rytm och beteende.",
  "homepageIntroductionP3": "Denna data hjälper till att upptäcka förändringar i hälsa, välbefinnande, funktionsförmåga och kognition vilket möjliggör snabba åtgärder innan akut vård behövs.",

  "servicePrivacyTitle": "Vi håller personuppgifter säkra",
  "servicePrivacyText": "Analyserna som produceras av BeneCare-tjänsten är tillgängliga för senioren, deras anhöriga och vårdpersonal via webbtjänsten eller som utskrifter. Användningen av tjänsten och datainsamlingen baseras alltid på personens samtycke. Insamlade personuppgifter används eller överförs inte för något annat syfte än relaterat till användningen av tjänsten. I enlighet med dataskyddslagen har senioren rätt till sina egna personuppgifter och kan när som helst begära radering av sina personuppgifter eller avslutande av tjänsten.",

  "selectorTitle": "Välj kundtyp",
  "selectorSubtitle": "Vi skräddarsyr våra tjänster efter dina behov",
  "selectorPrivateTitle": "Privatkunder",
  "selectorPrivateDescription": "Säkra din närståendes välbefinnande och övervakning hemma",
  "selectorCompanyTitle": "Företagskunder",
  "selectorCompanyDescription": "Förbättra vårdeffektiviteten och höj servicekvaliteten",

  "commonReadMore": "Läs mer",
  "readMoreDescription": "Läs mer om våra tjänster och hur vi erbjuder ett unikt sätt att analysera livet.",

  "footerPrivacy": "Integritetspolicy",
  "footerTerms": "Villkor",

  "carouselElderlyTitle": "Säkert dagligt liv för äldre",
  "carouselElderlyDesc": "BeneCare stöder självständigt boende och ger en känsla av trygghet i vardagen.",
  "carouselFamilyTitle": "Sinnesro för familjer",
  "carouselFamilyDesc": "Familjer kan övervaka sina närståendes välbefinnande och få uppdaterad information om deras hälsa.",
  "carouselNurseTitle": "Professionellt vårdarbete",
  "carouselNurseDesc": "Vårdpersonal får exakt information om invånares funktionsförmåga och kan svara snabbt på förändringar.",
  "carouselAssistantTitle": "Smart teknikassistans",
  "carouselAssistantDesc": "BeneCare-systemet tillhandahåller en lättanvänd plattform för att hantera och analysera all information.",

  "serviceHeadingIntro": "Funktionsbedömning",
  "serviceHeadingTitle": "BeneCare",

  "featuresTitle": "Vad övervakar BeneCare?",
  "featuresSubtitle": "Vår tjänst tillhandahåller kontinuerligt uppdaterad information om en persons funktionsförmåga och välbefinnande",
  "featuresActivityTitle": "Aktivitetsövervakning",
  "featuresActivityDesc": "Tid i rum, inomhus- och utomhusrörelse, dagliga aktivitetsnivåer",
  "featuresSleepTitle": "Sömnkvalitet",
  "featuresSleepDesc": "Mängd, kvalitet och timing av sömn och vila. Förändringar i nattligt beteende",
  "featuresHygieneTitle": "Hygienövervakning",
  "featuresHygieneDesc": "Dusch- och handfatanvändning. Identifiering av förändringar i hygienvård",
  "featuresWcTitle": "Toalettbesök",
  "featuresWcDesc": "Antal, timing och varaktighet av toalettbesök. Upptäckt av ökad frekvens",
  "featuresHealthTitle": "Hälsomått",
  "featuresHealthDesc": "Vikt, BMI, blodtryck och andra hälsomått integrerade i systemet",
  "featuresAlertsTitle": "Larm",
  "featuresAlertsDesc": "Nödarmband för omedelbar hjälp. Alla händelser loggas i systemet",
    // How It Works
   "howTitle": "Hur fungerar BeneCare?",
  "howSubtitle": "En enkel och effektiv process som inte kräver någon åtgärd från individen",
  "howStep1Title": "Installation",
  "howStep1Desc": "Diskreta sensorer installeras i personens hem utan att störa det dagliga livet",
  "howStep2Title": "Datainsamling",
  "howStep2Desc": "Sensorer samlar automatiskt information om dagliga aktiviteter",
  "howStep3Title": "Analys",
  "howStep3Desc": "Sofistikerade algoritmer identifierar aktiviteter och modellerar beteendemönster",
  "howStep4Title": "Rapportering",
  "howStep4Desc": "Vårdgivare, läkare och familjemedlemmar får uppdaterad information om funktionsförmåga",

  "privateHeroTitle": "Säkra din närståendes välbefinnande",
  "privateHeroSubtitle": "BeneCare tillhandahåller diskret övervakning och säkerhet för äldre som bor hemma",
  "privateHeroCta": "Kontakta oss",
  "privateBenefitsTitle": "Varför BeneCare för privatkunder?",
  "privateBenefitsPeaceTitle": "Sinnesro",
  "privateBenefitsPeaceText": "Du kan lita på att din närstående är säker med 24/7 övervakning",
  "privateBenefitsSafetyTitle": "Säkerhet",
  "privateBenefitsSafetyText": "Automatiskt larm vid exceptionella situationer - hjälpen kommer i tid",
  "privateBenefitsResponseTitle": "Snabb respons",
  "privateBenefitsResponseText": "Omedelbar avisering om potentiella problem till familj och vårdgivare",
  "privateBenefitsFamilyTitle": "Familjestöd",
  "privateBenefitsFamilyText": "Hela familjen kan enkelt övervaka sin närståendes välbefinnande",

  "companyHeroTitle": "Förbättra vårdeffektiviteten",
  "companyHeroSubtitle": "BeneCare hjälper vårdproffs att arbeta mer effektivt och förbättra servicekvaliteten",
  "companyHeroCta": "Begär offert",
  "companyBenefitsTitle": "Varför BeneCare för företag?",
  "companyBenefitsEfficiencyTitle": "Effektivitet",
  "companyBenefitsEfficiencyText": "Minska onödiga besök och optimera arbetspass",
  "companyBenefitsCostTitle": "Kostnadsbesparingar",
  "companyBenefitsCostText": "Betydande besparingar i personalkostnader",
  "companyBenefitsQualityTitle": "Kvalitetsfördel",
  "companyBenefitsQualityText": "Förbättra servicekvaliteten med realtidsinformation",
  "companyBenefitsDataTitle": "Datadriven",
  "companyBenefitsDataText": "Fatta beslut baserade på tillförlitlig data",
    //Contact
   "contactFormTitle": "Kontakta oss",
  "contactFormType": "Jag är intresserad av:",
  "contactFormTypeGeneral": "Allmän kontakt",
  "contactFormTypeAssessment": "Funktionsbedömning",
  "contactFormFirstName": "Förnamn",
  "contactFormLastName": "Efternamn",
  "contactFormHelperText": "Ange e‑post eller telefonnummer *",
  "contactFormEmail": "E-post",
  "contactFormPhone": "Telefonnummer",
  "contactFormOrganization": "Organisation (valfritt)",
  "contactFormRole": "Din roll (valfritt)",
  "contactFormMessage": "Skriv ditt meddelande...",
  "contactFormSubmit": "Skicka",
  "contactFormSuccessH1": "Tack för att du kontaktade oss!",
  "contactFormSuccessP": "Vi återkommer till dig inom 24 timmar",
  "contactFormSuccessB": "Stäng",

  "contactCompany": "Benete Oy",
  "contactAddress1": "Artillerigatan 4b",
  "contactAddress2": "20520 Åbo, Finland",
  "contactFloor": "(5:e våningen)",
  "contactCeo": "Kari Bäckman, Verkställande direktör",
  "contactPhone": "+358 50 052 4514",
  "contactEmail": "kari.backman@benete.com",
  "contactHeadingIntro": "Låt oss prata",
  "contactHeadingTitle": "Hur kan vi hjälpa till?",

  "footerFollowUs": "Följ oss",
  
  "ideologySubtitleLine1a": "Individuell",
  "ideologySubtitleLine1b": "självständighet",
  "ideologySubtitleLine2a": "Digital",
  "ideologySubtitleLine2b": "värdighet",
  "ideologySubtitleLine3a": "Värdefullt",
  "ideologySubtitleLine3b": "liv",
  "ideologyHeroSubtitle": "Som vårdexpert",
  "ideologyHeroTitle1": "Förenklar vardagen",
  "ideologyHeroTitle1b": "och ökar tryggheten",
  "ideologyHeroTitle2": "Ger sinnesro",
  "ideologyHeroTitle2b": "till familjer och anhöriga",
  "ideologyHeroTitle3": "Stödjer aktivt",
  "ideologyHeroTitle3b": "och självständigt boende för äldre",
  "ideologyTitle": "På dina villkor",

  "ideologyValuesCare": "Omsorg",
  "ideologyValuesCareDesc": "Varje person förtjänar uppmärksamhet, värme och individualiserad vård",
  "ideologyValuesSafety": "Säkerhet",
  "ideologyValuesSafetyDesc": "Pålitlig teknologi och övervakning dygnet runt garanterar sinnesro",
  "ideologyValuesQuality": "Kvalitet",
  "ideologyValuesQualityDesc": "Vi är engagerade i högsta kvalitet i allt vi gör",

  "ideologySection1Title": "Insikter från dagliga rutiner",
  "ideologySection1P1": "Enkla dagliga aktiviteter skapar rytmen i vårt vardagliga liv, såsom matlagning, vila och personlig hygien. Dessa är en del av vårt normala liv, men de har också en större betydelse än vi tror. Kombinerade och analyserade ger de värdefulla insikter om vårt fysiska och emotionella välbefinnande.",
  "ideologySection1P2": "Med BeneCare-tjänsten är det möjligt att identifiera förändringar i funktionsförmåga och kognition i ett tidigt skede. Till skillnad från allmänna hälso- och välbefinnandetjänster analyserar vi en persons liv holistiskt och täcker mycket mer än bara fysiologisk data.",

  "ideologySection2Title": "Livsmiljö",
  "ideologySection2P1": "Livsmiljön har känt stor påverkan på vårt välbefinnande och kan också berätta mycket om vårt dagliga liv. Användningen av smarta teknologier ökar ständigt och det är bara en tidsfråga innan våra hem är utrustade med olika sensorteknologier som möjliggör realtidsövervakning av livet.",
  "ideologySection2P2": "BeneCare-tjänstens sofistikerade algoritmer känner igen en persons dagliga aktiviteter, modellerar beteenden i deras egen livsmiljö och bedömer möjliga förändringar i funktionsförmåga. Genom att observera och analysera dagliga aktiviteter kan skadliga förändringar i funktionsförmåga upptäckas i ett mycket tidigare skede än vad som är möjligt med konventionella metoder.",

  "ideologySection3Title": "Aktivt åldrande",
  "ideologySection3P1": "Livskvaliteten förbättras när en person kan fungera självständigt i sin egen välbekanta miljö. Det skapar en känsla av trygghet och oberoende från andra. Grunden för aktivt åldrande är egen aktivitet och motivation för livet.",
  "ideologySection3P2": "Tidig identifiering av förändringar i funktionsförmåga och kognitiva störningar hjälper till att tillhandahålla tidig och precis vård. Detta har stor påverkan på människors liv och lägger till aktiva och oberoende dagar i livet. Att möjliggöra mild omsorg och vårda känslan av oberoende är våra huvudmål.",
  "ideologySection3P3": "Som ett resultat av vår verksamhet gynnas sociala och hälsovården avsevärt av minskade vårdkostnader för äldre och nya, mer effektiva tjänster.",

  "ideologySection4Title": "MinData",
  "ideologySection4P1": "Data som samlas in från individer är extremt känslig. Vår tjänst gör det möjligt för våra kunder att ha full tillgång och kontroll över sina egna data. Vår tjänst följer de senaste kraven på dataskydd och informationssäkerhet och tar hänsyn till dessa redan i utformningen av tjänster, tillsammans med våra egna etiska data- och digitala värdighets principer.",

  "ideologySection5Title": "Våra värderingar",
  "ideologySection5P1": "Personliga förändringar i funktionsförmåga övervakas eller registreras vanligtvis inte förrän det är för sent och en diagnos har ställts. Många människor är beroende av andra för att klara dagen, vilket försvagar deras känsla av oberoende. Det är viktigt att inse vad individuellt oberoende betyder för varje person.",
  "ideologySection5P2": "Med vår tjänst är det möjligt att identifiera funktionella och minnesrelaterade störningar så tidigt som möjligt och påbörja nödvändiga behandlingsåtgärder så tidigt som möjligt.",

  "benefitsTitle": "Fördelar för alla parter",
  "benefitsSubtitle": "BeneCare förbättrar vårdens kvalitet och stöder äldres välbefinnande",

  "benefitsCaregivers": "För vårdgivare",
  "benefitsCaregivers1": "Mer effektivt och meningsfullt vårdarbete",
  "benefitsCaregivers2": "Tidigare intervention vid problem",
  "benefitsCaregivers3": "Mer exakt respons på invånares behov",
  "benefitsCaregivers4": "24/7 säker övervakning",

  "benefitsElderly": "För äldre",
  "benefitsElderly1": "Normalt dagligt liv utan påträngande enheter",
  "benefitsElderly2": "Ingen bärbar teknik",
  "benefitsElderly3": "Bättre livskvalitet",
  "benefitsElderly4": "Känsla av trygghet",

  "benefitsFamily": "För familjer och professionella",
  "benefitsFamily1": "Uppdaterad information om funktionsförmåga",
  "benefitsFamily2": "Tidig upptäckt av uppkommande problem",
  "benefitsFamily3": "Datadrivna vårdbeslut",
  "benefitsFamily4": "Transparent rapportering",

  "fundingHorizonTitle": "Horizon 2020 forskning",
  "fundingHorizonText": "Benete Oy har erhållit finansiering från Europeiska unionens Horizon 2020 forsknings- och innovationsprogram enligt bidragsavtal nr 877503.",
  "fundingElyTitle": "ELY-finansiering",
  "fundingElyText": "Benete Oy har erhållit finansiering från Närings-, trafik- och miljöcentralen för projektet BNT-MDR. Projektet handlar om vidareutveckling av Benete Oy:s analystjänst för äldres funktionsförmåga.",


"privacyTitle": "Integritetspolicy",
  "privacyCustomerInfoTitle": "Kundinformation",
  "privacyCustomerInfoContent": "För att hålla kontakten med våra nuvarande eller potentiella kunder samlar vi in information som du tillhandahåller när du kontaktar oss.",
  "privacyAnalyticsTitle": "Analystjänster",
  "privacyAnalyticsContent": "För att förbättra din interaktion med vår webbplats kan vi få information om ditt onlinebeteende och användningsdata. Vi kommer inte att associera någon data som samlas in från denna webbplats med någon personligt identifierande information från någon annan källa. Onlinebeteendedata raderas automatiskt om den är äldre än 6 månader.",
  "privacyDataSecurityTitle": "Datasäkerhet",
  "privacyDataSecurityContent": "I enlighet med allmänt accepterade onlinesäkerhetsstandarder har vi säkerställt att de personuppgifter vi samlar in lagras i säkra driftsmiljöer. Dina personuppgifter kan endast nås av personer som behöver behandla dem för att utföra sina arbetsuppgifter.",
  "privacyAccessTitle": "Åtkomst och överföring utanför EES",
  "privacyAccessContent1": "Din personliga information kommer inte att avslöjas eller säljas till tredje part. Information som samlas in genom analystjänster kan lagras utanför Europeiska ekonomiska samarbetsområdet om analystjänsten eller mjukvaruleverantören lagrar data utanför EES. Annars överför vi inte regelbundet dina uppgifter utanför Europeiska ekonomiska samarbetsområdet.",
  "privacyAccessContent2": "Vi kommer alltid att implementera de mest robusta juridiska, procedurella, fysiska och tekniska åtgärder som är tillgängliga för oss för att förbättra din anonymitet och undvika oönskad avslöjande av dina uppgifter till andra individer, företag och administrationer, såvida vi inte är skyldiga att avslöja det enligt lag, rättslig myndighet eller statlig myndighet.",
  "privacyUpdatesTitle": "Policyuppdateringar",
  "privacyUpdatesContent": "Vi kan periodiskt uppdatera denna integritetspolicy och uppmuntrar dig att regelbundet kontrollera den senaste versionen på www.benete.com. Vi kommer att göra vårt bästa för att informera dig om eventuella uppdateringar av denna integritetspolicy.",
  "privacyContactTitle": "Kontakta oss",
  "privacyContactContent": "Om du har några frågor eller vill begära åtkomst, borttagning eller korrigering av den information du har tillhandahållit, kontakta oss på privacy@benete.com.",

  "termsTitle": "Villkor",
  "termsIntroductionTitle": "Introduktion",
  "termsIntroductionContent": "Dessa villkor styr din användning av denna webbplats; genom att använda denna webbplats accepterar du dessa villkor i sin helhet. Om du inte håller med om dessa villkor eller någon del av dessa villkor får du inte använda denna webbplats.",
  "termsIntellectualTitle": "Immateriella rättigheter",
  "termsIntellectualContent": "Om inte annat anges äger Benete Oy de immateriella rättigheterna till webbplatsen och till allt material som publiceras på den (inklusive men inte begränsat till text, fotografier och andra bilder, varumärken och logotyper).",
  "termsWarrantiesTitle": "Inga garantier",
  "termsWarrantiesContent1": "Denna webbplats tillhandahålls \"som den är\" utan några representationer eller garantier, uttryckliga eller underförstådda. Benete Oy lämnar inga representationer eller garantier i förhållande till denna webbplats eller informationen och materialet som tillhandahålls på denna webbplats.",
  "termsWarrantiesContent2": "Informationen som finns på denna webbplats tillhandahålls endast i informationssyfte och Benete Oy kommer att använda rimlig omsorg och skicklighet för att säkerställa att den är korrekt vid publiceringsdatumet. Ingenting på denna webbplats utgör, eller är avsett att utgöra, råd av något slag. Benete Oy accepterar därför inget ansvar eller ansvar som uppstår från något förlitande på information som tillhandahålls på webbplatsen av någon besökare, eller av någon tredje part som kan informeras om något av dess innehåll.",
  "termsLawTitle": "Lag och jurisdiktion",
  "termsLawContent": "Dessa villkor kommer att regleras av och tolkas i enlighet med finsk lag, och alla tvister som rör dessa villkor kommer att vara föremål för den exklusiva jurisdiktionen hos domstolarna i Finland.",

  "cookieParagraph": "Genom att klicka på ”Tillåt cookies” samtycker du till att cookies lagras på din enhet. Detta förbättrar navigeringen på webbplatsen, möjliggör analys av användningen och stödjer våra marknadsföringsinsatser.",
  "cookieTitle": "Cookie policy",
  "cookieReadMore": "Lära sig mer",
  "cookieDecline": "Tillbakagång",
  "cookieAccept": "Tillåt cookies"


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
//to seed <button onClick={() => fetch("/api/seed-translations", { method: "POST" })}>Seed Translations</button>
