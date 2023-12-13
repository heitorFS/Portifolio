import React from "react";

const Carousel = ({ children, id }) => {
    return (
        <div id={id} className="carousel">
            {children}
        </div>
    )
};

export default Carousel;