import { React, useState, useEffect } from 'react'
import axios from '../helpers/axios'
import { useNavigate } from 'react-router-dom'


export const ResumeInfo = ({ resumeData }) => {
    return (
        <>
            {/*header */}
            <div className="header mb-6">
                <h1 className="text-2xl font-bold">{resumeData.title}</h1>
                <p className="text-gray-700">{resumeData.description}</p>
                <p className="text-gray-500">{resumeData.summary}</p>
            </div>

            {/*experience */}
            <div className="experience mb-6">
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                {resumeData.experience?.map((company) => (
                    <div className="mb-4" key={company.company}>
                        <h3 className="font-semibold">{company.company}</h3>
                        <p className="italic">{company.role}</p>
                        <div className="text-sm text-gray-500">
                            {company.startDate} – {company.endDate}
                        </div>
                        <p>{company.description}</p>
                    </div>
                ))}
            </div>

             {/*education */}   
            <div className="education mb-6">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                {resumeData.education?.map((edu) => (
                    <div className="mb-4" key={edu.institution}>
                        <h3 className="font-semibold">{edu.institution}</h3>
                        <p className="italic">{edu.degree}</p>
                        <div className="text-sm text-gray-500">
                            {edu.startDate} – {edu.endDate}
                        </div>
                    </div>
                ))}
            </div>

            {/*custom sections */}
            <div className="custom_sections">
                <h2 className="text-xl font-semibold mb-2">Other</h2>
                {resumeData.customSections?.map((item) => (
                    <div className="mb-4" key={item.header}>
                        <h3 className="font-semibold">{item.header}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export const ResumeEditor = ({ resumeData,formData,setFormData }) => {


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

    
    return (
        <>
            <div className="header mb-6">
                <h1 className="text-2xl font-bold">{resumeData.title}</h1>
                <input
                    className="text-gray-700 block w-full mb-2"
                    type="text"
                    name="description"
                    onChange={handleChange}
                    defaultValue={resumeData.description}
                />
                <input
                    className="text-gray-500 block w-full"
                    type="text"
                    name="summary"
                    onChange={handleChange}
                    defaultValue={resumeData.summary}
                />
            </div>

            <div className="experience mb-6">
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                {resumeData.experience?.map((company, index) => (
                    <div className="mb-4" key={index}>
                        <h3 className="font-semibold">{company.company}</h3>
                        <input
                            className="italic block w-full mb-1"
                            type="text"
                            name="role"
                            onChange={(e) => handleChange(e, "experience", index)}
                            defaultValue={company.role}
                        />
                        <div className="flex gap-2 text-sm text-gray-500 mb-1">
                            <input
                                type="date"
                                defaultValue={company.startDate}
                                name="startDate"
                                onChange={(e) => handleChange(e, "experience", index)}
                                className="border px-2 py-1 rounded"
                            />
                            <span>–</span>
                            <input
                                type="date"
                                defaultValue={company.endDate}
                                name="endDate"
                                onChange={(e) => handleChange(e, "experience", index)}
                                className="border px-2 py-1 rounded"
                            />
                        </div>
                        <input
                            className="block w-full"
                            type="text"
                            name="description"
                            onChange={(e) => handleChange(e, "experience", index)}
                            defaultValue={company.description}
                        />
                    </div>
                ))}
            </div>

            <div className="education mb-6">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                {resumeData.education?.map((edu, index) => (
                    <div className="mb-4" key={index}>
                        <h3 className="font-semibold">{edu.institution}</h3>
                        <input
                            className="italic block w-full mb-1"
                            type="text"
                            name="degree"
                            defaultValue={edu.degree}
                            onChange={(e) => handleChange(e, "education", index)}
                        />
                        <div className="flex gap-2 text-sm text-gray-500">
                            <input
                                type="date"
                                name="startDate"
                                defaultValue={edu.startDate}
                                onChange={(e) => handleChange(e, "education", index)}
                                className="border px-2 py-1 rounded"
                            />
                            <span>–</span>
                            <input
                                type="date"
                                name="endDate"
                                defaultValue={edu.endDate}
                                onChange={(e) => handleChange(e, "education", index)}
                                className="border px-2 py-1 rounded"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="custom_sections">
                <h2 className="text-xl font-semibold mb-2">Custom Sections</h2>
                {resumeData.customSections?.map((item, index) => (
                    <div className="mb-4" key={index}>
                        <h3 className="font-semibold">{item.header}</h3>
                        <input
                            className="block w-full"
                            type="text"
                            name="description"
                            defaultValue={item.description}
                            onChange={(e) => handleChange(e, "customSections", index)}
                        />
                    </div>
                ))}
            </div>
        </>

    )
}


const ResumeModal = ({ resumeData, setIsOpen }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: resumeData.title,
        description: resumeData.description,
        summary: resumeData.summary,
        experience: resumeData.experience,
        education:resumeData.education,
        customSections: resumeData.customSections,
        userId: localStorage.getItem("userId") || "", // Store user ID from login
        fileUrl: ""
    });

    const deleteResume = async () => {
        console.log("delete resume");
        try {
            const response = await axios.delete(
                `api/resumes/delete/${resumeData._id}`,
            );
            console.log("Resume deleted:", response.data);
            window.location.reload();
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    }

    const handleEdit = async()=>{
        console.log("update resume");
        console.log(formData);
        try {
            const response = await axios.patch(
                `api/resumes/update/${resumeData._id}`,
                formData
            );
            console.log("Resume updated:", response.data);
            //window.location.reload();
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    }

    const [editMode, setEditMode] = useState(false);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative">
                {/**edit button */}
                {editMode ? <span>

                    <button
                        onClick={() => handleEdit()}
                        className="absolute top-2 right-38 text-gray-500 hover:text-black"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => setEditMode(false)}
                        className="absolute top-2 right-20 text-gray-500 hover:text-black"
                    >
                        Cancel
                    </button>
                </span> : <span>
                    <button
                        onClick={() => setEditMode(true)}
                        className="absolute top-2 right-38 text-gray-500 hover:text-black"
                    >
                        Edit
                    </button>
                    {/**delete button */}
                    <button
                        onClick={() => { deleteResume() }}
                        className="absolute top-2 right-20 text-gray-500 hover:text-black"
                    >
                        Delete
                    </button>
                </span>}


                {/*close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    Close
                </button>

                {/**display either the editor or the info*/}
                {editMode ? <ResumeEditor resumeData={resumeData} formData={formData} setFormData={setFormData} /> : <ResumeInfo resumeData={resumeData} />}




            </div>
        </div>
    )
}

export default ResumeModal