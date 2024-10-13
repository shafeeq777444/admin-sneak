import React from "react";
import DashboardLayoutBasic from "../Components/Dashboard/DashboardLayoutBasic";
import ProductSection from "../Components/ProductSection/ProductSection";
import "./AdminHome.css"
import { Outlet } from "react-router-dom";


const AdminHome = () => {
    return (
        <div className="adminhome-main-div">
            
          
           <Outlet/>
           <DashboardLayoutBasic className="dashboard-navbar"/>
           
        </div>
    );
};

export default AdminHome;
