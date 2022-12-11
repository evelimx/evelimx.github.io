import React from "react";
import WorkExperience from '../../data/work.json';
import WorkPreview from './work_experience.js';

const Work = () => (
    <div className="work-section">
        <div className="section-title">
            Work Experience
        </div>
        <div>
            <ul>
            {WorkExperience.map((work) =>
                <WorkPreview key={work.id} work={work}
                />)}
                
            </ul>
        </div>
    </div>
);

export default Work;