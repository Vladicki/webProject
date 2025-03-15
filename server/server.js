import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/user.model.js';
import userRoutes from './routes/users.js';
import resumeRoutes from './routes/resumes.js';

// import cors from "cors";
 

//loads .env file into process.env so that we can use it
dotenv.config();

//create an express app and define the port
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// requests ending in /api/users will be directed to user-related functions like sign-up and login
app.use('/api/users',userRoutes);
//requests ending in /api/resumes will be directed to resume CRUD functions
app.use('/api/resumes',resumeRoutes);

//test command to check that the server's up
app.use('/api/ping',(req,res)=>{res.send("Ping! I'm alive!")});


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
   