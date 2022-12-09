import React from "react";
import ResearchProjects from '../../data/research.json';
import ResearchPreview from './research_preview.js';

const Research = () => (
    <div className="research-section">
        <div className="section-title">
            Research Publications
        </div>
        <div>
            {ResearchProjects.map((research) =>
                <ResearchPreview key={research.id} research={research}
                />)}
        </div>
    </div>
);

export default Research;