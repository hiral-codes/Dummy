import express from 'express'
import {createUser, login} from '../Controllers/User.js'
const router = express.Router();


router.post("/register",createUser);
router.post("/login",login)

export default router;





























// import express from "express";
// import { createUser, deleteUser } from "../Controllers/User.js";
// const router = express.Router();

// router.post("/register", createUser);
// router.delete("/:id", deleteUser)

// export default router;
