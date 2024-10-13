import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/user-authentication/Register.jsx';
import Login from './components/user-authentication/Login.jsx';
import Home from "./pages/Home.jsx";
import MenCard from "./components/Product/MenCard.jsx";
import WomenCard from "./components/Product/WomenCard.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./pages/Cart.jsx";
import ResponsiveCarousel from './components/Home/ResponsiveCarousel.jsx'
import AdminHome from "./Admin/Pages/AdminHome.jsx";
import ProductSection from "./Admin/Components/ProductSection/ProductSection.jsx";
import UserSection from "./Admin/Components/UserSection/UserSection.jsx";
import Chart from "./Admin/Components/Chart/Chart.jsx";
import { DashBoardProvider } from "./context/DashBoardContext.jsx";
import AdminSection from "./Admin/Components/adminSection/AdminSection.jsx";


function App() {
  return (
<DashBoardProvider>
    <ProductProvider>
    <CartProvider>
      <Router>
          <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />}>
                  <Route index element={<ResponsiveCarousel />} />
                  <Route path="men" element={<MenCard />} />
                  <Route path="women" element={<WomenCard />} />
                  <Route path="cart" element={<Cart />} />
              </Route>

              {/* admin Routes */}

              <Route path="/admin" element={<AdminHome/>}>
                <Route index element={<Chart/>}/>
                <Route path="productSection" element={<ProductSection/>}/>
                <Route path="userSection" element={<UserSection/>}/>
                <Route path="adminSection" element={<AdminSection/>}/>
              </Route>

          </Routes>
      </Router>
      </CartProvider>
  </ProductProvider>
  </DashBoardProvider>
  );
}

export default App;
