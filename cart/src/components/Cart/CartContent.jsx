import React, { useState, useEffect } from "react";

import { cart, clearCart } from "./cart";
import { currency } from "../../../../home/service/products";

export default function CartContent() {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return () =>
      cart.subscribe((c) => {
        setItems(c?.cartItems);
      });
  }, [items]);
  if (!items) return null;
  return (
    <div className="border-4 rounded-2xl bg-amber-50">
      <div className="m-10 grid grid-cols-4 gap-5">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-15" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right" id="grand_total">
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow ml-10">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end mr-10">
            <button
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
