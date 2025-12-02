import { MongoClient } from "mongodb";

let client;
let db;

async function connectDB() {
  if (!client) {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("translationDB"); 
  }
  return db;
}

export default async function handler(req, res) {
  try {
    const database = await connectDB();
    const translations = database.collection("translation");

    const { lang } = req.query;

    if (!lang) {
      return res.status(400).json({ error: "Missing language query parameter" });
    }

    const doc = await translations.findOne({ language: lang });

    if (!doc) {
      return res.status(404).json({ error: `No translations found for language: ${lang}` });
    }

    res.status(200).json(doc.translations);
  } catch (err) {
    console.error("Translation API error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
