import CreateResume from "./CreateResume";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Dashboard = () => {
    const {user, logout} = useAuth();
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
            const response = await axios.post("http://localhost:4000/api/resumes/create", formData);
            console.log("Resume saved:", response.data);
            alert("Resume Created Successfully!");
        } catch (error) {
            console.error("Error saving resume:", error.response?.data || error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>logged in as user: {user._id}</p>
            <CreateResume />
        </div>
    );
};

export default Dashboard;
