import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import orderRoutes from "./routes/order.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import mlRoutes from "./routes/ml.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL] : true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/ml", mlRoutes);

app.get("/", (req, res) => {
  res.send("Server is running ");
});

app.get("/test-db", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.json({ success: true, message: "DB Connected!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
