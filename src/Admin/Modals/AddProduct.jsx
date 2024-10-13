import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Formik, Form, Field } from "formik";
import "./AddProducts.css";

const AddProduct = () => {
    const { productModal, handleProductAddingModal, handleSubmit, editableProduct, setEditableProduct } =
        useContext(ProductContext);
    const initial = {
        name: editableProduct ? editableProduct.name : "",
        Description: editableProduct ? editableProduct.Description : "",
        price: editableProduct ? editableProduct.price : "",
        oldPrice: editableProduct ? editableProduct.oldPrice : "",
        pic: editableProduct ? editableProduct.pic : ["", ""],
        sex: editableProduct ? editableProduct.sex : "",
        productCode: editableProduct ? editableProduct.productCode : "",
    };

    return (
        <div className="overlay-addproducts">
        <div className="addproduct-modal-main-div">
            
            <Formik initialValues={initial} onSubmit={handleSubmit} >
                <Form className="addproducts-Form">
                <button onClick={handleProductAddingModal} className="close-product-modal">&times;</button>
                    <h1 className="add-product-head">Add Products</h1>
                    
                    <div className="div-product-code">
                        <label htmlFor="productCode">Product Code</label>
                        <Field  className="product-field"  type="texta" id="productCode" name="productCode" placeholder="Product Code" />
                    </div>

                    <div className="div-product-code" >
                        <label htmlFor="productName">Product Name</label>
                        <Field className="product-field" type="text" id="productName" name="name" placeholder="Product Name" />
                    </div>

                    <div className="div-product-code">
                        <label htmlFor="description">Description</label>
                        <Field className="product-field" type="text" id="description" name="Description" placeholder="Description..." />
                    </div>

                    <div className="div-product-code">
                        <label htmlFor="price">Price</label>
                        <Field className="product-field" type="number" id="price" name="price" placeholder="Offer Price" />
                    </div>

                    <div className="div-product-code">
                        <label htmlFor="oldPrice">Old Price</label>
                        <Field className="product-field" type="number" id="oldPrice" name="oldPrice" placeholder="Old Price" />
                    </div>

                    <div className="div-product-code">
                        <label>Sex</label>
                        <div className="gender-div">
                            <label>
                                <Field type="radio" name="sex" value="male" /> Male
                            </label>
                            <label>
                                <Field type="radio" name="sex" value="female" /> Female
                            </label>
                        </div>
                    </div>

                    <div className="div-product-code">
                        <label htmlFor="pic1">Image 1 Path</label>
                        <Field className="product-field"  type="text" id="pic1" name="pic[0]" placeholder="Enter image 1st path" />
                    </div>

                    <div className="div-product-code">
                        <label htmlFor="pic2">Image 2 Path</label>
                        <Field className="product-field"  type="text" id="pic2" name="pic[1]" placeholder="Enter image 2nd path" />
                    </div>

                    <button className="div-product-submit" type="submit">Submit</button>
                    
                </Form>
            </Formik>
            
        </div>
        </div>
    );
};

export default AddProduct;
