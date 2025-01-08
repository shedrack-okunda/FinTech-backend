import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  createTransaction,
  getTransactionsByUser,
  getTransactionsByUserId,
  updateTransactionStatus,
} from "../controllers/Transaction.js";

const router = express.Router();

router
  .post("/", verifyToken, createTransaction)
  .get("/:id", verifyToken, getTransactionsByUserId)
  .get("/user/:userId", verifyToken, getTransactionsByUser)
  .patch("/:id/status", verifyToken, updateTransactionStatus);

export default router;
