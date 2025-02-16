import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-2xl font-bold rounded-2xl mt-1">
      <div className="flex">
        <div className="flex-grow text-center">Fidget Spinner Catalog</div>
        <div className="float-end relative">
          <Login />
          <MiniCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
