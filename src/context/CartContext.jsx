import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import UserDetails from "../Admin/Modals/UserDetails/UserDetails";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0);
    const user = localStorage.getItem("user");
    const userData = user ? JSON.parse(user) : null;
    const userId = userData ? userData.id : null;
    // const userStatus=userData? userData.status:null;
    const [cartItems, setCartItems] = useState([]);
    const [showUserDetails, setShowUserDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userOrderDetails, seUserOrderDetails] = useState(null);
    const [upiId, setUpiId] = useState("");
    const [showOrderDetails,setShowOrderDetails]=useState(false);
    const [selectedOrder,setSelectedOrder]=useState(null)
    

    // // <=========== Current Date, day, and time ========================================>
    //     const fetchDate=()=>{
    const currentDate = new Date();
    // const dateOptions = { 
    //     day: '2-digit', 
    //     month: '2-digit', 
    //     year: 'numeric', 
    //     weekday: 'long' 
    // };
    
    // // Options for time formatting
    // const timeOptions = { 
    //     hour: '2-digit', 
    //     minute: '2-digit', 
    //     hour12: false 
    // };
    
    // // Format date and time
    // const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);
    // const formattedTime = currentDate.toLocaleTimeString('en-GB', timeOptions);
    // const finalOutput = `${formattedDate} ${formattedTime}`;
    // return finalOutput
    //     }
// <=========== new ========================================>
    const toggleStatus= async (selectedUser)=>{
const newStatus=selectedUser.status=="active"?"deactive":"active";
const response =await axios.patch(`http://localhost:5001/users/${selectedUser.id}`,{status:newStatus})
setSelectedUser(pre=> ({...pre,status:newStatus}))
    }
    

    const handleOrderClose=()=>{
        setShowOrderDetails(false);
    }
    const handleOrderDetails=(order)=>{
        setShowUserDetails(false);
        setSelectedOrder(order);
        setShowOrderDetails(true);

    }
    console.log(selectedOrder,"checking order");

    // <=========== after Upi payment products and details saved to order array of db =========>

    const orderedDetails = { ...userOrderDetails, upiId, orderId: Date.now(), items: [...cartItems],totalPrice:quantity.toFixed(2),orderDate:currentDate.toLocaleDateString('en-GB'),orderDay:currentDate.toLocaleDateString('en-US', { weekday: 'long' }),orderTime:currentDate.toLocaleTimeString()};
    console.log(orderedDetails, "order details");
    const ordered = async () => {
        try {
            const responsepre = await axios.get(`http://localhost:5001/users/${userId}`);
            const oldOrder = responsepre.data.order || [];
            console.log(oldOrder);

            const response = await axios.patch(`http://localhost:5001/users/${userId}`, {
                order: [...oldOrder, orderedDetails],
            });
            console.log(response.data, "putting");
        } catch (err) {
            console.log(err);
        }}
 
    // <=================================== cart-methods =======================================>

    // <=============== Cart Total Price =======================================>
    useEffect(() => {
        const totalPrice = (cartItems || []).reduce((acc, item) => acc + item.price * item.quantity, 0);
        setQuantity(totalPrice);
    }, [cartItems]);

    // <=========== cart add,update,delete and clear ========================>

    //<======= Adding...=========>
    const addToCart = async (product) => {
        const updatedCartItems = [...cartItems];
        const existedItem = updatedCartItems.find((item) => item.productCode === product.productCode);
        if (existedItem) {
            existedItem.quantity += 1;
        } else {
            if (userData) {
                updatedCartItems.push({ ...product, quantity: 1 });
            } else {
                alert("Please sign up");
            }
        }
        setCartItems(updatedCartItems);
        await updateCartInDb(updatedCartItems);
    };

    //<======= Updating...=========>
    const updateCartItemQuantity = async (product, value) => {
        const updatedCartItems = cartItems.map((item) =>
            item.productCode == product.productCode ? { ...item, quantity: Math.max(item.quantity + value, 1) } : item
        );
        setCartItems(updatedCartItems);
        await updateCartInDb(updatedCartItems);
    };

    //<======= Deleting...=========>
    const removeCartItem = async (product) => {
        const updatedCartItems = cartItems.filter((item) => item.productCode !== product.productCode);
        setCartItems(updatedCartItems);
        await updateCartInDb(updatedCartItems);
    };
    //<======= clearing...=========>
    const clearCartItems = () => {
        setCartItems([]);
        updateCartInDb([])

    };

    //  // <====================================== Axios =======================================>

    // <======= Cart Product Updating in Db with Patch method ===================>
    const updateCartInDb = async (updateCart) => {
        if (user) {
            try {
                await axios.patch(`http://localhost:5001/users/${userId}`, { cart: updateCart });
            } catch (error) {
                console.log(error);
            }
        }
    };
    // <======= Fetching user Cart products from Db==============================>
    useEffect(() => {
        if (user) {
            async function fetching() {
                const response = await axios.get(`http://localhost:5001/users/${userId}`);
                setCartItems(
                    response.data.cart || []
                ); /* if cart is not occured or null or defined, the cartItems is default occcur empty array */
            }
            fetching();
        }
    }, [userId]);

    //<====================== admin-userProfile-section-methods ==================>
    const handleUserProfile = (user) => {
        setShowUserDetails(true);
        setSelectedUser(user);
    };
    const closeUserModal = () => {
        setShowUserDetails(false);
    };
    // <============================= Providing...through provider of Context ==================>
    return (
        <CartContext.Provider
            value={{
                // <=============== cart-providing... ===============>
                quantity,
                addToCart,
                clearCartItems,
                updateCartItemQuantity,
                removeCartItem,
                cartItems,
                userData,
                userId,
                // <=== admin-userProfile-section-providing... =======>
                handleUserProfile,
                setShowUserDetails,
                showUserDetails,
                selectedUser,
                setSelectedUser,
                closeUserModal,
                //<=== orders details-providing... =======>
                seUserOrderDetails,
                userOrderDetails,
                ordered,
                upiId,
                setUpiId,
                clearCartItems,
                showOrderDetails,
                handleOrderDetails,
                handleOrderClose,
                selectedOrder,
                toggleStatus

            }}
        >
            {children}
        </CartContext.Provider>
    );
};
