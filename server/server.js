// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// import User from './models/user.model.js';
// import userRoutes from './routes/users.js';
// import resumeRoutes from './routes/resumes.js';

// // import cors from "cors";
 

// //loads .env file into process.env so that we can use it
// dotenv.config();

// //create an express app and define the port
// const app = express();
// const PORT = 4000;

// app.use(express.json());
// app.use(cors());

// //app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// // requests ending in /api/users will be directed to user-related functions like sign-up and login
// app.use('/api/users',userRoutes);
// //requests ending in /api/resumes will be directed to resume CRUD functions
// app.use('/api/resumes',resumeRoutes);

// //test command to check that the server's up
// app.use('/api/ping',(req,res)=>{res.send("Ping! I'm alive!")});

// //start server
// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Web Project server started at: http://localhost:${PORT}`)
// })
   
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import User from './models/user.model.js';
import Resume from './models/resume.model.js'; // Import Resume model
import userRoutes from './routes/users.js';
import resumeRoutes from './routes/resumes.js';

// Load environment variables
dotenv.config();

// Create an Express app and define the port
const app = express();
const PORT =  process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/resumes', resumeRoutes);

// Test endpoint
app.use('/api/ping', (req, res) => {
    res.send("Ping! I'm alive!");
});

//  Resume creation endpoint (directly in server.js for now)
app.post('/api/resumes/create', async (req, res) => {
    try {
        const { title, description, summary, experience, education, customSections, userId, fileUrl } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        // Create a new resume document
        const newResume = new Resume({
            title,
            description,
            summary,
            experience,
            education,
            customSections,
            userId,
            fileUrl
        });

app.get("/",(req,res)=>{res.send(console.log(`Web Project server currentlh hosted at: ${PORT}`))})

//start server
app.listen(PORT,()=>{
    connectDB();
    console.log(`Web Project server started at: http://localhost:${PORT}`)
})
   
        // Save to database
        await newResume.save();

        res.status(201).json({ message: "Resume created successfully", resume: newResume });
    } catch (error) {
        res.status(500).json({ error: "Failed to save resume", details: error.message });
    }
});

// Start server and connect to DB
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Web Project server started at: http://localhost:${PORT}`);
});
