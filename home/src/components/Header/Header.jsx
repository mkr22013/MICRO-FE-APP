import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-2xl font-bold rounded-2xl mt-1">
      <div className="flex">
        <div className="flex-grow flex text-center">
          <Link to="/">Fidget Spinner Catalog</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="float-end relative">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
