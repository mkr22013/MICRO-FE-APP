import React, { useState, useEffect } from "react";
import { login, jwt } from "./cart";
import Login from "../Login/Login";
import MiniCart from "./MiniCart";
function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    UserLogin();
  }, []);

  function UserLogin() {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }

  return (
    <div>
      JWT : {token} <Login /> <MiniCart />
    </div>
  );
}

export default CartContent;
