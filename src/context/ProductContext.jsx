import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
// creat context created
export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [productModal, setProductModal] = useState(false);
    const [editableProduct, setEditableProduct] = useState(null);

    const handleProductAddingModal = () => {
        setProductModal(!productModal);
    };
    const handleSubmit = async (values) => {
        if (editableProduct) {
            const response = await axios.put(`http://localhost:5001/products/${editableProduct.id}`, values);
        } else {
            const response = await axios.post("http://localhost:5001/products", values);
        }
            setProductModal(false);
            setEditableProduct(null);
        
    };
    const handleDeleteProduct = async (item) => {
        const response = await axios.delete(`http://localhost:5001/products/${item.id}`);
        setAllProducts(allProducts.filter((item) => item.id != response.data.id));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5001/products");
                const products = response.data;
                console.log(products);
                setAllProducts(products);
                setMenProducts(products.filter((product) => product.sex == "male"));
                setWomenProducts(products.filter((product) => product.sex == "female"));
            } catch (error) {
                console.log("Error Fetching", error);
            } finally {
                console.log("axios completed");
            }
        };
        fetchData();
    }, [editableProduct,productModal]);
    return (
        <ProductContext.Provider
            value={{
                allProducts,
                handleSubmit,
                handleDeleteProduct,
                menProducts,
                womenProducts,
                handleProductAddingModal,
                productModal,
                setProductModal,
                editableProduct,
                setEditableProduct
              
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
