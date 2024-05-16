import React from "react";

const TextInput = ({label, value, onChange, required}) => (
    <div>
        <label>{label}</label>
            <input 
             type="text"
             value={value}
             onChange={onChange}
             required={required}
            />
        
    </div>
);

export default TextInput;