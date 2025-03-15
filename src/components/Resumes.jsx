import { React, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { ResumeFormat } from './ResumeFormat';

const Resumes = () => {
    const {user,logout} = useAuth();
    const [resumes, setResumes] = useState(null);
    //const testId = "67c7086c2aa680e7e7a6567b";
    useEffect(() => {
        async function fetchResumes(){
            const response = await fetch(`http://localhost:4000/api/resumes/user/${user._id}`);
            const json = await response.json();
            if(response.ok){
                console.log(json);
                setResumes(json);
            }


        }
        fetchResumes();
    }, [])

    if (resumes === null) {
        return <div>Loading</div>; 
    }
    
    return (
        <div>
            <h1>Your Resumes</h1>
            <div className="resume-list max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                {resumes.map((resume)=>(
                    <ResumeFormat resume={resume} />
                ))}


            </div>


        </div>
    )
}

export default Resumes