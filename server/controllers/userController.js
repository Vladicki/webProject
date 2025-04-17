import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';


dotenv.config();

//takes in the user ID in order to create a token
const createToken = (_id)=>{
    return jwt.sign({_id},"harshsdarksecret",{expiresIn:"1d"});
}


//login
const loginUser = async (req, res) => {
    const {email, password } = req.body;
    try {
        const user = await User.logIn(email,password);
        const userId = user._id;
        const token = createToken(user._id);
        res.status(200).json({userId,token});

    } catch (error) {
        console.log("error in loggin",error);
        res.status(404).json({ error: error.message, user: req.body })
    }
}

//signup
const signUpUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.signUp(name, email, password);
        const userId = user._id;
        const token = createToken(user._id);
        res.status(200).json({userId,token});
    } catch (error) {
        res.status(404).json({ error: error.message, user: req.body })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    loginUser,
    signUpUser
}