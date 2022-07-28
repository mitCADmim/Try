import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { ProductContext } from '../context/products.context';



export const Product = () => {
    // שליפה של פרמטרים מה url
    const { productId } = useParams();
    const { getProduct } = useContext(ProductContext);
    const [cart, setCart] = useState();
    const navigate = useNavigate();
    const product = getProduct(parseInt(productId));
    //  הפונקציה תרוץ רק כאשר משתנה אחד הפרמטרים במערך שנשלח
    useEffect(() => {
        // חובה לעשות את הבדיקה הנ"ל רק בתוך useEffect
        // מכיוון שפונקציה זו רצה לאחר שתהליך הרינדור מסתיים, וזה ב=השמן שבו ניתן להשפיע שוב על תהליך הרינדור
        // אם הבדיקה היתה נכתבת בגוף הקומפוננטה, היה נוצר כישלון.
        if (!product) {
            console.log('no product');
            // דוגמא לניווט ע"י קוד
            navigate('/products');
        }
    }, [productId]);

    useEffect(() => {
        console.log('run after every state or prop change');
    });

    useEffect(() => {
        console.log('call once at the first render');
    }, []);

    return product ? <div>
        <h3>  {product.name}</h3> 
        <h4> { product.description } </h4>
        <p> price: { product.price }</p>
        <button>Add to cart</button>
    </div> : 'no such a product';
}