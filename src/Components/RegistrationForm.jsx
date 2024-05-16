import React, { useState } from "react";
import TextInput from './TextInput';
import CheckBox from './Checkbox';
import RadioButton from "./RadioButton";

function RegisterForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [sendMarketing, setSendMarketing] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fullName.trim() === '' || email.trim() === '') {
            alert('Full Name and Email are required!');
            return;
        }
        console.log({fullName, email, gender, sendMarketing});
        setSubmitted(true);
    };

    return (
        <div className="registration-form">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
            <div className="input-fields">   
                <TextInput 
                    label='Full Name:'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <TextInput
                    label='Email:'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div> 
                <div className="radio-buttons">
                    <label>Gender:</label>
                    <RadioButton 
                        label='Female'
                        value='female'
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <RadioButton 
                        label='Male'
                        value='male'
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <RadioButton 
                        label='N/A'
                        value='N/A'
                        checked={gender === 'N/A'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>
                <CheckBox 
                    label='Send Marketing'
                    checked={sendMarketing}
                    onChange={(e) => setSendMarketing(e.target.checked)}
                />
                <button type="submit" className="submit-button">Register</button>
            </form>
            {submitted && (
                <div>
                    <h3>Thank you for registering with us!</h3>
                    <p>Full Name: {fullName}</p>
                    <p>Email: {email}</p>
                    <p>Gender: {gender}</p>
                    <p>Send Marketing: {sendMarketing ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}

export default RegisterForm;