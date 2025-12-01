import { MongoClient } from "mongodb";

let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("ContactFormDB"); // matches your manual DB
  }
  return db;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const database = await connectDB();
      const contacts = database.collection("contacts");

      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      await contacts.insertOne({
        ...body,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "Saved successfully" });
    } catch (err) {
      console.error("Error inserting:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}