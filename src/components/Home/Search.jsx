import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import './search.css';
import ProductModal from '../modal/ProductModal';

const Search = ({handleSearch}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState(null); 
  const [searchValue, setSearch] = useState('');
  const [filterItems, setFilterItems] = useState([]);
  const [isSearchVisible, setSearchVisible] = useState(true); 
  const [isVisible, setIsVisible] = useState(true);
  const { allProducts } = useContext(ProductContext);
  const hidePopup = () => {
    setIsVisible(false);
};


 
  useEffect(() => {
    const Items = allProducts.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterItems(Items);
  }, [searchValue, allProducts]);

 
  const handleCardClick = (item) => {
    setProduct(item); 
    setModalOpen(true);
    setSearchVisible(false); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); 
  };


  const handleOpenSearch = () => {
    setSearchVisible(true);
    setSearch(''); 
  };

  return (
    <>
      {isSearchVisible && ( 
        <div className="relative  flex w-full flex-col rounded-lg border border-slate-200 bg-white shadow-sm p-4">
   
          <form className="mb-4">
            <div onClick={handleSearch} className="search-close-btn-div"><button className='search-close'>x</button></div>
            <input
              value={searchValue}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none "
            />
          </form>

          
          <nav className="flex flex-col gap-2">
            {filterItems.map((item, ind) => (
              <div
                onClick={() => handleCardClick(item)} 
                className="text-slate-800 flex w-full items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 cursor-pointer"
                key={ind}
              >
                <div className="mr-4 grid place-items-center">
                  <img
                    alt={item.name}
                    src={item.pic[0]}
                    className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                  />
                </div>
                <div>
                  <h6 className="text-slate-800 font-medium">{item.name}</h6>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={product}
      />
    </>
  );
};

export default Search;
