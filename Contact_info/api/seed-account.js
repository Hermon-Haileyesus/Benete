import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

let client;
let db;

async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db("ContactFormDB");
  }
  return db;
}

export default async function handler(req, res) {
  try {
    const database = await connectDB();
    const admins = database.collection("admins");

    const username = process.env.ADMIN_USERNAME;
    const plainPassword = process.env.ADMIN_PASSWORD;

    if (!username || !plainPassword) {
      return res.status(400).json({ error: "Missing ADMIN_USERNAME or ADMIN_PASSWORD" });
    }

    const existingAdmin = await admins.findOne({ username });

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    if (existingAdmin) {
      // Always update the password if env changed
      await admins.updateOne(
        { username },
        { $set: { password: hashedPassword, updatedAt: new Date() } }
      );
      return res.status(200).json({ message: "Admin password updated" });
    }

    // If no admin exists, insert new one
    await admins.insertOne({
      username,
      password: hashedPassword,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "Admin seeded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}