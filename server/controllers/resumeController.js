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
        console.log("error in creating resume",error);
        res.status(404).json({error:error.message, resume:req.body})
    }
};

export default {
    createResume
};
