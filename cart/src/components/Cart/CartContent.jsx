import React, { useState, useEffect } from "react";
import { login, jwt } from "./cart";

function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    UserLogin();
  }, []);

  function UserLogin() {
    login("maulin", "123");
    return jwt.subscribe((val) => setToken(val ?? ""));
  }

  return <div>JWT : {token}</div>;
}

export default CartContent;
