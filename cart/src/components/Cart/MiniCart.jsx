import React, { useEffect, useState, useRef } from "react";

import { cart, clearCart, removeCartItem } from "cart/cart";
import { currency } from "home/Products";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef?.current) {
      divRef.current.focus(); // Focus the div when the component mounts
    }
  }, [showCart]);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return () =>
      cart.subscribe((c) => {
        setItems(c?.cartItems);
      });
  }, []);

  if (!items) return null;

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items.length}
      </span>
      {showCart && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          tabIndex={0}
          ref={divRef}
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <div className="grid gap-3 text-sm mb-5">
            <span onClick={() => setShowCart(!showCart)} id="showcart_span">
              <i
                className="ri-close-circle-fill text-2xl float-end"
                id="showcart"
              ></i>
            </span>
          </div>
          <div
            className="grid gap-3 text-sm"
            style={{
              gridTemplateColumns: "1fr 3fr 10fr 2fr 2fr",
            }}
          >
            {items.map((item) => (
              <React.Fragment key={item.id}>
                <div>{item.quantity}</div>
                <img src={item.image} alt={item.name} className="max-h-6" />
                <div>{item.name}</div>
                <div className="text-right">
                  {currency.format(item.quantity * item.price)}
                </div>
                <div className="text-right">
                  <span onClick={() => removeCartItem(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </span>
                </div>
              </React.Fragment>
            ))}
            <div></div>
            <div></div>
            <div></div>
            <div>
              {currency.format(
                items.reduce((a, v) => a + v.quantity * v.price, 0)
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex-grow">
              <button
                id="clearcart"
                className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
            <div className="flex-end">
              <button
                className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
                onClick={() => clearCart()}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
