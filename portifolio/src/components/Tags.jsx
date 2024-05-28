import React, { useState } from "react";

const Tags = ({ name, switchTag }) => {
    const [active, setActive] = useState(false);
    const clickTag = () => {
        setActive((prevActive) => !prevActive);
        switchTag(name);
    };

    return (
        <div className={`tag ${active ? 'active' : ''}`} onClick={clickTag}>
            {name}
        </div>
    );
}

export default Tags;