import express from 'express';
import { addmoney, getAllUser, login, signup } from '../controllers/user-controller.js';

const router=express.Router();
router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/login",login);
router.post("/addmoney/:id",addmoney);
export default router;
