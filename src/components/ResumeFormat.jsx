import { React, useEffect, useState } from 'react'
import Button from './Button';
import ResumeModal from './ResumeModal';

//an individual resume grid item
export const ResumeFormat = (resume) => {

  const [resumeData, setResumeData] = useState(resume.resume);

  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {/*preview with header info*/}
      <div className="w-64 h-64 bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between items-start">
        <div>
          <h1 className="text-xl font-bold">{resumeData.title}</h1>
          <p className="text-sm text-gray-600">{resumeData.description}</p>
        </div>
        <Button onClick={() => { setIsOpen(true) }}>
          Expand
        </Button>
      </div>

      {/*detailed information appears as a pop-up when the expand button is clicked*/}
      {isOpen && (
        <ResumeModal resumeData={resumeData} setIsOpen={setIsOpen}/>
      )}
    </>
  );
}

