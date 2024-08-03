import express from 'express'
import { createUser, login, updateUser } from '../Controllers/User.js'
const router = express.Router();


router.post("/register", createUser);
router.post("/login", login)
router.patch("/update/:id", updateUser)

export default router;





























// import express from "express";
// import { createUser, deleteUser } from "../Controllers/User.js";
// const router = express.Router();

// router.post("/register", createUser);
// router.delete("/:id", deleteUser)

// export default router;
