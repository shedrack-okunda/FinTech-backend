import express from "express";
import { verifyToken } from "../middleware/VerifyToken";
import { getProfile, updateProfile } from "../controllers/Profile";

const router = express.Router();

router.get("/", verifyToken, getProfile).patch("/", verifyToken, updateProfile);

export default router;
