import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-Bazar Backend is running",
  });
});

// Auth routes
app.use("/api/auth", authRoutes);

// Product routes
app.use("/api/products", productRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 4000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 4000}`
      );
    });
  })
  .catch((error) => {
    console.log(
      "MongoDB connection failed:",
      error.message
    );
  });