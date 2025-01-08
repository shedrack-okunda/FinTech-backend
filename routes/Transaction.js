import express from "express";
import { verifyToken } from "../middleware/VerifyToken";
import {
  createTransaction,
  getTransactionsByUser,
  getTransactionsByUserId,
  updateTransactionStatus,
} from "../controllers/Transaction";

const router = express.Router();

router
  .post("/", verifyToken, createTransaction)
  .get("/:id", verifyToken, getTransactionsByUserId)
  .get("/user/:userId", verifyToken, getTransactionsByUser)
  .patch("/:id/status", verifyToken, updateTransactionStatus);

export default router;
