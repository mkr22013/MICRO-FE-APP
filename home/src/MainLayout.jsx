import React, { Suspense } from "react";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";
import HomeContent from "home/HomeContent";

import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

function MainLayout() {
  return (
    <div className="mx-auto" style={{ width: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-2">
        <Routes>
          <Route exact path="/" Component={HomeContent}></Route>
          <Route path="/product/:id" Component={PDPContent}></Route>
          <Route path="/cart" Component={CartContent}></Route>
        </Routes>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default MainLayout;
