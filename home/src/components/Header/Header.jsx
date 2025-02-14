import React from "react";
import MiniCart from "../../../../cart/src/components/Cart/MiniCart";
import Login from "../../../../cart/src/components/Login/Login";

function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow text-center">Fidget Spinner Catalog</div>
        <div className="float-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Header;
