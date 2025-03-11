// import mongoose from "mongoose";

// const resumeSchema = new mongoose.Schema({
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,
//         required:true, ref: "User" },
//     title: { type: String, required: true },
//     summary: { type: String },
//     experience: [{
//         company: String,
//         role: String,
//         startDate: Date,
//         endDate: Date,
//         description: String
//     }],
//     education: [{
//         institution: String,
//         degree: String,
//         startDate: Date,
//         endDate: Date
//     }],
//     customSection_1: [{
//         header:String,
//         description:String
//     }],
//     customSection_2: [{
//         header:String,
//         description:String
//     }],
//     customSection_3: [{
//         header:String,
//         description:String
//     }],
//     fileUrl:{
//         type:String,
//     }

// },{timestamps:true})

// const Resume = mongoose.model('Resume',resumeSchema);
// export default Resume;

import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    title: { type: String, required: true, trim: true },
    summary: { type: String, trim: true },
    experience: [
        {
            company: { type: String, trim: true },
            role: { type: String, trim: true },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String, trim: true },
        },
    ],
    education: [
        {
            institution: { type: String, trim: true },
            degree: { type: String, trim: true },
            startDate: { type: Date },
            endDate: { type: Date },
        },
    ],
    customSections: [
        {
            header: { type: String, trim: true },
            description: { type: String, trim: true },
        },
    ],
    fileUrl: { type: String, default: "", trim: true }
}, { timestamps: true });

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
