import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DashBoardContext = createContext();
// const  [status,setStatus]=useState(true)

export const DashBoardProvider = ({ children }) => {
    
    const [admins, setAdmins] = useState([]);
    const [totalSale, setTotalSale] = useState(0); /* it have all users and all users dat */
    console.log("hello render");
    const navigate=useNavigate();
    const handleAdminLogout=()=>{
        sessionStorage.clear();
        localStorage.clear();
        navigate("/")
    }
    useEffect(() => {
        const details = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/users`);
                const all = response.data;
                // const admins=all.filter(user=>user==user.role)
                const admins = all.filter((x) => x.role == "admin");
                setAdmins(admins);
                const users = all.filter((user) => user.order && Array.isArray(user.order));
                // console.log(users,"checking");
                const totalSale = users.reduce((acc, user) => {
                    return (
                        acc +
                        user.order.reduce((accs, sorder) => {
                            return accs + parseFloat(sorder.totalPrice);
                        }, 0)
                    );
                }, 0);
                //    console.log(totalSale,"final");
                setTotalSale(totalSale);
            } catch (err) {
                console.log(err);
            }
        };
        details();
    }, []);

    return (
        <DashBoardContext.Provider
            value={{
                totalSale,
                admins,
                handleAdminLogout,
            }}
        >
            {children}
        </DashBoardContext.Provider>
    );
};
