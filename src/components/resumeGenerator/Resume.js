import React from 'react';
import "./resume.css"
import Navigation1 from '../components/Navigation1';

function Resume() {
    return (
        <div>
            <Navigation1 />
            <iframe src="/Resume.html" title="Resume" className="fullscreen" />
        </div>
    );
}

export default Resume;