import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import {
  createTransaction,
  getPaginatedTransactionsByUser,
  getTransactionsByUser,
  getTransactionsByUserId,
  updateTransactionStatus,
} from "../controllers/Transaction.js";

const router = express.Router();

router
  .post("/", verifyToken, createTransaction)
  .get("/:id", verifyToken, getTransactionsByUserId)
  .get("/user", verifyToken, getTransactionsByUser)
  .get("/user/paginated", verifyToken, getPaginatedTransactionsByUser)
  .patch("/:id/status", verifyToken, updateTransactionStatus);

export default router;
