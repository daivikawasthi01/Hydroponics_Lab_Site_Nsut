import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Message Sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#4A5D23] p-4">
            <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-[#4A5D23]">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-[#4A5D23] rounded-md focus:ring-2 focus:ring-[#4A5D23]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-[#4A5D23]">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-[#4A5D23] rounded-md focus:ring-2 focus:ring-[#4A5D23]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-[#4A5D23]">Message</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-[#4A5D23] rounded-md focus:ring-2 focus:ring-[#4A5D23]"
                        rows={5}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#4A5D23] text-white py-2 rounded-md hover:bg-black"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;