import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from '../context/products.context';

export const Products = () => {
  // צורת שליפת הנתונים מהקונטקסט - ע"י ההוק useContext
  // שמקבל כפרמטר את הקונטקסט שאת המידע שלו רוצים לשלוף
  const { products } = useContext(ProductContext);
  return (
    <div>
      <Link to="newProduct">Add Product</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {" "}
            <Link to={`/products/${product.id}`}> {product.name} </Link>{" "}
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
