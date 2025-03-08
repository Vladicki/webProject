
import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        summary: "",
        experience: [{ company: "", role: "", startDate: "", endDate: "", description: "" }],
        education: [{ institution: "", degree: "", startDate: "", endDate: "" }],
        customSections: [{ header: "", description: "" }],
        userId: localStorage.getItem("userId") || "", // Store user ID from login
        fileUrl: ""
    });

    // Handle input change
    const handleChange = (e, section = null, index = null) => {
        const { name, value } = e.target;

        if (section) {
            // Updating array fields like experience, education, or custom sections
            const updatedSection = [...formData[section]];
            updatedSection[index][name] = value;
            setFormData({ ...formData, [section]: updatedSection });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5050/api/resumes/create", formData);
            console.log("Resume saved:", response.data);
            alert("Resume Created Successfully!");
        } catch (error) {
            console.error("Error saving resume:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="createResume">
                <h2>Create a Resume</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Summary</label>
                        <textarea name="summary" value={formData.summary} onChange={handleChange} />
                    </div>

                    {/* Experience Section */}
                    <h3>Experience</h3>
                    {formData.experience.map((exp, index) => (
                        <div key={index}>
                            <input type="text" name="company" placeholder="Company" value={exp.company} onChange={(e) => handleChange(e, "experience", index)} />
                            <input type="text" name="role" placeholder="Role" value={exp.role} onChange={(e) => handleChange(e, "experience", index)} />
                            <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleChange(e, "experience", index)} />
                            <input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleChange(e, "experience", index)} />
                            <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleChange(e, "experience", index)} />
                        </div>
                    ))}
                    <button type="button" onClick={() => setFormData({ ...formData, experience: [...formData.experience, { company: "", role: "", startDate: "", endDate: "", description: "" }] })}>
                        Add Experience
                    </button>

                    {/* Education Section */}
                    <h3>Education</h3>
                    {formData.education.map((edu, index) => (
                        <div key={index}>
                            <input type="text" name="institution" placeholder="Institution" value={edu.institution} onChange={(e) => handleChange(e, "education", index)} />
                            <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleChange(e, "education", index)} />
                            <input type="date" name="startDate" value={edu.startDate} onChange={(e) => handleChange(e, "education", index)} />
                            <input type="date" name="endDate" value={edu.endDate} onChange={(e) => handleChange(e, "education", index)} />
                        </div>
                    ))}
                    <button type="button" onClick={() => setFormData({ ...formData, education: [...formData.education, { institution: "", degree: "", startDate: "", endDate: "" }] })}>
                        Add Education
                    </button>

                    {/* Custom Sections */}
                    <h3>Custom Sections</h3>
                    {formData.customSections.map((section, index) => (
                        <div key={index}>
                            <input type="text" name="header" placeholder="Header" value={section.header} onChange={(e) => handleChange(e, "customSections", index)} />
                            <textarea name="description" placeholder="Description" value={section.description} onChange={(e) => handleChange(e, "customSections", index)} />
                        </div>
                    ))}
                    <button type="button" onClick={() => setFormData({ ...formData, customSections: [...formData.customSections, { header: "", description: "" }] })}>
                        Add Custom Section
                    </button>

                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;

  