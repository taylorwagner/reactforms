import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setNewBoxes] = useState([]);
    const add = boxObj => {
        setNewBoxes(boxes => [...boxes, boxObj]);
    };
    const remove = id => {
        setNewBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComp = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            handleRemove={remove}
            backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <>
            <NewBoxForm createBox={add} />
            {boxComp}
        </>
    );
}

export default BoxList;