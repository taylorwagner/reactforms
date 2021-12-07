import React, { useState } from "react";
import uuid from "uuid/v4";

const NewBoxForm = ({ createBox }) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
      });
    
      const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };
    
      const gatherInput = evt => {
        evt.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
      };

    return (
        <>
            <form onSubmit={gatherInput}>
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