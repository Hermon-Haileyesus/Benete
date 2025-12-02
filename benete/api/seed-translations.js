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
      "header.title": "BeneCare",
      "carousel.elderly.title": "Turvallinen arki ikäihmisille",
      "carousel.elderly.desc": "BeneCare tukee itsenäistä asumista ja tarjoaa turvaa arkeen.",
      "homepage.introduction_title": "Älykäs tuki hoitotyöhön ja arjen hyvinvointiin"
    }
  },
  {
    language: "en",
    translations: {
      "nav.home": "Home",
      "nav.ideology": "Ideology",
      "nav.service": "Service",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "header.title": "BeneCare",
      "carousel.elderly.title": "Safe everyday life for the elderly",
      "carousel.elderly.desc": "BeneCare supports independent living and provides a sense of security in daily life.",
      "homepage.introduction_title": "Smart support for care work and everyday well-being"
    }
  },
  {
    language: "sv",
    translations: {
      "nav.home": "Hem",
      "nav.ideology": "Ideologi",
      "nav.service": "Tjänst",
      "nav.team": "Team",
      "nav.contact": "Kontakt",
      "header.title": "BeneCare",
      "carousel.elderly.title": "Trygg vardag för äldre",
      "carousel.elderly.desc": "BeneCare stödjer självständigt boende och ger trygghet i vardagen.",
      "homepage.introduction_title": "Smart stöd för omsorgsarbete och vardagsvälmående"
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
