import express from "express";
import {
  deleteUserController,
  followUserController,
  getUserController,
  unfollowUserController,
  updateUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

//update user
router.put("/:id", updateUserController);
//delete user
router.delete("/:id", deleteUserController);
//get user
router.get("/:id", getUserController);

//follow a user
router.put("/follow/:id", followUserController);

//unfollow User
router.put("/unfollow/:id", unfollowUserController);
export default router;
