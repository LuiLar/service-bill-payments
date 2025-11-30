import express from "express";
import cors from "cors";
import { connectToDatabase } from "./config/database.js";
import healthRoutes from "./routes/health.route.js";
import billRoutes from "./routes/bills.route.js";
import clientRoutes from "./routes/clients.route.js";

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

//Routes
app.use(healthRoutes);
app.use(clientRoutes);
app.use(billRoutes);

const init = async () => {
  await connectToDatabase();

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
};

init();
