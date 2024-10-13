import { CartContext } from "../../../context/CartContext";
import "./OrderDetails.css";
import React, { useContext } from "react";

const OrderDetails = () => {
    const { handleOrderClose, selectedOrder } = useContext(CartContext);

    return (
        <div className="order-details-main-div">
            {console.log(selectedOrder, "orderDetaila-section")}

            {/* Order Header Section */}
            <div className="invoice-header">
                <h2 className="invoice-text">Invoice</h2>
                <div className="selected-order-id">
                    <strong>Order ID:</strong> {selectedOrder.orderId}
                </div>
            </div>

            {/* Order Details Table */}
            <table className="order-details-table">
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Gender</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedOrder.items.map((item, ind) => (
                        <tr key={ind}>
                            <td>{item.productCode}</td>
                            <td>{item.name}</td>
                            <td>{item.sex}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Total Price and Other Info */}
            <div className="order-summary">
                <div className="order-total-price">
                    <strong>Total Price: </strong>{selectedOrder.totalPrice}
                </div>
                <div className="order-phoneNumber">
                    <strong>Phone Number: </strong>{selectedOrder.phoneNumber}
                </div>
                <div className="order-address">
                    <strong>Address: </strong>{selectedOrder.address}
                </div>
                <div className="order-upi-id">
                    <strong>UPI ID: </strong>{selectedOrder.upiId}
                </div>
            </div>

            <button className="close-order-button" onClick={handleOrderClose}>Close</button>
        </div>
    );
};

export default OrderDetails;
