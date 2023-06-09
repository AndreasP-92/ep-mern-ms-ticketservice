import express from "express";
import connectQueue from "./services/middleware/rabbitMQService.js";
import router from "./controller/routes.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(router)


connectQueue()

app.listen(PORT, () => console.log("Server is running at port " + PORT));



