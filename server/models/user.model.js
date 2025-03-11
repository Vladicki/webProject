import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

userSchema.statics.logIn = async function (email, password){
    //first check if the user has provided both an email address and a password
    if(!email || !password){
        throw Error('Please fill in all fields');
    }

    //try to find a user with the email in the database. if there isn't one, then the "user" variable will be null
    const user = await this.findOne({email});
    if(!user){
        throw Error('Incorrect email, please try again');
    }

    //check the password against the hashed password that's in the database
    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Incorrect password, please try again');
    }

    //if everything matches, return the user
    return user;
}

userSchema.statics.signUp = async function (name,email,password){

    //validation
    if(!email || !password || !name){
        throw Error("Please fill in all fields");
    }
    if(!validator.isEmail(email)){
        throw Error("Email is invalid");
    }

    //check if email already exists in database
    const exists = await this.findOne({email});
    if(exists){
        throw Error('Email already in use');
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const newUser = await this.create({name,email,password:hash});
    return newUser;

}

const User = mongoose.model('User',userSchema);
export default User;