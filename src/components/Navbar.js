import React from 'react';
import '../App.css';

const Navbar = ({ setView }) => {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => setView('job-preview')}><i className="fas fa-briefcase"></i> Jobs</li>
                <li onClick={() => setView('applicants')}><i className="fas fa-users"></i> Applicants</li>
                <li onClick={() => setView('match')}><i className="fas fa-handshake"></i> Match</li>
                <li onClick={() => setView('messages')}><i className="fas fa-envelope"></i> Messages</li>
                <li onClick={() => setView('payments')}><i className="fas fa-wallet"></i> Payments</li>
            </ul>
        </nav>
    );
};

export default Navbar;







