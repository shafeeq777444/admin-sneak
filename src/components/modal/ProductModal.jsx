import React, { useContext } from "react";
import "./ProductModal.css";
import { CartContext } from "../../context/CartContext";



const ProductModal = ({ isOpen, onClose, product }) => {
    const {addToCart}=useContext(CartContext)
    const handleAddToCart=()=>{
        addToCart(product)
        onClose();
    }
    if (!isOpen) return null;
    return (
        <div className=" w-[100%] modal-overlay">
            <div className="w-[75%] md:w-[20%] modal-content">

                {product && (
                    <div className="modal-card">
                        <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                        <h2 className="modal-name">{product.name}</h2>
                        <img src={product.pic[0]} />
                        <p className="modal-description">{product.description}</p>
                        <h2 className="modal-price">Price: ₹{product.price}</h2>
                        <button onClick={handleAddToCart} className="modal-bag">Add to Bag</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductModal;
