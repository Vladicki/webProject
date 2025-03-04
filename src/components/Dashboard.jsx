import React, { useState } from 'react';

const Dashboard = ()=>{

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="createResume">
            <h2>Create a resume</h2>
                <form>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="description" />
                    </div>
                    <div>
                        <label>Summary</label>
                        <textarea name="summary" />
                    </div>
                    <h3>Experience</h3>
                    <div>
                        <input type="text" placeholder="Company" />
                        <input type="text" placeholder="Role" />
                        <input type="date" placeholder="Start Date" />
                        <input type="date" placeholder="End Date" />
                        <textarea placeholder="Description" />
                    </div>
                    <button type="button">Add Experience</button>
                    <h3>Education</h3>
                    <div>
                        <input type="text" placeholder="Institution" />
                        <input type="text" placeholder="Degree" />
                        <input type="date" placeholder="Start Date" />
                        <input type="date" placeholder="End Date" />
                    </div>
                    <button type="button">Add Education</button>
                    <h3>Custom Section 1</h3>
                    <div>
                        <input type="text" placeholder="Header" />
                        <textarea placeholder="Description" />
                    </div>
                    <h3>Custom Section 2</h3>
                    <div>
                        <input type="text" placeholder="Header" />
                        <textarea placeholder="Description" />
                    </div>
                    <h3>Custom Section 3</h3>
                    <div>
                        <input type="text" placeholder="Header" />
                        <textarea placeholder="Description" />
                    </div>
                    <button>Create</button>
                </form>

            </div>
            
        </div>
    );
    
}

export default Dashboard;