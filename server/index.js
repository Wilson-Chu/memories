import express from "express";
import bodyParser from "body-parser";
import mongooose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded.json({ limit: "30mb", extended: true }));
app.use(cors());
