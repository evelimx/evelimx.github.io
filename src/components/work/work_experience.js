import React from "react";

const Work = ({work}) => (
    <div className="work_preview">
        <li>
        <div className="descriptions">
            <div>
                <div className="position">
                    <span className="title">{work.title}</span> at {work.company} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {work.time}
                </div>
                <div className="location">
                    <div>{work.location}</div>
                </div>
            </div>
        </div>
        </li>
    </div>
);

export default Work;