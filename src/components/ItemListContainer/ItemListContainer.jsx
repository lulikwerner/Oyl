import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { gFetch } from '../../utils/gFetch';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    gFetch()
    .then(resp => {
      setProducts(resp);
      console.log(resp); // Log the products array
    })
      .catch(err => console.log(err))
      .finally();
  }, []);

  return (
    <div className="container">
      <ItemList className="custom-img-class" products={products} />
    </div>
  );
};

export default ItemListContainer;

