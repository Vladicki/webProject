import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/user.model.js';
import userRoutes from './routes/users.js';
import resumeRoutes from './routes/resumes.js';


//loads .env file into process.env so that we can use it
dotenv.config();

//create an express app and define the port
const app = express();
const PORT = 5050;

app.use(express.json());
app.use(cors());

// requests ending in /api/users will be directed to user-related functions like sign-up and login
app.use('/api/users',userRoutes);
//requests ending in /api/resumes will be directed to resume CRUD functions
app.use('/api/resumes',resumeRoutes);

app.get("/connect_db_test_route", async(req, res, next)=>{
    // await connectDB();
    console.log("Hello")
    const user = await User.create({
        name:"harsh",
        email:"harsh@gmail.com",
        password:"awsawsaws"
    })
    console.log(User)
    console.log(user)
    res.send("<h1>Hello from harsh!</h1>")
})

//start server
app.listen(PORT,()=>{
    connectDB();
    console.log(`Web Project server started at: http://localhost:${PORT}`)
})
   