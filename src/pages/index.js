import React from "react";
import Navbar from "../components/nav-bar/nav-bar";
import About from "../components/about/about"
import Research from "../components/research/research";
import Work from "../components/work/work"

const MainPage = () => {
    return (
        <div className="page-container">
            <Navbar page="index"/>
            <div className="body-part">
                <About />
                <div id="research">
                    <Research />
                </div>
                <div id="work">
                    <Work />
                </div>
            </div>
        </div>
    );
}

export default MainPage;