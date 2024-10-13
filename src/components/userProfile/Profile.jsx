import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ handleProfile }) => {
    const [render, setRender] = useState(false);
    const { userData } = useContext(CartContext);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    // Function to hide the popup
    const hidePopup = () => {
        setIsVisible(false);
    };
    const handleLogout = () => {
        setRender(!render);
        localStorage.clear();
        navigate("/login");
        window.location.reload();
    };
    /* study */
    useEffect(() => {
        const handleScroll = () => {
            hidePopup();
        };

        // const handleTouchStart = () => {
            // hidePopup();
        // };

        // Adding event listeners
        window.addEventListener('scroll', handleScroll);
        // window.addEventListener('touchstart', handleTouchStart);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);
    console.log(userData, "hello");
    if (userData && isVisible) {
        return (
            <div className="profile-main md:z-50 ">
                <div className="profile-inner-main ">
                <button className="profile-close  white" onClick={handleProfile}>X</button>
                    <img className="profile-img" src="/assets/extra/userProfile.jpg"></img>
                    <div className="profile-texts-div">
                        <p className="profile-id">User Id : {userData?.id}</p>
                        <p className="text-xs Profile-name">{userData?.name}</p>
                        <p >{userData?.email}</p></div>
                        <button className="profile-button" onClick={handleLogout}>
                            Logout
                        </button>
                        
                </div>
                
            </div>
        );
    } else if(!userData && isVisible){
        return (
            <div >
    
                <button className="profile-login" onClick={handleLogout}>logIn</button>
            </div>
        );
    }
};

export default Profile;
