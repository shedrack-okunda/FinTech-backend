import express from "express";
import { verifyToken } from "../middleware/VerifyToken";
import {
  createWallet,
  deleteWallet,
  getWalletByUserId,
  updateWalletBalance,
} from "../controllers/Wallet";

const router = express.Router();

router
  .post("/", verifyToken, createWallet)
  .get("/user/:userId", verifyToken, getWalletByUserId)
  .patch("/:id/balance", verifyToken, updateWalletBalance)
  .delete("/:id", verifyToken, deleteWallet);

export default router;
