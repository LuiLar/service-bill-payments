import { Router } from "express";
import { getClients } from "../controllers/clients.controller.js";

const router = Router();

router.get("/clients", getClients);

export default router;
