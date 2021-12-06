import React from "react";

const Box = ({ backgroundColor, width, height }) => {
    const handleClick = () => {
        
    }

    return (
        <div backgroundColor={backgroundColor} width={width} height={height}>
            <button onClick={handleClick}>X</button>
        </div>
    )
}

export default Box;