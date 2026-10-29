import app from "./app.js";
import { connectDB } from "./config/db.js";
import env from "./config/env.js";

async function serverStart() {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(
        `Server is running at http://localhost:${env.PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

serverStart();
