import React from "react";
import Navbar from "../components/nav-bar/nav-bar";
import About from "../components/about/about"

const MainPage = () => {
    return (
        <div className="page-container">
            <Navbar page="index"/>
            <div className="body-part">
                <About />
            </div>
        </div>
    );
}

export default MainPage;