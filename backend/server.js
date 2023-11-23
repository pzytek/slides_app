import express from "express";
import dotenv from "dotenv";
import slideRoutes from "./routes/slideRoutes.js";
import { notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => res.send("hello"));

app.use("/api/slides", slideRoutes);

app.use(notFound);

app.listen(port, () => console.log(`Server running on port ${port}`));
