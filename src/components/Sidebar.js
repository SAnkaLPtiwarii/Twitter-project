import React from 'react';
import '../App.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <button className="delete-job">Delete job</button>
            <button className="edit-job">Edit job</button>
            <ul>
                <li>Applicants: 400</li>
                <li>Matches: 100</li>
                <li>Messages: 147</li>
                <li>Views: 800</li>
            </ul>
        </div>
    );
}

export default Sidebar;
