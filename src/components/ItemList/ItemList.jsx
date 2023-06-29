import React from 'react';
import { Card } from 'react-bootstrap';
import Item from '../Item/Item';
import '../ItemList/ItemList.css';


const ItemList = ({ products }) => {
  return (
    <div className="product-con">
      {products.map((prod) => (
        <Card key={prod.id} className="product">
          <Item prod={prod} />
        </Card>
      ))}
    </div>
  );
};

export default ItemList;






