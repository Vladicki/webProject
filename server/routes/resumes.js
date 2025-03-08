// import express from "express";
// const router = express.Router();

// //get all resumes
// router.get('/get');
// //get a single resume
// router.get('/get');

// //create a resume
// router.post('/create');
// //update a resume
// router.patch('/update');
// //delete a resume
// router.delete('/delete');



// export default router;
import express from "express";
import Resume from "../models/resume.model.js";
const router = express.Router();

// Create a new resume
router.post("/create", async (req, res) => {
    try {
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).json({ message: "Resume saved successfully", resume });
    } catch (error) {
        res.status(500).json({ message: "Error saving resume", error: error.message });
    }
});

// Get resumes for a specific user
router.get("/user/:userId", async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.params.userId });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resumes", error: error.message });
    }
});

export default router;
