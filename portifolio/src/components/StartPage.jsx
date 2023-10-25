import React from "react";
import Header from "./Header";

const StartPage = () => {
    return (
        <div className="start-page">
            <div className="start-page-background">
                <img src={require('../media/StartBackground.jpeg')} alt="Background" />
            </div>
            <div className="start-page-content">
                <Header />
                <div data-animation="animate__slideInLeft" className="start-page-title animate__animated animate__faster">
                    Heitor Silva
                </div>
            </div>
        </div>
    );
};

export default StartPage;