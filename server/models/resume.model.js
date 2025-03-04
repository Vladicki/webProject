import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    title: { type: String, required: true },
    summary: { type: String },
    experience: [{
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String
    }],
    education: [{
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date
    }],
    customSection_1: [{
        header:String,
        description:String
    }],
    customSection_2: [{
        header:String,
        description:String
    }],
    customSection_3: [{
        header:String,
        description:String
    }],
    fileUrl:{
        type:String,
    }

},{timestamps:true})