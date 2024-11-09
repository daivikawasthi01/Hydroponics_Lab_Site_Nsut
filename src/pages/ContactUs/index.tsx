import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState<null | string>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionStatus('Message Sent Successfully!');
        setTimeout(() => setSubmissionStatus(null), 5000); // Clears the message after 5 seconds
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
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
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
                        placeholder="Type your message here"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#6CA966] text-white py-2 rounded-md hover:bg-black"
                >
                    Send Message
                </button>
                {submissionStatus && <p className="text-center text-green-600 my-4">{submissionStatus}</p>}
            </form>
            {/* Contact Information */}
            <div className="text-center text-white mt-6">
                <p>Phone: (123) 456-7890</p>
                <p>Email: hydroponics.lab@college.edu</p>
                <p>Address: 123 Greenhouse Lane, College Campus</p>
            </div>
        </div>
    );
};

export default ContactUs;
