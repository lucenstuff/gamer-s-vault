import express from "express";
import middlewares from "./middlewares.js";
import router from "./routes.js";

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(middlewares);

// Routes
app.use(router);

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server terminated");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server interrupted");
    process.exit(0);
  });
});

export default app;
