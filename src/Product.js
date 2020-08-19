import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, price, rating, image}) {
    const [{},dispatch]=useStateValue();
    
    const addToBasket=()=>{
      dispatch({
        type:'ADD_TO_BASKET',
        item: {
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating
        }
      })
    };
    
    return (
      <div className="product">
        <div className="produc__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>00.00</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>☆</p>
              ))}
          </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
}

export default Product
