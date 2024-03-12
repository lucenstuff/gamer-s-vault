import express from "express";
import cors from "cors";

const app = express();

//CORS
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// JSON
app.use(express.json());

export default app;
