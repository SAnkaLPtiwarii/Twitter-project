import React from 'react';
import '../App.css';

const JobHeader = () => {
    return (
        <header className="job-header">
            <div className="top-header">
                <h2>Jobs</h2>
                <div className="notification-bell">
                    <i className="fas fa-bell"></i>
                </div>
            </div>
            <div className="job-title">
                <h1>Senior Product Designer</h1>
                <p className="posted-info">Posted 2 days ago • <span className="status-open">Open</span></p>
                <p className="location-salary">Delaware, USA • $300k-$400k</p>
            </div>
        </header>
    );
};

export default JobHeader;





