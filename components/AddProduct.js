import React, { useState, useRef, useContext } from 'react';
import { ProductContext } from '../context/products.context';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const { addProduct } = useContext(ProductContext);
    // זו הצורה בריאקט לשלוף משתנים מהדום, יש להגדיר משתנה ע"H useRef
    const formEl = useRef();

    const addNewProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description: formEl.current.description.value,
            price: parseFloat(formEl.current.price.value),
        };
        console.log(newProduct);
        addProduct(newProduct);
        formEl.current.reset();
        setName('');
    }
    // את המשתנה שהוגדר באמצעות usesRef
    // יש למקם על האלמנט שאותו רוצים לשלוף, על המאפיין ref
    return <form onSubmit={addNewProduct} ref={formEl}>
        <h3>Add Product</h3>
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} /> <br/>
        <input type="text" placeholder="description" name="description" /> <br/>
        <input type="number" placeholder="price" name="price" step="0.1" /> <br/>
        <button type="submit">Add Product</button>
    </form>
}
