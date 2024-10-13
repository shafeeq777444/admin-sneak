// UpiModal.js
import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';


const UpiModal = ({ isOpen, onClose, onSubmit }) => {
    const {clearCartItems,upiId, setUpiId, ordered}=useContext(CartContext)
   

    const handleSubmit = () => {
            ordered();
            onClose();
            clearCartItems();
        
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Enter UPI ID</h2>
                <input
                    type="text"
                    placeholder="Your UPI ID"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <div className="flex justify-between">
                    <button onClick={onClose} className="bg-gray-300 text-black rounded px-4 py-2">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-600 text-white rounded px-4 py-2">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default UpiModal;
