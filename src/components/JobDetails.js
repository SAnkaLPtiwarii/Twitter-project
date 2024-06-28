import React from 'react';
import '../App.css';
import figmaIcon from '../assets/figma.png';
import illustratorIcon from '../assets/AI.png';
import xdIcon from '../assets/xd.png';

const JobDetails = () => {
    return (
        <div className="job-details">
            <h3>Skills Required</h3>
            <div className="skills-icons">
                <div className="icon-with-text">
                    <img src={figmaIcon} alt="Figma" />
                    <span>Figma</span>
                </div>
                <div className="icon-with-text">
                    <img src={illustratorIcon} alt="Adobe Illustrator" />
                    <span>Adobe Illustrator</span>
                </div>
                <div className="icon-with-text">
                    <img src={xdIcon} alt="Adobe XD" />
                    <span>Adobe XD</span>
                </div>
            </div>

            {<ol>
                <li>Handle the UI/UX research design.</li>
                <li>Work on researching the latest web applications designs & trends.</li>
                <li>Work on conceptualizing and visualizing.</li>
                <li>Work on creating graphics content and other graphic related works.</li>
            </ol>}
        </div>
    );
};

export default JobDetails;


