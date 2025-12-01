console.log("Serverless function loaded");
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
    db = client.db("ContactFormDB");
  }
  return db;
}



export default async function handler(req, res) {
  console.log("Handler triggered with method:", req.method);

  try {
    const database = await connectDB();
    const contacts = database.collection("contacts");

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      console.log("Parsed body:", body);

      await contacts.insertOne({ ...body, createdAt: new Date() });
      res.status(201).json({ message: "Saved successfully" });
    } else if (req.method === "GET") {
      const allContacts = await contacts.find({}).toArray();
      res.status(200).json(allContacts);
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("Error in handler:", err);
    res.status(500).json({ error: err.message });
  }
}