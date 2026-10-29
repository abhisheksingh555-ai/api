import express from "express";
import router from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is Start",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
})

app.use("/api/v1/auth", router);

export default app;
