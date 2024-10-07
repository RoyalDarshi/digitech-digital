// PayFee.js
import React from 'react';
import './PayFee.css';

const PayFee = () => {
    return (
        <div className="pay-fee-container">
            <h1 className="pay-fee-title">Pay Your Course Fee</h1>
            <form className="pay-fee-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Course</label>
                    <select required>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="SEO">SEO</option>
                        <option value="Web Development">Web Development</option>
                    </select>
                </div>
                <button type="submit" className="pay-fee-btn">Pay Now</button>
            </form>
        </div>
    );
};

export default PayFee;
