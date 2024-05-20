import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

type FormData = {
    name: string;
    phoneNumber: string;
    email: string;
};
const ContactForm = () => {

    const [text, setText ] = React.useState<String>('');
    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        phoneNumber: '',
        email: ''
    });

    // Function to handle changes in input fields
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        // e.preventDefault(); // Prevents the default form submit action

        // Check if any field is empty
        if (!formData.name.trim() || !formData.phoneNumber.trim() || !formData.email.trim() || !text.trim()) {
            alert("Please fill in all fields.");
            return;
        }
        let reqBody = {
            name: formData.name,
            email: formData.email,
            phone: formData.phoneNumber,
            message: text,
            task: 'CONTACTUS',
        }
        try {
            const response = await axios.post('/api/send-mail', reqBody);
            console.log('Data posted successfully:', response.data);
            setFormData({
                name: '',
                phoneNumber: '',
                email: '',
            });

            setText('');
            // Optionally clear form or handle success
        } catch (error) {
            console.error('Error posting data:', error);
            // Optionally handle error
        }
    };

    return (
        <div className="max-w-[870px] mx-auto">
            <form action="#">
                <div className="grid grid-cols-2 gap-base">
                    <div className="lg:col-span-1 col-span-2">
                        
                        <input 
                            type="text"
                            className="input_style__primary"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                    <input type="number"
                                    className="input_style__primary"
                                    value={formData.phoneNumber}
                                    name='phoneNumber'
                                    onChange={handleChange}
                                    placeholder="Phone Number" />
                       
                    </div>
                    <div className="col-span-2">
                    <input
                                    className="input_style__primary"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                />
                    </div>
                    <div className="col-span-2">
                        <textarea onChange={(e) => setText(e.target.value)} cols={30} rows={6} className="input_style__primary" placeholder="Your Message..." defaultValue={""} />
                    </div>
                    <div className="col-span-2">
                        <button aria-label="contact submit" type="submit" className="btn_primary__v1" onClick={handleSubmit}>
                            Send
                            <i className="bi bi-chevron-right" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm