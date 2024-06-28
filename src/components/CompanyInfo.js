import React from 'react';
import '../App.css';

const CompanyInfo = () => {
    return (
        <div className="company-info">
            <h3>Atlassian</h3>
            <div className="company-details">
                <div className="company-left">
                    <p>Company size: 1k - 2k Employees</p>
                    <p>Type: Private</p>
                    <p>Sector: Information Technology, Infrastructure</p>
                </div>
                <div className="company-right">
                    <p>Funding: Bootstrapped</p>
                    <p>Founded in: 2019</p>
                    <p>Founded by: Scott Farquhar, Mike Cannon-Brookes</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;



