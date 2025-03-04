import User from '../models/user.model.js';


//login
const loginUser = async (req,res)=>{
    res.json({msg:"login user"})
}

//signup
const signUpUser = async (req,res)=>{
    const {name,email,password} = req.body;
    try {
        const user = await User.signUp(name,email,password);
        res.status(200).json({email,user})
    } catch (error) {
        res.status(404).json({error:error.message, user:req.body})
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    loginUser,
    signUpUser
}