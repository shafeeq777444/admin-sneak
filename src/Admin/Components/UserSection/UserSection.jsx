import React, { useContext, useEffect, useState } from "react";
import "./UserSection.css";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";
import UserDetails from "../../Modals/UserDetails/UserDetails";
import OrderDetails from "../../Modals/OrderDetails/OrderDetails";

const UserSection = () => {
    const { handleUserProfile, showUserDetails,showOrderDetails } = useContext(CartContext);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("http://localhost:5001/users");
            const users = response.data.filter((user) => user.role !== "admin");
            setUsersData(users);
        };
        fetchUsers();
    }, []);

    return (
        <div className="user-section">
            <table className="user-table">
                <thead>
                    <tr className="table-heading">
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user, index) => (
                        <tr key={index} className="user-row" onClick={() => handleUserProfile(user)}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showUserDetails && <UserDetails />}
            {showOrderDetails && <OrderDetails/>}
        </div>
    );
};

export default UserSection;
