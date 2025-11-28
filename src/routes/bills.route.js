import { Router } from "express";
import {
  createBill,
  payBill,
  getPendingBillsByClientID,
  getPaidBillsByClientID,
} from "../controllers/bills.controller.js";

const router = Router();

router.post("/bills", createBill);

router.post("/payments", payBill);

router.get("/clients/:id/pending-bills", getPendingBillsByClientID);

router.get("/clients/:id/payment-history", getPaidBillsByClientID);

export default router;
