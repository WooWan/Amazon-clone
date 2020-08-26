import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h2>Empty</h2>
            <p>You have no items in your basket</p>
          </div>
        ) : (
            <div>
              <h2 className="checkout__title">Your Shopping basket</h2>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          {/* <Subtotal /> */}
          <h1>Subtotal</h1>
        </div>
      )}
    </div>

  );
}

export default Checkout;
