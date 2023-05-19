import express from "express";
import connectQueue from "./services/middleware/rabbitMQService.js";

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());


connectQueue()

app.listen(PORT, () => console.log("Server is running at port " + PORT));


