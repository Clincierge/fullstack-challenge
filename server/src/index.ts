import "dotenv/config";
import express from "express";
import cors from "cors";
import {
  defaultTravelPolicy,
  unlimitedAirfareTravelPolicy,
} from "./travelPolicies";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

const port = process.env.PORT ?? 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/travelPolicies", (req, res) => {
  res.json({
    travelPolicies: [defaultTravelPolicy, unlimitedAirfareTravelPolicy],
  });
});
