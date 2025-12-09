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

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const { username, password } = body;

      if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
      }

      const admin = await admins.findOne({ username });
      if (!admin) {
        return res.status(401).json({ error: "Invalid username" });
      }

      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }

      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}