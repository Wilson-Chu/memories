import express from "express";
import bodyParser from "body-parser";
import mongooose from "mongoose";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlEncoded.json({ limit: "30mb", extended: true }));
app.use(cors());

// replace <password> with real pw later, when .env is made
const CONNECTION_URL =
  "mongodb+srv://Wilson-Chu:<password>@cluster-01.oo5d1wz.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
