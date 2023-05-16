import React from "react";
import '../css/Main.css';

const Main = ({children}) => {
    return (
        <div className="main">
            {children}
        </div>
    );
};

export default Main;