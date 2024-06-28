import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobHeader from './components/JobHeader';
import JobDetails from './components/JobDetails';
import CompanyInfo from './components/CompanyInfo';
import Sidebar from './components/Sidebar';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  const [view, setView] = useState('job-preview');

  return (
    <div className="app-container">
      <JobHeader />
      <Navbar setView={setView} />
      <div className="main-content">
        {view === 'job-preview' && (
          <>
            <div className="left-column">
              <JobDetails />
              <CompanyInfo />
            </div>
            <Sidebar />
          </>
        )}
        {view === 'applicants' && (
          <div className="left-column">
            <JobDetails />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;



