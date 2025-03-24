import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import User from "./models/user.model.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //To parse the incoming requests with JSON payloads(from req.body)

app.use("/api/auth/", authRoutes);

// app.get("/", (req, res) => {
//   res.send("HELLO WORLD!");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
