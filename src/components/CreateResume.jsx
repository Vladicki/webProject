import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreateResume = () => {
    const navigate = useNavigate();
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

    // // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post("http://localhost:4000/api/resumes/create", formData);
    //         console.log("Resume saved:", response.data);
    //         alert("Resume Created Successfully!");
    //         //navigate user to resumes page once resume is created successfully
    //         navigate("/resumes");
    //     } catch (error) {
    //         console.error("Error saving resume:", error.response?.data || error.message);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://griffith-webproject-server-8398a1bf085d.herokuapp.com/api/resumes/create", 
                formData,
                { withCredentials: true } // ✅ Ensures cookies are sent if needed
            );
            console.log("Resume saved:", response.data);
            alert("Resume Created Successfully!");
            navigate("/resumes");
        } catch (error) {
            console.error("Error saving resume:", error.response?.data || error.message);
        }
    };
    

    return (
        <div className="createResume max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">Create a Resume</h2>
            <form onSubmit={handleSubmit}>
                {/* Title Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-1 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-2 py-1 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Summary Section */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        className="w-full px-2 py-1 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Experience Section */}
                <h3 className="text-xl font-semibold mt-6 mb-4">Experience</h3>
                {formData.experience.map((exp, index) => (
                    <div key={index} className="space-y-4 mb-4">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={exp.company}
                            onChange={(e) => handleChange(e, "experience", index)}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role"
                            value={exp.role}
                            onChange={(e) => handleChange(e, "experience", index)}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => handleChange(e, "experience", index)}
                                className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleChange(e, "experience", index)}
                                className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={exp.description}
                            onChange={(e) => handleChange(e, "experience", index)}
                            className="w-full px-2 py-1 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            experience: [
                                ...formData.experience,
                                { company: "", role: "", startDate: "", endDate: "", description: "" },
                            ],
                        })
                    }
                    className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Add Experience
                </button>

                {/* Education Section */}
                <h3 className="text-xl font-semibold mt-6 mb-4">Education</h3>
                {formData.education.map((edu, index) => (
                    <div key={index} className="space-y-4 mb-4">
                        <input
                            type="text"
                            name="institution"
                            placeholder="Institution"
                            value={edu.institution}
                            onChange={(e) => handleChange(e, "education", index)}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) => handleChange(e, "education", index)}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="date"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => handleChange(e, "education", index)}
                                className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => handleChange(e, "education", index)}
                                className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            education: [
                                ...formData.education,
                                { institution: "", degree: "", startDate: "", endDate: "" },
                            ],
                        })
                    }
                    className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Add Education
                </button>

                {/* Custom Sections */}
                <h3 className="text-xl font-semibold mt-6 mb-4">Custom Sections</h3>
                {formData.customSections.map((section, index) => (
                    <div key={index} className="space-y-4 mb-4">
                        <input
                            type="text"
                            name="header"
                            placeholder="Header"
                            value={section.header}
                            onChange={(e) => handleChange(e, "customSections", index)}
                            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={section.description}
                            onChange={(e) => handleChange(e, "customSections", index)}
                            className="w-full px-2 py-1 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            customSections: [
                                ...formData.customSections,
                                { header: "", description: "" },
                            ],
                        })
                    }
                    className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Add Custom Section
                </button>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 mt-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                >
                    Create Resume
                </button>
            </form>
        </div>

    )

}

export default CreateResume;