import { MongoClient } from "mongodb";
console.log("Serverless function loaded");

let client;
let db;

async function connectDB() {
  if (!client) {
    console.log("Connecting with URI:", process.env.MONGODB_URI); // ✅ Log URI
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("ContactFormDB"); // ✅ Make sure this matches your DB name
  }
  return db;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("Incoming request body:", req.body); // ✅ Log raw body

      const database = await connectDB();
      const contacts = database.collection("contacts");

      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      console.log("Parsed body:", body); // ✅ Log parsed body

      await contacts.insertOne({
        ...body,
        createdAt: new Date(),
      });

      console.log("Document inserted successfully"); // ✅ Confirm success
      res.status(201).json({ message: "Saved successfully" });
    } catch (err) {
      console.error("Error inserting:", err); // ✅ Log error
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

