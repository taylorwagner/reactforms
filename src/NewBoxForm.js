import React, { useState } from "react";
import uuid from "uuid/v4";

const NewBoxForm = () => {
    const initialState = {
        backgroundColor: "",
        width: "",
        height: ""
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData(initialState);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="backgroundColor">Background Color of Box</label>
                    <input
                        id="backgroundColor"
                        type="text"
                        name="backgroundColor"
                        placeholder="background color of box"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width of Box</label>
                    <input
                        type="text"
                        placeholder="width of box"
                        name="width"
                        id="width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height of Box</label>
                    <input
                        type="text"
                        placeholder="height of box"
                        name="height"
                        id="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>

                <button id="newBoxButton">Create desired box!</button>
            </form>
        </>
    )
}

export default NewBoxForm;