import { React, useEffect,useState } from 'react'
import Button from './Button';

//an individual resume grid item
export const ResumeFormat = (resume) => {

    const [resumeData, setResumeData] = useState(resume.resume);

    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*preview with header info*/}
      <div className="w-64 h-64 bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between items-start">
        <div>
          <h1 className="text-xl font-bold">{resumeData.title}</h1>
          <p className="text-sm text-gray-600">{resumeData.description}</p>
        </div>
        <Button onClick={()=>{setIsOpen(true)}}>
            Expand
        </Button>
      </div>

      {/*detailed information appears as a pop-up when the expand button is clicked*/}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              X
            </button>

            <div className="header mb-6">
              <h1 className="text-2xl font-bold">{resumeData.title}</h1>
              <p className="text-gray-700">{resumeData.description}</p>
              <p className="text-gray-500">{resumeData.summary}</p>
            </div>

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

            <div className="custom_sections">
              <h2 className="text-xl font-semibold mb-2">Other</h2>
              {resumeData.customSections?.map((item) => (
                <div className="mb-4" key={item.header}>
                  <h3 className="font-semibold">{item.header}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

