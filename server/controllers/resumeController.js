import Resume from '../models/resume.model'

// creating resume route
const creatingResume = async (req,res)=>{
    const {
        userId,
        title,
        summary,
        experience,
        education,
        customSection_1,
        customSection_2,
        customSection_3,
        fileUrl
        } = req.body;
    try {
        const resume = await Resume.create({
            userId,
            title,
            summary,
            experience,
            education,
            customSection_1,
            customSection_2,
            customSection_3,
            fileUrl
        });
        res.status(200).json({resume,userId})
    } catch (error) {
        console.log("error in creating resume",error);
        res.status(404).json({error:error.message, resume:req.body})
    }
}

export default{
    
}