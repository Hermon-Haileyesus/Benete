// pages/api/translations.js
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  await client.connect();
  const db = client.db("translationDB");
  const collection = db.collection("translation");

  if (req.method === "GET") {
    const docs = await collection.find({}).toArray();
    return res.status(200).json(docs);
  }

  if (req.method === "PUT") {
    const { id, updates } = req.body;

    // Ensure updates are applied with dot notation under translations
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
}
