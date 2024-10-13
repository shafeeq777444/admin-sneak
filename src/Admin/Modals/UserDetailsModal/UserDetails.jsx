import { CartContext } from "../../../context/CartContext";
import "./UserDetails.css";
import React, { useContext } from "react";

const UserDetails = () => {
    const { selectedUser, closeUserModal } = useContext(CartContext);
    return (
        <div className="user-details-modal-main-div">
           
            <div className="user-detail-moal-card">
            <button className="close-button-use-details" onClick={closeUserModal}>x</button>
                <img className="user-detail-modal-img" src="/assets/extra/userProfile.jpg" />
                {console.log(selectedUser,"checking")}
                <div>{selectedUser.id}</div>
                <div>{selectedUser.name}</div>
                <div>{selectedUser.email}</div>
                <div>Total Orders : {selectedUser.order.length}</div>
                <div>
                    {selectedUser.order.map((x, ind) => (
                        <div key={ind}>
                            <div className="user-order-modal-id">{x.orderId}</div>
                            <div className="user-order-modal-quantity">total Itmes {x.items.length}</div>
                            <div className="user-order-modal-total-amount">total amount {x.totalPrice}</div>
                        </div>
                    ))}
                </div>
                
            </div>
           
        </div>
    );
};

export default UserDetails;
