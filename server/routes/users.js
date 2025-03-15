import express from "express";
import userController from '../controllers/userController.js'

const router = express.Router();

router.get('/ping',(req,res)=>{res.send("users routes ping!")});

//login
router.post('/login',userController.loginUser);

//signup
router.post('/signup',userController.signUpUser);

export default router;