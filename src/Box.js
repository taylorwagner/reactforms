import React from "react";

const Box = ({ id, handleRemove, backgroundColor = "blue", width = 5, height = 5 }) => {
    const remove = () => handleRemove(id);

    return (
        <div>
            <div style={{backgroundColor, width:`${width}em`, height:`${height}em`}}/>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;