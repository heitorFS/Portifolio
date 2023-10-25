import React from "react";

const RotatingText = ({ anim, children }) => {
    return (
        <div className={`text ${anim}`}>
            {children}
        </div>
    )
};

export default RotatingText;