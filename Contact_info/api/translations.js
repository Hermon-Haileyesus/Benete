import { MongoClient, ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Missing token" });

    const token = authHeader.split(" ")[1];
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.status(403).json({ error: "Invalid or expired token" });
    }

    await client.connect();
    const db = client.db("translationDB");
    const collection = db.collection("translation");

    if (req.method === "GET") {
      const docs = await collection.find({}).toArray();
      return res.status(200).json(docs);
    }

    if (req.method === "PUT") {
      const { id, updates } = req.body;
      const dotUpdates = {};
      for (const key in updates) {
        dotUpdates[`translations.${key}`] = updates[key];
      }

      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: dotUpdates }
      );

      return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}