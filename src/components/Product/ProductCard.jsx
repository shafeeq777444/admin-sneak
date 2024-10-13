import "./style.css";
import React, { useState } from "react";
import ProductModal from "../modal/ProductModal.jsx";

const ProductCard = ({product}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleCardClick = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <div
                onClick={handleCardClick}
                className="over group  m-1 mx-0 flex w-full max-w-[300px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
                <a className="relative  mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img
                        className="peer absolute top-0 right-0 h-full w-full object-cover"
                        src={product.pic[0]}
                        alt="product image"
                    />
                    <img
                        className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
                        src={product.pic[1]}
                        alt="product image"
                    />
                    <svg
                        className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32"
                    >
                        <path
                            fill="currentColor"
                            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                        />
                    </svg>
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        {parseInt(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </span>
                </a>
                <div className="mt-4 px-3 pb-4">
                    <a href="#">
                        <h5 className="text-lg tracking-tight text-slate-900">{product.name}</h5>
                    </a>
                    <div className="mt-2 mb-3 flex items-center justify-between">
                        <p>
                            <span className="text-2xl font-bold text-slate-900">₹{product.price}</span>
                            {product.oldPrice && <span className="text-sm text-slate-900 line-through">₹{product.oldPrice}</span>}
                        </p>
                    </div>
                </div>
            </div>
            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={product}
            ></ProductModal>
        </>
    );
};

export default ProductCard;
