import { MongoClient, ObjectId } from "mongodb";
import jwt from "jsonwebtoken";

const client = new MongoClient(process.env.MONGODB_URI);

// Middleware to verify JWT
async function verifyToken(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized: No token provided" });
    return null;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // { id, username }
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
    return null;
  }
}

export default async function handler(req, res) {
  
  const user = await verifyToken(req, res);
  if (!user) return;

  try {
    await client.connect();
    const db = client.db("translationDB");
    const collection = db.collection("translation");

    if (req.method === "GET") {
      const docs = await collection.find({}).toArray();
      return res.status(200).json(docs);
    }

    if (req.method === "PUT") {
      const { id, updates } = req.body;

      if (!id || !updates) {
        return res.status(400).json({ error: "Missing id or updates" });
      }

     
      const dotUpdates = {};
      for (const key in updates) {
        dotUpdates[`translations.${key}`] = updates[key];
      }

      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: dotUpdates }
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ error: "Document not found" });
      }

      return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    console.error("Error in translations API:", err);
    res.status(500).json({ error: err.message });
  }
}
