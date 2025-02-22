import React, { useState, useEffect } from "react";
import { getProducts, currency } from "home/Products";

import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from "react-router-dom";
import { AddToCart } from "addtocart/AddToCart";

function HomeContent() {
  const [products, setProducts] = useState([]);
  const loggedIn = useLoggedIn();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-7 border-4 rounded-2xl bg-amber-50">
      {products.map((product) => (
        <div key={product.id} className="m-5 ">
          <Link to={`/product/${product.id}`}>
            <img
              className="rounded-2xl"
              src={product.image}
              alt={product.name}
            />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {loggedIn && (
            <div className="text-center mt-2">
              <div className="flex-end">
                {/* <button
                  id={`addtocart_${product.id}`}
                  className="bg-blue-500  hover:bg-blue-700 text-white py-2 px-5 rounded-md text-sm"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </button> */}

                <add-to-cart id={product.id} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HomeContent;
