import React from "react";

const Work = ({work}) => (
    <div className="work_preview">
        <div className="descriptions">
            <div>
                <div className="position">
                    <span className="title">{work.title}</span>
                    <span className="company"> @ {work.company}</span> 
                </div>
                <div className="time">
                    <span>{work.time}</span>
                </div>
                <div className="location">
                    <div>{work.location}</div>
                </div>
                <div className="details">
                    <ul>
                        {work.details.map((job, i)=> (
                            <li key={i}>
                                {job}
                                { i==0 && work.prof ?
                                    <a href={work.link} target="_blank">
                                    {work.prof}
                                    </a> :""
                                }
                                { work.prof2?
                                    <text> and </text>:""
                                }
                                { work.prof2 ?
                                    <a href={work.link2} target="_blank">
                                    {work.prof2}
                                    </a> :""
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Work;