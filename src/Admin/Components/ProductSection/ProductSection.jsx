import React, { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import "./ProductSection.css";
import AddProduct from "../../Modals/AddProduct/AddProduct";

const ProductSection = () => {
    const { allProducts, productModal, handleProductAddingModal, handleDeleteProduct, setEditableProduct } =
        useContext(ProductContext);

    return (
        <div className="products-main-div">
            <div className="product-table-main-div">
                <table className="product-table">
                    <thead>
                        <tr className="tr-heading">
                            <th>Product</th>
                            <th>Type</th>
                            <th>Product Code</th>
                            <th>Price</th>
                            <th>Offer Price</th>
                            <th>Product Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((item, ind) => (
                            <tr className="tr-single-product" key={ind}>
                                <td className="td-products">
                                    <div className="images-product">
                                        <img className="product-section-img" src={item.pic[0]} alt="Product" />
                                        <img className="product-section-img" src={item.pic[1]} alt="Product" />
                                    </div>
                                    {item.name}
                                </td>
                                <td>{item.sex}</td>
                                <td>{item.productCode}</td>
                                <td>{item.price}</td>
                                <td>{item.oldPrice}</td>
                                <td>{item.Description}</td>
                                <td className="td-button">
                                    <button onClick={() => {
                                        setEditableProduct(item);
                                        handleProductAddingModal();
                                    }}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeleteProduct(item)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="button-div">
                <button className="addProduct-button" onClick={handleProductAddingModal}>Add Product</button>
            </div>
            {productModal && <AddProduct />}
        </div>
    );
};

export default ProductSection;
