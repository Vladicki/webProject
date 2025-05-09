import { React, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { ResumeFormat } from './ResumeFormat';
import { useNavigate } from "react-router-dom";

const Resumes = () => {
    const { user, logout } = useAuth();
    const [resumes, setResumes] = useState(null);
    const navigate = useNavigate();
    //const testId = "67c7086c2aa680e7e7a6567b";
    useEffect(() => {
        async function fetchResumes() {
            if (!user || !user._id) {
                console.log("User is not authenticated or user ID is missing.");
                return;  // Early exit if user is null or doesn't have an _id
            }
            const response = await fetch(`https://griffith-webproject-server-8398a1bf085d.herokuapp.com/api/resumes/user/${user._id}`);
            const json = await response.json();
            if (response.ok) {
                console.log(json);
                setResumes(json);
            }


        }
        fetchResumes();
    }, [])

    if (resumes === null) {
        return <div className="max-w-md mx-auto p-6 bg-blue-50 shadow-lg rounded-lg m-10">
            <div>Sign-In to show your uploaded resumes</div>
            <button
                className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                onClick={() => navigate("/login")}
            >
                Log In/Sign Up
            </button>
        </div>
    }

    return (
        <div>
            <h1 className="text-3xl text-center m-5">Your Resumes</h1>
            <div className="resume-list max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-black m-8">
                {/*2 columns for smaller devices and 3 for bigger devices*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {resumes.map((resume, i) => (
                        <ResumeFormat key={i} resume={resume} />
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Resumes