import express from "express";
import { register, login, getMyProfile, logOut } from "../controller/user.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logOut);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
