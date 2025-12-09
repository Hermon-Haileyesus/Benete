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
    const username = "Moi";
    const plainPassword = "Hey";

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

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