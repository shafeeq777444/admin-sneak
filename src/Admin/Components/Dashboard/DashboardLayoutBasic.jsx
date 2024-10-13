import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./DashboardLayoutBasic.css";
import { useNavigate } from "react-router-dom";

export default function DashboardLayoutBasic() {
    const [value, setValue] = React.useState("dashboard");
    const navigate = useNavigate();
    React.useEffect(() => {
      navigate("/admin");
  }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case "dashboard":
                navigate("/admin");
                break;
            case "products":
                navigate("/admin/productSection");
                break;
            case "users":
                navigate("/admin/userSection");
                break;
            case "admin":
              navigate("/admin/adminSection")
            default:
                break;
        }
    };

    return (
        <BottomNavigation className="bottom-navigation-main" sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction label="Dashboard" value="dashboard" icon={<SpaceDashboardRoundedIcon />} />
            <BottomNavigationAction label="Products" value="products" icon={<StorefrontOutlinedIcon />} />
            <BottomNavigationAction label="Users" value="users" icon={<PeopleOutlinedIcon />} />
            <BottomNavigationAction
                label="Admin"
                value="admin"
                icon={value === "admin" ? null : <AdminPanelSettingsIcon />}
            />
        </BottomNavigation>
    );
}
