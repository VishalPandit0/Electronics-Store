import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner';
import Category from './Category';
import Homeproducts from './Homeproducts';
import Loader from './Loader.jsx'; 
import { fetchDataFromApi } from '../utils/api.js';
import { context } from '../utils/Context.jsx';

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(context);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        setCategories(res);
        setIsLoading(false); 
      });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      });
  };

  return (
    <>
    {
      isLoading ? (<Loader/>) :
      (
    <div>
      <Banner />
        <div id="categories-section" className='my-0 mx-auto max-w-[calc(100%-20px)] md:max-w-[1200px]'>
          <div>
            <Category categories={categories} />
            <Homeproducts Heading='Popular Products' products={products} />
          </div>
        </div>
    </div>
      )
    }
    </>
  );
};

export default Home;
