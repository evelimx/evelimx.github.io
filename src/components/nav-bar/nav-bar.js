import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg';
import { ReactComponent as GithubIcon } from './icons/github.svg';
import { ReactComponent as EmailIcon } from './icons/email.svg';

const Navbar = ( {page="index"} ) => {
    return (
        <nav>
            <div className="navigation">
                <Link to="/" className="name-brand">
                    Eve Mingxiao Li
                </Link>
                <div className="menu">
                    
                </div>
            </div>
            <div className="info">
                <div className="github">
                    <a href="https://github.com/evelimx" target="_blank">
                        <GithubIcon/>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/mingxiao-eve-li-769032142/" target="_blank">
                        <LinkedInIcon />
                    </a>
                </div>
                <div className="email">
                    <a href="mailto: eveli@cs.toronto.edu" target="_blank">
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
