
import express from "express";
import Resume from "../models/resume.model.js";

const router = express.Router();

// Create a new resume
router.post("/create", async (req, res) => {
    try {
        //create a new document using the Resume schema
        const resume = new Resume(req.body);
        await resume.save();
        res.status(201).json({ message: "Resume successfully saved", resume });
    } catch (error) {
        res.status(500).json({ message: "Error saving resume", error: error.message });
    }
});

// Get all resumes for a specific user
router.get("/user/:userId", async (req, res) => {
    try {
        //try to find a resume that matches the user ID
        const resumes = await Resume.find({ userId: req.params.userId });
        res.json(resumes);
    } catch (error) {
        //if resume wasn't found, return an error
        res.status(500).json({ message: "Error fetching resumes", error: error.message });
    }
});

// Get a single resume by ID
router.get("/:id", async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: "Error fetching resume", error: error.message });
    }
});

// Update a resume by ID
router.patch("/update/:id", async (req, res) => {
    try {
        const updatedResume = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedResume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        res.json({ message: "Resume successfully updated", updatedResume });
    } catch (error) {
        res.status(500).json({ message: "Error updating resume", error: error.message });
    }
});

// Delete a resume by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedResume = await Resume.findByIdAndDelete(req.params.id);
        if (!deletedResume) {
            return res.status(404).json({ message: "Resume not found" });
        }
        res.json({ message: "Resume successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting resume", error: error.message });
    }
});

export default router;
