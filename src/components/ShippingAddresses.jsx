// ShippingAddresses.jsx
import React, { useState } from 'react';
import { useUser } from '../UserContext';
import addAddress from '../api/addAddress'; // Adjust path as needed

const ShippingAddresses = ({ shipAddresses }) => {
    const { user } = useUser();
    const [newAddress, setNewAddress] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [newRecipientName, setNewRecipientName] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleNewAddressChange = (event) => {
        setNewAddress(event.target.value);
    };

    const handleNewPhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value);
    };

    const handleNewRecipientNameChange = (event) => {
        setNewRecipientName(event.target.value);
    };

    const addNewAddress = async () => {
        if (newAddress.trim() === '' || newPhoneNumber.trim() === '' || newRecipientName.trim() === '') {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const token = localStorage.getItem('token');
        const userId = user ? user.userId : '';

        try {
            const updatedUser = await addAddress(token, userId, {
                address: newAddress,
                phoneNumber: newPhoneNumber,
                recipientName: newRecipientName
            });

            console.log('Updated user:', updatedUser);
            // Update shipAddresses state or trigger a re-fetch if needed
            setNewAddress('');
            setNewPhoneNumber('');
            setNewRecipientName('');
            setIsEditing(false);
            setErrorMessage('');
        } catch (error) {
            console.error('Error adding new address:', error);
            setErrorMessage('Error adding new address');
        }
    };

    const toggleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="myaccount-content">
            <h5>Địa chỉ giao hàng</h5>
            {shipAddresses.length > 0 ? (
                shipAddresses.map((address, index) => (
                    <div key={address.shipAddressId} className="address-item">
                        <p><strong>Địa chỉ:</strong> {address.address}</p>
                        <button className="btn btn-link" onClick={() => toggleExpand(index)}>
                            Xem chi tiết
                        </button>
                        {expandedIndex === index && (
                            <div className="expanded-info">
                                <p><strong>Địa chỉ:</strong> {address.address}</p>
                                <p><strong>Số điện thoại:</strong> {address.phoneNumber}</p>
                                <p><strong>Người nhận:</strong> {address.recipientName}</p>
                                
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>Chưa có địa chỉ giao hàng.</p>
            )}

            <button className="btn btn-sqr" onClick={() => setIsEditing(true)}>
                <i className="fa fa-pencil"></i> Chỉnh sửa
            </button>

            {isEditing && (
                <div className="edit-form">
                    <input
                        type="text"
                        value={newAddress}
                        onChange={handleNewAddressChange}
                        placeholder="Địa chỉ mới"
                    />
                    <input
                        type="text"
                        value={newPhoneNumber}
                        onChange={handleNewPhoneNumberChange}
                        placeholder="Số điện thoại mới"
                    />
                    <input
                        type="text"
                        value={newRecipientName}
                        onChange={handleNewRecipientNameChange}
                        placeholder="Người nhận mới"
                    />
                    <button className="btn btn-sqr" onClick={addNewAddress}>
                        <i className="fa fa-plus"></i> Thêm địa chỉ
                    </button>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ShippingAddresses;
