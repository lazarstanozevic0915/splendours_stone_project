// pages/index.tsx
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        stoneType: '',
        specialRequests: '',
    });

    const [message, setMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/send-email', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(`Failed to send booking. Please try again.${error}`);
        }
    };

    return (
        <div>
            <h1>Booking Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Date and Time:</label>
                <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />

                <label>Stone Type:</label>
                <input type="text" name="stoneType" value={formData.stoneType} onChange={handleChange} required />

                <label>Special Requests:</label>
                <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>

                <button type="submit">Book Now</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;
