import Resume from '../models/resume.model.js';

// Create a new resume
const createResume = async (req, res) => {
    const {
        userId,
        title,
        summary,
        experience,
        education,
        customSections,
        fileUrl
    } = req.body;

    try {
        const resume = new Resume({
            userId,
            title,
            summary,
            experience,
            education,
            customSections,
            fileUrl
        });
        await resume.save();
        res.status(201).json({ message: "Resume successfully saved", resume });
    } catch (error) {
        console.error("Error saving resume:", error);
        res.status(500).json({ error: "Failed to save resume", details: error.message });
    }
};

export default {
    createResume
};
