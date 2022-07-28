import  React, { useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { Product } from './components/Product';
import { AddProduct } from './components/AddProduct';
import { ProductContext } from './context/products.context';
import { products } from './data/products';

function App() {
  const [_products, setProducts] = useState(products);
  const addProduct = (product) => {
      products.push({
          id: products.length + 1,
          ...product,
      });
      setProducts([...products]);
  }

  // יצירה של מעין שרות - סרוויס שמכיל את כל הלוגיקה שקשורה למוצרים.
  const productContextValue = {
    products: _products,
    addProduct,
    getProduct: (id) => _products.find(p => p.id === id),
  }
  return (
    // קונטקסט עוטף חלק מהאפליקציה הצורה כזו, מהמידע שהוא מכיל יהיה נגיש לכל הקומפוננטות המופיעות בפנים
    <ProductContext.Provider value={productContextValue}>
    <div className="App">
      <Menu />
      <div>
        {/* בתוך הקומפוננטה Routes 
          זה המקום להגדיר את הגדרות הניתוב
        */}
        
        <Routes>
          <Route path="" element={ <h1> Hello </h1>} />
          <Route path="/about" element={  <About /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/products" element={ <Products /> } >
            <Route path="newProduct" element={ <AddProduct /> } />
            <Route path=":productId"  element={ <Product /> } />
          </Route>
          {/* ניתוב דיפולטיבי */}
          <Route path="*" element={ <h1> A mistake </h1>} />
        </Routes>
      </div>
    </div>
    </ProductContext.Provider>
  );
}

export default App;

// https://reactrouter.com/docs/en/v6/api
