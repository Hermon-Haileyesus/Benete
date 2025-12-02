import { MongoClient, ObjectId } from "mongodb";

let client;
let db;

async function connectDB() {
  if (!client) {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("ContactFormDB"); // make sure this matches your DB name
  }
  return db;
}

export default async function handler(req, res) {
  console.log("Handler triggered with method:", req.method);

  try {
    const database = await connectDB();
    const contacts = database.collection("contacts");

    if (req.method === "POST") {
      // Insert new contact
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      console.log("Parsed body:", body);

      await contacts.insertOne({ ...body, createdAt: new Date() });
      res.status(201).json({ message: "Saved successfully" });

    } else if (req.method === "GET") {
      // Get all contacts
      const allContacts = await contacts.find({}).toArray();
      res.status(200).json(allContacts);

    } else if (req.method === "DELETE") {
      // Delete contact by ID
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: "Missing id" });
      }

      const result = await contacts.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ error: "Contact not found" });
      }

    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    console.error("Error in handler:", err);
    res.status(500).json({ error: err.message });
  }
}