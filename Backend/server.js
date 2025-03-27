import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Load environment variables at the top
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use("/api/auth/", authRoutes);

// Start the server only after connecting to MongoDB
const startServer = async () => {
  try {
    await connectToMongoDB(); // Wait for database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(" Server failed to start:", error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

// Call function to start the server
startServer();
