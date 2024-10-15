import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DashBoardContext = createContext();
// const  [status,setStatus]=useState(true)

export const DashBoardProvider = ({ children }) => {
    const [admins, setAdmins] = useState([]);
    const [totalSale, setTotalSale] = useState(0); /* it have all users and all users dat */
    const [users, setUsers] = useState(0);
    const[sellingProduct,setSellingProduct]=useState({})
    console.log("hello render");
    const navigate = useNavigate();
    const handleAdminLogout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    };
   
    // <=================================== best selling =======================================>
    useEffect(() => {
        const bestSelling = async () => {
            const productObject = {};
            try {
                const response = await axios.get(`http://localhost:5001/users`);
                const all = response.data;
                const users = all.filter((x) => x.role !== "admin");
                console.log(users,"users");
                users.forEach((user) => {
                    console.log(user,"single User");
                    user.order.forEach((ord) => {
                        console.log(ord,"songle order");
                        ord.items.forEach((item) => {
                            console.log(item,"single item");
                            if (productObject[item.name]) {
                                console.log(productObject,"hello nn");
                                productObject[item.name] += item.quantity;
                            } else {
                                // console.log("not nnn");
                                productObject[item.name] = item.quantity;
                                console.log(productObject,"ths ans");
                            }
                        });
                    });
                });
            } catch (err) {
                console.log(err);
            }
            console.log(productObject,"product object");
            setSellingProduct(productObject)
        };
        bestSelling();
    },[]);
console.log(sellingProduct,"h");
    // <=================================== best selling =======================================>
    useEffect(() => {
        const details = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/users`);
                const all = response.data;
                // const admins=all.filter(user=>user==user.role)
                const admins = all.filter((x) => x.role == "admin");
                setAdmins(admins);
                const users = all.filter((user) => user.order && Array.isArray(user.order));
                // {console.log(users.length,"user length")}
                setUsers(users.length);
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
                users,
                sellingProduct
            }}
        >
            {children}
        </DashBoardContext.Provider>
    );
};
