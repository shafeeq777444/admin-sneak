
import ProductCard from './ProductCard'; 
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
const MenCard = () => {
  const {menProducts}=useContext(ProductContext)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 justify-items-center mx-auto">
      {menProducts.map((product,ind) => (
        <ProductCard key={ind}
          product={product} 
        />
      ))}
    </div>
  );
};

export default MenCard;
