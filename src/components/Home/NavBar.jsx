import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; 
import sneakLogo from '/assets/extra/logo.png';
import './NavBar.css';
import { CartContext } from "../../context/CartContext";
import Profile from "../userProfile/Profile";
import Search from "./Search";


const NavBar = () => {
    const navigate = useNavigate();
    const {cartItems,userData,totalQuantity}=useContext(CartContext)
   
    const [profile, setProfile] = useState(false);
    const [showSearch,setShowSearch]=useState(false);

    
    
    const handleProfile = () => {
            setProfile(!profile);
    };
    const handleSearch=()=>{
        setShowSearch(!showSearch)
    }


    return (
        <div className={`sticky top-0 z-20 bg-gray-100 shadow transition-transform duration-300 `}>
            <header className="flex items-center justify-between h-16 px-3 md:px-16 max-w-full overflow-hidden">
                <img className="w-24" src={sneakLogo} alt="SNEAK" />

                <div className="flex items-center space-x-3 md:space-x-8">
                    <NavLink 
                        to="/" 
                        className={({ isActive  }) => 
                            `font-semibold ${isActive ? 'text-black' : 'text-gray-500'}`
                        }
                    >
                        Popular
                    </NavLink>
                    <NavLink
                        to="/women"
                        className={({ isActive }) => 
                            `font-semibold ${isActive ? 'text-black' : 'text-gray-500'}`
                        }
                    >
                        Women
                    </NavLink>
                    <NavLink
                        to="/men"
                        className={({ isActive }) => 
                            `font-semibold ${isActive ? 'text-black' : 'text-gray-500'}`
                        }
                    >
                        Men
                    </NavLink>

                    
                    <div  className="flex items-center space-x-4">
                        <NavLink  onClick={()=>setShowSearch(!showSearch)} className="flex items-center justify-center p-2 border border-gray-300 rounded-lg">
                            <FaSearch className="text-gray-600" />
                        </NavLink>
                        <Link className="navbar-cart-main-div" to='/cart'>
                            <img className="w-6" src="/assets/extra/cart.png" alt="cart" />
                            <div className="navbar-cart-length">{totalQuantity==0?null:cartItems.length}</div>
                        </Link>
                        <Link to="#" onClick={handleProfile}>
                            <img className="w-6 rounded-md" src={userData?"/assets/extra/userProfile.jpg":"/assets/extra/user-profile.png"} alt="user-profile" />
                        </Link>
                    </div>
                </div>
            </header>

          
            {profile && <Profile handleProfile={handleProfile}/>} 
            {showSearch&& <Search handleSearch={handleSearch}/>}
        </div>
    );
};

export default NavBar;
