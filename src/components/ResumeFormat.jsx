import { React, useEffect,useState } from 'react'

export const ResumeFormat = (resume) => {

    const [resumeData, setResumeData] = useState(resume.resume);

    return (
        <div className="resume">
            <div className="header">
                <h1>{resumeData.title}</h1>
                <p>{resumeData.description}</p>
                <p>{resumeData.summary}</p>
            </div>
            <div className="experience">
                {resumeData.experience && resumeData.experience.map((company) => (
                    <div className="item" key={company.company}>
                        <h2>{company.company}</h2>
                        <h3>{company.role}</h3>
                        <div className="duration">
                            <p>{company.startDate}</p>
                            <p>{company.endDate}</p>
                        </div>
                        <p>{company.description}</p>
                    </div>
                ))}
            </div>
            <div className="education">
                {resumeData.education && resumeData.education.map((institution) => (
                    <div className="item" key={institution.institution}>
                        <h2>{institution.institution}</h2>
                        <h3>{institution.degree}</h3>
                        <div className="duration">
                            <p>{institution.startDate}</p>
                            <p>{institution.endDate}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="custom_sections">
                {resumeData.customSections && resumeData.customSections.map((item) => (
                    <div className="item" key={item.header}>
                        <h2>{item.header}</h2>
                        <h3>{item.description}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}

