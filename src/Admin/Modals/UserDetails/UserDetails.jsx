import { CartContext } from "../../../context/CartContext";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./UserDetails.css";
import React, { useContext } from "react";

const UserDetails = () => {
    const { selectedUser, closeUserModal ,handleOrderDetails } = useContext(CartContext);

    return (
        <div className="user-details-modal-main-div">
            <div className="user-detail-moal-card">
                <button className="close-button-use-details" onClick={closeUserModal}>x</button>
                <img className="user-detail-modal-img" src="/assets/extra/userProfile.jpg" alt="User Profile" />
                {console.log(selectedUser, "checking")}
                <div className="user-info">
                    <div>ID: {selectedUser.id}</div>
                    <div>Name: {selectedUser.name}</div>
                    <div>Email: {selectedUser.email}</div>

                </div>

                {/* Order Table Section */}
                <table className="user-order-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Total Items</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedUser.order.map((x, ind) => (
                            <tr onClick={()=>handleOrderDetails(x)}  className="user-order-data-head" key={ind}>
                                <td className="user-order-modal-id">{x.orderId}</td>
                                <td className="user-order-modal-quantity">{x.items.length}</td>
                                <td className="user-order-modal-total-amount">{x.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default UserDetails;
